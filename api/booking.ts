import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 254, phone: 30, eventType: 100, eventDate: 40, message: 2000 };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, eventType, eventDate, message } = req.body;

  if (!name || !email || !eventType || !eventDate || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Type and length validation
  if (
    typeof name !== 'string' || name.length > MAX.name ||
    typeof email !== 'string' || email.length > MAX.email ||
    typeof eventType !== 'string' || eventType.length > MAX.eventType ||
    typeof eventDate !== 'string' || eventDate.length > MAX.eventDate ||
    typeof message !== 'string' || message.length > MAX.message ||
    (phone && (typeof phone !== 'string' || phone.length > MAX.phone))
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Escape all fields before HTML interpolation
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : '';
  const safeEventType = escapeHtml(eventType);
  const safeEventDate = escapeHtml(eventDate);
  const safeMessage = escapeHtml(message);

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
      to: ['djdxbusiness@gmail.com'],
      replyTo: email,
      subject: `New Booking Inquiry — ${safeEventType} | ${safeEventDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #111; padding: 0; border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5;">
          <div style="background: #111111; padding: 28px 32px; border-bottom: 3px solid #C9A84C;">
            <h1 style="color: #C9A84C; font-size: 22px; margin: 0; letter-spacing: 0.04em;">NEW BOOKING INQUIRY</h1>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 13px;">via djdxmusic.com</p>
          </div>

          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #C9A84C; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              ${safePhone ? `
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safePhone}</td>
              </tr>` : ''}
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Type</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeEventType}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Date</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeEventDate}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; line-height: 1.7;">${safeMessage.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #eee;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background: #C9A84C; color: #111; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 0.06em;">
                REPLY TO ${safeName.split(' ')[0].toUpperCase()}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation to the person who inquired
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
      to: [email],
      subject: `Got your inquiry, ${safeName.split(' ')[0]} — DJ DX`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0c0c; color: #fff; padding: 40px; border-radius: 12px;">
          <h1 style="color: #C9A84C; font-size: 24px; margin: 0 0 16px;">Thanks for reaching out.</h1>
          <p style="color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.7; margin: 0 0 24px;">
            Hey ${safeName.split(' ')[0]}, your booking inquiry for <strong style="color:#fff;">${safeEventType}</strong> on <strong style="color:#fff;">${safeEventDate}</strong> has been received.
          </p>
          <p style="color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.7; margin: 0 0 32px;">
            DJ DX will review your request and get back to you within <strong style="color:#C9A84C;">24–48 hours</strong> to discuss availability and pricing.
          </p>
          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; color: rgba(255,255,255,0.4); font-size: 13px;">
            DJ DX · djdxmusic.com · New York / New Jersey
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Booking email error:', err);
    return res.status(500).json({ error: 'Failed to send inquiry' });
  }
}
