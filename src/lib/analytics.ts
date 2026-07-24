// Window.gtag/fbq/ttq types come from src/lib/pixels.ts (same global augmentation)

export function trackPageView(path: string) {
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
  window.fbq?.('track', 'PageView');
  window.ttq?.page();
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.('event', name, {
    page_path: window.location.pathname,
    ...params,
  });
}

// Fires the "this visitor converted" signal to every connected platform at
// once — GA4, Meta, and TikTok all build "people who actually booked" audiences
// from this, which is what powers lookalike/retargeting campaigns later.
//
// eventId: pass the same id used in the server-side Meta CAPI / TikTok Events
// API calls (api/_lib/metaCapi.ts, api/_lib/tiktokEvents.ts) so each platform
// deduplicates the browser + server report of the same lead instead of
// double-counting it. Returns the id used, so callers can generate it up front
// (before the API request) and pass it back in here after a successful submit.
export function trackLead(params: Record<string, unknown> = {}, eventId?: string): string {
  const id = eventId || crypto.randomUUID();
  trackEvent('generate_lead', { ...params, event_id: id });
  window.fbq?.('track', 'Lead', params, { eventID: id });
  window.ttq?.track('SubmitForm', params, { event_id: id });
  return id;
}
