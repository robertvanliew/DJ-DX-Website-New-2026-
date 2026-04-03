import { useState, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, Share2, Download, Link2, Check } from 'lucide-react';
import type { Track } from '../catalog';

interface ShareModalProps {
  track: Track;
  shareType: 'store' | 'soul-shades';
  onClose: () => void;
}

// ── Social platform configs ──────────────────────────────────────────────────
const SOCIALS = [
  {
    id: 'instagram',
    label: 'Instagram',
    gradient: 'from-purple-600 to-pink-600',
    hoverGradient: 'hover:from-purple-700 hover:to-pink-700',
    shadow: 'shadow-purple-500/20 hover:shadow-purple-500/40',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label2: 'Share to Instagram Story',
  },
  {
    id: 'twitter',
    label: 'X / Twitter',
    gradient: 'from-[#1DA1F2] to-[#1DA1F2]',
    hoverGradient: 'hover:from-[#1a8cd8] hover:to-[#1a8cd8]',
    shadow: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label2: 'Share to X (Twitter)',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    gradient: 'from-[#00f2ea] to-[#ff0050]',
    hoverGradient: 'hover:from-[#00d9d1] hover:to-[#e6004a]',
    shadow: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    label2: 'Share to TikTok',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    gradient: 'from-[#25D366] to-[#128C7E]',
    hoverGradient: 'hover:from-[#1ebe58] hover:to-[#0e7a6e]',
    shadow: 'shadow-green-500/20 hover:shadow-green-500/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label2: 'Share on WhatsApp',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    gradient: 'from-[#1877F2] to-[#145db8]',
    hoverGradient: 'hover:from-[#1468d9] hover:to-[#1154a6]',
    shadow: 'shadow-blue-600/20 hover:shadow-blue-600/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    label2: 'Share on Facebook',
  },
];

export default function ShareModal({ track, shareType, onClose }: ShareModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedTikTok, setCopiedTikTok] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const origin = window.location.origin;
  const deepLink = shareType === 'soul-shades'
    ? `${origin}/soul-shades#track-${track.id}`
    : `${origin}/#track-${track.id}`;
  const storyUrl = `${origin}/api/og?type=${shareType}&track=${encodeURIComponent(track.title)}&trackId=${track.id}&format=story`;
  const pageUrl = deepLink;
  const shareText = `Listen to "${track.title}" by DJ DX`;

  // Pre-load image and set loaded after short delay (smooth reveal like the bundle)
  useEffect(() => {
    setImgLoaded(false);
    setImgError(false);
    const img = new Image();
    img.src = storyUrl;
    img.onload = () => setTimeout(() => setImgLoaded(true), 300);
    img.onerror = () => setImgError(true);
    const timeout = setTimeout(() => { if (!imgLoaded) setImgError(true); }, 12000);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyUrl]);

  async function downloadStory() {
    setDownloading(true);
    try {
      const res = await fetch(storyUrl);
      if (!res.ok) throw new Error('Failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `djdx-${track.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch { /* ignore */ }
    setTimeout(() => setDownloading(false), 1000);
  }

  async function copyLink() {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function shareToSocial(platformId: string) {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent(shareText);

    if (platformId === 'instagram') {
      try {
        const res = await fetch(storyUrl);
        if (res.ok) {
          const blob = await res.blob();
          const file = new File([blob], `djdx-${track.title}.png`, { type: 'image/png' });
          if (navigator.canShare?.({ files: [file] })) {
            await navigator.share({ title: `${track.title} · DJ DX`, text: shareText, url: pageUrl, files: [file] });
            onClose();
            return;
          }
        }
      } catch { /* fall through */ }
      await downloadStory();
      return;
    }

    if (platformId === 'tiktok') {
      try {
        // Try native share with image on mobile
        const res = await fetch(storyUrl);
        if (res.ok) {
          const blob = await res.blob();
          const file = new File([blob], `djdx-${track.title}.png`, { type: 'image/png' });
          if (navigator.canShare?.({ files: [file] })) {
            await navigator.share({ title: `${track.title} · DJ DX`, text: shareText, url: pageUrl, files: [file] });
            onClose();
            return;
          }
        }
      } catch { /* fall through */ }
      // Fallback: copy link
      await navigator.clipboard.writeText(pageUrl);
      setCopiedTikTok(true);
      setTimeout(() => setCopiedTikTok(false), 2000);
      return;
    }

    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    if (urls[platformId]) {
      window.open(urls[platformId], '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <DialogPrimitive.Root open={true} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Sheet — slides up from bottom on all screens */}
        <DialogPrimitive.Content
          className="fixed left-1/2 bottom-0 z-[1101] w-full max-w-[480px] -translate-x-1/2 rounded-t-3xl bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border border-[#c9a84c]/20 shadow-2xl shadow-[#c9a84c]/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom duration-300 max-h-[92dvh] overflow-y-auto"
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 rounded-full bg-[#c9a84c]/30" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#c9a84c]/10">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[#c9a84c]" />
              <h2 className="text-lg font-bold text-white">Share Track</h2>
            </div>
            <DialogPrimitive.Close className="rounded-full p-2 hover:bg-white/5 transition-colors cursor-pointer">
              <X className="h-5 w-5 text-white/70" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>

          <div className="p-6 space-y-6">
            {/* ── Story preview card (Spotify-style) ── */}
            <div className="mx-auto" style={{ maxWidth: '200px' }}>
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-[#c9a84c]/30 shadow-lg shadow-[#c9a84c]/20"
                style={{ aspectRatio: '9/16' }}
              >
                {/* Skeleton while loading */}
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] bg-[length:400%_100%] animate-[skeleton-loading_8s_infinite_ease-in-out]" />
                )}

                {/* Error state */}
                {imgError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] text-[#c9a84c]/50 text-xs">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                    </svg>
                    Preview unavailable
                  </div>
                )}

                {/* Loaded image + overlay */}
                {!imgError && (
                  <>
                    <img
                      src={storyUrl}
                      alt={`Share card for ${track.title}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      style={{ opacity: imgLoaded ? 1 : 0 }}
                    />
                    {imgLoaded && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-[#d4b962] to-[#c9a84c] flex items-center justify-center shadow-xl shadow-[#c9a84c]/50 border-2 border-white/30 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-full" />
                            <svg className="w-7 h-7 text-black ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {/* Track info at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 space-y-0.5 z-10">
                          <h3 className="text-white font-bold text-xs line-clamp-2 leading-tight">{track.title}</h3>
                          <p className="text-[#c9a84c] text-[10px] font-medium">DJ DX</p>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <p className="text-center text-[#c9a84c]/50 text-[10px] mt-2 tracking-wider uppercase">9:16 · Stories</p>
            </div>

            {/* Track name + artist */}
            <div className="text-center space-y-1">
              <h3 className="text-white font-bold text-base leading-tight">{track.title}</h3>
              <p className="text-[#c9a84c] text-sm">DJ DX</p>
            </div>

            {/* ── Social share buttons ── */}
            <div className="space-y-3">
              {SOCIALS.map(s => (
                <button
                  key={s.id}
                  onClick={() => shareToSocial(s.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${s.gradient} ${s.hoverGradient} text-white font-medium transition-all duration-200 shadow-lg ${s.shadow} active:scale-[0.98] cursor-pointer`}
                >
                  {s.id === 'tiktok' && copiedTikTok ? <Check className="w-5 h-5" /> : s.icon}
                  <span>{s.id === 'tiktok' && copiedTikTok ? 'Link Copied!' : s.label2}</span>
                </button>
              ))}

              {/* Download & Copy link row */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={downloadStory}
                  disabled={downloading}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] font-medium border border-[#c9a84c]/30 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  {downloading
                    ? <div className="w-5 h-5 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
                    : <Download className="w-5 h-5" />
                  }
                  <span className="text-sm">Download</span>
                </button>

                <button
                  onClick={copyLink}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] font-medium border border-[#c9a84c]/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
                  <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
