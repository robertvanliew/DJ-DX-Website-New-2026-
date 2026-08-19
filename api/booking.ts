import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createHash } from 'crypto';

// NOTE: everything this function needs is inlined below (no local relative
// imports). Vercel's builder here does not bundle cross-file imports even
// within api/ subdirectories — a prior version imported from ../src/lib and
// then from ./_lib/, and both hard-crashed every request in production with
// ERR_MODULE_NOT_FOUND. Confirmed via production logs before this fix.

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Spam guard ────────────────────────────────────────────────────────────────
const SPAM_URL_RE = /https?:\/\//gi;
// Was 2500ms — real users with browser autofill/password managers fill every
// field in well under a second and were being silently dropped as spam (fake
// 200 returned, no email ever sent, no error shown). The honeypot field is
// the primary bot signal; this is now just a backstop against sub-200ms
// scripted submissions, not a real "did a human fill this out" check.
const MIN_FILL_MS = 200;
const MAX_LINKS = 2;

function isSpamSubmission({ honeypot, elapsedMs, message }: { honeypot: unknown; elapsedMs: unknown; message: string }): { spam: boolean; reason?: string } {
  if (typeof honeypot === 'string' && honeypot.trim() !== '') return { spam: true, reason: 'honeypot' };
  if (typeof elapsedMs !== 'number' || !Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) return { spam: true, reason: 'too_fast' };
  const linkCount = (message.match(SPAM_URL_RE) || []).length;
  if (linkCount > MAX_LINKS) return { spam: true, reason: 'link_spam' };
  return { spam: false };
}

// ── Retargeting conversion reporting (best-effort, never blocks the response) ─
function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

interface LeadEventInput {
  email: string;
  phone: string;
  eventSourceUrl: string;
  eventId?: string;
  clientIp?: string;
  userAgent?: string;
}

async function sendMetaLeadEvent(input: LeadEventInput): Promise<void> {
  const pixelId = process.env.VITE_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const digitsOnlyPhone = input.phone.replace(/\D/g, '');
  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: input.eventId,
      action_source: 'website',
      event_source_url: input.eventSourceUrl,
      user_data: {
        em: input.email ? [sha256(input.email)] : undefined,
        ph: digitsOnlyPhone ? [sha256(digitsOnlyPhone)] : undefined,
        client_ip_address: input.clientIp,
        client_user_agent: input.userAgent,
      },
    }],
  };

  try {
    await fetch(`https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Meta CAPI error:', err);
  }
}

function normalizeTikTokPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return `+${digits}`;
}

async function sendTikTokLeadEvent(input: LeadEventInput): Promise<void> {
  const pixelId = process.env.VITE_TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_EVENTS_API_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const payload = {
    event_source: 'web',
    event_source_id: pixelId,
    data: [{
      event: 'SubmitForm',
      event_time: Math.floor(Date.now() / 1000),
      event_id: input.eventId,
      user: {
        email: input.email ? [sha256(input.email)] : undefined,
        phone: input.phone ? [sha256(normalizeTikTokPhone(input.phone))] : undefined,
        ip: input.clientIp,
        user_agent: input.userAgent,
      },
      page: { url: input.eventSourceUrl },
    }],
  };

  try {
    await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Token': accessToken },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('TikTok Events API error:', err);
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 254, phone: 30, eventType: 100, eventDate: 40, eventTime: 10, location: 200, message: 2000 };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // "quick" is the stripped-down 4-field sticky-CTA form (name, phone-or-email,
  // event date, event type) — everything else gets a sensible placeholder so
  // the same email pipeline handles both, and DJ DX follows up by phone for
  // the missing details.
  const quick = req.body.quick === true;
  const { name, eventType, eventDate, honeypot, elapsedMs, metaEventId, pageUrl } = req.body;
  let { email, phone, eventStartTime, eventEndTime, location, message } = req.body;

  if (quick) {
    if (!name || !eventType || !eventDate || (!email && !phone)) {
      return res.status(400).json({ error: 'Name, contact info, event date, and event type are required' });
    }
    email = email || '';
    phone = phone || '';
    eventStartTime = eventStartTime || 'TBD';
    eventEndTime = eventEndTime || 'TBD';
    location = location || 'Not provided (quick inquiry)';
    message = message || '(Quick inquiry — submitted via sticky CTA, no additional details provided.)';
  } else if (!name || !email || !phone || !eventType || !eventDate || !eventStartTime || !eventEndTime || !location || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const spamCheck = isSpamSubmission({ honeypot, elapsedMs, message });
  if (spamCheck.spam) {
    console.warn('Booking submission flagged as spam', { reason: spamCheck.reason, elapsedMs, email });
    // Fake success so bots don't learn to route around this
    return res.status(200).json({ success: true });
  }

  // Type and length validation
  if (
    typeof name !== 'string' || name.length > MAX.name ||
    typeof email !== 'string' || email.length > MAX.email ||
    typeof phone !== 'string' || phone.length > MAX.phone ||
    typeof eventType !== 'string' || eventType.length > MAX.eventType ||
    typeof eventDate !== 'string' || eventDate.length > MAX.eventDate ||
    typeof eventStartTime !== 'string' || eventStartTime.length > MAX.eventTime ||
    typeof eventEndTime !== 'string' || eventEndTime.length > MAX.eventTime ||
    typeof location !== 'string' || location.length > MAX.location ||
    typeof message !== 'string' || message.length > MAX.message
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  if (email && !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (!quick && !email) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Escape all fields before HTML interpolation
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeEventType = escapeHtml(eventType);
  const safeEventDate = escapeHtml(eventDate);
  const safeEventStartTime = escapeHtml(eventStartTime);
  const safeEventEndTime = escapeHtml(eventEndTime);
  const safeLocation = escapeHtml(location);
  const safeMessage = escapeHtml(message);

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
      to: ['bookings@djdxmusic.com'],
      replyTo: email || undefined,
      subject: `${quick ? 'Quick Inquiry' : 'New Booking Inquiry'} — ${safeEventType} | ${safeEventDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #111; padding: 0; border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5;">
          <div style="background: #111111; padding: 28px 32px; border-bottom: 3px solid #C9A84C;">
            <h1 style="color: #C9A84C; font-size: 22px; margin: 0; letter-spacing: 0.04em;">${quick ? 'QUICK INQUIRY' : 'NEW BOOKING INQUIRY'}</h1>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 13px;">via djdxmusic.com${quick ? ' — sticky CTA, follow up by phone for full details' : ''}</p>
          </div>

          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 15px;">${safeEmail ? `<a href="mailto:${safeEmail}" style="color: #C9A84C; text-decoration: none;">${safeEmail}</a>` : '—'}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safePhone ? `<a href="tel:${safePhone}" style="color: #C9A84C; text-decoration: none;">${safePhone}</a>` : '—'}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Type</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeEventType}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Date</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeEventDate}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Event Time</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeEventStartTime} – ${safeEventEndTime}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Location</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px;">${safeLocation}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; line-height: 1.7;">${safeMessage.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #eee;">
              ${safeEmail ? `
              <a href="mailto:${safeEmail}" style="display: inline-block; background: #C9A84C; color: #111; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 0.06em;">
                REPLY TO ${safeName.split(' ')[0].toUpperCase()}
              </a>` : `
              <a href="tel:${safePhone}" style="display: inline-block; background: #C9A84C; color: #111; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 0.06em;">
                CALL ${safeName.split(' ')[0].toUpperCase()}
              </a>`}
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation to the person who inquired — only possible if we have their email
    if (email) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'DJ DX <noreply@djdxmusic.com>',
        to: [email],
        subject: `Got your inquiry, ${safeName.split(' ')[0]} — DJ DX`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0c0c; color: #fff; padding: 40px; border-radius: 12px;">
            <h1 style="color: #C9A84C; font-size: 24px; margin: 0 0 16px;">Thanks for reaching out.</h1>
            <p style="color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.7; margin: 0 0 24px;">
              Hey ${safeName.split(' ')[0]}, your booking inquiry for <strong style="color:#fff;">${safeEventType}</strong> on <strong style="color:#fff;">${safeEventDate}</strong>${quick ? '' : ` from <strong style="color:#fff;">${safeEventStartTime} to ${safeEventEndTime}</strong>`} has been received.
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
    }

    const eventSourceUrl = typeof pageUrl === 'string' && pageUrl.startsWith('https://djdxmusic.com') ? pageUrl : 'https://djdxmusic.com/';
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim();
    const userAgent = req.headers['user-agent'];
    const eventId = typeof metaEventId === 'string' ? metaEventId : undefined;

    await Promise.all([
      sendMetaLeadEvent({ email, phone, eventSourceUrl, eventId, clientIp, userAgent }),
      sendTikTokLeadEvent({ email, phone, eventSourceUrl, eventId, clientIp, userAgent }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Booking email error:', err);
    return res.status(500).json({ error: 'Failed to send inquiry' });
  }
}
