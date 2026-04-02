import type { VercelRequest, VercelResponse } from '@vercel/node'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Resend } from 'resend'
import { timingSafeEqual } from 'crypto'

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT, // https://<account-id>.r2.cloudflarestorage.com
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

const resend = new Resend(process.env.RESEND_API_KEY)

const BUCKET = process.env.R2_BUCKET_NAME || 'djdx-masters'
// Signed URLs expire in 24 hours
const EXPIRY_SECONDS = 60 * 60 * 24

export const config = { api: { bodyParser: false } };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const rawBody = await new Promise<string>((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

  // Verify Paddle webhook signature
  const signature = req.headers['paddle-signature'] as string
  if (!signature) {
    return res.status(401).json({ error: 'Missing signature' })
  }

  // Simple signature check — Paddle uses h1= HMAC-SHA256
  const isValid = await verifyPaddleSignature(
    signature,
    rawBody,
    process.env.PADDLE_WEBHOOK_SECRET!
  )
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid signature' })
  }

  let event: PaddleWebhookEvent;
  try {
    event = JSON.parse(rawBody) as PaddleWebhookEvent;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }

  // Only process completed transactions
  if (event.event_type !== 'transaction.completed') {
    return res.status(200).json({ received: true })
  }

  const customData = event.data?.custom_data as {
    trackIds?: string
    customerEmail?: string
  } | null

  if (!customData?.trackIds || !customData?.customerEmail) {
    console.error('Missing custom_data on transaction', event.data?.id)
    return res.status(200).json({ received: true })
  }

  // Only process numeric IDs — prevents arbitrary R2 key access
  const trackIds = customData.trackIds
    .split(',')
    .map((t) => t.trim())
    .filter((t) => /^\d+$/.test(t))

  if (trackIds.length === 0) {
    console.error('No valid track IDs after filtering', event.data?.id)
    return res.status(200).json({ received: true })
  }

  // Use Paddle-verified email, not client-supplied custom_data
  const customerEmail = event.data?.customer?.email || customData.customerEmail
  const customerName = event.data?.customer?.name || 'Music Fan'
  const amount = ((event.data?.details?.totals?.total ?? 0) / 100).toFixed(2)

  try {
    // Generate a signed R2 URL for each track (24-hour expiry)
    const downloadLinks = await Promise.all(
      trackIds.map(async (trackId) => {
        const key = `${trackId}.mp3` // adjust if your R2 keys differ
        const command = new GetObjectCommand({ Bucket: BUCKET, Key: key })
        const url = await getSignedUrl(r2, command, { expiresIn: EXPIRY_SECONDS })
        return { trackId, url }
      })
    )

    // Build email HTML
    const linksHtml = downloadLinks
      .map(
        ({ trackId, url }) =>
          `<li style="margin-bottom:12px;">
            <a href="${url}" style="color:#C9A84C;font-weight:600;text-decoration:none;">
              ⬇ ${formatTrackName(trackId)}
            </a>
            <span style="color:#888;font-size:12px;"> (expires in 24 hours)</span>
          </li>`
      )
      .join('')

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
      to: customerEmail,
      subject: `Your DJ DX download is ready 🎵`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#0c0c0c;color:#fff;font-family:'Helvetica Neue',Arial,sans-serif;margin:0;padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#161616;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1500,#0c0c0c);padding:40px 40px 30px;border-bottom:1px solid #2a2a2a;">
              <p style="margin:0 0 8px;font-size:13px;color:#C9A84C;letter-spacing:3px;text-transform:uppercase;">DJ DX</p>
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#fff;">Your download is ready</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 8px;color:#aaa;font-size:15px;">Hey ${customerName},</p>
              <p style="margin:0 0 24px;color:#aaa;font-size:15px;">
                Thank you for supporting the music — you paid <strong style="color:#E2C97E;">$${amount}</strong>.
                Here ${trackIds.length === 1 ? 'is your track' : 'are your tracks'}:
              </p>

              <ul style="list-style:none;padding:0;margin:0 0 28px;">
                ${linksHtml}
              </ul>

              <p style="margin:0;color:#666;font-size:13px;">
                Links expire in 24 hours. Having trouble? Reply to this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #222;text-align:center;">
              <p style="margin:0;color:#444;font-size:12px;">DJ DX · All rights reserved</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    console.log(`Email sent to ${customerEmail} for tracks: ${trackIds.join(', ')}`)
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

// ── helpers ──────────────────────────────────────────────────────────────────

function formatTrackName(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

async function verifyPaddleSignature(
  signatureHeader: string,
  body: string,
  secret: string
): Promise<boolean> {
  try {
    // Parse Paddle signature header: ts=...:h1=...
    const parts = Object.fromEntries(
      signatureHeader.split(';').map((p) => {
        const [k, v] = p.split('=', 2)
        return [k.trim(), v.trim()]
      })
    )
    const ts = parts['ts']
    const h1 = parts['h1']
    if (!ts || !h1) return false

    // Replay protection: reject webhooks older than 5 minutes
    const tsSeconds = parseInt(ts, 10)
    if (isNaN(tsSeconds) || Math.abs(Date.now() / 1000 - tsSeconds) > 300) return false

    const payload = `${ts}:${body}`
    const encoder = new TextEncoder()
    const keyData = encoder.encode(secret)
    const msgData = encoder.encode(payload)

    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )
    const sigBuffer = await crypto.subtle.sign('HMAC', cryptoKey, msgData)
    const computed = Array.from(new Uint8Array(sigBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')

    // Timing-safe comparison to prevent timing attacks
    if (computed.length !== h1.length) return false
    const computedBuf = Buffer.from(computed, 'hex')
    const h1Buf = Buffer.from(h1, 'hex')
    if (computedBuf.length !== h1Buf.length) return false
    return timingSafeEqual(computedBuf, h1Buf)
  } catch {
    return false
  }
}

// ── types ─────────────────────────────────────────────────────────────────────

interface PaddleWebhookEvent {
  event_type: string
  data: {
    id: string
    custom_data: unknown
    customer?: { name?: string; email?: string }
    details?: { totals?: { total?: number } }
  }
}
