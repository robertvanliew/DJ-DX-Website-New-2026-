/**
 * Generates public/og-image.jpg — the branded 1200×630 Open Graph share card
 * for DJ DX. Shows like a Spotify/Apple Music share card when posted to
 * iMessage, Instagram Stories, Twitter/X, WhatsApp, etc.
 *
 * Run: node scripts/generate-og-image.mjs
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT  = path.join(ROOT, 'public', 'og-image.jpg');

// ── Build the card ───────────────────────────────────────────────────────────
// Pure black background — bold white "DJ DX" dominates the frame.
// Exactly like the reference: text IS the image.

const W = 1200;
const H = 630;

const card = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <!-- Gold brand background -->
  <rect width="${W}" height="${H}" fill="#C9A84C"/>

  <!-- HUGE bold black "DJ DX" fills the frame -->
  <text
    x="${W / 2}" y="435"
    text-anchor="middle"
    font-family="Arial Black, Impact, sans-serif"
    font-weight="900"
    font-size="318"
    letter-spacing="-6"
    fill="#0a0805"
  >DJ DX</text>
</svg>
`;

try {
  await sharp(Buffer.from(card))
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(OUT);

  console.log(`✓ og-image.jpg generated → ${OUT}`);
} catch (err) {
  console.error('✗ Failed to generate og-image:', err.message);
  process.exit(1);
}
