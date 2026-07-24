import type { VercelRequest, VercelResponse } from '@vercel/node';

// Proxies to Photon (photon.komoot.io) — a free, keyless autocomplete API built
// on OpenStreetMap data. Proxied server-side so we control the User-Agent
// (required by fair-use policy) and can swap providers later without any
// frontend change.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
  if (q.length < 3) return res.status(200).json({ results: [] });

  try {
    const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=5&lang=en`;
    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'djdxmusic.com booking form (contact: bookings@djdxmusic.com)' },
    });

    if (!upstream.ok) return res.status(200).json({ results: [] });

    const data = await upstream.json();
    const results = (data.features || []).map((f: { properties?: Record<string, string> }) => {
      const p = f.properties || {};
      const streetAddr = [p.housenumber, p.street].filter(Boolean).join(' ');
      const label = [p.name, streetAddr, p.city, p.state, p.country]
        .filter(Boolean)
        .filter((v, i, arr) => arr.indexOf(v) === i)
        .join(', ');
      return { label, city: p.city || '', state: p.state || '', country: p.country || '' };
    }).filter((r: { label: string }) => r.label);

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    return res.status(200).json({ results });
  } catch (err) {
    console.error('Geocode proxy error:', err);
    return res.status(200).json({ results: [] });
  }
}
