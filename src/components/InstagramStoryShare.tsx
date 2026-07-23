import { useState } from 'react';

interface Props {
  headline: string;
  excerpt: string;     // article snippet shown on the story card
  image: string;       // absolute URL e.g. https://djdxmusic.com/covers/...
  category: string;
  url: string;         // canonical article URL
  variant?: 'sidebar' | 'bar'; // sidebar = circular icon, bar = full button
}

export default function InstagramStoryShare({ headline, excerpt, image, category, url, variant = 'bar' }: Props) {
  const [state, setState] = useState<'idle' | 'rendering' | 'done' | 'error'>('idle');

  async function handleShare() {
    setState('rendering');

    try {
      const params = new URLSearchParams({
        type: 'news',
        format: 'story',
        headline,
        excerpt,
        category,
        image,
        url,
      });
      const res = await fetch(`/api/og?${params.toString()}`);
      if (!res.ok) { setState('error'); setTimeout(() => setState('idle'), 3000); return; }

      const blob = await res.blob();
      const file = new File([blob], 'djdx-story.png', { type: 'image/png' });

      // On mobile: try native share with file (Instagram picks it up from share sheet)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: headline,
            text: `${headline} — djdxmusic.com`,
          });
          setState('done');
          setTimeout(() => setState('idle'), 3000);
          return;
        } catch {
          // User cancelled or share failed — fall through to download
        }
      }

      // Fallback: download the image so they can share from camera roll
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = 'djdx-story.png';
      a.click();
      URL.revokeObjectURL(objectUrl);
      setState('done');
      setTimeout(() => setState('idle'), 4000);

    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 3000);
    }
  }

  return (
    <>
      {/* ── Trigger button ── */}
      {variant === 'sidebar' ? (
        <button
          className="na-side-share-btn na-side-share-btn--ig"
          onClick={handleShare}
          disabled={state === 'rendering'}
          aria-label="Share to Instagram Story"
          title="Share to Instagram Story"
        >
          {state === 'rendering' ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="ig-spin">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
              <path d="M12 2a10 10 0 0 1 10 10"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          )}
        </button>
      ) : (
        <button
          className={`na-share-btn na-share-btn--ig${state === 'rendering' ? ' na-share-btn--loading' : ''}`}
          onClick={handleShare}
          disabled={state === 'rendering'}
          aria-label="Share to Instagram Story"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
          <span>
            {state === 'rendering' ? 'Creating Story…' :
             state === 'done'      ? 'Saved! Open Instagram →' :
             state === 'error'     ? 'Try again' :
             'Instagram Story'}
          </span>
        </button>
      )}

      {/* Spin animation style */}
      <style>{`
        @keyframes ig-spin { to { transform: rotate(360deg); } }
        .ig-spin { animation: ig-spin 0.8s linear infinite; }
        .na-share-btn--loading { opacity: 0.7; cursor: wait; }
      `}</style>
    </>
  );
}
