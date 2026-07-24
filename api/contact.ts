import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { isSpamSubmission } from '../src/lib/spamGuard';
import { sendMetaLeadEvent } from './_lib/metaCapi';
import { sendTikTokLeadEvent } from './_lib/tiktokEvents';

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
const MAX = { name: 120, email: 254, phone: 30, subject: 60, message: 5000, eventDate: 20, eventTime: 10, venue: 200 };
const EVENT_SUBJECTS = new Set(['booking', 'soulshades']);

// Whitelist of allowed subjects → routes to the correct inbox alias.
// Anything not in this map falls back to bookings@djdxmusic.com so messages
// are never lost even if the form is bypassed or tampered with.
const SUBJECT_ROUTING: Record<string, { to: string; label: string }> = {
  booking:    { to: 'bookings@djdxmusic.com',    label: 'Booking Inquiry' },
  press:      { to: 'bookings@djdxmusic.com',    label: 'Press / Media' },
  support:    { to: 'support@djdxmusic.com',     label: 'Customer Support' },
  legal:      { to: 'legal@djdxmusic.com',       label: 'Legal' },
  privacy:    { to: 'privacy@djdxmusic.com',     label: 'Privacy / Data Request' },
  soulshades: { to: 'soulshades@djdxmusic.com',  label: 'Soul Shades' },
  other:      { to: 'bookings@djdxmusic.com',    label: 'General Inquiry' },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, subject, message, eventDate, eventStartTime, eventEndTime, venue, honeypot, elapsedMs, metaEventId } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (isSpamSubmission({ honeypot, elapsedMs, message })) {
    // Fake success so bots don't learn to route around this
    return res.status(200).json({ success: true });
  }

  if (
    typeof name !== 'string' || name.length > MAX.name ||
    typeof email !== 'string' || email.length > MAX.email ||
    typeof phone !== 'string' || phone.length > MAX.phone ||
    typeof subject !== 'string' || subject.length > MAX.subject ||
    typeof message !== 'string' || message.length > MAX.message
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const needsEventDetails = EVENT_SUBJECTS.has(subject);

  if (needsEventDetails) {
    if (!eventDate || !eventStartTime || !eventEndTime || !venue) {
      return res.status(400).json({ error: 'Event date, start/end time, and venue are required for booking inquiries' });
    }
    if (
      typeof eventDate !== 'string' || eventDate.length > MAX.eventDate ||
      typeof eventStartTime !== 'string' || eventStartTime.length > MAX.eventTime ||
      typeof eventEndTime !== 'string' || eventEndTime.length > MAX.eventTime ||
      typeof venue !== 'string' || venue.length > MAX.venue
    ) {
      return res.status(400).json({ error: 'Invalid event details' });
    }
  }

  const route = SUBJECT_ROUTING[subject] ?? SUBJECT_ROUTING.other;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message);
  const safeLabel = escapeHtml(route.label);
  const safeEventDate = needsEventDetails ? escapeHtml(eventDate) : '';
  const safeEventStartTime = needsEventDetails ? escapeHtml(eventStartTime) : '';
  const safeEventEndTime = needsEventDetails ? escapeHtml(eventEndTime) : '';
  const safeVenue = needsEventDetails ? escapeHtml(venue) : '';

  const eventRowsHtml = needsEventDetails ? `
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Date</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${safeEventDate}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Time</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${safeEventStartTime} – ${safeEventEndTime}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Venue</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${safeVenue}</td>
              </tr>` : '';

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
      to: [route.to],
      replyTo: email,
      subject: `[${route.label}] ${safeName} — djdxmusic.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #111; padding: 0; border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5;">
          <div style="background: #111111; padding: 28px 32px; border-bottom: 3px solid #C9A84C;">
            <p style="color: #C9A84C; font-size: 11px; letter-spacing: 0.16em; margin: 0 0 6px; text-transform: uppercase;">${safeLabel}</p>
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; letter-spacing: 0.02em;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.5); margin: 6px 0 0; font-size: 13px;">via djdxmusic.com/contact</p>
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
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; font-size: 15px;"><a href="tel:${safePhone}" style="color: #C9A84C; text-decoration: none;">${safePhone}</a></td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Category</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeLabel}</td>
              </tr>${eventRowsHtml}
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

    // Confirmation to sender
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
      to: [email],
      subject: `Got your message, ${safeName.split(' ')[0]} — DJ DX`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0c0c; color: #fff; padding: 40px; border-radius: 12px;">
          <h1 style="color: #C9A84C; font-size: 24px; margin: 0 0 16px;">Thanks for reaching out.</h1>
          <p style="color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.7; margin: 0 0 24px;">
            Hey ${safeName.split(' ')[0]}, your message about <strong style="color:#fff;">${safeLabel}</strong> has been received.
          </p>
          <p style="color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.7; margin: 0 0 32px;">
            You'll hear back within <strong style="color:#C9A84C;">24–48 hours</strong>.
          </p>
          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; color: rgba(255,255,255,0.4); font-size: 13px;">
            DJ DX · djdxmusic.com · New York / New Jersey
          </div>
        </div>
      `,
    });

    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim();
    const userAgent = req.headers['user-agent'];
    const eventId = typeof metaEventId === 'string' ? metaEventId : undefined;

    await Promise.all([
      sendMetaLeadEvent({ email, phone, eventSourceUrl: 'https://djdxmusic.com/contact', eventId, clientIp, userAgent }),
      sendTikTokLeadEvent({ email, phone, eventSourceUrl: 'https://djdxmusic.com/contact', eventId, clientIp, userAgent }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
