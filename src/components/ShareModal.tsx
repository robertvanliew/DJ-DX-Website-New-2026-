import { useState, useEffect } from 'react';
import type { Track } from '../catalog';

interface ShareModalProps {
  track: Track;
  shareType: 'store' | 'soul-shades';
  onClose: () => void;
}

export default function ShareModal({ track, shareType, onClose }: ShareModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const origin = window.location.origin;
  const deepLink = shareType === 'soul-shades'
    ? `${origin}/soul-shades#track-${track.id}`
    : `${origin}/#track-${track.id}`;
  const storyUrl = `${origin}/api/og?type=${shareType}&track=${encodeURIComponent(track.title)}&trackId=${track.id}&format=story`;
  const pageUrl = deepLink;

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  async function downloadStory() {
    setDownloading(true);
    try {
      const res = await fetch(storyUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `djdx-${track.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } catch { /* ignore */ }
    setDownloading(false);
  }

  async function nativeShare() {
    try {
      const res = await fetch(storyUrl);
      const blob = await res.blob();
      const file = new File([blob], `djdx-${track.title}.png`, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `${track.title} · DJ DX`,
          text: `Listen to ${track.title} by DJ DX`,
          url: pageUrl,
          files: [file],
        });
        onClose();
        return;
      }
    } catch { /* fall through */ }
    // Fallback: copy link
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal" onClick={e => e.stopPropagation()}>

        {/* Handle bar */}
        <div className="share-modal-handle" />

        {/* Header */}
        <div className="share-modal-header">
          <div className="share-modal-title">
            <span className="share-modal-track">{track.title}</span>
            <span className="share-modal-artist">DJ DX</span>
          </div>
          <button className="share-modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Story card preview — 9:16 aspect ratio */}
        <div className="share-modal-preview-wrap">
          <div className="share-modal-preview">
            {!imgLoaded && (
              <div className="share-modal-skeleton">
                <div className="share-modal-skeleton-shine" />
              </div>
            )}
            <img
              src={storyUrl}
              alt={`Share card for ${track.title}`}
              className="share-modal-img"
              style={{ opacity: imgLoaded ? 1 : 0 }}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <p className="share-modal-hint">9:16 · Perfect for Instagram Stories</p>
        </div>

        {/* Action buttons */}
        <div className="share-modal-actions">
          {/* Primary: Download / Native Share */}
          {'share' in navigator ? (
            <button className="share-modal-btn share-modal-btn--primary" onClick={nativeShare}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
              <span>{copied ? 'Link Copied!' : 'Share to Instagram'}</span>
            </button>
          ) : (
            <button
              className="share-modal-btn share-modal-btn--primary"
              onClick={downloadStory}
              disabled={downloading}
            >
              {downloading ? (
                <span className="share-modal-spinner" />
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              )}
              <span>{downloading ? 'Downloading…' : 'Download Story Card'}</span>
            </button>
          )}

          {/* Secondary: Download (always available) */}
          <button
            className="share-modal-btn share-modal-btn--secondary"
            onClick={downloadStory}
            disabled={downloading}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Save Image</span>
          </button>

          {/* Copy link */}
          <button
            className="share-modal-btn share-modal-btn--ghost"
            onClick={async () => {
              await navigator.clipboard.writeText(pageUrl);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
