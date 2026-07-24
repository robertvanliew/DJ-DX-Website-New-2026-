import { createHash } from 'crypto';

// Server-side Meta Conversions API — reports the same Lead event the browser
// pixel already fires, as a redundant channel that survives ad blockers and
// browser tracking protections. Shares an event_id with the client-side fbq
// call (src/lib/analytics.ts) so Meta deduplicates instead of double-counting
// the same real-world lead.
//
// Uses the same VITE_META_PIXEL_ID as the browser pixel (fine to read
// server-side — Vite only restricts VITE_ vars from being *hidden*, not from
// being read in Node). META_CAPI_ACCESS_TOKEN has no VITE_ prefix and is
// never exposed to the client bundle.

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

export async function sendMetaLeadEvent(input: LeadEventInput): Promise<void> {
  const pixelId = process.env.VITE_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return; // not configured — never block the actual form submission

  const digitsOnlyPhone = input.phone.replace(/\D/g, '');

  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: input.eventId,
      action_source: 'website',
      event_source_url: input.eventSourceUrl,
      user_data: {
        em: [sha256(input.email)],
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
    // Best-effort side channel — never let this fail the actual form submission
  }
}
