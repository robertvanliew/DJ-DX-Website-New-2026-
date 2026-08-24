import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Music2, Mic2, Shuffle, Club, Globe, Clock, Piano, Radio, Star } from 'lucide-react';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import './index.css';

import { fetchCatalog, defaultCatalog, type Track } from './catalog';
import BookingForm from './components/BookingForm';
import { useToast } from './components/Toast';
import ViralMomentsSection from './components/ViralMomentsSection';

// Catalog is managed via /admin — loaded from catalog.ts + localStorage

const services = [
  { name: "R&B / Soul", desc: "Classic and contemporary R&B blends that move the room and connect every generation.", icon: Music2 },
  { name: "Hip-Hop", desc: "Golden era to modern — curated for energy, flow, and crowd response.", icon: Mic2 },
  { name: "Blends & Remixes", desc: "Original edits crafted exclusively by DJ DX — music you won't hear anywhere else.", icon: Shuffle },
  { name: "House / Jersey Club", desc: "High-energy club edits and Jersey Club cuts that keep the floor locked in all night.", icon: Club },
  { name: "Afrobeats", desc: "Vibrant rhythms and global grooves woven seamlessly into every set.", icon: Globe },
  { name: "Old School", desc: "Nostalgic cuts that unlock the floor and bring the whole crowd together.", icon: Clock },
  { name: "Live Violinist / DJ", desc: "A one-of-a-kind fusion — live violin over DJ sets for a truly unforgettable atmosphere.", icon: Piano },
  { name: "Reggaeton", desc: "From classic dembow to modern Latin trap — crowd-pleasing energy from start to finish.", icon: Radio },
  { name: "Private Events", desc: "Weddings, corporate nights, private parties — handled with full professionalism.", icon: Star },
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
  { src: '/show-15.jpg', alt: 'DJ DX side shot' },
  { src: '/show-16.jpg', alt: 'DJ DX performing live in concert' },
  { src: '/show-18.jpg', alt: 'DJ DX performance 2023' },
  { src: '/show-19.jpg', alt: 'DJ DX side profile' },
  { src: '/show-20.jpg', alt: 'DJ DX closeup performance' },
];

import MusicStore from './components/MusicStore';

// ── FAQ Section ──────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "How do I book DJ DX for a wedding or private event in New York or New Jersey?",
    a: "Use the booking form on this page or email bookings@djdxmusic.com. DJ DX is a professional wedding DJ and private event DJ serving New York City, New Jersey, Connecticut, and the tri-state area. Response within 24 hours."
  },
  {
    q: "What music genres does DJ DX specialize in?",
    a: "DJ DX specializes in R&B, Hip-Hop, Afrobeats, House, Jersey Club, Reggaeton, and Old School. Every set is custom-tailored — from soulful R&B for weddings to high-energy Hip-Hop and Afrobeats for corporate events, nightclubs, and private parties in NYC and NJ."
  },
  {
    q: "Is DJ DX available for corporate events and brand activations in NYC?",
    a: "Yes. DJ DX is an experienced corporate event DJ in New York City and New Jersey, available for brand activations, product launches, office parties, galas, and conference entertainment. With 25+ years of professional experience and 500+ events, DJ DX delivers polished, on-brand performances."
  },
  {
    q: "What makes DJ DX different from other DJs in New York and New Jersey?",
    a: "DJ DX is a TED-featured artist (TEDxYouth@RVA 2022), an original music producer with 100+ releases on Spotify and Apple Music, and a DJ with over 25 years of experience. DJ DX has been covered by Disrupt Magazine, NJ.com, and RVA Magazine — bringing a level of credibility and artistry that goes beyond standard DJ services in the NYC/NJ market."
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
  {
    href: 'https://www.whosampled.com/DJ-DX/',
    label: 'DJ DX on WhoSampled',
    wordmarkClass: 'press-wordmark--whosampled',
    wordmark: <>who<strong>Sampled</strong></>,
    quote: '"Dark Paradise (Remix)" with Lana Del Rey, "Make It a Better Day" ft. 2Pac',
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

function SkillsGrid() {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <div key={s.name} className="service-cell sr" data-sr-delay={`${i * 0.05}s`}>
          <div style={{ color: genreColors[s.name] ?? 'var(--gold)', marginBottom: '16px' }}>
            {React.createElement(s.icon, { size: 36, strokeWidth: 1.5 })}
          </div>
          <h3 className="service-name">{s.name}</h3>
          <p className="service-desc">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const { showToast } = useToast();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const [allTracks, setAllTracks] = useState<Track[]>(defaultCatalog);
  const [liveVideoPlaying, setLiveVideoPlaying] = useState(false);

  useEffect(() => {
    // Check for Stripe success
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      showToast('Payment successful! Your download link is on the way.', 'success');
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    fetchCatalog().then(tracks => setAllTracks(tracks));
  }, [showToast]);

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
        <meta name="description" content="DJ DX is a New York/New Jersey-based DJ, producer, and recording artist with 25+ years of experience. Featured on TED, TEDxYouth@RVA, Disrupt Magazine, and NJ.com. Book for weddings, corporate events, clubs, and private parties." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://djdxmusic.com/" />
        <meta property="og:type" content="music.musician" />
        <meta property="og:url" content="https://djdxmusic.com/" />
        <meta property="og:title" content="DJ DX — DJ, Producer &amp; Recording Artist" />
        <meta property="og:description" content="Stream &amp; buy exclusive DJ DX originals, blends, and remixes. New York/New Jersey's soulful DJ &amp; producer — featured on TED, Disrupt Magazine, Spotify &amp; Apple Music." />
        <meta property="og:image" content="https://djdxmusic.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DJ DX — Official Music &amp; Booking" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="DJ DX" />
        <meta property="music:musician" content="https://open.spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:creator" content="@djdxmusic" />
        <meta name="twitter:title" content="DJ DX — DJ, Producer &amp; Recording Artist" />
        <meta name="twitter:description" content="Stream &amp; buy exclusive DJ DX originals, blends, and remixes. New York/New Jersey's soulful DJ &amp; producer — featured on TED, Spotify &amp; Apple Music." />
        <meta name="twitter:image" content="https://djdxmusic.com/og-image.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@id": "https://djdxmusic.com/#djdx",
              "event": [
                {
                  "@type": "MusicEvent",
                  "name": "TEDxYouth@RVA — PAUSE",
                  "description": "DJ DX performed as a featured artist at TEDxYouth@RVA 2022, a youth-led TEDx event themed 'PAUSE' held in Richmond, Virginia.",
                  "startDate": "2022-11-12T09:00:00-05:00",
                  "endDate": "2022-11-12T17:00:00-05:00",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                  "image": "https://djdxmusic.com/show-2.jpg",
                  "location": {
                    "@type": "Place",
                    "name": "Richmond, Virginia",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Richmond",
                      "addressRegion": "VA",
                      "addressCountry": "US"
                    }
                  },
                  "organizer": {
                    "@type": "Organization",
                    "name": "TEDxYouth@RVA",
                    "url": "https://www.ted.com/tedx/events/52176"
                  },
                  "offers": {
                    "@type": "Offer",
                    "url": "https://www.ted.com/tedx/events/52176",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/SoldOut",
                    "validFrom": "2022-09-01T00:00:00-05:00"
                  },
                  "url": "https://www.ted.com/tedx/events/52176",
                  "performer": { "@id": "https://djdxmusic.com/#djdx" }
                }
              ],
              "subjectOf": [
                {
                  "@type": "Article",
                  "headline": "DJ DX Leads the Music Industry into the Metaverse",
                  "url": "https://disruptmagazine.com/dj-dx-leads-the-music-industry-into-the-metaverse/",
                  "publisher": { "@type": "Organization", "name": "Disrupt Magazine" },
                  "datePublished": "2022-02"
                },
                {
                  "@type": "Article",
                  "headline": "Jersey City Rapper DJ DX Shares Stories Through Old, New School Sounds",
                  "url": "https://www.nj.com/hudson/2014/07/jersey_city_rapper_dj_dx_shares_stories_through_old_new_school_sounds.html",
                  "publisher": { "@type": "Organization", "name": "NJ.com" },
                  "datePublished": "2014-07"
                },
                {
                  "@type": "VideoObject",
                  "name": "DJ DX: Finally Moving",
                  "description": "DJ DX performs 'Finally Moving' — a live TED Talk performance by New York/New Jersey DJ, producer, and recording artist.",
                  "thumbnailUrl": "https://i.ytimg.com/vi/aG1KR7wPTBk/maxresdefault.jpg",
                  "uploadDate": "2022-12-09T00:00:00+00:00",
                  "embedUrl": "https://www.youtube.com/embed/aG1KR7wPTBk",
                  "url": "https://www.ted.com/talks/dj_dx_finally_moving",
                  "publisher": { "@type": "Organization", "name": "TED" }
                },
                {
                  "@type": "Article",
                  "headline": "Keeping It Real in the South — An Interview With DJ DX",
                  "url": "https://rvamag.com/music/keeping-it-real-in-the-south-an-interview-with-dj-dx.html",
                  "publisher": { "@type": "Organization", "name": "RVA Magazine" }
                },
                {
                  "@type": "VideoObject",
                  "name": "DJ DX — HearRVA Feature",
                  "description": "DJ DX featured on HearRVA — Richmond's premier music discovery channel. New York/New Jersey DJ, producer, and recording artist.",
                  "thumbnailUrl": "https://i.ytimg.com/vi/V2uWYlWhv64/maxresdefault.jpg",
                  "uploadDate": "2022-01-01T00:00:00+00:00",
                  "embedUrl": "https://www.youtube.com/embed/V2uWYlWhv64",
                  "url": "https://www.youtube.com/watch?v=V2uWYlWhv64",
                  "publisher": { "@type": "Organization", "name": "HearRVA" }
                },
                {
                  "@type": "CreativeWork",
                  "headline": "Nimino 'I Only Smoke When I Drink' x 'Englishman In New York' — Soul Shades",
                  "description": "Soul Shades' remix of Nimino's 'I Only Smoke When I Drink' and Sting's 'Englishman in New York' was featured by UK record label Ninja Tune on their official Instagram, credited to @soulshadesmusic.",
                  "url": "https://www.instagram.com/p/DCHDQr1oI3y/",
                  "datePublished": "2024-11-08",
                  "publisher": { "@type": "Organization", "name": "Ninja Tune" }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I book DJ DX for a wedding or private event in New York or New Jersey?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use the booking form on this page or email bookings@djdxmusic.com. DJ DX is a professional wedding DJ and private event DJ serving New York City, New Jersey, Connecticut, and the tri-state area. Response within 24 hours."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What music genres does DJ DX specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX specializes in R&B, Hip-Hop, Afrobeats, House, Jersey Club, Reggaeton, and Old School. Every set is custom-tailored — from soulful R&B for weddings to high-energy Hip-Hop and Afrobeats for corporate events, nightclubs, and private parties in NYC and NJ."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is DJ DX available for corporate events and brand activations in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX is an experienced corporate event DJ in New York City and New Jersey, available for brand activations, product launches, office parties, galas, and conference entertainment. With 25+ years of professional experience and 500+ events, DJ DX delivers polished, on-brand performances."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes DJ DX different from other DJs in New York and New Jersey?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX is a TED-featured artist (TEDxYouth@RVA 2022), an original music producer with 100+ releases on Spotify and Apple Music, and a DJ with over 25 years of experience. DJ DX has been covered by Disrupt Magazine, NJ.com, and RVA Magazine — bringing a level of credibility and artistry that goes beyond standard DJ services in the NYC/NJ market."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX perform at a nightclub or venue in New Jersey or New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. DJ DX is an active club and venue DJ in the New York and New Jersey area, performing regularly at nightclubs, lounges, and live music venues. Contact us to check availability for your date."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX offer a live DJ + live musician performance package?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — DJ DX offers a unique live DJ + live violinist performance package. This fusion of live violin over DJ sets creates an unforgettable atmosphere perfect for upscale weddings, corporate galas, and VIP events in the tri-state area."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I buy or stream DJ DX's music?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX originals, blends, and remixes are available on Spotify and Apple Music. Exclusive productions — including unreleased tracks and limited edition packs — can be purchased directly in the Music Store on this site."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              "name": "DJ DX — Finally Moving at TEDxYouth@RVA",
              "startDate": "2022-11-12T09:00:00-05:00",
              "endDate": "2022-11-12T17:00:00-05:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "image": "https://djdxmusic.com/show-2.jpg",
              "location": {
                "@type": "Place",
                "name": "TEDxYouth@RVA",
                "address": {"@type": "PostalAddress", "addressLocality": "Richmond", "addressRegion": "VA", "addressCountry": "US"}
              },
              "organizer": {
                "@type": "Organization",
                "name": "TEDxYouth@RVA",
                "url": "https://www.ted.com/tedx/events/52176"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.ted.com/tedx/events/52176",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/SoldOut",
                "validFrom": "2022-09-01T00:00:00-05:00"
              },
              "performer": {"@type": "MusicGroup", "name": "DJ DX", "url": "https://djdxmusic.com/"},
              "url": "https://www.ted.com/talks/dj_dx_finally_moving",
              "description": "DJ DX performed 'Finally Moving' as a featured artist at TEDxYouth@RVA 2022 in Richmond, Virginia.",
              "recordedIn": {"@type": "VideoObject", "name": "DJ DX: Finally Moving", "url": "https://www.ted.com/talks/dj_dx_finally_moving", "embedUrl": "https://www.youtube.com/embed/aG1KR7wPTBk", "thumbnailUrl": "https://i.ytimg.com/vi/aG1KR7wPTBk/maxresdefault.jpg", "uploadDate": "2022-12-09T00:00:00+00:00", "description": "DJ DX performs 'Finally Moving' at TEDxYouth@RVA 2022 — live performance by New York/New Jersey DJ, producer, and recording artist."}
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "DJ DX — Official Music Videos",
              "url": "https://djdxmusic.com/#videos",
              "description": "Official music videos and live performance clips by DJ DX — featured on the homepage video carousel.",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "item": {"@type": "VideoObject", "name": "DJ DX — Official Music Video 1", "description": "Official music video by DJ DX, New York/New Jersey DJ, producer, and recording artist.", "thumbnailUrl": "https://i.ytimg.com/vi/sqIUE0M54VE/maxresdefault.jpg", "contentUrl": "https://www.youtube.com/watch?v=sqIUE0M54VE", "embedUrl": "https://www.youtube.com/embed/sqIUE0M54VE", "uploadDate": "2024-01-01T00:00:00+00:00", "url": "https://djdxmusic.com/#videos"}},
                {"@type": "ListItem", "position": 2, "item": {"@type": "VideoObject", "name": "DJ DX — Official Music Video 2", "description": "Official music video by DJ DX, New York/New Jersey DJ, producer, and recording artist.", "thumbnailUrl": "https://i.ytimg.com/vi/_2scELJWqRk/maxresdefault.jpg", "contentUrl": "https://www.youtube.com/watch?v=_2scELJWqRk", "embedUrl": "https://www.youtube.com/embed/_2scELJWqRk", "uploadDate": "2024-01-01T00:00:00+00:00", "url": "https://djdxmusic.com/#videos"}},
                {"@type": "ListItem", "position": 3, "item": {"@type": "VideoObject", "name": "DJ DX — Official Music Video 3", "description": "Official music video by DJ DX, New York/New Jersey DJ, producer, and recording artist.", "thumbnailUrl": "https://i.ytimg.com/vi/LyopmsT-fiM/maxresdefault.jpg", "contentUrl": "https://www.youtube.com/watch?v=LyopmsT-fiM", "embedUrl": "https://www.youtube.com/embed/LyopmsT-fiM", "uploadDate": "2024-01-01T00:00:00+00:00", "url": "https://djdxmusic.com/#videos"}},
                {"@type": "ListItem", "position": 4, "item": {"@type": "VideoObject", "name": "DJ DX — Official Music Video 4", "description": "Official music video by DJ DX, New York/New Jersey DJ, producer, and recording artist.", "thumbnailUrl": "https://i.ytimg.com/vi/00V8Q92N5Ig/maxresdefault.jpg", "contentUrl": "https://www.youtube.com/watch?v=00V8Q92N5Ig", "embedUrl": "https://www.youtube.com/embed/00V8Q92N5Ig", "uploadDate": "2024-01-01T00:00:00+00:00", "url": "https://djdxmusic.com/#videos"}},
                {"@type": "ListItem", "position": 5, "item": {"@type": "VideoObject", "name": "DJ DX — Official Music Video 5", "description": "Official music video by DJ DX, New York/New Jersey DJ, producer, and recording artist.", "thumbnailUrl": "https://i.ytimg.com/vi/ut5ukF-SL60/maxresdefault.jpg", "contentUrl": "https://www.youtube.com/watch?v=ut5ukF-SL60", "embedUrl": "https://www.youtube.com/embed/ut5ukF-SL60", "uploadDate": "2024-01-01T00:00:00+00:00", "url": "https://djdxmusic.com/#videos"}},
                {"@type": "ListItem", "position": 6, "item": {"@type": "VideoObject", "name": "DJ DX — Official Music Video 6", "description": "Official music video by DJ DX, New York/New Jersey DJ, producer, and recording artist.", "thumbnailUrl": "https://i.ytimg.com/vi/bdNVGEpmTuc/maxresdefault.jpg", "contentUrl": "https://www.youtube.com/watch?v=bdNVGEpmTuc", "embedUrl": "https://www.youtube.com/embed/bdNVGEpmTuc", "uploadDate": "2024-01-01T00:00:00+00:00", "url": "https://djdxmusic.com/#videos"}}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "DJ DX — Music Store: Blends, Remixes & Originals",
              "url": "https://djdxmusic.com/#catalog",
              "description": "Exclusive blends, remixes, and original productions by DJ DX — available to stream and purchase at djdxmusic.com.",
              "itemListElement": [
                {"@type": "ListItem", "position": 1,  "item": {"@type": "MusicRecording", "name": "Yukon × That's The Way Love Goes", "byArtist": {"@type": "MusicGroup", "name": "Janet Jackson × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 2,  "item": {"@type": "MusicRecording", "name": "Song For You", "byArtist": {"@type": "MusicGroup", "name": "Snoh Aalegra × JAY Z"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 3,  "item": {"@type": "MusicRecording", "name": "No One Talking", "byArtist": {"@type": "MusicGroup", "name": "Kanye West × Maxwell"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 4,  "item": {"@type": "MusicRecording", "name": "Man In The Mirror", "byArtist": {"@type": "MusicGroup", "name": "Michael Jackson × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 5,  "item": {"@type": "MusicRecording", "name": "Don't Touch Me", "byArtist": {"@type": "MusicGroup", "name": "Busta Rhymes × Kane"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 6,  "item": {"@type": "MusicRecording", "name": "Ballin'", "byArtist": {"@type": "MusicGroup", "name": "Roddy Ricch × DJ DX"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 7,  "item": {"@type": "MusicRecording", "name": "Don't Nobody Else", "byArtist": {"@type": "MusicGroup", "name": "Sade × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 8,  "item": {"@type": "MusicRecording", "name": "Nasty", "byArtist": {"@type": "MusicGroup", "name": "Tinashe × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 9,  "item": {"@type": "MusicRecording", "name": "The Weekend (Moment For Life)", "byArtist": {"@type": "MusicGroup", "name": "SZA × Nicki Minaj"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 10, "item": {"@type": "MusicRecording", "name": "Suit & Tie", "byArtist": {"@type": "MusicGroup", "name": "Justin Timberlake × JAY Z × DJ DX"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 11, "item": {"@type": "MusicRecording", "name": "Niggas In Paris Jersey Club", "byArtist": {"@type": "MusicGroup", "name": "JAY Z × Kanye West"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 12, "item": {"@type": "MusicRecording", "name": "Pills & Potions", "byArtist": {"@type": "MusicGroup", "name": "Nicki Minaj × DJ DX"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 13, "item": {"@type": "MusicRecording", "name": "Deadly Combo", "byArtist": {"@type": "MusicGroup", "name": "Notorious B.I.G × BIG L"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 14, "item": {"@type": "MusicRecording", "name": "Exchange Location", "byArtist": {"@type": "MusicGroup", "name": "Khalid × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 15, "item": {"@type": "MusicRecording", "name": "Crocodile Tearz", "byArtist": {"@type": "MusicGroup", "name": "J. Cole × Lil Scrappy × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 16, "item": {"@type": "MusicRecording", "name": "Lovin On Me", "byArtist": {"@type": "MusicGroup", "name": "Jack Harlow × Joe Budden"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 17, "item": {"@type": "MusicRecording", "name": "Bood Up", "byArtist": {"@type": "MusicGroup", "name": "Ella Mai × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 18, "item": {"@type": "MusicRecording", "name": "Not Today", "byArtist": {"@type": "MusicGroup", "name": "Mary J. Blige × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 19, "item": {"@type": "MusicRecording", "name": "The Worst", "byArtist": {"@type": "MusicGroup", "name": "Jhene Aiko × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 20, "item": {"@type": "MusicRecording", "name": "Whip Ya Head", "byArtist": {"@type": "MusicGroup", "name": "50 Cent × Young Buck"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 21, "item": {"@type": "MusicRecording", "name": "21 Questions For You", "byArtist": {"@type": "MusicGroup", "name": "50 Cent × Snoh Aalegra"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 22, "item": {"@type": "MusicRecording", "name": "Why You Do That", "byArtist": {"@type": "MusicGroup", "name": "6lack × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 23, "item": {"@type": "MusicRecording", "name": "Aaliyah × Drake Remix", "byArtist": {"@type": "MusicGroup", "name": "Aaliyah × Drake × DJ DX"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 24, "item": {"@type": "MusicRecording", "name": "Shake Sum", "byArtist": {"@type": "MusicGroup", "name": "DaBaby × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 25, "item": {"@type": "MusicRecording", "name": "Checkmate", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 26, "item": {"@type": "MusicRecording", "name": "Hustle All Day", "byArtist": {"@type": "MusicGroup", "name": "DJ DX × DJ Madden"}, "genre": "Remix", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 27, "item": {"@type": "MusicRecording", "name": "I Am The One (Intro)", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}, "genre": "Original", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 28, "item": {"@type": "MusicRecording", "name": "Koze Kuse", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 29, "item": {"@type": "MusicRecording", "name": "World Famous (Live On Air)", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}, "genre": "Live", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 30, "item": {"@type": "MusicRecording", "name": "Dios Mio", "byArtist": {"@type": "MusicGroup", "name": "EL Vacan G × Wesley × DJ DX"}, "genre": "Remix", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 31, "item": {"@type": "MusicRecording", "name": "The Way It Is", "byArtist": {"@type": "MusicGroup", "name": "Justin Bieber × Gunna × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 32, "item": {"@type": "MusicRecording", "name": "Let's Ride", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 33, "item": {"@type": "MusicRecording", "name": "Red Ruby", "byArtist": {"@type": "MusicGroup", "name": "Nicki Minaj × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 34, "item": {"@type": "MusicRecording", "name": "La Culi Suelta", "byArtist": {"@type": "MusicGroup", "name": "Og Black × Guayoman × DJ DX"}, "genre": "Remix", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 35, "item": {"@type": "MusicRecording", "name": "Don't Jealous Me", "byArtist": {"@type": "MusicGroup", "name": "Tekno × Raze × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 36, "item": {"@type": "MusicRecording", "name": "Thong Fart", "byArtist": {"@type": "MusicGroup", "name": "Sisqo × Ice Spice × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 37, "item": {"@type": "MusicRecording", "name": "Because of You", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 38, "item": {"@type": "MusicRecording", "name": "Good Energy", "byArtist": {"@type": "MusicGroup", "name": "Yung Wylin × PM Dawn × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 39, "item": {"@type": "MusicRecording", "name": "All Gold Everything", "byArtist": {"@type": "MusicGroup", "name": "Trinidad James × DJ DX"}, "genre": "Blend", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 40, "item": {"@type": "MusicRecording", "name": "Don't Fuck With DX", "byArtist": {"@type": "MusicGroup", "name": "Busta Rhymes × DJ DX"}, "genre": "Remix", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 41, "item": {"@type": "MusicRecording", "name": "Lady Melody", "byArtist": {"@type": "MusicGroup", "name": "D'Angelo × Nas × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 42, "item": {"@type": "MusicRecording", "name": "Yo Se Lo Que (Te Gusta)", "byArtist": {"@type": "MusicGroup", "name": "DJ DX × DJ Madden"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 43, "item": {"@type": "MusicRecording", "name": "Defasio", "byArtist": {"@type": "MusicGroup", "name": "Daddy Yankee × Don Omar × DJ DX"}, "genre": "Blend", "datePublished": "2023"}},
                {"@type": "ListItem", "position": 44, "item": {"@type": "MusicRecording", "name": "6 Foot 7 Foot", "byArtist": {"@type": "MusicGroup", "name": "JAY Z × DJ DX"}, "genre": "Blend", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 45, "item": {"@type": "MusicRecording", "name": "Fuck MDK", "byArtist": {"@type": "MusicGroup", "name": "Joe Budden × DJ DX"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 46, "item": {"@type": "MusicRecording", "name": "I Run New York", "byArtist": {"@type": "MusicGroup", "name": "50 Cent × Diddy × JAY Z × DJ DX"}, "genre": "Remix", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 47, "item": {"@type": "MusicRecording", "name": "Otis (Massacre Blend)", "byArtist": {"@type": "MusicGroup", "name": "JAY Z × Kanye West × DJ DX × DJ Madden"}, "genre": "Blend", "datePublished": "2022"}},
                {"@type": "ListItem", "position": 48, "item": {"@type": "MusicRecording", "name": "Work Out", "byArtist": {"@type": "MusicGroup", "name": "J. Cole × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 49, "item": {"@type": "MusicRecording", "name": "Peaches", "byArtist": {"@type": "MusicGroup", "name": "Justin Bieber × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 50, "item": {"@type": "MusicRecording", "name": "Nobody", "byArtist": {"@type": "MusicGroup", "name": "Nas × Ms. Lauryn Hill × DJ DX"}, "genre": "Blend", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 51, "item": {"@type": "MusicRecording", "name": "Freaks (Remix)", "byArtist": {"@type": "MusicGroup", "name": "Nicki Minaj × Patra × DJ DX"}, "genre": "Remix", "datePublished": "2024"}},
                {"@type": "ListItem", "position": 52, "item": {"@type": "MusicRecording", "name": "Loyal", "byArtist": {"@type": "MusicGroup", "name": "Albee Al × DJ DX"}, "genre": "Blend", "datePublished": "2024"}}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "DJ DX — Notable Remixes & Samples",
              "description": "Independently documented remix and sample credits for DJ DX, verified via WhoSampled.",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "MusicRecording",
                    "name": "Dark Paradise (Remix)",
                    "datePublished": "2015",
                    "byArtist": [
                      {"@id": "https://djdxmusic.com/#djdx"},
                      {"@type": "MusicGroup", "name": "Lana Del Rey"}
                    ],
                    "isBasedOn": {
                      "@type": "MusicRecording",
                      "name": "Dark Paradise",
                      "datePublished": "2012",
                      "byArtist": {"@type": "MusicGroup", "name": "Lana Del Rey"}
                    },
                    "sameAs": "https://www.whosampled.com/DJ-DX/Dark-Paradise-(Remix)/"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "MusicRecording",
                    "name": "Make It a Better Day",
                    "datePublished": "2015",
                    "byArtist": [
                      {"@id": "https://djdxmusic.com/#djdx"},
                      {"@type": "Person", "name": "2Pac"}
                    ],
                    "isBasedOn": [
                      {"@type": "MusicRecording", "name": "Californication", "datePublished": "1999", "byArtist": {"@type": "MusicGroup", "name": "Red Hot Chili Peppers"}},
                      {"@type": "MusicRecording", "name": "Ode to Billie Joe", "datePublished": "1967", "byArtist": {"@type": "Person", "name": "Lou Donaldson"}}
                    ],
                    "sameAs": "https://www.whosampled.com/DJ-DX/Make-It-a-Better-Day/"
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "DJ DX — Main Navigation",
              "description": "Primary site navigation links for djdxmusic.com",
              "itemListElement": [
                {"@type": "SiteNavigationElement", "position": 1, "name": "Music",       "url": "https://djdxmusic.com/music"},
                {"@type": "SiteNavigationElement", "position": 2, "name": "Soul Shades", "url": "https://djdxmusic.com/soul-shades"},
                {"@type": "SiteNavigationElement", "position": 3, "name": "News",        "url": "https://djdxmusic.com/news"},
                {"@type": "SiteNavigationElement", "position": 4, "name": "EPK",         "url": "https://djdxmusic.com/epk"},
                {"@type": "SiteNavigationElement", "position": 5, "name": "Pricing",     "url": "https://djdxmusic.com/pricing"},
                {"@type": "SiteNavigationElement", "position": 6, "name": "FAQ",         "url": "https://djdxmusic.com/faq"},
                {"@type": "SiteNavigationElement", "position": 7, "name": "Contact",     "url": "https://djdxmusic.com/contact"}
              ]
            }
          ]`}
        </script>
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
            25 years of reading rooms, moving crowds, and creating moments
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
                  DJ DX (Robert Van Liew) was born and raised in Jersey City, NJ, and has been
                  DJing since 1998. He built his name blending Hip-Hop and R&amp;B mixtapes on
                  the streets of Jersey City and online, then Reggaeton — that's where the name
                  "El Negro" came from. In 2011 he started writing and recording his own music,
                  and has released over 100 original tracks since.
                </p>
                <p>
                  In 2024 he formed Soul Shades with violinist Julie Schatz. Their remix of
                  Nimino's "I Only Smoke When I Drink" x Sting's "Englishman in New York" was
                  posted by UK label Ninja Tune and has over 10 million views on TikTok and
                  Instagram. DJ DX performed at TEDxYouth@RVA in 2022 — the talk is on{' '}
                  <a href="https://www.ted.com/talks/dj_dx_finally_moving" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>TED.com</a>
                  {' '}— and has been covered by Disrupt Magazine and NJ.com.
                </p>
                <p>
                  Live sets pull from R&amp;B, hip-hop, house, Afrobeats, Amapiano, Jersey Club,
                  and old school. The genres shift by room. The one rule is simple: <strong>build
                  the set for the people in front of you.</strong> Most of his clients book him
                  again the next year.
                </p>
              </div>
            </div>

            <div className="about-aside">
              {[
                { num: "25+", label: "Years DJing", sub: "Active since 1998.", delay: "0.05s" },
                { num: "500+", label: "Events Performed", sub: "Weddings, corporate, clubs, private.", delay: "0.15s" },
                { num: "100+", label: "Original Releases", sub: "Blends, remixes, and originals.", delay: "0.25s" },
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

          <SkillsGrid />
        </div>
      </section>

      {/* ── CATALOG — Billboard-style ── */}
      <MusicStore catalog={catalog} title={<>Music <span>Store</span></>} subTitle="Music" />

      {/* ── LIVE IN ACTION — real footage of DJ DX djing, not a music video ── */}
      <section className="videos" id="live" aria-label="Watch DJ DX DJing live">
        <div className="section-inner">
          <div className="videos-header sr" data-sr-delay="0s">
            <div>
              <div className="sec-overline">
                <span className="sec-label">See It Live</span>
              </div>
              <h2 className="sec-title">Watch DJ DX <span>In Action</span></h2>
            </div>
          </div>

          <div className="video-stage sr" data-sr-delay="0.1s">
            <div className="video-gold-frame">
              <div className="video-embed-wrap">
                {liveVideoPlaying ? (
                  <video
                    src="/videos/dj-dx-hourglass-sessions-highlight.mp4"
                    poster="/dj-dx-hourglass-sessions-highlight-poster.jpg"
                    autoPlay
                    controls
                    playsInline
                    aria-label="DJ DX djing live"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                  />
                ) : (
                  <button
                    className="video-play-overlay"
                    onClick={() => setLiveVideoPlaying(true)}
                    aria-label="Play video: DJ DX djing live"
                  >
                    <img src="/dj-dx-hourglass-sessions-highlight-poster.jpg" alt="DJ DX djing live" className="video-thumb" />
                    <div className="video-play-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
              <span className="vf-corner vf-corner--tl" aria-hidden="true" />
              <span className="vf-corner vf-corner--tr" aria-hidden="true" />
              <span className="vf-corner vf-corner--bl" aria-hidden="true" />
              <span className="vf-corner vf-corner--br" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

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
      <ViralMomentsSection />

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

      {/* ── REVIEWS ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)' }} aria-label="Client testimonials for DJ DX">
        <div className="section-inner" style={{ maxWidth: '1000px' }}>
          <div className="sec-header center sr" style={{ textAlign: 'center' }}>
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-label">Client Feedback</span>
            </div>
            <h2 className="sec-title">What <span>Clients</span> Say</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}>
            {[
              { quote: "The music was just perfect and the vibe was great. I love the uniqueness of keyboard and violin together with DJing — I don't think there are a lot of DJs who come with this built into the duo.", name: 'Sue Krebs', context: 'NautaDutilh New York P.C.' },
              { quote: "Your performance set the tone for our event, and the addition of the violin amplified our guests' experience and made the evening memorable.", name: 'Anna Naraine', context: 'NautaDutilh New York P.C.' },
            ].map(r => (
              <div key={r.name} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '10px',
                padding: '24px',
              }}>
                <div style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '10px' }} aria-hidden="true">★★★★★</div>
                <p style={{ fontSize: '0.92rem', color: 'rgba(242,242,242,0.75)', lineHeight: 1.7, marginBottom: '14px' }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                  {r.name}{r.context && <span style={{ fontWeight: 400, color: 'rgba(242,242,242,0.5)' }}> — {r.context}</span>}
                </div>
              </div>
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
