import { createHash } from 'crypto';

// Server-side TikTok Events API — reports the same SubmitForm event the
// browser pixel already fires (src/lib/analytics.ts), as a redundant channel
// that survives ad blockers and browser tracking protections. Shares an
// event_id with the client-side ttq.track call so TikTok deduplicates instead
// of double-counting the same real-world lead.

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

// TikTok expects phone hashed in E.164 form (leading "+", country code included).
// Our form doesn't collect a country code, so this assumes US/+1 for a bare
// 10-digit number — correct for this business's actual customer base.
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return `+${digits}`;
}

interface LeadEventInput {
  email: string;
  phone: string;
  eventSourceUrl: string;
  eventId?: string;
  clientIp?: string;
  userAgent?: string;
}

export async function sendTikTokLeadEvent(input: LeadEventInput): Promise<void> {
  const pixelId = process.env.VITE_TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_EVENTS_API_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return; // not configured — never block the actual form submission

  const payload = {
    event_source: 'web',
    event_source_id: pixelId,
    data: [{
      event: 'SubmitForm',
      event_time: Math.floor(Date.now() / 1000),
      event_id: input.eventId,
      user: {
        email: [sha256(input.email)],
        phone: [sha256(normalizePhone(input.phone))],
        ip: input.clientIp,
        user_agent: input.userAgent,
      },
      page: {
        url: input.eventSourceUrl,
      },
    }],
  };

  try {
    await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('TikTok Events API error:', err);
    // Best-effort side channel — never let this fail the actual form submission
  }
}
