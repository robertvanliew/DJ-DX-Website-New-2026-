import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia', // You can use standard api versions
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { amount, email, name, trackIds, r2FileNames } = req.body as {
    amount: number
    email: string
    name: string
    trackIds: string[]
    r2FileNames?: string[]
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
    const siteUrl = process.env.SITE_URL || 'https://djdxmusic.com';

    // Store r2FileNames array or strings in metadata. Metadata values are max 500 chars.
    let r2FileNamesString = '';
    if (r2FileNames && Array.isArray(r2FileNames)) {
      r2FileNamesString = r2FileNames.join(',');
      // Strip out any characters over 500 if we hit the limit, though ideally it should fit.
      if (r2FileNamesString.length > 500) {
        console.warn('r2FileNames exceeded 500 characters in metadata');
        r2FileNamesString = r2FileNamesString.substring(0, 500);
      }
    } else {
      r2FileNamesString = trackIds.map((id: string) => `${id}.mp3`).join(',');
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `DJ DX Music – ${trackIds.length} track${trackIds.length > 1 ? 's' : ''}`,
            },
            unit_amount: Math.round(amount * 100), // convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/?success=true`,
      cancel_url: `${siteUrl}/`,
      metadata: {
        trackIds: trackIds.join(','),
        customerEmail: email,
        customerName: name || '',
        r2FileNames: r2FileNamesString,
      },
    });

    return res.status(200).json({
      sessionId: session.id,
      checkoutUrl: session.url,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
