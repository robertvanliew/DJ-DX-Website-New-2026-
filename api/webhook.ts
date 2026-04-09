import type { VercelRequest, VercelResponse } from '@vercel/node'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Resend } from 'resend'
import Stripe from 'stripe'

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT, // https://<account-id>.r2.cloudflarestorage.com
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

const resend = new Resend(process.env.RESEND_API_KEY)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
});

const BUCKET = process.env.R2_BUCKET_NAME || 'djdx-masters'
// Signed URLs expire in 24 hours
const EXPIRY_SECONDS = 60 * 60 * 24

export const config = { api: { bodyParser: false } };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const rawBody = await new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', chunk => { chunks.push(Buffer.from(chunk)); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });

  const signature = req.headers['stripe-signature'] as string
  if (!signature) {
    return res.status(401).json({ error: 'Missing signature' })
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`⚠️ Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session;

  const trackIdsStr = session.metadata?.trackIds
  const customerEmailRaw = session.metadata?.customerEmail || session.customer_details?.email
  const customerNameRaw = session.metadata?.customerName || session.customer_details?.name || 'Music Fan'
  const r2FileNamesStr = session.metadata?.r2FileNames

  if (!trackIdsStr || !customerEmailRaw || !r2FileNamesStr) {
    console.error('Missing necessary metadata on session', session.id)
    return res.status(200).json({ received: true })
  }

  const trackIds = trackIdsStr.split(',').map(t => t.trim())
  const r2FileNames = r2FileNamesStr.split(',').map(t => t.trim())

  if (trackIds.length === 0 || r2FileNames.length === 0 || trackIds.length !== r2FileNames.length) {
    console.error('Invalid track or file names array', session.id)
    return res.status(200).json({ received: true })
  }

  const customerEmail = escapeHtml(customerEmailRaw ?? '')
  const customerName = escapeHtml(customerNameRaw ?? '')
  const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0';

  try {
    // Generate a signed R2 URL for each track (24-hour expiry)
    const downloadLinks = await Promise.all(
      r2FileNames.map(async (fileName, index) => {
        const trackId = trackIds[index];
        const command = new GetObjectCommand({ Bucket: BUCKET, Key: fileName })
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

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

