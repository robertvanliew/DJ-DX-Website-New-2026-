import type { VercelRequest, VercelResponse } from '@vercel/node'

// Cache the product ID in memory so we don't re-create it on every request
let cachedProductId: string | null = null

async function paddleFetch(baseUrl: string, path: string, apiKey: string, body: unknown) {
  const resp = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })
  const data = await resp.json()
  return { ok: resp.ok, data }
}

async function getOrCreateProduct(baseUrl: string, apiKey: string): Promise<string> {
  if (cachedProductId) return cachedProductId

  // Try to list existing products first
  const listResp = await fetch(`${baseUrl}/products`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  })
  if (listResp.ok) {
    const listData = (await listResp.json()) as { data: Array<{ id: string; name: string }> }
    const existing = listData.data?.find((p) => p.name === 'DJ DX Music Download')
    if (existing) {
      cachedProductId = existing.id
      return cachedProductId
    }
  }

  // Create a new product
  const result = await paddleFetch(baseUrl, '/products', apiKey, {
    name: 'DJ DX Music Download',
    tax_category: 'digital-goods',
  })

  if (!result.ok) {
    console.error('Failed to create product:', JSON.stringify(result.data, null, 2))
    throw new Error('Failed to create Paddle product')
  }

  cachedProductId = (result.data as { data: { id: string } }).data.id
  return cachedProductId!
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.PADDLE_API_KEY ?? ''
  const isSandbox = apiKey.includes('sdbx')
  const BASE = isSandbox ? 'https://sandbox-api.paddle.com' : 'https://api.paddle.com'

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { amount, email, name, trackIds } = req.body as {
    amount: number
    email: string
    name: string
    trackIds: string[]
  }

  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }
  if (!trackIds || !Array.isArray(trackIds) || trackIds.length === 0 || trackIds.length > 50) {
    return res.status(400).json({ error: 'Invalid track selection' })
  }
  // Only allow numeric track IDs — prevents arbitrary R2 key access
  if (!trackIds.every((id: unknown) => typeof id === 'string' && /^\d+$/.test(id))) {
    return res.status(400).json({ error: 'Invalid track IDs' })
  }

  const minRequiredAmount = trackIds.length * 2;
  if (!amount || typeof amount !== 'number' || amount < minRequiredAmount || amount > 500) {
    return res.status(400).json({ error: 'Invalid amount' })
  }

  try {
    // Step 1: Get or create the product
    const productId = await getOrCreateProduct(BASE, apiKey)

    // Step 2: Create a one-time price for this transaction
    const priceResult = await paddleFetch(BASE, '/prices', apiKey, {
      description: `DJ DX Music – ${trackIds.length} track${trackIds.length > 1 ? 's' : ''}`,
      product_id: productId,
      unit_price: {
        amount: String(Math.round(amount * 100)),
        currency_code: 'USD',
      },
      billing_cycle: null,
      tax_mode: 'account_setting',
    })

    if (!priceResult.ok) {
      console.error('Paddle price error:', JSON.stringify(priceResult.data, null, 2))
      const detail = (priceResult.data as { error?: { detail?: string } })?.error?.detail
      return res.status(500).json({ error: detail ?? 'Failed to create price' })
    }

    const priceId = (priceResult.data as { data: { id: string } }).data.id

    // Step 3: Create the transaction with the real price ID
    const txResult = await paddleFetch(BASE, '/transactions', apiKey, {
      items: [{ price_id: priceId, quantity: 1 }],
      custom_data: {
        trackIds: trackIds.join(','),
        customerEmail: email,
        customerName: name || '',
      },
    })

    if (!txResult.ok) {
      console.error('Paddle tx error:', JSON.stringify(txResult.data, null, 2))
      const detail = (txResult.data as { error?: { detail?: string } })?.error?.detail
      return res.status(500).json({ error: detail ?? 'Failed to create checkout' })
    }

    const txData = (txResult.data as { data: { id: string; checkout?: { url?: string } } }).data

    return res.status(200).json({
      transactionId: txData.id,
      checkoutUrl: txData.checkout?.url || null,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
