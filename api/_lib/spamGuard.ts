// Shared bot-filtering heuristics for the contact + booking forms.
// No external infra needed: a honeypot field real users never see/fill,
// plus a minimum fill-time trap (bots submit near-instantly).

const URL_RE = /https?:\/\//gi;
const MIN_FILL_MS = 2500;
const MAX_LINKS = 2;

export interface SpamCheckInput {
  honeypot: unknown;
  elapsedMs: unknown;
  message: string;
}

export function isSpamSubmission({ honeypot, elapsedMs, message }: SpamCheckInput): boolean {
  if (typeof honeypot === 'string' && honeypot.trim() !== '') return true;

  if (typeof elapsedMs !== 'number' || !Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) return true;

  const linkCount = (message.match(URL_RE) || []).length;
  if (linkCount > MAX_LINKS) return true;

  return false;
}
