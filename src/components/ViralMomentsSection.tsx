import { useCallback, useState } from 'react';
import { viralShorts } from '../data/viralShorts';

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

interface Props {
  subtitle?: string;
}

// Reusable TikTok viral-shorts showcase — same section used on the homepage,
// extracted so any page (e.g. Soul Shades) can drop it in without duplicating
// the carousel markup/state.
export default function ViralMomentsSection({ subtitle = 'Moments that moved the crowd — now moving the internet. Collaborations with Soul Shades.' }: Props) {
  const [viralSlide, setViralSlide] = useState(0);
  const viralTotal = viralShorts.length;
  const viralPrev = useCallback(() => setViralSlide(s => (s - 1 + viralTotal) % viralTotal), [viralTotal]);
  const viralNext = useCallback(() => setViralSlide(s => (s + 1) % viralTotal), [viralTotal]);

  return (
    <section className="viral" id="viral" aria-label="Viral Moments — DJ DX on TikTok">
      <div className="section-inner">
        <div className="viral-header sr" data-sr-delay="0s">
          <div className="sec-overline">
            <span className="sec-label">Viral Moments</span>
            <span className="sec-rule" />
          </div>
          <h2 className="sec-title">Trending Shorts</h2>
          <p className="viral-sub">{subtitle}</p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="viral-track viral-track--desktop sr" data-sr-delay="0.1s">
          {viralShorts.map((s, i) => (
            <div key={s.id} className="viral-card sr" data-sr-delay={`${i * 0.1}s`}>
              <div className="viral-frame">
                <div className="viral-frame-loader" />
                <iframe
                  src={`https://www.tiktok.com/player/v1/${s.id}?music_info=0&description=0&loop=0&autoplay=0&controls=1&progress_bar=1&native_context_menu=0&rel=0`}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title={s.label}
                  onLoad={(e) => {
                    const loader = (e.currentTarget as HTMLIFrameElement).previousElementSibling as HTMLElement;
                    if (loader) loader.style.opacity = '0';
                  }}
                />
              </div>
              <div className="viral-stats">
                <span className="viral-stat" title="Views"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>{s.views}</span>
                <span className="viral-stat" title="Likes"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>{s.likes}</span>
                <span className="viral-stat" title="Comments"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>{s.comments}</span>
              </div>
              <div className="viral-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel with featured short + thumbnail strip */}
        <div className="viral-carousel sr" data-sr-delay="0.1s">
          <div className="viral-carousel-nav">
            <button className="viral-nav-btn" onClick={viralPrev} aria-label="Previous short">
              <ChevronLeft />
            </button>
            <span className="viral-nav-counter">{viralSlide + 1} / {viralTotal}</span>
            <button className="viral-nav-btn" onClick={viralNext} aria-label="Next short">
              <ChevronRight />
            </button>
          </div>

          <div className="viral-stage">
            {viralShorts.map((s, i) => (
              <div key={s.id} className={`viral-slide${i === viralSlide ? ' viral-slide--active' : ''}`} aria-hidden={i !== viralSlide}>
                <div className="viral-frame">
                  <div className="viral-frame-loader" />
                  {i === viralSlide && (
                    <iframe
                      src={`https://www.tiktok.com/player/v1/${s.id}?music_info=0&description=0&loop=0&autoplay=0&controls=1&progress_bar=1&native_context_menu=0&rel=0`}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={s.label}
                      onLoad={(e) => {
                        const loader = (e.currentTarget as HTMLIFrameElement).previousElementSibling as HTMLElement;
                        if (loader) loader.style.opacity = '0';
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="viral-stats">
            <span className="viral-stat" title="Views"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>{viralShorts[viralSlide].views}</span>
            <span className="viral-stat" title="Likes"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>{viralShorts[viralSlide].likes}</span>
            <span className="viral-stat" title="Comments"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>{viralShorts[viralSlide].comments}</span>
          </div>
          <div className="viral-label">{viralShorts[viralSlide].label}</div>

          <div className="viral-thumbstrip">
            {viralShorts.map((s, i) => (
              <button
                key={s.id}
                className={`viral-thumb-btn${i === viralSlide ? ' viral-thumb-btn--active' : ''}`}
                onClick={() => setViralSlide(i)}
                aria-label={`Go to short ${i + 1}`}
                aria-current={i === viralSlide}
              >
                <span className="viral-thumb-num">{i + 1}</span>
                <span className="viral-thumb-views">{s.views}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
