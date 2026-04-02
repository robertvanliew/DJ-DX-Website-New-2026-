import type { VercelRequest, VercelResponse } from '@vercel/node'
import { put, head } from '@vercel/blob'
import { createHmac, timingSafeEqual } from 'crypto'

const BLOB_KEY = 'djdx-catalog.json'
const ALLOWED_ORIGIN = process.env.SITE_URL ?? 'https://djdxmusic.com'

function isValidSessionToken(token: string): boolean {
  const secret = process.env.ADMIN_SECRET ?? ''
  if (!secret) return false
  // Accept current and previous 30-min bucket to handle clock edge cases
  for (const offset of [0, -1]) {
    const bucket = (Math.floor(Date.now() / (30 * 60 * 1000)) + offset).toString()
    const expected = createHmac('sha256', secret).update(bucket).digest('hex')
    if (token.length === expected.length && timingSafeEqual(Buffer.from(token), Buffer.from(expected))) return true
  }
  return false
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Restrict CORS to your own domain — GET is public, POST is admin-only
  const origin = req.headers.origin ?? ''
  const allowedOrigins = [ALLOWED_ORIGIN, 'http://localhost:3000', 'http://localhost:3001']
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()

  // ── GET: return the catalog (public) ────────────────────
  if (req.method === 'GET') {
    try {
      const blob = await head(BLOB_KEY).catch(() => null)
      if (!blob) return res.status(200).json({ source: 'default', tracks: null })
      const resp = await fetch(blob.url)
      const tracks = await resp.json()
      return res.status(200).json({ source: 'blob', tracks })
    } catch (err) {
      console.error('catalog GET error:', err)
      return res.status(200).json({ source: 'default', tracks: null })
    }
  }

  // ── POST: save the catalog (admin session token required) ─
  if (req.method === 'POST') {
    const authHeader = req.headers.authorization ?? ''
    const token = authHeader.replace('Bearer ', '').trim()

    if (!token || !isValidSessionToken(token)) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      const { tracks } = req.body
      if (!Array.isArray(tracks)) return res.status(400).json({ error: 'Invalid payload' })

      await put(BLOB_KEY, JSON.stringify(tracks), {
        access: 'public',
        addRandomSuffix: false,
        contentType: 'application/json',
      })

      return res.status(200).json({ ok: true, count: tracks.length })
    } catch (err) {
      console.error('catalog POST error:', err)
      return res.status(500).json({ error: 'Failed to save catalog' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
