import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/BookingForm';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import MusicStore from '../components/MusicStore';
import { fetchCatalog, type Track } from '../catalog';

/* ── Icons ──────────────────────────────────────────────── */
const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const AppleMusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.048-2.31-2.18-3.043a6.3 6.3 0 0 0-1.862-.77c-.522-.112-1.075-.158-1.595-.172-.744-.02-1.09-.024-3.342-.024H9.227c-2.252 0-2.598.004-3.342.024-.52.014-1.073.06-1.595.172A6.3 6.3 0 0 0 2.43.888C1.298 1.621.567 2.621.25 3.934a9.23 9.23 0 0 0-.24 2.19C-.003 6.868-.006 7.21-.006 9.456v5.088c0 2.246.003 2.588.006 3.332.032 1.066.24 2.078.748 2.99.772 1.394 2.04 2.338 3.66 2.69.566.122 1.14.17 1.71.18.756.016 1.118.02 3.108.02h5.548c1.99 0 2.352-.004 3.108-.02.57-.01 1.144-.058 1.71-.18 1.62-.352 2.888-1.296 3.66-2.69.508-.912.716-1.924.748-2.99.003-.744.006-1.086.006-3.332V9.456c0-2.246-.003-2.588-.006-3.332zm-6.498 7.082l-3.486 1.998a1.5 1.5 0 0 1-2.25-1.3V9.456a1.5 1.5 0 0 1 2.25-1.3l3.486 1.998a1.5 1.5 0 0 1 0 2.6v.452z"/>
  </svg>
);
const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const SoundcloudIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M1.175 12.225c-.017 0-.034.002-.05.003a.752.752 0 0 0-.637.613l-.002.01-.484 3.65.484 3.597a.75.75 0 0 0 .689.657h.001c.02.001.04.002.06.002.406 0 .738-.314.77-.718l.55-3.538-.55-3.693a.773.773 0 0 0-.83-.583zm2.305-1.47c-.02 0-.04.001-.06.003a.84.84 0 0 0-.772.842v.004l-.43 4.896.43 4.54a.84.84 0 0 0 .833.793c.463 0 .84-.377.84-.84l.487-4.493-.487-4.95a.84.84 0 0 0-.84-.795zm2.57-.76c-.025 0-.05.002-.073.005a.909.909 0 0 0-.834.907v.005l-.376 5.49.376 4.95a.909.909 0 0 0 .907.867c.503 0 .91-.407.91-.91l.425-4.907-.425-5.502a.91.91 0 0 0-.91-.905zm2.644-.205c-.03 0-.059.003-.088.007a.98.98 0 0 0-.893.977v.005l-.322 5.678.322 5.065a.98.98 0 0 0 .98.938c.543 0 .982-.44.982-.982l.364-5.02-.364-5.69a.98.98 0 0 0-.98-.978zM12 9.065c-.034 0-.068.003-.1.009a1.05 1.05 0 0 0-.951 1.046v.006l-.269 5.88.27 5.202a1.05 1.05 0 0 0 1.05 1.006c.583 0 1.055-.472 1.055-1.055l.304-5.153-.304-5.896A1.05 1.05 0 0 0 12 9.065zm2.716-.93a1.12 1.12 0 0 0-1.12 1.12v.007l-.215 6.762.216 5.304a1.12 1.12 0 0 0 2.24 0l.243-5.304-.243-6.77a1.12 1.12 0 0 0-1.12-1.119zm2.716.27a1.19 1.19 0 0 0-1.19 1.19v.007l-.162 6.484.163 5.395a1.19 1.19 0 0 0 2.38 0l.183-5.395-.183-6.49a1.19 1.19 0 0 0-1.19-1.19zm2.715 1.285a1.26 1.26 0 0 0-1.26 1.26v.007l-.109 5.2.11 5.452a1.26 1.26 0 0 0 2.52 0l.123-5.453-.123-5.207a1.26 1.26 0 0 0-1.26-1.26zm2.716 2.2A1.33 1.33 0 0 0 21.53 13.2v.008l-.055 3.815.056 5.384a1.33 1.33 0 0 0 2.659 0l.063-5.384-.063-3.822a1.33 1.33 0 0 0-1.33-1.3z"/>
  </svg>
);
const BandcampIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/>
  </svg>
);

/* ── Data ───────────────────────────────────────────────── */
const socials = [
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/soul-shades/1783698611',             Icon: AppleMusicIcon, color: '#fc3c44', gradient: 'linear-gradient(135deg,#fc3c44,#ff6b6b)' },
  { name: 'Spotify',     href: 'https://open.spotify.com/artist/2GES5fSFNcx25lv9RFcQjP?autoplay=true', Icon: SpotifyIcon,    color: '#1DB954', gradient: 'linear-gradient(135deg,#191414,#1DB954)' },
  { name: 'YouTube',     href: 'https://www.youtube.com/@soulshadesmusic',                             Icon: YouTubeIcon,    color: '#FF0000', gradient: 'linear-gradient(135deg,#c4302b,#ff0000)' },
  { name: 'Instagram',   href: 'https://www.instagram.com/soulshadesmusic/',                           Icon: InstagramIcon,  color: '#fd1d1d', gradient: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)' },
  { name: 'SoundCloud',  href: 'https://soundcloud.com/soulshadesmusic',                               Icon: SoundcloudIcon, color: '#ff5500', gradient: 'linear-gradient(135deg,#ff5500,#ff8800)' },
  { name: 'Bandcamp',    href: 'https://soulshadesmusic.bandcamp.com/',                                Icon: BandcampIcon,   color: '#1da0c3', gradient: 'linear-gradient(135deg,#1da0c3,#4ec5e0)' },
];



/* ── Component ──────────────────────────────────────────── */
/* ── Video Slider ───────────────────────────────────────── */
const videos = [
  { id: 'bji-ymxikUg', title: 'Soul Shades — I Only Smoke When I Drink x Englishman in New York' },
  { id: 'uzwvCUrr__g', title: 'Soul Shades — Featured Performance' },
];

function VideoSlider() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    if (idx === active || transitioning) return;
    setTransitioning(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive(idx);
      setTransitioning(false);
    }, 280);
  };

  const prev = () => goTo((active - 1 + videos.length) % videos.length);
  const next = () => goTo((active + 1) % videos.length);

  return (
    <section className="ss-section">
      <div className="ss-section-label">04 — Watch</div>
      <h2 className="ss-section-title">Featured <span>Videos</span></h2>

      <div className="ss-vslider">
        {/* Main frame */}
        <div className="ss-vslider-stage">
          <div className="ss-video-glow" aria-hidden="true" />
          <div className={`ss-vslider-frame ${transitioning ? 'ss-vslider-frame--out' : 'ss-vslider-frame--in'}`}>
            <div className="ss-video-corner ss-video-corner--tl" aria-hidden="true" />
            <div className="ss-video-corner ss-video-corner--tr" aria-hidden="true" />
            <div className="ss-video-corner ss-video-corner--bl" aria-hidden="true" />
            <div className="ss-video-corner ss-video-corner--br" aria-hidden="true" />
            <div className="ss-video-ratio">
              <iframe
                key={videos[active].id}
                src={`https://www.youtube.com/embed/${videos[active].id}`}
                title={videos[active].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div className="ss-vslider-controls">
          <button className="ss-vslider-arrow" onClick={prev} aria-label="Previous video">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="ss-vslider-dots">
            {videos.map((v, i) => (
              <button
                key={v.id}
                className={`ss-vslider-dot ${i === active ? 'ss-vslider-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>

          <button className="ss-vslider-arrow" onClick={next} aria-label="Next video">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default function SoulShades() {
  const [allTracks, setAllTracks] = useState<Track[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCatalog().then(tracks => setAllTracks(tracks));
  }, []);

  const soulShadesCatalog = allTracks.filter(t => t.visible && t.storePage === 'soulshades');

  return (
    <div className="ss-page">
      <Helmet>
        <title>Soul Shades — New York Duo | DJ DX & Julie Schatz</title>
        <meta name="description" content="Soul Shades is a New York-based music duo formed by DJ DX and vocalist Julie Schatz. Deep house, jazz, Afro house, R&B and more. Stream on Spotify, Apple Music, YouTube. 4.5M TikTok views." />
        <link rel="canonical" href="https://djdxmusic.com/soul-shades" />
        <meta property="og:type" content="music.musician" />
        <meta property="og:url" content="https://djdxmusic.com/soul-shades" />
        <meta property="og:title" content="Soul Shades — New York Duo | DJ DX & Julie Schatz" />
        <meta property="og:description" content="Soul Shades is a New York-based duo blending deep house, jazz, Afro house, R&B, and hip-hop. 4.5M TikTok views. Stream & buy exclusive music." />
        <meta property="og:image" content="https://djdxmusic.com/ss-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soul Shades — New York Duo | DJ DX & Julie Schatz" />
        <meta name="twitter:description" content="Soul Shades is a New York-based duo blending deep house, jazz, Afro house, R&B, and hip-hop. 4.5M TikTok views." />
        <meta name="twitter:image" content="https://djdxmusic.com/ss-hero.jpg" />
      </Helmet>

      {/* ── NAV ── */}
      <SiteNav />

      {/* ── HERO ── */}
      <header className="ss-hero">
        <img src="/ss-hero.jpg" alt="Soul Shades — Julie Schatz &amp; DJ DX" className="ss-hero-bg" aria-hidden="true" />
        <div className="ss-hero-overlay" aria-hidden="true" />
        <div className="ss-hero-orb ss-hero-orb--1" aria-hidden="true" />
        <div className="ss-hero-orb ss-hero-orb--2" aria-hidden="true" />
        <div className="ss-hero-orb ss-hero-orb--3" aria-hidden="true" />

        <div className="ss-hero-content">
          <div className="ss-hero-stamp">
            <span className="ss-stamp-pip" />
            <span>New York-Based Duo</span>
            <span className="ss-stamp-pip" />
            <span>Est. 2024</span>
          </div>

          <h1 className="ss-hero-name">
            <span className="ss-hero-soul">Soul</span>
            <span className="ss-hero-shades">Shades</span>
          </h1>

          <p className="ss-hero-motto">"Blending genres, creating moods."</p>

          <div className="ss-hero-cta-row">
            <a href="https://soulshadesmusic.com" target="_blank" rel="noopener noreferrer" className="ss-hero-btn">
              Website <ExternalIcon />
            </a>
            <a href="https://open.spotify.com/artist/2GES5fSFNcx25lv9RFcQjP" target="_blank" rel="noopener noreferrer" className="ss-hero-btn ss-hero-btn--ghost">
              <SpotifyIcon /> Stream Now
            </a>
          </div>

          <div className="ss-hero-tags">
            {['Deep House', 'Jazz', 'Afro House', 'R&B', 'Hip-Hop', 'Reggaeton', 'Electronic'].map(t => (
              <span className="ss-genre-tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="ss-hero-stats">
            <div className="ss-stat">
              <span className="ss-stat-num">4.5M</span>
              <span className="ss-stat-label">TikTok Views</span>
            </div>
            <div className="ss-stat-div" />
            <div className="ss-stat">
              <span className="ss-stat-num">3</span>
              <span className="ss-stat-label">Singles Released</span>
            </div>
            <div className="ss-stat-div" />
            <div className="ss-stat">
              <span className="ss-stat-num">2</span>
              <span className="ss-stat-label">Members</span>
            </div>
          </div>
        </div>
      </header>


      <main className="ss-main">

        {/* ── BIO ── */}
        <section className="ss-section">
          <div className="ss-section-label">The Story</div>
          <h2 className="ss-section-title">About <span>Soul Shades</span></h2>

          <div className="ss-bio-layout">
            <div className="ss-bio-text">
              <p className="ss-bio-lead">
                New York-based duo Soul Shades brings a lush, soulful edge to modern club culture.
              </p>
              <p>
                Formed by vocalist and multi-instrumentalist <strong>Julie Schatz</strong> alongside turntablist,
                producer, and rapper <strong>DJ DX</strong>, the pair builds tracks that naturally blur the lines
                between deep house, jazz, Afro house, and R&amp;B.
              </p>
              <p>
                Driven by their motto, <em>"blending genres, creating moods,"</em> Soul Shades bridges the gap
                between headphone listening and the late-night dance floor. From viral mashups like their take on
                <em> "I Only Smoke When I Drink x Englishman in New York"</em> to original cuts like
                <em> "Beyond Your Mind"</em> and <em>"Buzz in London,"</em> their sound is sophisticated,
                nostalgic, and cinematic.
              </p>
            </div>

            <aside className="ss-bio-aside">
              <div className="ss-aside-block">
                <div className="ss-aside-label">Members</div>
                <div className="ss-member">
                  <div className="ss-member-dot" />
                  <div>
                    <div className="ss-member-name">Julie Schatz</div>
                    <div className="ss-member-role">Vocalist · Multi-Instrumentalist · Producer</div>
                  </div>
                </div>
                <div className="ss-member">
                  <div className="ss-member-dot" />
                  <div>
                    <div className="ss-member-name">DJ DX</div>
                    <div className="ss-member-role">Disc Jockey · Turntablist · Producer · Rapper</div>
                  </div>
                </div>
              </div>

              <div className="ss-aside-block">
                <div className="ss-aside-label">Sound</div>
                <div className="ss-tags-row">
                  {['Deep House', 'Jazz', 'Afro House', 'R&B', 'Hip-Hop', 'Reggaeton', 'Mashups', 'Cinematic'].map(t => (
                    <span className="ss-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="ss-aside-block">
                <div className="ss-aside-label">Based In</div>
                <div className="ss-aside-val">New York, NY</div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── EXCLUSIVE MUSIC STORE ── */}
        <section className="ss-section">
          <MusicStore catalog={soulShadesCatalog} title={<>Soul Shades <span>Store</span></>} subTitle="Exclusive Music" shareType="soul-shades" />
        </section>

        {/* ── SOCIALS ── */}
        <section className="ss-section">
          <div className="ss-section-label">02 — Follow & Stream</div>
          <h2 className="ss-section-title">Find Soul Shades <span>Everywhere</span></h2>

          <div className="ss-socials-grid">
            {socials.map(({ name, href, Icon, color, gradient }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="ss-social-card"
                style={{ '--ss-color': color } as React.CSSProperties}
              >
                <div className="ss-social-bg" style={{ background: gradient }} />
                <div className="ss-social-content">
                  <div className="ss-social-icon"><Icon /></div>
                  <div className="ss-social-name">{name}</div>
                  <div className="ss-social-cta">Listen →</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── VIDEO SLIDER ── */}
        <VideoSlider />

        {/* ── BOOKING ── */}
        <section id="ss-booking" className="ss-section ss-section--booking">
          <div className="ss-section-label">05 — Get In Touch</div>
          <h2 className="ss-section-title">Book Soul <span>Shades</span></h2>
          <p className="ss-booking-sub">
            Available for clubs, events, private bookings, and collaborations. Fill out the form and we'll get back to you within 24–48 hours.
          </p>
          <BookingForm />
        </section>

      </main>

      {/* ── FOOTER ── */}
      <SiteFooter email="soulshadesofficial@gmail.com" bookLabel="Book Soul Shades →" bookHref="#ss-booking" />

    </div>
  );
}
