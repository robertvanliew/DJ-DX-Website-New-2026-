import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import './index.css';

import { fetchCatalog, defaultCatalog, type Track } from './catalog';
import BookingForm from './components/BookingForm';

// Catalog is managed via /admin — loaded from catalog.ts + localStorage

const services = [
  { name: "R&B / Soul", desc: "Classic and contemporary R&B blends that move the room and connect every generation.", icon: "♪" },
  { name: "Hip-Hop", desc: "Golden era to modern — curated for energy, flow, and crowd response.", icon: "◈" },
  { name: "Blends & Remixes", desc: "Original edits crafted exclusively by DJ DX — music you won't hear anywhere else.", icon: "⊕" },
  { name: "House / Jersey Club", desc: "High-energy club edits and Jersey Club cuts that keep the floor locked in all night.", icon: "◉" },
  { name: "Afrobeats", desc: "Vibrant rhythms and global grooves woven seamlessly into every set.", icon: "◎" },
  { name: "Old School", desc: "Nostalgic cuts that unlock the floor and bring the whole crowd together.", icon: "⋈" },
  { name: "Live Violinist / DJ", desc: "A one-of-a-kind fusion — live violin over DJ sets for a truly unforgettable atmosphere.", icon: "♯" },
  { name: "Reggaeton", desc: "From classic dembow to modern Latin trap — crowd-pleasing energy from start to finish.", icon: "◆" },
  { name: "Private Events", desc: "Weddings, corporate nights, private parties — handled with full professionalism.", icon: "★" },
];

const marqueePhotos = [
  { src: '/show-1.jpg', alt: 'DJ DX performing at TEDx Youth RVA' },
  { src: '/show-2.jpg', alt: 'DJ DX on stage at TEDx RVA' },
  { src: '/show-3.jpg', alt: 'DJ DX live performance TEDx' },
  { src: '/show-4.jpg', alt: 'DJ DX soundcheck TEDx' },
  { src: '/show-5.jpg', alt: 'DJ DX TEDx full crowd' },
  { src: '/show-6.jpg', alt: 'DJ DX closer shot TEDx' },
  { src: '/show-7.jpg', alt: 'DJ DX TEDx RVA 2022' },
  { src: '/show-8.jpg', alt: 'DJ DX live performance' },
  { src: '/show-9.jpg', alt: 'DJ DX on stage' },
  { src: '/show-10.jpg', alt: 'DJ DX performing live' },
  { src: '/show-11.jpg', alt: 'DJ DX stage performance' },
  { src: '/show-12.jpg', alt: 'DJ DX concert' },
  { src: '/show-13.jpg', alt: 'DJ DX backdrop performance' },
  { src: '/show-14.jpg', alt: 'DJ DX front of stage' },
  { src: '/show-15.jpg', alt: 'DJ DX side shot' },
  { src: '/show-16.jpg', alt: 'DJ DX performing live in concert' },
  { src: '/show-17.jpg', alt: 'DJ DX stage sit' },
  { src: '/show-18.jpg', alt: 'DJ DX performance 2023' },
  { src: '/show-19.jpg', alt: 'DJ DX side profile' },
  { src: '/show-20.jpg', alt: 'DJ DX closeup performance' },
];

import MusicStore from './components/MusicStore';

// ── FAQ Section ──────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "How do I book DJ DX for a wedding or private event in New York or New Jersey?",
    a: "Use the booking form on this page or email djdxbusiness@gmail.com. DJ DX is a professional wedding DJ and private event DJ serving New York City, New Jersey, Connecticut, and the tri-state area. Response within 24 hours."
  },
  {
    q: "What music genres does DJ DX specialize in?",
    a: "DJ DX specializes in R&B, Hip-Hop, Afrobeats, House, Jersey Club, Reggaeton, and Old School. Every set is custom-tailored — from soulful R&B for weddings to high-energy Hip-Hop and Afrobeats for corporate events, nightclubs, and private parties in NYC and NJ."
  },
  {
    q: "Is DJ DX available for corporate events and brand activations in NYC?",
    a: "Yes. DJ DX is an experienced corporate event DJ in New York City and New Jersey, available for brand activations, product launches, office parties, galas, and conference entertainment. With 20+ years of professional experience and 500+ events, DJ DX delivers polished, on-brand performances."
  },
  {
    q: "What makes DJ DX different from other DJs in New York and New Jersey?",
    a: "DJ DX is a TED-featured artist (TEDxYouth@RVA 2022), an original music producer with 100+ releases on Spotify and Apple Music, and a DJ with over 20 years of experience. DJ DX has been covered by Disrupt Magazine, NJ.com, and RVA Magazine — bringing a level of credibility and artistry that goes beyond standard DJ services in the NYC/NJ market."
  },
  {
    q: "Can DJ DX perform at a nightclub or venue in New Jersey or New York City?",
    a: "Absolutely. DJ DX is an active club and venue DJ in the New York and New Jersey area, performing regularly at nightclubs, lounges, and live music venues. Contact us to check availability for your date."
  },
  {
    q: "Does DJ DX offer a live DJ + live musician performance package?",
    a: "Yes — DJ DX offers a unique live DJ + live violinist performance package. This fusion of live violin over DJ sets creates an unforgettable atmosphere perfect for upscale weddings, corporate galas, and VIP events in the tri-state area."
  },
  {
    q: "Where can I buy or stream DJ DX's music?",
    a: "DJ DX originals, blends, and remixes are available on Spotify and Apple Music. Exclusive productions — including unreleased tracks and limited edition packs — can be purchased directly in the Music Store on this site."
  },
];

function FaqSection() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="section-inner">
        <div className="faq-header">
          <h2 className="sec-title">Frequently Asked <span>Questions</span></h2>
          <p className="faq-subtitle">Everything you need to know about DJ DX</p>
        </div>
        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? ' faq-item--open' : ''}`}
              role="listitem"
            >
              <button
                className="faq-question"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="faq-question-text">{item.q}</h3>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                hidden={open !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

// ── Scroll reveal hook ──────────────────────────────────
// Step 1: hide all .sr elements immediately (inline style, before paint)
// Step 2: double-rAF so the hidden state is actually painted
// Step 3: only then attach IntersectionObserver — cards already in view
//         will animate in rather than just appearing
function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const catalog = document.getElementById('catalog');
    const els = Array.from(document.querySelectorAll<HTMLElement>('.sr')).filter(
      (el) => !catalog || !catalog.contains(el)
    );
    let observer: IntersectionObserver | null = null;

    // --- Step 1: apply hidden state synchronously so browser paints them hidden ---
    els.forEach((el) => {
      const isCard = el.classList.contains('service-cell');
      const delay = el.dataset.srDelay ?? '0s';

      el.style.opacity = '0';
      el.style.visibility = 'visible';

      if (isCard) {
        el.style.transform = 'translateY(48px) rotate(-1.5deg) scale(0.95)';
        el.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}`;
      } else {
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.45s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.45s cubic-bezier(0.16,1,0.3,1) ${delay}`;
      }
    });

    // --- Step 2: double-rAF — wait two frames so hidden state is painted ---
    let rafId: number;
    const raf1 = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(() => {

        // --- Step 3: now attach observer ---
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                if (observer) observer.unobserve(el);
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
        );

        els.forEach((el) => observer?.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, []);
}


// ── Viral Shorts ─────────────────────────────────────────
const viralShorts = [
  { id: '7436826431193107743', views: '105.8K', likes: '4,036',  comments: '491',   label: 'Cola x Vivrant Thing x Robert Miles' },
  { id: '7447967116374084910', views: '142.4K', likes: '6,775',  comments: '616',   label: 'Viral in the UK — Buzz in London' },
  { id: '7475773163004071211', views: '293K', likes: '9,759',  comments: '482',   label: 'Cola x Robert Miles x Vivrant Thing' },
  { id: '7430884111562149150', views: '4.5M',  likes: '100.5K', comments: '5,146', label: 'Soul Shades x DJ DX' },
];

// ── Press carousel data ──────────────────────────────────
// ── Official Music Videos ────────────────────────────────
const videos = [
  { id: 'sqIUE0M54VE', title: 'DJ DX — Official Music Video' },
  { id: '_2scELJWqRk', title: 'DJ DX — Official Music Video' },
  { id: 'LyopmsT-fiM', title: 'DJ DX — Official Music Video' },
  { id: '00V8Q92N5Ig', title: 'DJ DX — Official Music Video' },
  { id: 'ut5ukF-SL60', title: 'DJ DX — Official Music Video' },
  { id: 'bdNVGEpmTuc', title: 'DJ DX — Official Music Video' },
];

const pressItems = [
  {
    href: 'https://www.ted.com/talks/dj_dx_finally_moving',
    label: 'DJ DX: Finally Moving — TED.com (2022)',
    wordmarkClass: 'press-wordmark--ted',
    wordmark: <>TED</>,
    quote: '"Finally Moving" — Live performance on TED',
  },
  {
    href: 'https://www.tedxyouthrva.com/videos-1/v/8g5km9nl25yreezarrgk255j88alld',
    label: 'DJ DX at TEDxYouth@RVA — Nov 2022',
    wordmarkClass: 'press-wordmark--tedx',
    wordmark: <>TED<em>x</em><span className="press-wordmark-sub">Youth@RVA</span></>,
    quote: 'Featured performer at TEDxYouth@RVA, Richmond, VA',
  },
  {
    href: 'https://disruptmagazine.com/dj-dx-leads-the-music-industry-into-the-metaverse/',
    label: 'DJ DX Leads the Music Industry into the Metaverse — Disrupt Magazine (2022)',
    wordmarkClass: 'press-wordmark--disrupt',
    wordmark: <>DISRUPT<span className="press-wordmark-sub">MAGAZINE</span></>,
    quote: '"DJ DX Leads the Music Industry into the Metaverse"',
  },
  {
    href: 'https://www.nj.com/hudson/2014/07/jersey_city_rapper_dj_dx_shares_stories_through_old_new_school_sounds.html',
    label: 'DJ DX featured in NJ.com — Jul 2014',
    wordmarkClass: 'press-wordmark--njcom',
    wordmark: <><strong>NJ</strong>.com</>,
    quote: '"DJ DX Shares Stories Through Old & New School Sounds"',
  },
  {
    href: 'https://rvamag.com/music/keeping-it-real-in-the-south-an-interview-with-dj-dx.html',
    label: 'DJ DX Interview — RVA Magazine',
    wordmarkClass: 'press-wordmark--rvamag',
    wordmark: <>RVA<em>mag</em></>,
    quote: '"Keeping It Real in the South — An Interview With DJ DX"',
  },
  {
    href: 'https://www.youtube.com/watch?v=V2uWYlWhv64',
    label: 'DJ DX featured on HearRVA',
    wordmarkClass: 'press-wordmark--hearrva',
    wordmark: <>HEAR<em>RVA</em></>,
    quote: 'Featured on HearRVA — Richmond\'s music channel',
  },
] as const;

// Vinyl groove colors per genre
const genreColors: Record<string, string> = {
  "R&B / Soul":        "#8B5CF6",
  "Hip-Hop":           "#EF4444",
  "Blends & Remixes":  "#C9A84C",
  "House / Jersey Club":"#06B6D4",
  "Afrobeats":         "#F97316",
  "Old School":        "#84CC16",
  "Reggaeton":         "#EC4899",
  "Private Events":    "#6366F1",
  "Live Violinist / DJ":"#14B8A6",
};

function GenreCarousel() {
  const [active, setActive] = useState(0);
  const total = services.length;
  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  const getPos = (i: number) => {
    const diff = ((i - active + total) % total);
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === total - 1) return 'left';
    return 'hidden';
  };

  const cur = services[active];

  return (
    <div className="genre-carousel-wrap">

      {/* Ambient glow behind stage — shifts per card */}
      <div
        className="genre-ambient"
        aria-hidden="true"
        style={{ opacity: 1 }}
      />

      {/* Counter + name strip */}
      <div className="genre-meta-strip">
        <span className="genre-meta-count">
          <span className="genre-meta-cur">{String(active + 1).padStart(2, '0')}</span>
          <span className="genre-meta-sep">/</span>
          <span className="genre-meta-tot">{String(total).padStart(2, '0')}</span>
        </span>
        <span className="genre-meta-name">{cur.name}</span>
        <span className="genre-meta-line" aria-hidden="true" />
      </div>

      {/* Stage */}
      <div className="genre-carousel-stage">
        {services.map((s, i) => {
          const pos = getPos(i);
          return (
            <div
              key={s.name}
              className={`genre-card genre-card--${pos}`}
              style={{ '--vinyl-color': genreColors[s.name] ?? '#C9A84C' } as React.CSSProperties}
              onClick={() => pos === 'left' ? prev() : pos === 'right' ? next() : undefined}
              aria-hidden={pos === 'hidden'}
            >
              {/* Vinyl disc — behind sleeve, peeks from right */}
              <div className="genre-vinyl-disc">
                <div className="genre-vinyl-label">
                </div>
              </div>

              {/* Album sleeve — sits in front, clips left portion of vinyl */}
              <div className="genre-sleeve-face">
                <div className="genre-sleeve-top">
                </div>
                <div className="genre-card-name">
                  {(() => {
                    const words = s.name.split(' ');
                    const last = words.pop();
                    return (
                      <>
                        {words.length > 0 && words.join(' ') + ' '}
                        <span style={{ whiteSpace: 'nowrap' }}>
                          {last}<span className="genre-sleeve-dot" style={{ background: genreColors[s.name] ?? '#C9A84C' }} />
                        </span>
                      </>
                    );
                  })()}
                </div>
                <div className="genre-card-desc">{s.desc}</div>
                {pos === 'center' && (
                  <a className="genre-sleeve-cta" href="#catalog">Explore →</a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow Controls */}
      <div className="genre-carousel-arrows">
        <button className="genre-arrow" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Dot indicators inline between arrows */}
        <div className="genre-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`genre-dot${i === active ? ' genre-dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${services[i].name}`}
            />
          ))}
        </div>

        <button className="genre-arrow" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

    </div>
  );
}

function App() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const [allTracks, setAllTracks] = useState<Track[]>(defaultCatalog);

  useEffect(() => {
    fetchCatalog().then(tracks => setAllTracks(tracks));
  }, []);

  const catalog = allTracks.filter(t => t.visible && t.storePage !== 'soulshades');

  const total = marqueePhotos.length;

  const prev = useCallback(() => setSlide(s => (s - 1 + total) % total), [total]);
  const next = useCallback(() => setSlide(s => (s + 1) % total), [total]);

  // Auto-advance every 6 seconds unless paused
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, 6000);
    return () => clearTimeout(id);
  }, [slide, paused, next]);

  // Video carousel
  const [videoSlide, setVideoSlide] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoTotal = videos.length;
  const videoPrev = useCallback(() => { setVideoSlide(s => (s - 1 + videoTotal) % videoTotal); setActiveVideo(null); }, [videoTotal]);
  const videoNext = useCallback(() => { setVideoSlide(s => (s + 1) % videoTotal); setActiveVideo(null); }, [videoTotal]);

  // Viral shorts carousel (mobile)
  const [viralSlide, setViralSlide] = useState(0);
  const viralTotal = viralShorts.length;
  const viralPrev = useCallback(() => setViralSlide(s => (s - 1 + viralTotal) % viralTotal), [viralTotal]);
  const viralNext = useCallback(() => setViralSlide(s => (s + 1) % viralTotal), [viralTotal]);

  // Press carousel
  const [pressSlide, setPressSlide] = useState(0);
  const pressTrackRef = useRef<HTMLDivElement>(null);
  const pressTotal = pressItems.length;
  const pressPrev = useCallback(() => setPressSlide(s => (s - 1 + pressTotal) % pressTotal), [pressTotal]);
  const pressNext = useCallback(() => setPressSlide(s => (s + 1) % pressTotal), [pressTotal]);

  useEffect(() => {
    const track = pressTrackRef.current;
    if (!track) return;
    const card = track.children[pressSlide] as HTMLElement | undefined;
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [pressSlide]);

  // Always start at top on load — disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);


  // Scroll reveal
  useScrollReveal();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const nav = document.querySelector('.nav') as HTMLElement | null;
      const offset = (nav?.offsetHeight ?? 70) + 16;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };


  return (
    <>

      <Helmet>
        <title>DJ DX — DJ, Producer &amp; Recording Artist | New York &amp; New Jersey</title>
        <meta name="description" content="DJ DX is a New York/New Jersey-based DJ, producer, and recording artist with 20+ years of experience. Featured on TED, TEDxYouth@RVA, Disrupt Magazine, and NJ.com. Book for weddings, corporate events, clubs, and private parties." />
        <link rel="canonical" href="https://djdxmusic.com/" />
        <meta property="og:url" content="https://djdxmusic.com/" />
      </Helmet>

      {/* ── NAV ── */}
      <SiteNav />

      {/* ── HERO — magazine cover slideshow backdrop ── */}
      <section className="hero" id="hero">

        {/* slideshow background */}
        <div
          className="hero-slide-bg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-hidden="true"
        >
          {marqueePhotos.map((photo, i) => (
            <div
              key={i}
              className={`hero-slide ${i === slide ? 'hero-slide--active' : ''}`}
            >
              <img
                src={photo.src}
                alt=""
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>

        {/* gradient overlays */}
        <div className="hero-overlay" />

        {/* magazine-style content */}
        <div className="hero-mag-inner">

          {/* top rule — issue line like a magazine masthead */}
          <div className="hero-issue-bar">
            <span className="hero-issue-line" />
            <span className="hero-issue-text">DJ · Producer · Recording Artist</span>
            <span className="hero-issue-line" />
          </div>

          {/* giant nameplate */}
          <h1 className="hero-title">DJ DX</h1>

          {/* cover line — magazine-style descriptor */}
          <p className="hero-coverline">Soulful Nostalgic Sound</p>

          {/* pull-quote style deck */}
          <p className="hero-deck">
            20 years of reading rooms, moving crowds, and creating moments
            that people don't forget.
          </p>

          {/* CTA row */}
          <div className="hero-actions">
            <a href="#booking" className="btn-gold" onClick={(e) => handleScrollTo(e, 'booking')}>Book for Your Event</a>
            <a href="#catalog" className="btn-ghost" onClick={(e) => handleScrollTo(e, 'catalog')}>Hear the Music</a>
          </div>

          {/* bottom stats bar — magazine infographic strip */}
          <div className="hero-stats-bar">
            {[
              { num: "20+", label: "Years" },
              { num: "500+", label: "Events" },
              { num: "100+", label: "Originals" },
            ].map((s, i) => (
              <div className="hero-stat" key={i}>
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* prev / next arrows */}
        <button
          className="slide-arrow slide-arrow--prev"
          onClick={prev}
          aria-label="Previous photo"
        >
          <ChevronLeft />
        </button>
        <button
          className="slide-arrow slide-arrow--next"
          onClick={next}
          aria-label="Next photo"
        >
          <ChevronRight />
        </button>

        {/* dot indicators + scroll cue row */}
        <div className="hero-bottom-bar">
          <div className="slide-dots" role="tablist" aria-label="Slideshow">
            {marqueePhotos.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === slide}
                aria-label={`Go to photo ${i + 1}`}
                className={`slide-dot ${i === slide ? 'slide-dot--active' : ''}`}
                onClick={() => { setSlide(i); setPaused(true); }}
              />
            ))}
          </div>

          <div className="hero-scroll-cue" aria-hidden="true">
            <span className="scroll-cue-line" />
            <span className="scroll-cue-text">Scroll</span>
          </div>
        </div>

      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr" data-sr-delay="0s">
                <div className="sec-overline">
                  <span className="sec-label">About</span>
                </div>
                <h2 className="sec-title">More Than<br />a <span>DJ</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  DJ DX brings over two decades of experience to the turntables,
                  the studio, and the stage. More than a selector — he is a complete artist: DJ,
                  producer, rapper, and engineer. His live sets blend R&amp;B, hip-hop, house, and
                  Afrobeats with the kind of crowd-reading instinct that only comes from 25+ years
                  of real gigs.
                </p>
                <p>
                  Known throughout Latin America as <em>"El Negro,"</em> his Hood Reggaeton series
                  drove millions of mixtape downloads and earned collaborations with genre heavyweights.
                  His underground tapes and original productions have built a cult following across
                  the UK, Ukraine, Belarus, and Russia.
                </p>
                <p>
                  TEDx stages. Corporate rooms. Private events. One rule: <strong>build the
                  experience for the room, not the playlist.</strong> The vibe changes — the
                  standard doesn't. First-time clients become lifelong regulars.
                </p>
              </div>
            </div>

            <div className="about-aside">
              {[
                { num: "25+", label: "Years in the Game", sub: "Consistent. Reliable. Professional.", delay: "0.05s" },
                { num: "500+", label: "Events Performed", sub: "From lounges to major venues.", delay: "0.15s" },
                { num: "100+", label: "Original Blends Released", sub: "Music you won't hear anywhere else.", delay: "0.25s" },
              ].map(s => (
                <div className="stat-row sr" data-sr-delay={s.delay} key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-meta">
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services">
        <div className="section-inner">
          <div className="sec-header center sr" data-sr-delay="0s">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" />
              <span className="sec-label">What I Do</span>
              <span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Genres &amp; <span>Services</span></h2>
          </div>

          <GenreCarousel />
        </div>
      </section>

      {/* ── CATALOG — Billboard-style ── */}
      <MusicStore catalog={catalog} title={<>Music <span>Store</span></>} subTitle="Music" />

      {/* ── OFFICIAL MUSIC VIDEOS ── */}
      <section className="videos" id="videos" aria-label="Official Music Videos by DJ DX">
        <div className="section-inner">
          <div className="videos-header sr" data-sr-delay="0s">
            <div>
              <div className="sec-overline">
                <span className="sec-label">Visuals</span>
              </div>
              <h2 className="sec-title">Official <span>Music Videos</span></h2>
            </div>
            <div className="videos-nav" aria-label="Video navigation">
              <button className="videos-nav-btn" onClick={videoPrev} aria-label="Previous video">
                <ChevronLeft />
              </button>
              <span className="videos-nav-counter">{videoSlide + 1} / {videoTotal}</span>
              <button className="videos-nav-btn" onClick={videoNext} aria-label="Next video">
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Main featured frame */}
          <div className="video-stage sr" data-sr-delay="0.1s">
            <div className="video-gold-frame">
              <div className="video-embed-wrap">
                {videos.map((v, i) => (
                  <div
                    key={v.id}
                    className={`video-slide ${i === videoSlide ? 'video-slide--active' : ''}`}
                    aria-hidden={i !== videoSlide}
                  >
                    {(activeVideo === v.id || i === videoSlide) && (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1&iv_load_policy=3&disablekb=0&color=white${activeVideo === v.id ? '&autoplay=1' : ''}`}
                        title={`DJ DX — ${v.title} ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    )}
                    {activeVideo !== v.id && (
                      <button
                        className="video-play-overlay"
                        onClick={() => setActiveVideo(v.id)}
                        aria-label={`Play video ${i + 1}`}
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                          alt={`DJ DX music video ${i + 1} thumbnail`}
                          className="video-thumb"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`; }}
                        />
                        <div className="video-play-btn" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {/* Corner accents */}
              <span className="vf-corner vf-corner--tl" aria-hidden="true" />
              <span className="vf-corner vf-corner--tr" aria-hidden="true" />
              <span className="vf-corner vf-corner--bl" aria-hidden="true" />
              <span className="vf-corner vf-corner--br" aria-hidden="true" />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="video-thumbstrip sr" data-sr-delay="0.18s">
            {videos.map((v, i) => (
              <button
                key={v.id}
                className={`video-thumb-btn ${i === videoSlide ? 'video-thumb-btn--active' : ''}`}
                onClick={() => { setVideoSlide(i); setActiveVideo(null); }}
                aria-label={`Go to video ${i + 1}`}
                aria-current={i === videoSlide}
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                  alt={`Video ${i + 1} thumbnail`}
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${v.id}/default.jpg`; }}
                />
                <div className="video-thumb-number">{String(i + 1).padStart(2, '0')}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIRAL MOMENTS ── */}
      <section className="viral" id="viral" aria-label="Viral Moments — DJ DX on TikTok">
        <div className="section-inner">
          <div className="viral-header sr" data-sr-delay="0s">
            <div className="sec-overline">
              <span className="sec-label">Viral Moments</span>
              <span className="sec-rule" />
            </div>
            <h2 className="sec-title">Trending Shorts</h2>
            <p className="viral-sub">Moments that moved the crowd — now moving the internet. Collaborations with Soul Shades.</p>
          </div>

          {/* Desktop: 4-column grid (unchanged) */}
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
            {/* Header row: counter + nav */}
            <div className="viral-carousel-nav">
              <button className="viral-nav-btn" onClick={viralPrev} aria-label="Previous short">
                <ChevronLeft />
              </button>
              <span className="viral-nav-counter">{viralSlide + 1} / {viralTotal}</span>
              <button className="viral-nav-btn" onClick={viralNext} aria-label="Next short">
                <ChevronRight />
              </button>
            </div>

            {/* Featured short */}
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

            {/* Stats + label for active short */}
            <div className="viral-stats">
              <span className="viral-stat" title="Views"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>{viralShorts[viralSlide].views}</span>
              <span className="viral-stat" title="Likes"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>{viralShorts[viralSlide].likes}</span>
              <span className="viral-stat" title="Comments"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>{viralShorts[viralSlide].comments}</span>
            </div>
            <div className="viral-label">{viralShorts[viralSlide].label}</div>

            {/* Thumbnail strip */}
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

      {/* ── PRESS ── */}
      <section className="press" id="press" aria-label="Press coverage of DJ DX">
        <div className="section-inner">
          <div className="press-header-row sr" data-sr-delay="0s">
            <div>
              <div className="sec-overline">
                <span className="sec-label">Press</span>
              </div>
              <h2 className="sec-title">As <span>Featured</span> In</h2>
            </div>
            <div className="press-carousel-nav" aria-label="Press carousel navigation">
              <button className="press-nav-btn" onClick={pressPrev} aria-label="Previous">
                <ChevronLeft />
              </button>
              <span className="press-nav-counter">{pressSlide + 1} / {pressTotal}</span>
              <button className="press-nav-btn" onClick={pressNext} aria-label="Next">
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="press-carousel-wrap">
            <div className="press-carousel-track" ref={pressTrackRef} role="list">
              {pressItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`press-card${i === pressSlide ? ' press-card--active' : ''}`}
                  role="listitem"
                  aria-label={item.label}
                  onClick={() => setPressSlide(i)}
                >
                  <div className="press-logo-wrap">
                    <span className={`press-wordmark ${item.wordmarkClass}`} aria-hidden="true">
                      {item.wordmark}
                    </span>
                  </div>
                  <p className="press-quote">{item.quote}</p>
                </a>
              ))}
            </div>
          </div>

          {/* dot indicators */}
          <div className="press-dots" role="tablist" aria-label="Press items">
            {pressItems.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === pressSlide}
                aria-label={`Go to press item ${i + 1}`}
                className={`press-dot${i === pressSlide ? ' press-dot--active' : ''}`}
                onClick={() => setPressSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="booking" id="booking">
        <div className="section-inner">
          <div className="booking-layout">
            <div className="booking-left sr" data-sr-delay="0s">
              <div className="sec-overline">
                <span className="sec-label">Bookings</span>
              </div>
              <h2 className="booking-big-title">
                Let's Make<br />Your Event<br /><span>Memorable</span>
              </h2>
              <p className="booking-blurb">
                Fill out the form and DJ DX will respond within 24–48 hours
                to discuss availability, packages, and pricing. All events
                welcome — from intimate to large-scale.
              </p>
            </div>

            <div className="booking-right sr" data-sr-delay="0.15s">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── FOOTER ── */}
      <SiteFooter />

    </>
  );
}

export default App;
