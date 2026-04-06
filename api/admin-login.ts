import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHmac } from 'crypto'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { password } = req.body as { password?: string }
  if (!password) return res.status(400).json({ error: 'Password required' })

  // Artificial delay to deter brute-force attacks (1 second)
  await new Promise(r => setTimeout(r, 1000))

  // Hash the submitted password and compare server-side — nothing sensitive sent back
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
  const submitted = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
  const expected = (process.env.ADMIN_HASH ?? '').trim().toLowerCase()

  if (!expected) return res.status(500).json({ error: 'Admin not configured' })
  if (submitted !== expected) return res.status(401).json({ error: 'Incorrect password', debug_submitted: submitted, debug_expected_len: expected.length, debug_submitted_len: submitted.length })

  // Issue a short-lived session token the client uses for catalog API calls
  // Token = HMAC(ADMIN_SECRET, timestamp_bucket) — valid for the current 30-min window
  const bucket = Math.floor(Date.now() / (30 * 60 * 1000)).toString()
  const token = createHmac('sha256', process.env.ADMIN_SECRET ?? '')
    .update(bucket)
    .digest('hex')

  return res.status(200).json({ token })
}
