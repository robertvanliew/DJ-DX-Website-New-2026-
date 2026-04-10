import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/BookingForm';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

/* ── Icons ─────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

/* ── Data ───────────────────────────────────────────── */
const heroStats = [
  { num: '25+',  label: 'Years Active',  sub: '1998' },
  { num: '500+', label: 'Live Events',   sub: 'Worldwide' },
  { num: '100+', label: 'Originals',     sub: 'Released' },
  { num: '4.5M', label: 'Viral Views',   sub: 'TikTok Views' },
];

const tickerItems = [
  'DJ · Producer · Recording Artist',
  '25+ Years Behind the Decks',
  '500+ Events Performed',
  '100+ Original Productions',
  '4.5M TikTok Views',
  'TED · TEDx · Disrupt Magazine · NJ.com',
  'New Jersey / Tri-State',
];

const pressItems = [
  { href: 'https://www.ted.com/talks/dj_dx_finally_moving',                                                                                        name: 'TED',              quote: '"Finally Moving" — Live performance on the TED stage.' },
  { href: 'https://www.tedxyouthrva.com/videos-1/v/8g5km9nl25yreezarrgk255j88alld',                                                                name: 'TEDx',             quote: 'Featured performer at TEDxYouth@RVA, Richmond VA — 2022' },
  { href: 'https://disruptmagazine.com/dj-dx-leads-the-music-industry-into-the-metaverse/',                                                         name: 'Disrupt Magazine', quote: '"DJ DX Leads the Music Industry into the Metaverse"' },
  { href: 'https://www.nj.com/hudson/2014/07/jersey_city_rapper_dj_dx_shares_stories_through_old_new_school_sounds.html',                          name: 'NJ.com',           quote: '"DJ DX Shares Stories Through Old & New School Sounds"' },
  { href: 'https://rvamag.com/music/keeping-it-real-in-the-south-an-interview-with-dj-dx.html',                                                    name: 'RVA Magazine',     quote: '"Keeping It Real in the South — An Interview With DJ DX"' },
  { href: 'https://www.youtube.com/watch?v=V2uWYlWhv64',                                                                                           name: 'HearRVA',          quote: "Featured on HearRVA — Richmond's premier music discovery channel" },
];

const riderSections = [
  {
    title: 'Audio & Sound',
    color: 'rgba(201,168,76,0.55)',
    rows: [
      { item: 'PA System',   spec: 'Professional full-range PA with subwoofers capable of filling the venue. Complete coverage required.' },
      { item: 'DJ Monitor',  spec: 'One floor wedge or monitor at the DJ booth for clear mix reference.' },
      { item: 'Mixer Input', spec: 'Line-level stereo input from Rane One controller. RCA or XLR accepted.' },
    ],
  },
  {
    title: 'DJ Setup',
    color: 'rgba(201,168,76,0.38)',
    rows: [
      { item: 'Controller', spec: 'Rane One DJ controller — provided by DJ DX. Requires stable, level surface and 2 power outlets.' },
      { item: 'DJ Booth',   spec: 'Minimum 6-foot sturdy table or professional DJ booth. DJ faces the crowd.' },
      { item: 'Power',      spec: 'Two dedicated 15-amp surge-protected circuits. Surge protection provided by DJ DX.' },
    ],
  },
  {
    title: 'Stage & Comms',
    color: 'rgba(201,168,76,0.22)',
    rows: [
      { item: 'Microphones', spec: 'Two wireless handheld mics + one mic stand for MC and announcements.' },
      { item: 'Lighting',    spec: 'Stage or wash lighting toward DJ booth. Avoid direct spotlight into eyes.' },
      { item: 'Load-In',     spec: 'Minimum 60 minutes before doors. Parking or loading dock access required.' },
    ],
  },
  {
    title: 'Logistics',
    color: 'rgba(201,168,76,0.12)',
    rows: [
      { item: 'Outdoor',     spec: 'All outdoor setups require a waterproof canopy covering equipment against sun, rain, and wind.' },
      { item: 'Hospitality', spec: 'Still water (6+ bottles) provided by venue. Healthy catering options appreciated.' },
      { item: 'Live Add-On', spec: 'For live violin/keys hybrid shows — additional DI boxes, outlets, and monitor mixes per musician.' },
    ],
  },
];

const socials = [
  { name: 'Instagram', handle: '@djdx',           stat: 'Follow',  cta: 'View Profile',  href: 'https://instagram.com/djdx',              Icon: InstagramIcon, gradient: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fd1d1d' },
  { name: 'TikTok',    handle: '@soulshadesmusic', stat: '4.5M Views', cta: 'Watch Now', href: 'https://www.tiktok.com/@soulshadesmusic', Icon: TikTokIcon,    gradient: 'linear-gradient(135deg,#010101,#69C9D0)',        color: '#69C9D0' },
  { name: 'YouTube',   handle: 'DJ DX Music',      stat: 'Subscribe', cta: 'Watch Now',  href: 'https://www.youtube.com/c/djdxmusic',     Icon: YouTubeIcon,   gradient: 'linear-gradient(135deg,#c4302b,#ff0000)',        color: '#ff0000' },
  { name: 'Facebook',  handle: 'djdxmusic',         stat: 'Follow',  cta: 'View Page',   href: 'https://facebook.com/djdxmusic',          Icon: FacebookIcon,  gradient: 'linear-gradient(135deg,#1a56db,#1877F2)',        color: '#1877F2' },
];

/* ── Chapter header ─────────────────────────────────── */
function ChapterHead({ num, label, title, accent, note }: { num: string; label: string; title: string; accent: string; note?: string }) {
  return (
    <div className="epkr-chapter-head">
      <span className="epkr-chapter-num" aria-hidden="true">{num}</span>
      <div className="epkr-chapter-head-text">
        <div className="epk-col-label">{label}</div>
        <h2 className="epkr-chapter-title">{title} <span>{accent}</span></h2>
        {note && <p className="epkr-chapter-note">{note}</p>}
      </div>
    </div>
  );
}

/* ── 3D tilt helpers ────────────────────────────────── */
export function onTilt(e: React.MouseEvent<HTMLAnchorElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
  const y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
  e.currentTarget.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg) scale3d(1.025,1.025,1.025)`;
  e.currentTarget.style.transition = 'transform 0.1s ease';
}
export function offTilt(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.transform = '';
  e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
}


/* ── Component ──────────────────────────────────────── */
export default function EPK() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="epk-page">
      <Helmet>
        <title>DJ DX — Electronic Press Kit (EPK) | DJ, Producer & Recording Artist</title>
        <meta name="description" content="Official press kit for DJ DX — New York/New Jersey DJ, producer, and recording artist. 25+ years, 500+ events, TED-featured. Download bio, photos, rider, and press materials." />
        <link rel="canonical" href="https://djdxmusic.com/epk" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://djdxmusic.com/epk" />
        <meta property="og:title" content="DJ DX — Electronic Press Kit" />
        <meta property="og:description" content="Official EPK for DJ DX — TED-featured DJ, producer, and recording artist. 25+ years, 500+ events, 100+ originals. Available for bookings in NY/NJ and worldwide." />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DJ DX — Electronic Press Kit" />
        <meta name="twitter:description" content="Official EPK for DJ DX — TED-featured DJ, producer, and recording artist. 25+ years, 500+ events." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "name": "DJ DX — Electronic Press Kit",
              "url": "https://djdxmusic.com/epk",
              "description": "Official press kit for DJ DX — New York/New Jersey DJ, producer, and recording artist with 25+ years of experience and 500+ events performed.",
              "mainEntity": {
                "@type": ["Person", "MusicGroup"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "description": "DJ DX is a New York/New Jersey-based DJ, producer, and recording artist with over 25 years behind the decks. TED-featured artist with 500+ events performed and 100+ original productions on Spotify and Apple Music.",
                "jobTitle": "DJ, Producer, and Recording Artist",
                "knowsAbout": ["DJing", "Music Production", "R&B", "Hip-Hop", "Afrobeats", "House Music", "Jersey Club", "Live Performance"],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New York",
                  "addressRegion": "NY",
                  "addressCountry": "US"
                },
                "sameAs": [
                  "https://djdxmusic.com/",
                  "https://instagram.com/djdx",
                  "https://www.youtube.com/c/djdxmusic",
                  "https://facebook.com/djdxmusic",
                  "https://twitter.com/djdxmusic",
                  "https://open.spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe",
                  "https://www.tiktok.com/@djdxmusic",
                  "https://www.wikidata.org/wiki/Q110672065",
                  "https://musicbrainz.org/artist/e18da2c6-dbad-4c6b-9bfd-a77e0ef77d5f",
                  "https://www.ted.com/talks/dj_dx_finally_moving"
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Electronic Press Kit", "item": "https://djdxmusic.com/epk"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      {/* ── NAV ── */}
      <SiteNav />

      {/* ── HERO ── */}
      <header className="epkr-hero">
        <img src="/epk-hero.jpg" alt="" className="epkr-hero-bg" aria-hidden="true" />
        <div className="epkr-hero-gradient" />
        <div className="epkr-hero-scanlines" aria-hidden="true" />

        <div className="epkr-hero-content">
          <div className="epkr-hero-stamp">
            <span className="epkr-stamp-pip" />
            <span>Electronic Press Kit</span>
            <span className="epkr-stamp-pip" />
            <span>DJ DX</span>
          </div>

          <div className="epkr-hero-nameblock">
            <h1 className="epkr-hero-name-row">
              <span className="epkr-hero-name-white">DJ</span>
              <span className="epkr-hero-name-gold">DX</span>
            </h1>
            <div className="epkr-hero-roles">
              <span>DJ</span>
              <span className="epkr-role-sep">·</span>
              <span>Producer</span>
              <span className="epkr-role-sep">·</span>
              <span>Recording Artist</span>
            </div>
          </div>

          <div className="epkr-hero-stat-strip">
            {heroStats.map((s, i) => (
              <div className="epkr-hero-stat" key={i}>
                <span className="epkr-hero-stat-num">{s.num}</span>
                <span className="epkr-hero-stat-label">{s.label}</span>
                <span className="epkr-hero-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── TICKER ── */}
      <div className="epkr-ticker" aria-hidden="true">
        <div className="epkr-ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="epkr-ticker-item">
              {item} <span className="epkr-ticker-sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      <main className="epkr-main">

        {/* ── 01 · ARTIST ── */}
        <section className="epkr-chapter">
          <ChapterHead num="01" label="Artist Bio" title="The" accent="Artist" />

          <div className="epkr-bio-layout">
            <div className="epkr-bio-text">
              <p className="epkr-bio-para">
                <span className="epkr-dropcap-d">D</span><span className="epkr-dropcap-rest">J DX</span> is a New Jersey / Tri-State DJ, producer, and recording artist with over
                25 years behind the decks. Trained in the tradition of classic DJing — reading the room,
                serving the crowd, and commanding every moment with precision — DJ DX has built a
                reputation as one of the most versatile and reliable performers in the region.
              </p>
              <p>
                Specializing in soulful, nostalgia-driven sets that seamlessly weave R&amp;B, hip-hop,
                house, Afrobeats, and Jersey Club, DJ DX is celebrated for original blends and exclusive
                edits that can't be heard anywhere else. With over 100 original productions released
                independently, his music has earned millions of streams and viral moments exceeding 4.5M
                TikTok views on a single collaboration.
              </p>
              <p>
                From TED and TEDx stages to concerts, corporate events, club residencies, and private
                celebrations — the standard never drops. Press coverage includes TED.com, Disrupt
                Magazine, NJ.com, and RVA Magazine. First-time clients become long-term partners.
              </p>
            </div>

            <aside className="epkr-bio-aside">
              <div className="epk-col-label">At a Glance</div>
              <div className="epk-stat-list">
                {[
                  { num: '25+',  label: 'Years Active',         desc: 'Professional DJ since 1998' },
                  { num: '500+', label: 'Events Performed',     desc: 'Corporate · Clubs · Private · TED' },
                  { num: '100+', label: 'Original Productions', desc: 'Blends, remixes & originals' },
                  { num: '4.5M', label: 'TikTok Views',          desc: 'Viral TikTok — Soul Shades collab' },
                ].map(s => (
                  <div className="epk-stat-block" key={s.label}>
                    <div className="epk-stat-num">{s.num}</div>
                    <div className="epk-stat-meta">
                      <div className="epk-stat-label">{s.label}</div>
                      <div className="epk-stat-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="epk-col-label epk-col-label--mt">Based In</div>
              <div className="epk-info-val">New Jersey / Tri-State</div>

              <div className="epk-col-label epk-col-label--mt">Available For</div>
              <div className="epk-tags-row">
                {['Corporate Events','Club Nights','Weddings','Private Parties',"Sweet 16's",'Concerts','Tours','TED / TEDx','Festivals'].map(t => (
                  <span className="epk-tag" key={t}>{t}</span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ── 02 · PRESS ── */}
        <section className="epkr-chapter">
          <ChapterHead num="02" label="Press Coverage" title="As" accent="Featured In" />

          <div className="epkr-press-bento">
            {/* Hero TED card */}
            <a href={pressItems[0].href} target="_blank" rel="noopener noreferrer" className="epkr-press-tile epkr-press-tile--hero">
              <div className="epkr-press-hero-eyebrow">Featured</div>
              <div className="epkr-press-tile-outlet">{pressItems[0].name}</div>
              <div className="epkr-press-quote-mark">"</div>
              <div className="epkr-press-tile-quote">{pressItems[0].quote}</div>
              <div className="epkr-press-ted-photo">
                <img src="/show-2.jpg" alt="DJ DX performing at TED" />
              </div>
              <div className="epkr-press-tile-footer">
                <span className="epkr-press-read">Watch on TED.com</span>
                <ExternalIcon />
              </div>
            </a>

            {/* Secondary cards */}
            <div className="epkr-press-secondary">
              {pressItems.slice(1).map((p) => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="epkr-press-tile epkr-press-tile--sm">
                  <div className="epkr-press-tile-outlet">{p.name}</div>
                  <div className="epkr-press-tile-quote">{p.quote}</div>
                  <div className="epkr-press-tile-footer">
                    <span className="epkr-press-read">Read</span>
                    <ExternalIcon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 · SOCIALS ── */}
        <section className="epkr-chapter">
          <ChapterHead num="03" label="Follow & Connect" title="Social" accent="Presence" />

          <div className="epkr-socials-grid">
            {socials.map(({ name, handle, stat, cta, href, Icon, gradient, color }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="epkr-social-card" style={{ '--social-color': color } as React.CSSProperties}>
                <div className="epkr-social-card-bg" style={{ background: gradient }} />
                <div className="epkr-social-card-content">
                  <div className="epkr-social-top">
                    <div className="epkr-social-icon">
                      <Icon />
                    </div>
                    <span className="epkr-social-arrow-icon"><ArrowRight /></span>
                  </div>
                  <div className="epkr-social-body">
                    <div className="epkr-social-platform">{name}</div>
                    <div className="epkr-social-handle">{handle}</div>
                    {stat && <div className="epkr-social-stat">{stat}</div>}
                  </div>
                  <div className="epkr-social-cta">{cta} →</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── 04 · RIDER ── */}
        <section className="epkr-chapter" id="epk-rider">
          <ChapterHead
            num="04"
            label="Technical Rider"
            title="Stage"
            accent="Requirements"
            note="Updated 2025 · Applies to all performances unless otherwise agreed in writing"
          />

          <div className="epkr-rider-grid">
            {riderSections.map((sec, si) => (
              <div className="epkr-rider-cat" key={si} style={{ '--cat-color': sec.color } as React.CSSProperties}>
                <div className="epkr-rider-cat-title">{sec.title}</div>
                {sec.rows.map((r, ri) => (
                  <div className="epkr-rider-row" key={ri}>
                    <div className="epkr-rider-item">{r.item}</div>
                    <div className="epkr-rider-spec">{r.spec}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ── Live Add-On: Julie Schatz Violin & Keyboard ── */}
          <div className="epkr-addon-rider">
            <div className="epkr-addon-badge">Live Add-On</div>
            <h3 className="epkr-addon-title">Julie Schatz — Violin &amp; Keyboard / Ableton</h3>
            <p className="epkr-addon-sub">Additional requirements when booking DJ DX with live violin and keyboard/Ableton production.</p>

            <div className="epkr-addon-grid">

              {/* Violin + Keyboard / Ableton Rider */}
              <div className="epkr-addon-col">
                <div className="epkr-addon-col-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Violin &amp; Keyboard / Ableton Setup
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Audio Outputs</div>
                  <div className="epkr-addon-spec">2× 1/4″ TRS Line Outputs (Stereo L/R) from Apollo Twin — provided by Julie Schatz.</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Staging</div>
                  <div className="epkr-addon-spec">1× Small table or equipment riser (min. 24″ × 24″) at performer's station to hold laptop, Apollo Twin, wireless receiver, and effects pedal.</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Power</div>
                  <div className="epkr-addon-spec">1× Power strip with min. 4 outlets at performer's station (Laptop, Apollo Twin, BLX4 Receiver, Zoom Pedal).</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Monitoring</div>
                  <div className="epkr-addon-spec">1× Floor wedge monitor. Preferred: "Main Mix" send so performer hears a blended balance of violin and Ableton tracks.</div>
                </div>
              </div>

              {/* Violin-Only Rider */}
              <div className="epkr-addon-col">
                <div className="epkr-addon-col-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Violin Only Setup
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Audio Output</div>
                  <div className="epkr-addon-spec">1× 1/4″ Mono Instrument Output from Zoom effects pedal.</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">DI Requirements</div>
                  <div className="epkr-addon-spec">Venue provides 1× Mono DI Box and XLR cable to front-of-house console.</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Staging</div>
                  <div className="epkr-addon-spec">1× Small table or riser (min. 24″ × 24″) at performer's station to hold wireless receiver and effects pedal.</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Power</div>
                  <div className="epkr-addon-spec">1× Power strip with min. 2 outlets (BLX4 wireless receiver and Zoom pedal).</div>
                </div>
                <div className="epkr-addon-row">
                  <div className="epkr-addon-item">Monitoring</div>
                  <div className="epkr-addon-spec">1× Floor wedge monitor.</div>
                </div>
              </div>

            </div>

            {/* Engineer Notes */}
            <div className="epkr-addon-note">
              <div className="epkr-addon-note-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Note to Engineer
              </div>
              <div className="epkr-addon-note-rows">
                <div className="epkr-addon-note-row">
                  <span className="epkr-addon-note-key">Processing</span>
                  <span>Apply standard EQ and compression at the console to smooth electric violin transients. High-pass filter at ~180 Hz is appreciated.</span>
                </div>
                <div className="epkr-addon-note-row">
                  <span className="epkr-addon-note-key">Effects</span>
                  <span>Performer uses a Zoom pedal for core tone. Please add a tasteful Hall Reverb to the house mix to suit room acoustics.</span>
                </div>
                <div className="epkr-addon-note-row">
                  <span className="epkr-addon-note-key">Monitoring</span>
                  <span>Provide a "clear" monitor mix. If house reverb makes intonation difficult to hear, keep monitor mix dry (no reverb) while keeping the house mix wet.</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ── 05 · ASSETS ── */}
        <section className="epkr-chapter">
          <ChapterHead num="05" label="Downloads" title="Assets &amp;" accent="Media" />

          <div className="epkr-assets-grid">

            <div className="epkr-asset-card">
              <div className="epkr-asset-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <div className="epkr-asset-title">Music Catalog</div>
              <div className="epkr-asset-desc">Stream blends, originals, and remixes on djdxmusic.com. All tracks available for preview.</div>
              <a href="https://djdxmusic.com" target="_blank" rel="noopener noreferrer" className="epk-asset-link">
                Stream Now <ArrowRight />
              </a>
            </div>

            <div className="epkr-asset-card">
              <div className="epkr-asset-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <div className="epkr-asset-title">Press Photos</div>
              <div className="epkr-asset-desc">High-res performance photos from TED, TEDx, and live events — available for press and media use.</div>
              <a href="mailto:djdxbusiness@gmail.com?subject=Press%20Photo%20Request" className="epk-asset-link">
                Request Photos <ArrowRight />
              </a>
            </div>

            {/* FEATURED — Request Full EPK */}
            <div className="epkr-asset-card epkr-asset-card--gold" style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="epkr-asset-glow" aria-hidden="true" />
              <div className="epkr-asset-icon epkr-asset-icon--gold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="epkr-asset-title">Full EPK — Request</div>
              <div className="epkr-asset-desc">Request the complete press kit with bio, rider, high-res photos, and full contact package. Sent directly to your inbox.</div>
              <a
                href="mailto:djdxbusiness@gmail.com?subject=EPK%20Request&body=Hi%20DJ%20DX%2C%0A%0AI%20would%20like%20to%20request%20your%20full%20Electronic%20Press%20Kit.%0A%0AName%3A%0AOrganization%3A%0AEvent%20Type%3A%0A"
                className="epkr-download-btn"
              >
                <ArrowRight />
                Request Full EPK
              </a>
            </div>

          </div>
        </section>

        {/* ── CTA / BOOKING ── */}
        <section className="epkr-cta">
          <div className="epkr-cta-orb" aria-hidden="true" />
          <div className="epkr-cta-inner">
            <div className="epk-col-label" style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>Ready to Book?</div>
            <h2 className="epkr-cta-title">
              Let's Make Something<br /><span>Unforgettable</span>
            </h2>
            <p className="epkr-cta-sub">
              Fill out the form below and DJ DX will get back to you within 24–48 hours.
            </p>
            <BookingForm />
          </div>
        </section>

      </main>

      <SiteFooter />

    </div>
  );
}
