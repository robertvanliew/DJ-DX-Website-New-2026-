import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function WeddingDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Wedding DJ NYC & NJ | R&B, Hip-Hop, Afrobeats | DJ DX</title>
        <meta name="description" content="Looking for a wedding DJ in New York or New Jersey? DJ DX specializes in R&B, Hip-Hop, Afrobeats, and Old School for weddings across NYC, NJ, and the tri-state area. TED-featured, 500+ events." />
        <link rel="canonical" href="https://djdxmusic.com/wedding-dj-nyc-nj" />
        <meta property="og:title" content="Wedding DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional wedding DJ in New York and New Jersey specializing in R&B, Hip-Hop, Afrobeats, and Old School. Book DJ DX for your wedding reception, cocktail hour, and after-party." />
        <meta property="og:url" content="https://djdxmusic.com/wedding-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wedding DJ NYC & NJ — R&B, Hip-Hop, Afrobeats",
              "serviceType": "Wedding DJ",
              "url": "https://djdxmusic.com/wedding-dj-nyc-nj",
              "description": "DJ DX is a professional wedding DJ in New York and New Jersey specializing in R&B, Hip-Hop, Afrobeats, Old School, and Blends. With 20+ years of experience and 500+ events performed, DJ DX delivers seamless entertainment from cocktail hour through the last dance. TED-featured artist.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$-$$$",
                "telephone": "",
                "sameAs": [
                  "https://djdxmusic.com/",
                  "https://open.spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe",
                  "https://www.ted.com/talks/dj_dx_finally_moving"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New York",
                  "addressRegion": "NY",
                  "addressCountry": "US"
                }
              },
              "areaServed": [
                {"@type": "City", "name": "New York City"},
                {"@type": "City", "name": "Manhattan"},
                {"@type": "City", "name": "Brooklyn"},
                {"@type": "City", "name": "Queens"},
                {"@type": "City", "name": "The Bronx"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Newark"},
                {"@type": "City", "name": "Hoboken"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wedding DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding Cocktail Hour DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding Reception DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding After-Party DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Live Violin and DJ Wedding Package"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "R&B Hip-Hop Wedding DJ NYC"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a wedding DJ cost in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wedding DJ pricing in New York City typically ranges from $1,500 to $5,000+ depending on hours, event type, and experience level. DJ DX offers competitive rates for professional wedding DJ services across NYC and NJ. Contact djdxbusiness@gmail.com for a custom quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What genres does DJ DX play at weddings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX specializes in R&B, Hip-Hop, Afrobeats, Old School, House, Reggaeton, and custom blends. Every wedding set is custom-curated — from soulful cocktail hour vibes to high-energy reception floor-fillers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX do both the ceremony and reception?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX is available for the full wedding day — ceremony music, cocktail hour, reception, and after-party. A unique live violin and DJ package is also available for an elevated, one-of-a-kind atmosphere."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far in advance should I book a wedding DJ in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For NYC and NJ weddings, it's recommended to book at least 6-12 months in advance, especially for peak seasons (May–October). Contact DJ DX early to check availability for your date."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Wedding DJ NYC NJ", "item": "https://djdxmusic.com/wedding-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Wedding DJ New York City — DJ DX" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)'
        }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Wedding DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            Your Wedding Deserves <span>the Best DJ</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            R&amp;B, Hip-Hop, Afrobeats, and soulful blends — custom-curated for your day.
            20+ years of experience. 500+ events. TED-featured artist.
          </p>
          <a href="#booking" className="btn-gold">Check Availability</a>
        </div>
      </section>

      {/* ── WHY DJ DX FOR WEDDINGS ── */}
      <section className="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr">
                <div className="sec-overline"><span className="sec-label">Wedding Expertise</span></div>
                <h2 className="sec-title">More Than a DJ — <span>A Music Director</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>DJ DX treats every wedding like a curated concert experience. From the first song of cocktail hour to the last dance of the night, every transition is intentional, every energy shift is deliberate.</p>
                <p>Specializing in R&amp;B, Hip-Hop, Afrobeats, and Old School — the genres that actually fill dance floors at New York and New Jersey weddings. No cookie-cutter playlists. No boring top-40 filler.</p>
                <p>And for couples who want something truly unforgettable — the <strong>live violin + DJ package</strong> with Soul Shades brings a one-of-a-kind live music experience that guests talk about for years.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { num: '20+', label: 'Years Experience', sub: 'Wedding DJ in NY & NJ' },
                { num: '500+', label: 'Events Performed', sub: 'Weddings, galas, receptions' },
                { num: '100+', label: 'Original Blends', sub: 'Music you won\'t hear anywhere else' },
              ].map(s => (
                <div className="stat-row sr" key={s.label}>
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
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">What's Included</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Wedding DJ <span>Services</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Ceremony Music', desc: 'Processional, recessional, and prelude music curated to your style and vibe.' },
              { title: 'Cocktail Hour', desc: 'Smooth, soulful background music — jazz, R&B, and chill house to set the mood.' },
              { title: 'Reception DJ', desc: 'High-energy floor-fillers from R&B, Hip-Hop, Afrobeats, and Old School classics.' },
              { title: 'Live Violin + DJ', desc: 'Upgrade to Soul Shades — live violin over DJ sets for an unforgettable atmosphere.' },
              { title: 'Custom Playlists', desc: 'Every set is researched and built around your music preferences and guest profile.' },
              { title: 'Emcee Services', desc: 'Smooth introductions, toasts coordination, and seamless event flow management.' },
            ].map(s => (
              <div key={s.title} className="service-cell sr">
                <div className="service-name">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <div className="sec-header center sr">
            <h2 className="sec-title">Wedding DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'How much does a wedding DJ cost in NYC?', a: 'Wedding DJ rates in New York City range from $1,500 to $5,000+ depending on hours, event complexity, and experience. DJ DX offers transparent pricing — contact us for a custom quote based on your event.' },
              { q: 'What genres does DJ DX play at weddings?', a: 'DJ DX specializes in R&B, Hip-Hop, Afrobeats, Old School, House, Reggaeton, and custom blends. Every wedding set is custom-curated based on your preferences and guest profile.' },
              { q: 'Does DJ DX cover both the ceremony and reception?', a: 'Yes — DJ DX is available for the full wedding day including ceremony, cocktail hour, reception, and after-party. A live violin + DJ package is also available for an elevated experience.' },
              { q: 'How far in advance should I book a wedding DJ in NYC?', a: 'We recommend booking 6-12 months in advance for NYC and NJ weddings, especially for peak season (May–October). Reach out early to secure your date.' },
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
      <section id="booking" className="booking" style={{ padding: '80px 40px' }}>
        <div className="section-inner">
          <div className="booking-layout">
            <div className="booking-left">
              <div className="sec-overline"><span className="sec-label">Book Your Date</span></div>
              <h2 className="sec-title">Request a <span>Wedding DJ Quote</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Fill out the form and DJ DX will get back to you within 24 hours with availability and pricing for your wedding date.
              </p>
            </div>
            <div className="booking-right">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
