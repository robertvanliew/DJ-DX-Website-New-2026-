import { useState, useRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Download, Link2 } from 'lucide-react';
import type { Track } from '../catalog';

interface ShareModalProps {
  track: Track;
  shareType: 'store' | 'soul-shades';
  onClose: () => void;
}

// SVG icons
const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/>
  </svg>
);
const TkIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.82a8.17 8.17 0 004.77 1.53V6.9a4.84 4.84 0 01-1-.21z"/>
  </svg>
);
const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
// SMS / iMessage icon
const SmsIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
  </svg>
);
// Generic share / more icon
const MoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

export default function ShareModal({ track, shareType, onClose }: ShareModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [toast, setToast] = useState('');

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  }

  // ── Swipe-to-dismiss ─────────────────────────────────────────────────────
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragY = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);

  function onTouchStart(e: React.TouchEvent) {
    // Only initiate drag from the handle or when sheet is scrolled to top
    const sheet = sheetRef.current;
    if (!sheet) return;
    if (sheet.scrollTop > 0) return; // let normal scroll happen first
    startY.current = e.touches[0].clientY;
    dragY.current = 0;
    isDragging.current = true;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging.current || !sheetRef.current) return;
    const sheet = sheetRef.current;
    if (sheet.scrollTop > 0) { isDragging.current = false; return; }
    const delta = e.touches[0].clientY - startY.current;
    if (delta < 0) return; // don't allow upward drag
    dragY.current = delta;
    // Translate sheet as user drags, with slight resistance
    sheet.style.transform = `translateX(-50%) translateY(${dragY.current * 0.75}px)`;
    sheet.style.transition = 'none';
  }

  function onTouchEnd() {
    if (!isDragging.current || !sheetRef.current) return;
    isDragging.current = false;
    const sheet = sheetRef.current;
    sheet.style.transition = 'transform 0.3s cubic-bezier(0.22,1,0.36,1)';
    if (dragY.current > 120) {
      // Snap off-screen then close
      sheet.style.transform = 'translateX(-50%) translateY(100%)';
      setTimeout(onClose, 280);
    } else {
      // Snap back
      sheet.style.transform = 'translateX(-50%) translateY(0)';
    }
  }
  const origin = window.location.origin;
  const deepLink = shareType === 'soul-shades'
    ? `${origin}/soul-shades#track-${track.id}`
    : `${origin}/#track-${track.id}`;
  const storyUrl = `${origin}/api/og?type=${shareType}&track=${encodeURIComponent(track.title)}&trackId=${track.id}&format=story`;
  const pageUrl = deepLink;
  const shareText = `Listen to "${track.title}" by DJ DX`;

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
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {
      // Older browser fallback
      const el = document.createElement('textarea');
      el.value = pageUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    showToast('Link copied!');
  }

  // ── Share to Story — fires native OS share sheet immediately ───────────────
  // Same pattern Spotify uses: navigator.share() with title + text + url.
  // The phone's share sheet opens instantly — user picks the app themselves.
  // Fallback: copy link to clipboard and show "Copied!" confirmation.
  async function shareStory() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${track.title} · DJ DX`,
          text: `Listen to "${track.title}" by DJ DX 🎵`,
          url: pageUrl,
        });
        onClose();
      } catch { /* user cancelled — do nothing */ }
    } else {
      // Browser doesn't support Web Share API (desktop) — copy link instead
      await copyLink();
    }
  }

  async function shareToSocial(platformId: string) {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent(shareText);

    if (platformId === 'sms') {
      // sms: works on iPhone (iMessage) and Android (Messages)
      const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const sep = isIos ? '&' : '?';
      window.open(`sms:${sep}body=${encodedText}%20${encodedUrl}`, '_self');
      return;
    }

    if (platformId === 'more') {
      // Generic OS share sheet — no file, just text + URL
      try {
        await navigator.share({ title: `${track.title} · DJ DX`, text: shareText, url: pageUrl });
        onClose();
      } catch { /* user cancelled or not supported */ }
      return;
    }

    const urls: Record<string, string> = {
      twitter:  `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    };
    if (urls[platformId]) window.open(urls[platformId], '_blank', 'noopener,noreferrer');
  }

  return (
    <DialogPrimitive.Root open={true} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[1100] bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogPrimitive.Content
          ref={sheetRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="fixed left-1/2 bottom-0 z-[1101] w-full max-w-[400px] -translate-x-1/2 rounded-t-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom duration-300 max-h-[94dvh] overflow-y-auto"
          style={{ background: 'linear-gradient(135deg,#1C1C1C 0%,#2E2E2E 50%,#1A1A1A 100%)' }}
        >

          {/* Drag handle */}
          <div style={{ display:'flex', justifyContent:'center', paddingTop:'10px', paddingBottom:'6px' }}>
            <div style={{ width:'40px', height:'4px', borderRadius:'2px', background:'rgba(255,255,255,0.15)' }} />
          </div>

          {/* ── ART AREA — gold gradient with play widget ── */}
          <div className="share-art">
            <div className="share-art-vignette" />
            <div className="share-art-wordmark">DJ DX</div>

            {/* Play widget — links to deep link */}
            <a className="share-play-widget" href={pageUrl} target="_blank" rel="noopener noreferrer" onClick={onClose}>
              <div className="share-ring share-ring-1" />
              <div className="share-ring share-ring-2" />
              <div className="share-ring share-ring-3" />
              <div className="share-play-outer" />
              <div className="share-play-inner">
                <svg viewBox="0 0 24 24" fill="#C9A84C" width="22" height="22">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </div>
            </a>

            <div className="share-listen-label">Tap to listen</div>
            <div className="share-art-trackname">{track.title}</div>
          </div>

          {/* ── TRACK INFO ── */}
          <div style={{ padding:'20px 20px 4px' }}>
            <div style={{ fontSize:'17px', fontWeight:700, color:'#fff', lineHeight:1.3, marginBottom:'4px' }}>{track.title}</div>
            <div style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)' }}>DJ DX</div>
          </div>

          {/* ── PROGRESS BAR ── */}
          <div style={{ padding:'16px 20px 0' }}>
            <div style={{ height:'3px', background:'rgba(255,255,255,0.1)', borderRadius:'3px', marginBottom:'6px', position:'relative' }}>
              <div style={{ height:'100%', width:'38%', background:'#C9A84C', borderRadius:'3px', position:'relative' }}>
                <div style={{ content:'""', position:'absolute', right:'-5px', top:'-4px', width:'11px', height:'11px', borderRadius:'50%', background:'#fff' }} />
              </div>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'11px', color:'rgba(255,255,255,0.35)' }}>
              <span>0:40</span><span>preview</span>
            </div>
          </div>

          <div className="share-sep" />

          {/* ── STORIES ROW ── */}
          <div style={{ fontSize:'10px', fontWeight:600, color:'rgba(255,255,255,0.25)', letterSpacing:'2px', textTransform:'uppercase', padding:'16px 20px 4px' }}>Share to Stories</div>
          <div className="share-stories-row">

            <button className="share-story-btn" onClick={shareStory} aria-label="Share to Instagram Story">
              <div className="share-story-ring share-story-ring--ig"><IgIcon /></div>
              <span className="share-story-name">Instagram</span>
              <span className="share-story-sub">Story</span>
            </button>

            <button className="share-story-btn" onClick={shareStory} aria-label="Share to TikTok Story">
              <div className="share-story-ring share-story-ring--tk"><TkIcon /></div>
              <span className="share-story-name">TikTok</span>
              <span className="share-story-sub">Story</span>
            </button>

            <button className="share-story-btn" onClick={shareStory} aria-label="Share to Facebook Story">
              <div className="share-story-ring share-story-ring--fb"><FbIcon /></div>
              <span className="share-story-name">Facebook</span>
              <span className="share-story-sub">Story</span>
            </button>

          </div>

          <div className="share-sep" />

          {/* ── FEED & MORE ── */}
          <div style={{ fontSize:'10px', fontWeight:600, color:'rgba(255,255,255,0.25)', letterSpacing:'2px', textTransform:'uppercase', padding:'16px 20px 4px' }}>Share to Feed & More</div>
          <div style={{ padding:'4px 12px 16px' }}>

            <button className="share-feed-btn" onClick={shareStory}>
              <div className="share-feed-icon" style={{ background:'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}><IgIcon /></div>
              <div className="share-feed-meta"><span>Instagram</span><span className="share-feed-sub">Post to feed</span></div>
            </button>

            <button className="share-feed-btn" onClick={shareStory}>
              <div className="share-feed-icon" style={{ background:'#010101', border:'1px solid rgba(255,255,255,.1)' }}><TkIcon /></div>
              <div className="share-feed-meta"><span>TikTok</span><span className="share-feed-sub">Post to your profile</span></div>
            </button>

            <button className="share-feed-btn" onClick={() => shareToSocial('twitter')}>
              <div className="share-feed-icon" style={{ background:'#000', border:'1px solid rgba(255,255,255,.12)' }}><XIcon /></div>
              <div className="share-feed-meta"><span>X (Twitter)</span><span className="share-feed-sub">Post to your feed</span></div>
            </button>

            <button className="share-feed-btn" onClick={() => shareToSocial('whatsapp')}>
              <div className="share-feed-icon" style={{ background:'#25D366' }}><WaIcon /></div>
              <div className="share-feed-meta"><span>WhatsApp</span><span className="share-feed-sub">Send to a contact</span></div>
            </button>

            <button className="share-feed-btn" onClick={() => shareToSocial('facebook')}>
              <div className="share-feed-icon" style={{ background:'#1877F2' }}><FbIcon /></div>
              <div className="share-feed-meta"><span>Facebook</span><span className="share-feed-sub">Share to your timeline</span></div>
            </button>

            <button className="share-feed-btn" onClick={() => shareToSocial('sms')}>
              <div className="share-feed-icon" style={{ background:'#34C759' }}><SmsIcon /></div>
              <div className="share-feed-meta"><span>Messages</span><span className="share-feed-sub">iMessage or SMS</span></div>
            </button>

            <button className="share-feed-btn" onClick={() => shareToSocial('more')}>
              <div className="share-feed-icon" style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.12)' }}><MoreIcon /></div>
              <div className="share-feed-meta"><span>More Options</span><span className="share-feed-sub">Open system share sheet</span></div>
            </button>

          </div>

          {/* ── COPY + DOWNLOAD ── */}
          <div style={{ display:'flex', gap:'8px', padding:'0 12px 8px' }}>
            <button className="share-bottom-btn" onClick={copyLink}>
              <Link2 size={15} style={{ opacity:.6 }} />
              Copy Link
            </button>
            <button className="share-bottom-btn" onClick={downloadStory} disabled={downloading}>
              {downloading
                ? <div style={{ width:'15px', height:'15px', border:'2px solid rgba(255,255,255,.4)', borderTopColor:'#fff', borderRadius:'50%', animation:'spin 0.7s linear infinite', opacity:.6 }} />
                : <Download size={15} style={{ opacity:.6 }} />
              }
              {downloading ? 'Saving…' : 'Download'}
            </button>
          </div>

          <div style={{ textAlign:'center', padding:'10px 0 18px', fontSize:'12px', color:'rgba(255,255,255,0.2)' }}>djdxmusic.com</div>

          {/* ── Toast notification ── */}
          {toast && (
            <div style={{
              position:'fixed', bottom:'32px', left:'50%', transform:'translateX(-50%)',
              background:'#fff', color:'#111',
              fontSize:'13px', fontWeight:600,
              padding:'10px 20px', borderRadius:'20px',
              boxShadow:'0 4px 20px rgba(0,0,0,0.4)',
              whiteSpace:'nowrap', zIndex:1200,
              animation:'share-toast-in 0.3s ease',
            }}>
              {toast}
            </div>
          )}

        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
