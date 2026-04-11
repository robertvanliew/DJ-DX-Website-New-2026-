import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function DJForHireNYC() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>DJ for Hire NYC | Book a Professional DJ in New York | DJ DX</title>
        <meta name="description" content="Book DJ DX — NYC's premier DJ for hire. Weddings, corporate events, private parties, rooftops & clubs. R&B, Hip-Hop, Afrobeats, House & more. TED-featured. 500+ events. Request a quote." />
        <link rel="canonical" href="https://djdxmusic.com/dj-for-hire-nyc" />
        <meta property="og:title" content="DJ for Hire NYC — Professional DJ New York | DJ DX" />
        <meta property="og:description" content="Book NYC's most versatile DJ. DJ DX performs at weddings, corporate events, private parties, rooftop events, and clubs across NYC, NJ, and the tri-state area. TED-featured, 500+ events." />
        <meta property="og:url" content="https://djdxmusic.com/dj-for-hire-nyc" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="DJ for Hire NYC — DJ DX" />
        <meta name="twitter:description" content="Book NYC's most versatile DJ for hire. Weddings, corporate events, private parties, rooftops & clubs. TED-featured, 500+ events." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "DJ for Hire NYC — Professional DJ New York City",
              "serviceType": "DJ for Hire",
              "url": "https://djdxmusic.com/dj-for-hire-nyc",
              "description": "DJ DX is a professional DJ for hire in New York City, serving weddings, corporate events, private parties, birthdays, rooftop events, nightclubs, and more across NYC, NJ, and the tri-state area. TED-featured artist. 20+ years experience. 500+ events. R&B, Hip-Hop, Afrobeats, House, and all genres.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$-$$$$",
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
                {"@type": "City", "name": "Staten Island"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Newark"},
                {"@type": "City", "name": "Hoboken"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"},
                {"@type": "City", "name": "East Hampton"},
                {"@type": "City", "name": "Southampton"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "DJ Services NYC",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Event DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Private Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Birthday Party DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Afrobeats DJ NYC NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rooftop Party DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "NYE DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop DJ New York City"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I hire a DJ in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To hire DJ DX in New York City, use the booking form on this page or email djdxbusiness@gmail.com. Provide your event date, venue, event type, estimated guest count, and any music preferences. DJ DX responds within 24–48 hours with availability confirmation and a custom quote based on your specific event."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What events does DJ DX perform at in NYC and NJ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX performs at weddings, corporate events, private birthday parties, sweet sixteens, anniversary celebrations, rooftop parties, nightclub residencies, New Year's Eve events, brand activations, destination weddings, and Hamptons luxury events across NYC, NJ, CT, and internationally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes DJ DX different from other DJs for hire in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX is a TED-featured artist (TEDxYouth@RVA 2022), a music producer with 100+ originals on Spotify and Apple Music, and a DJ with 20+ years of experience and 500+ events performed. DJ DX plays R&B, Hip-Hop, Afrobeats, Amapiano, House, Jersey Club, Old School, Dancehall, and Soca — one of the broadest authentic genre ranges of any DJ in the NYC market."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost to hire a DJ in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ hire rates in NYC range based on event type, duration, equipment, and DJ experience. DJ DX rates typically range from $1,200 for smaller private parties up to $5,000+ for full-day weddings or corporate galas. Custom quotes are provided for every inquiry — email djdxbusiness@gmail.com with your event details."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "DJ for Hire NYC", "item": "https://djdxmusic.com/dj-for-hire-nyc"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="DJ for Hire New York City — DJ DX professional DJ" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Professional DJ for Hire — New York City</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            Hire NYC's Most <span>Versatile DJ</span>
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Weddings, corporate galas, birthday parties, rooftop events, and club nights —
            DJ DX brings 20+ years of craft and a TED-featured artist's ear to every booking.
          </p>
          <a href="#booking" className="btn-gold">Request a Quote</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr">
                <div className="sec-overline"><span className="sec-label">Why DJ DX</span></div>
                <h2 className="sec-title">One DJ. <span>Every Event.</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>Hiring a DJ in New York City should not feel like a gamble. DJ DX brings verifiable credentials to every booking: a <a href="https://www.ted.com/talks/dj_dx_finally_moving" target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>TED-featured performance</a>, 100+ original releases on Spotify and Apple Music, coverage from Disrupt Magazine and NJ.com, and 500+ events performed across the full spectrum of NYC event types.</p>
                <p>Genre range is the clearest differentiator. DJ DX operates authentically across R&amp;B, Hip-Hop, Afrobeats, Amapiano, House, Jersey Club, Old School, Dancehall, Soca, and Reggaeton. A single DJ DX set can move through six genres in an hour without losing the crowd — because the transitions are crafted, not improvised.</p>
                <p>Every booking starts with a real consultation about your event, your guests, and your goals. DJ DX doesn't show up with a pre-programmed playlist — every set is built for the specific event and read live to match the crowd's energy as it evolves.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { num: 'TED', label: 'Featured Artist', sub: 'TEDxYouth@RVA 2022 — the credential that separates DJ DX from every other DJ in the NYC market.' },
                { num: '500+', label: 'Events Performed', sub: 'Weddings, corporate galas, birthday parties, clubs, rooftops, destination events worldwide.' },
                { num: '20+', label: 'Years Experience', sub: 'Two decades of crowd-reading, genre mastery, and live performance craft across NYC and NJ.' },
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

      {/* ── SERVICES HUB ── */}
      <section className="services">
        <div className="section-inner">
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">Every Event Type</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">DJ Services <span>Across New York</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Wedding DJ NYC & NJ', href: '/wedding-dj-nyc-nj', desc: 'Ceremony, cocktail hour, reception, and after-party. Custom R&B, Hip-Hop, and Afrobeats setlists built around your story.' },
              { title: 'Corporate Event DJ', href: '/corporate-event-dj-nyc-nj-ct', desc: 'Brand-safe, professional entertainment for galas, holiday parties, product launches, and Fortune 500 activations.' },
              { title: 'Afrobeats & Amapiano DJ', href: '/afrobeats-amapiano-dj-nyc-nj', desc: 'Full African and Caribbean diaspora sound — Burna Boy, Wizkid, South African Amapiano, Dancehall, and Soca.' },
              { title: 'Violin & DJ Duo', href: '/violin-dj-duo-nyc-nj', desc: 'Soul Shades — live violin over DJ sets for luxury weddings and corporate galas. An experience guests never forget.' },
              { title: 'Hamptons Luxury DJ', href: '/hamptons-luxury-dj', desc: 'Premium entertainment for private estates, summer galas, and luxury outdoor events from Southampton to Montauk.' },
              { title: 'Destination Wedding DJ', href: '/destination-wedding-dj', desc: 'International destination wedding DJ with global travel — Italy, Mexico, the Caribbean, and beyond.' },
            ].map(s => (
              <a key={s.title} href={s.href} className="service-cell sr" style={{ textDecoration: 'none' }}>
                <div className="service-name">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { label: 'R&B & Hip-Hop DJ', href: '/rb-hip-hop-dj-nyc-nj' },
              { label: 'Private Party DJ', href: '/private-party-dj-nyc-nj' },
              { label: 'Sweet 16 DJ', href: '/sweet-16-dj-nyc-nj' },
              { label: 'Rooftop Party DJ', href: '/rooftop-party-dj-nyc' },
              { label: "New Year's Eve DJ", href: '/new-years-eve-dj-nyc' },
              { label: 'House & Jersey Club DJ', href: '/house-jersey-club-dj-nyc-nj' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{ display: 'block', padding: '14px 18px', background: 'var(--panel)', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <div className="sec-header center sr">
            <h2 className="sec-title">Hiring a DJ in NYC <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'How do I hire a DJ in New York City?', a: 'Use the booking form on this page or email djdxbusiness@gmail.com. Provide your event date, venue, event type, estimated guest count, and any music preferences. DJ DX responds within 24–48 hours with availability and a custom quote.' },
              { q: 'What events does DJ DX perform at in NYC and NJ?', a: 'DJ DX performs at weddings, corporate events, private birthday parties, sweet sixteens, rooftop parties, nightclub residencies, New Year\'s Eve events, brand activations, destination weddings, and Hamptons luxury events across NYC, NJ, CT, and internationally.' },
              { q: 'What makes DJ DX different from other DJs for hire in NYC?', a: 'DJ DX is a TED-featured artist, a music producer with 100+ originals on Spotify, and a DJ with 20+ years and 500+ events performed. DJ DX plays R&B, Hip-Hop, Afrobeats, Amapiano, House, Jersey Club, Old School, Dancehall, and Soca — one of the broadest authentic genre ranges of any DJ in the NYC market.' },
              { q: 'How much does it cost to hire a DJ in New York City?', a: 'DJ DX rates typically range from $1,200 for smaller private parties up to $5,000+ for full-day weddings or corporate galas. Custom quotes are provided for every inquiry — email djdxbusiness@gmail.com with your event details for transparent pricing.' },
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
              <h2 className="sec-title">Ready to Book <span>NYC's Best DJ?</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Tell us about your event and we'll respond within 24–48 hours with availability and a transparent custom quote. No hidden fees. No surprises.
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
