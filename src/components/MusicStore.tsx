import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import type { Track } from '../catalog';
import { useCart, CartPanel, CartFab } from './CartContext';
import { usePlayer } from './PlayerContext';
import ShareModal from './ShareModal';

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <polyline points="16 6 12 2 8 6"/>
    <line x1="12" y1="2" x2="12" y2="15"/>
  </svg>
);

export const PlayIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <polygon points="3,2 13,8 3,14" />
  </svg>
);

export const tagColor: Record<string, string> = {
  Blend: 'bg-[rgba(201,168,76,0.12)] text-[#C9A84C] border-[rgba(201,168,76,0.3)]',
  Original: 'bg-[rgba(201,168,76,0.22)] text-[#E2C97E] border-[rgba(201,168,76,0.5)]',
  Remix: 'bg-[rgba(255,255,255,0.06)] text-[rgba(242,242,242,0.55)] border-[rgba(255,255,255,0.12)]',
  Pack: 'bg-[rgba(255,255,255,0.06)] text-[rgba(242,242,242,0.55)] border-[rgba(255,255,255,0.12)]',
  Album: 'bg-[rgba(255,255,255,0.06)] text-[rgba(242,242,242,0.55)] border-[rgba(255,255,255,0.12)]',
  Live: 'bg-[rgba(255,255,255,0.06)] text-[rgba(242,242,242,0.55)] border-[rgba(255,255,255,0.12)]',
};

interface MusicStoreProps {
  catalog: Track[];
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  shareType?: 'store' | 'soul-shades';
}

export default function MusicStore({ catalog, title = "Music Store", subTitle = "Music", shareType = 'store' }: MusicStoreProps) {
  const [shareTrack, setShareTrack] = useState<Track | null>(null);
  const { cart, addToCart } = useCart();
  const { play, playingTrack, isPlaying } = usePlayer();
  const playingId = playingTrack?.id ?? null;

  function handleShare(e: React.MouseEvent, track: Track) {
    e.stopPropagation();
    setShareTrack(track);
  }

  const handlePreviewPlay = (e: React.MouseEvent, track: Track) => {
    e.preventDefault();
    e.stopPropagation();
    if (!track.preview) return;
    play(track);
  };

  return (
    <>
      <section className="catalog" id="catalog">
        <div className="section-inner">
          <div className="sec-header sr" data-sr-delay="0s">
            <div className="sec-overline">
              <span className="sec-label">{subTitle}</span>
            </div>
            <h2 className="sec-title">{title}</h2>
          </div>

          <div className="billboard-wrap">
            <div className="bb-header">
              <span className="bb-col-rank">#</span>
              <span className="bb-col-title">Title</span>
              <span className="bb-col-tag">Type</span>
              <span className="bb-col-action" />
            </div>

            <Separator className="bb-sep" />

            {catalog.map((track, idx) => (
              <div key={track.id} id={`track-${track.id}`} className="sr" data-sr-delay={`${idx * 0.03}s`}>
                <div
                  className={`bb-row group${playingId === track.id ? ' bb-row--playing' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play preview of ${track.title}`}
                  onClick={(e) => handlePreviewPlay(e, track)}
                  onKeyDown={(e) => e.key === 'Enter' && handlePreviewPlay(e as unknown as React.MouseEvent, track)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="bb-col-rank">
                    <span className="bb-play-circle" aria-hidden="true">
                      {playingId === track.id && isPlaying ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><polygon points="4,2 13,8 4,14" /></svg>
                      )}
                    </span>
                  </div>

                  <div className="bb-col-title">
                    <span className="bb-track-title">{track.title}</span>
                    <span className="bb-track-artists">
                      {track.artists}
                      {track.album && <span style={{ opacity: 0.6 }}> • {track.album}</span>}
                      {track.year && <span style={{ color: 'rgba(201,168,76,0.6)', marginLeft: 6 }}>· {track.year}</span>}
                    </span>
                  </div>

                  <div className="bb-col-tag">
                    <Badge variant="outline" className={`bb-badge ${tagColor[track.tag] ?? tagColor['Blend']}`}>
                      {track.tag}
                    </Badge>
                  </div>

                  <div className="bb-col-action flex items-center gap-3">
                    <button
                      className="bb-share-btn"
                      onClick={(e) => handleShare(e, track)}
                      aria-label={`Share ${track.title}`}
                    >
                      <ShareIcon />
                      <span>Share</span>
                    </button>
                    <button
                      className={`bb-buy-btn${cart.some(t => t.id === track.id) ? ' bb-buy-btn--added' : ''}`}
                      onClick={(e) => addToCart(e, track)}
                      aria-label={`Add ${track.title} to cart`}
                    >
                      {cart.some(t => t.id === track.id) ? (
                        <>
                          <Check size={12} strokeWidth={3} />
                          <span>Added</span>
                        </>
                      ) : (
                        <span>Buy</span>
                      )}
                    </button>
                  </div>
                </div>
                {idx < catalog.length - 1 && <Separator className="bb-sep" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CartFab />
      <CartPanel />
      {shareTrack && (
        <ShareModal
          track={shareTrack}
          shareType={shareType}
          onClose={() => setShareTrack(null)}
        />
      )}
    </>
  );
}
