import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface Props {
  headline: string;
  image: string;       // absolute URL e.g. https://djdxmusic.com/covers/...
  category: string;
  url: string;         // canonical article URL
  variant?: 'sidebar' | 'bar'; // sidebar = circular icon, bar = full button
}

export default function InstagramStoryShare({ headline, image, category, url, variant = 'bar' }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'rendering' | 'done' | 'error'>('idle');

  async function handleShare() {
    if (!cardRef.current) return;
    setState('rendering');

    try {
      const canvas = await html2canvas(cardRef.current, {
        width: 1080,
        height: 1920,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0a0805',
        logging: false,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) { setState('error'); return; }

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
      }, 'image/png', 1.0);

    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 3000);
    }
  }

  const shortUrl = url.replace('https://', '');

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

      {/* ── Hidden Story Card — 1080×1920 (Instagram Story dimensions) ── */}
      <div
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1080px',
          height: '1920px',
          pointerEvents: 'none',
          zIndex: -1,
        }}
        aria-hidden="true"
      >
        <div
          ref={cardRef}
          style={{
            width: '1080px',
            height: '1920px',
            background: '#0a0805',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Barlow Condensed', 'Barlow', sans-serif",
          }}
        >
          {/* ── Cover image — upper 65% ── */}
          <div style={{
            position: 'absolute',
            inset: 0,
            height: '75%',
          }}>
            <img
              src={image}
              crossOrigin="anonymous"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              alt=""
            />
          </div>

          {/* ── Gradient overlay — bottom 60% ── */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 25%, rgba(10,8,5,0.85) 55%, #0a0805 75%)',
          }} />

          {/* ── Top badge ── */}
          <div style={{
            position: 'absolute',
            top: 80,
            left: 80,
            background: 'rgba(201,168,76,0.15)',
            border: '2px solid rgba(201,168,76,0.5)',
            borderRadius: '4px',
            padding: '12px 32px',
          }}>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '32px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
            }}>{category}</span>
          </div>

          {/* ── Bottom content block ── */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 80px 120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}>

            {/* Artist / duo name */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}>
              <div style={{ flex: '0 0 48px', height: '2px', background: '#C9A84C' }} />
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '36px',
                fontWeight: 800,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}>Soul Shades × DJ DX</span>
            </div>

            {/* Headline */}
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '112px',
              fontWeight: 800,
              lineHeight: 1.0,
              color: '#f2f2f2',
              letterSpacing: '-0.01em',
            }}>
              {headline.length > 60 ? headline.slice(0, 57) + '…' : headline}
            </div>

            {/* Divider */}
            <div style={{ height: '2px', background: 'rgba(201,168,76,0.3)' }} />

            {/* CTA row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '30px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(242,242,242,0.5)',
                }}>Read the full story at</span>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '36px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#C9A84C',
                }}>{shortUrl}</span>
              </div>

              {/* DJ DX logo mark */}
              <div style={{
                width: '140px',
                height: '140px',
                border: '3px solid rgba(201,168,76,0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '2px',
              }}>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '42px',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  color: '#f2f2f2',
                  lineHeight: 1,
                }}>DJ</span>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '42px',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  color: '#C9A84C',
                  lineHeight: 1,
                }}>DX</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Spin animation style */}
      <style>{`
        @keyframes ig-spin { to { transform: rotate(360deg); } }
        .ig-spin { animation: ig-spin 0.8s linear infinite; }
        .na-share-btn--loading { opacity: 0.7; cursor: wait; }
      `}</style>
    </>
  );
}
