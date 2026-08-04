import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import RelatedServices from '../../components/RelatedServices';
import BookingForm from '../../components/BookingForm';

// Real photos from the Saks Fifth Avenue private estate event, Water Mill NY.
const SAKS_GALLERY_PHOTOS = [
  { src: '/saks-dj-dx-water-mill-hamptons.jpg', alt: 'DJ DX performing at a Saks Fifth Avenue private estate event in Water Mill, New York', caption: 'Golden Hour' },
  { src: '/saks-dj-dx-mixing-water-mill-hamptons.jpg', alt: 'DJ DX mixing during a Saks Fifth Avenue private estate reception in Water Mill, New York', caption: 'Dialed In' },
  { src: '/saks-dj-booth-tent-water-mill-nyc.jpg', alt: 'DJ booth under a sailcloth tent at a Saks Fifth Avenue private estate event in Water Mill, New York', caption: 'Under the Tent' },
  { src: '/saks-tent-bar-lounge-water-mill-nyc.jpg', alt: 'Cocktail lounge and bar setup at a Saks Fifth Avenue private estate event in Water Mill, New York', caption: 'Cocktail Hour' },
];

export default function Hamptons() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Luxury DJ in The Hamptons | Private Estates & Summer Events | DJ DX</title>
        <meta name="description" content="Looking for an exclusive DJ for your Hamptons estate party, summer event, or luxury wedding? DJ DX provides premium entertainment from Southampton to Montauk." />
        <link rel="canonical" href="https://djdxmusic.com/hamptons-luxury-dj" />
        <meta property="og:title" content="Luxury DJ in The Hamptons — DJ DX" />
        <meta property="og:description" content="Exclusive DJ services for Hamptons estate parties, private summer galas, and luxury events from Southampton to Montauk. DJ DX — the NYC standard, delivered in the Hamptons." />
        <meta property="og:url" content="https://djdxmusic.com/hamptons-luxury-dj" />
        <meta property="og:image" content="https://djdxmusic.com/hero-hamptons.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Luxury DJ in The Hamptons — DJ DX" />
        <meta name="twitter:description" content="Exclusive DJ services for Hamptons estate parties, private summer galas, and luxury events from Southampton to Montauk." />
        <meta name="twitter:image" content="https://djdxmusic.com/hero-hamptons.jpg" />
        <link rel="preload" as="image" href="/hero-hamptons-1600.webp" fetchPriority="high" imageSrcSet="/hero-hamptons-800.webp 800w, /hero-hamptons-1600.webp 1600w, /hero-hamptons-2560.webp 2560w" imageSizes="100vw" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Luxury DJ in The Hamptons — Private Estates & Summer Events",
              "serviceType": "Luxury DJ Entertainment",
              "url": "https://djdxmusic.com/hamptons-luxury-dj",
              "description": "DJ DX is a premier luxury DJ serving The Hamptons — from Southampton to Montauk. Available for private estate parties, yacht events, summer galas, and exclusive weddings. TED-featured artist with 500+ luxury events performed.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "bookings@djdxmusic.com",
                "priceRange": "$$$$"
              },
              "areaServed": [
                {"@type": "City", "name": "East Hampton"},
                {"@type": "City", "name": "Southampton"},
                {"@type": "City", "name": "Montauk"},
                {"@type": "City", "name": "Bridgehampton"},
                {"@type": "City", "name": "Sag Harbor"},
                {"@type": "City", "name": "Water Mill"},
                {"@type": "City", "name": "Amagansett"},
                {"@type": "AdministrativeArea", "name": "The Hamptons, NY"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hamptons DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Private Estate Party DJ Hamptons"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Luxury Wedding DJ Southampton"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Yacht Party DJ Montauk"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Summer Gala DJ East Hampton"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a Hamptons DJ cost?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Hamptons luxury DJ pricing typically starts at $3,000+ depending on estate size, event duration, and season. Peak summer weekends (July-August) command premium rates. DJ DX offers custom quotes — contact bookings@djdxmusic.com for your date."}
                },
                {
                  "@type": "Question",
                  "name": "Is DJ DX available for Hamptons private estates and yacht events?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes. DJ DX performs private estate parties, yacht events, and summer galas from Southampton to Montauk, including Sag Harbor, Bridgehampton, East Hampton, Water Mill, and Amagansett."}
                },
                {
                  "@type": "Question",
                  "name": "Can I book the DJ + live violin duo for a Hamptons event?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes. Soul Shades — DJ DX paired with violinist Julie Schatz — is available for Hamptons bookings starting at $2,400, adding live strings over the DJ set for cocktail hour and reception."}
                },
                {
                  "@type": "Question",
                  "name": "How early should I book a Hamptons DJ?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Summer Hamptons dates (June-September) book up 6-12 months in advance given tight peak-season demand. Reach out as early as possible to confirm your date."}
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Hamptons Luxury DJ", "item": "https://djdxmusic.com/hamptons-luxury-dj"}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "DJ DX — Saks Fifth Avenue Private Estate Event, Water Mill",
              "description": "DJ DX performing a golden-hour open-air set under a sailcloth tent at a private estate event for Saks Fifth Avenue in Water Mill, New York.",
              "thumbnailUrl": "https://djdxmusic.com/saks-watermill-video-poster.jpg",
              "uploadDate": "2026-07-30",
              "contentUrl": "https://djdxmusic.com/videos/saks-watermill-djing-clip.mp4"
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "DJ DX — Saks Fifth Avenue Private Estate Event, Water Mill (Clip 2)",
              "description": "DJ DX setting the mood under a sailcloth tent at a private estate event for Saks Fifth Avenue in Water Mill, New York.",
              "thumbnailUrl": "https://djdxmusic.com/saks-watermill-video2-poster.jpg",
              "uploadDate": "2026-07-30",
              "contentUrl": "https://djdxmusic.com/videos/saks-watermill-djing-clip2.mp4"
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <picture>
            <source
              type="image/webp"
              srcSet="/hero-hamptons-800.webp 800w, /hero-hamptons-1600.webp 1600w, /hero-hamptons-2560.webp 2560w"
              sizes="100vw"
            />
            <source
              type="image/jpeg"
              srcSet="/hero-hamptons-800.jpg 800w, /hero-hamptons-1600.jpg 1600w, /hero-hamptons-2560.jpg 2560w"
              sizes="100vw"
            />
            <img
              src="/hero-hamptons-1600.jpg"
              alt="DJ DX performing a golden-hour set under a sailcloth tent at a private Saks Fifth Avenue estate event in Water Mill, NY"
              width="1920"
              height="1080"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', filter: 'contrast(1.05) saturate(1.1)' }}
            />
          </picture>
        </div>
        <div className="epk-hero-overlay" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.58) 0%, rgba(12,12,12,0.96) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.15) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">The Hamptons & Montauk</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            Exclusive Estate <br />Entertainment
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Premium, high-energy DJ services for luxury summer events, private white parties, 
            and exclusive galas from Southampton to Montauk.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#booking" className="btn-gold">Secure Your Date</a>
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr" data-sr-delay="0s">
                <div className="sec-overline">
                  <span className="sec-label">Summer Luxury Standard</span>
                </div>
                <h2 className="sec-title">Tailored For The <span>Hamptons</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  Throwing an event in the Hamptons requires a DJ who understands the assignment. Whether it's a sprawling private estate, a beachfront rental, or an exclusive country club, you need music curation that matches the sophistication of your guest list without losing the energy of a true summer celebration.
                </p>
                <p>
                  <strong>Upscale, seamless, and dialed in.</strong> I specialize in reading rooms of high-profile guests, blending classic house, modern hits, disco, and cocktail lounge vibes exactly when the moment calls for it. No awkward pauses, no club cliché routines—just purely refined, high-end entertainment.
                </p>
                <p>
                  With years of experience packing dance floors at the most prestigious venues in the North East, DJ DX and the Soul Shades duo deliver a premium musical experience worthy of a Hamptons summer.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Curated Summer Soundscapes</div>
                  <div className="stat-sub">From sun-drenched poolside deep house to sunset cocktail jazz, seamlessly transitioning into high-energy dance anthems after dark.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Absolute Discretion</div>
                  <div className="stat-sub">Accustomed to performing for VIPs, celebrities, and executives. Maximum professionalism and privacy for your exclusive estate.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Premium Sound & Lighting</div>
                  <div className="stat-sub">We can source full-scale, sleek audio and ambient lighting packages that look incredible without disrupting your high-end decor.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT EVENT ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner" style={{ maxWidth: '1100px' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-overline-line" />
            <span className="sec-label">Recently</span>
            <span className="sec-overline-line" />
          </div>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '12px' }}>
            Saks Fifth Avenue — <span>Private Estate, Water Mill</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.62)', maxWidth: '680px', margin: '0 auto 48px', fontSize: '1rem', lineHeight: 1.7 }}>
            Most recently, I brought a golden-hour open-air set to a private estate in Water Mill for Saks Fifth Avenue. Under a sailcloth tent with string lights overhead, the night moved from cocktail-hour house and disco into a full late-set groove as the sky shifted from gold to navy.
          </p>

          <div className="event-shelf">
            <div className="event-shelf-item sr" data-sr-delay="0s">
              <div className="event-shelf-frame">
                <video
                  src="/videos/saks-watermill-djing-clip.mp4"
                  poster="/saks-watermill-video-poster.jpg"
                  loop
                  playsInline
                  preload="none"
                  controls
                  aria-label="DJ DX djing under a sailcloth tent at a Saks Fifth Avenue private estate event in Water Mill, New York"
                />
              </div>
              <div className="event-shelf-caption">Live at the Booth</div>
            </div>
            <div className="event-shelf-item sr" data-sr-delay="0.05s">
              <div className="event-shelf-frame">
                <video
                  src="/videos/saks-watermill-djing-clip2.mp4"
                  poster="/saks-watermill-video2-poster.jpg"
                  loop
                  playsInline
                  preload="none"
                  controls
                  aria-label="DJ DX djing under a sailcloth tent at a Saks Fifth Avenue private estate event in Water Mill, New York, second clip"
                />
              </div>
              <div className="event-shelf-caption">Setting the Mood</div>
            </div>
            {SAKS_GALLERY_PHOTOS.map((photo, i) => (
              <div key={photo.src} className="event-shelf-item sr" data-sr-delay={`${(i + 2) * 0.05}s`}>
                <div className="event-shelf-frame">
                  <img src={photo.src} alt={photo.alt} width="900" height="1200" loading="lazy" />
                </div>
                <div className="event-shelf-caption">{photo.caption}</div>
              </div>
            ))}
          </div>

          {/* TODO: client testimonial goes here when received */}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <div className="sec-header center sr">
            <h2 className="sec-title">Hamptons DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'How much does a Hamptons DJ cost?', a: 'Hamptons luxury DJ pricing typically starts at $3,000+ depending on estate size, event duration, and season. Peak summer weekends (July-August) command premium rates. DJ DX offers custom quotes — contact bookings@djdxmusic.com.' },
              { q: 'Is DJ DX available for Hamptons private estates and yacht events?', a: 'Yes. DJ DX performs private estate parties, yacht events, and summer galas from Southampton to Montauk, including Sag Harbor, Bridgehampton, East Hampton, Water Mill, and Amagansett.' },
              { q: 'Can I book the DJ + live violin duo for a Hamptons event?', a: 'Yes. Soul Shades — DJ DX paired with violinist Julie Schatz — is available for Hamptons bookings starting at $2,400, adding live strings over the DJ set for cocktail hour and reception.' },
              { q: 'How early should I book a Hamptons DJ?', a: 'Summer Hamptons dates (June-September) book up 6-12 months in advance given tight peak-season demand. Reach out as early as possible to confirm your date.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '20px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>{q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'rgba(242,242,242,0.58)', lineHeight: 1.7 }}>{a}</p>
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
                Reserve Your <br /><span>Hamptons</span> Date
              </h2>
              <p className="booking-blurb">
                Summer dates in the Hamptons fill up fast. Whether you are in East Hampton, Sag Harbor, or Montauk, fill out the form below and I will respond within 24–48 hours to discuss the vibe and vision for your event.
              </p>
            </div>

            <div className="booking-right sr" data-sr-delay="0.15s">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <RelatedServices />
      <SiteFooter />
    </>
  );
}
