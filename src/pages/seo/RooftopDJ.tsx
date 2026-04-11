import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function RooftopDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Rooftop Party DJ NYC | Outdoor & Summer Events | DJ DX</title>
        <meta name="description" content="Looking for a rooftop DJ in NYC? DJ DX specializes in outdoor rooftop parties, summer events, and luxury open-air sets across Manhattan, Brooklyn & the Hamptons." />
        <link rel="canonical" href="https://djdxmusic.com/rooftop-party-dj-nyc" />
        <meta property="og:title" content="Rooftop Party DJ NYC — DJ DX" />
        <meta property="og:description" content="Exclusive rooftop DJ services for outdoor summer events across Manhattan, Brooklyn, and the Hamptons. DJ DX brings the summer sound to open-air events." />
        <meta property="og:url" content="https://djdxmusic.com/rooftop-party-dj-nyc" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Rooftop Party DJ NYC — DJ DX" />
        <meta name="twitter:description" content="Rooftop DJ for outdoor summer events across Manhattan, Brooklyn, and the Hamptons. Afrobeats, house, R&B and more." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Rooftop Party DJ NYC — Outdoor Summer Events",
              "serviceType": "Outdoor Event DJ",
              "url": "https://djdxmusic.com/rooftop-party-dj-nyc",
              "description": "DJ DX is a professional rooftop and outdoor event DJ in New York City, specializing in summer rooftop parties, open-air brand activations, terrace events, and luxury outdoor gatherings across Manhattan, Brooklyn, and the Hamptons. 20+ years experience. 500+ events.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$",
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
                {"@type": "City", "name": "Hoboken"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "East Hampton"},
                {"@type": "City", "name": "Southampton"},
                {"@type": "AdministrativeArea", "name": "The Hamptons, NY"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Rooftop DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rooftop Party DJ Manhattan"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Outdoor Summer Event DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Terrace Party DJ Brooklyn"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rooftop Brand Activation DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Open-Air Luxury Event DJ Hamptons"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does DJ DX have experience with outdoor and rooftop events in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX has extensive experience with outdoor rooftop events, terrace parties, and open-air gatherings across Manhattan, Brooklyn, and the Hamptons. Outdoor setup includes weatherproof equipment considerations, sound projections appropriate for open spaces, and setlists calibrated for the relaxed-yet-energetic atmosphere of rooftop events."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What music genres work best for rooftop parties in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rooftop parties call for a specific sound — open, summer, social, and often mixed in crowd demographics. DJ DX typically builds rooftop sets around Afrobeats and Amapiano (perfect summer sound), contemporary R&B, chill hip-hop, house and deep house, and classic soul — all with a flow that lets conversations happen while keeping people moving. The exact blend is tailored to the event's audience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX handle the sound setup for an outdoor rooftop event?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX works with professional audio partners to configure outdoor-appropriate sound systems for rooftop and terrace events. Factors like wind, open space, and building acoustics are accounted for in advance. Contact us with your venue details and we'll advise on the right setup."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is DJ DX available for Hamptons summer rooftop and outdoor events?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX serves the Hamptons summer event circuit — from Sag Harbor terrace parties to East Hampton estate gatherings to Montauk beachfront events. Summer availability books quickly; contact djdxbusiness@gmail.com well ahead of your date to secure availability."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Rooftop Party DJ NYC", "item": "https://djdxmusic.com/rooftop-party-dj-nyc"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Rooftop Party DJ New York City skyline — DJ DX outdoor summer event" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Rooftop & Outdoor DJ — New York City</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            NYC's <span>Rooftop Party DJ</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Open sky, city skyline, and a soundtrack that matches the moment.
            From Manhattan terraces to Hamptons estates — DJ DX brings the summer.
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
                <div className="sec-overline"><span className="sec-label">Summer Expertise</span></div>
                <h2 className="sec-title">The City Is <span>the Venue</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>Rooftop parties in New York City carry a specific magic — an open-air freedom that unlocks people in ways indoor venues can't, and a summer energy that demands a DJ who knows how to match the moment without overpowering it. DJ DX has performed outdoor and rooftop events across Manhattan, Brooklyn, and the Hamptons — building a deep understanding of how outdoor acoustics, weather, and the natural social flow of open-air events shape what the music needs to do.</p>
                <p>Sound for rooftop events is a science: open spaces diffuse sound, wind creates challenges, and the balance between keeping the vibe alive and respecting residential surroundings requires experience and the right equipment configuration. DJ DX works with professional audio partners to ensure every rooftop event sounds clean, warm, and powerful at the appropriate level for the space.</p>
                <p>Musically, rooftop sets are a DJ DX specialty. The genre blend for outdoor summer events: Afrobeats and Amapiano as the backbone, layered with contemporary R&amp;B for social hours, house music as the night builds, and Soca or Dancehall if the crowd wants to peak. A sophisticated progression that feels effortless.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: 'Outdoor Sound Expertise', sub: 'Rooftop acoustics, open-space projection, and weather-ready setups — every outdoor event is technically prepared.' },
                { label: 'Summer-Specific Setlists', sub: 'Afrobeats, Amapiano, house, R&B, and Soca — the perfect sonic cocktail for NYC summer energy.' },
                { label: 'Hamptons to Brooklyn', sub: 'From East Hampton estate terraces to Brooklyn rooftop venues — DJ DX knows the outdoor event landscape across the region.' },
              ].map(s => (
                <div className="stat-row sr" key={s.label}>
                  <div className="stat-meta">
                    <div className="stat-label" style={{ color: 'var(--gold)' }}>{s.label}</div>
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
              <span className="sec-overline-line" /><span className="sec-label">Event Types</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Rooftop <span>DJ Services</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Rooftop Birthday Parties', desc: 'Open-air birthday celebrations with a summer soundtrack perfectly calibrated for the energy of New York\'s rooftop scene.' },
              { title: 'Brand Activations & Product Launches', desc: 'Corporate rooftop events with a polished, brand-safe soundtrack that elevates the venue\'s sophistication and guest experience.' },
              { title: 'Summer House & Terrace Sets', desc: 'Deep house, Afrobeats, and R&B for terrace lounges, private pools, and summer social events from NYC to the Hamptons.' },
              { title: 'Outdoor Wedding Cocktail Hours', desc: 'Ceremony and cocktail hour music for outdoor weddings at estates, gardens, and open-air venues across the tri-state area.' },
              { title: 'Pop-Up & Outdoor Activations', desc: 'Park events, pop-up parties, and street-level outdoor activations with a professional mobile setup and genre-flexible setlist.' },
              { title: 'Hamptons Estate Parties', desc: 'Luxury outdoor gatherings on private estates in Southampton, East Hampton, and Montauk with a setlist that matches the setting.' },
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
            <h2 className="sec-title">Rooftop DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'Does DJ DX have experience with outdoor and rooftop events in NYC?', a: 'Yes. DJ DX has extensive experience with outdoor rooftop events, terrace parties, and open-air gatherings across Manhattan, Brooklyn, and the Hamptons. Outdoor setup includes weatherproof equipment considerations, open-space sound projection, and setlists calibrated for the rooftop atmosphere.' },
              { q: 'What music genres work best for rooftop parties in NYC?', a: 'DJ DX typically builds rooftop sets around Afrobeats and Amapiano (perfect summer sound), contemporary R&B, chill hip-hop, house and deep house, and classic soul — all with a flow that lets conversations happen while keeping people moving. The exact blend is tailored to the event\'s audience.' },
              { q: 'Can DJ DX handle the sound setup for an outdoor rooftop event?', a: 'Yes. DJ DX works with professional audio partners to configure outdoor-appropriate sound systems. Factors like wind, open space, and building acoustics are accounted for in advance. Include your venue details in the booking form and we\'ll advise on the right setup.' },
              { q: 'Is DJ DX available for Hamptons summer rooftop and outdoor events?', a: 'Yes. DJ DX serves the Hamptons summer event circuit — from Sag Harbor terrace parties to East Hampton estate gatherings to Montauk beachfront events. Summer availability books quickly; contact djdxbusiness@gmail.com well ahead of your date.' },
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
              <h2 className="sec-title">Book the <span>Rooftop DJ Experience</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Planning an outdoor or rooftop event in New York City or the Hamptons? Fill out the form and we'll respond within 24–48 hours.
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
