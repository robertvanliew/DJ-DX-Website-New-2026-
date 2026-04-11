import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function HouseJerseyClubDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>House & Jersey Club DJ NYC NJ | Club, Lounge & Event DJ | DJ DX</title>
        <meta name="description" content="Looking for a house or Jersey Club DJ in NYC or NJ? DJ DX plays deep house, afro house, Jersey Club, and club music for events, lounges & nightclubs across the tri-state area." />
        <link rel="canonical" href="https://djdxmusic.com/house-jersey-club-dj-nyc-nj" />
        <meta property="og:title" content="House & Jersey Club DJ NYC NJ — DJ DX" />
        <meta property="og:description" content="Professional house and Jersey Club DJ in New York and New Jersey. DJ DX plays deep house, afro house, tech house, and Jersey Club for clubs, lounges, and private events." />
        <meta property="og:url" content="https://djdxmusic.com/house-jersey-club-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="House & Jersey Club DJ NYC NJ — DJ DX" />
        <meta name="twitter:description" content="Professional house and Jersey Club DJ in NYC and NJ. Deep house, afro house, tech house, and Jersey Club for clubs, lounges, and events." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "House & Jersey Club DJ NYC NJ — Club, Lounge & Event DJ",
              "serviceType": "House and Jersey Club DJ",
              "url": "https://djdxmusic.com/house-jersey-club-dj-nyc-nj",
              "description": "DJ DX is a professional house and Jersey Club DJ in New York City and New Jersey, available for nightclubs, lounges, rooftop events, private parties, and brand activations. Specialties: deep house, afro house, tech house, Jersey Club, and club-to-underground blends. 20+ years experience. 500+ events.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$-$$$",
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
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Newark"},
                {"@type": "City", "name": "Hoboken"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "House & Jersey Club DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Deep House DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Jersey Club DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Afro House DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tech House DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Nightclub DJ New Jersey"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Jersey Club music and does DJ DX play it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jersey Club is a high-energy dance music genre originating from Newark, NJ — characterized by chopped vocal samples, syncopated kick patterns, and fast BPMs (typically 130-140 BPM). It's one of the most distinctive sounds to emerge from the tri-state area and has become a crossover phenomenon. Yes — DJ DX plays authentic Jersey Club and integrates it with house, Afrobeats, and hip-hop in ways that keep dance floors moving from Brooklyn to Newark."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What house music sub-genres does DJ DX play?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX plays across the full house spectrum: deep house (warm, chord-driven, soulful), afro house (African percussion and vocal elements, popularized by Black Coffee and Enoo Napa), tech house (percussion-forward, minimal, club-focused), and soulful house (gospel and R&B-influenced). For private events, the blend is calibrated to the crowd — lighter and melodic for upscale settings, peak-hour and high-energy for nightclub and rooftop events."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX play house music for a private party or corporate event?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. House music is one of the most versatile genres for events — deep house and soulful house work beautifully as cocktail hour or background music, while tech house and afro house are perfect for energizing a late-night dance floor. DJ DX has performed house-forward sets at corporate events, brand activations, rooftop parties, and private celebrations across New York and New Jersey with 500+ total events of experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a house or club DJ cost in NYC and NJ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "House and club DJ rates in NYC and NJ range from $1,200 to $4,000+ depending on event type, duration, venue, and equipment needs. Nightclub residencies are priced separately from private event bookings. DJ DX provides transparent custom quotes within 24 hours — email djdxbusiness@gmail.com with your date, venue, and event type. Weekend and peak-date availability goes fast; contact early."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "House & Jersey Club DJ NYC NJ", "item": "https://djdxmusic.com/house-jersey-club-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="House and Jersey Club DJ New York City — DJ DX club and lounge events" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">House & Jersey Club DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            House & <span>Jersey Club DJ NYC</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Deep house, afro house, tech house, and the authentic Jersey Club sound —
            DJ DX keeps floors moving from Manhattan to Newark.
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
                <div className="sec-overline"><span className="sec-label">The Club Sound</span></div>
                <h2 className="sec-title">Built for the <span>Dance Floor</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>House music is the heartbeat of New York City's nightlife — and Jersey Club is the tri-state area's own genre invention, a sound born in Newark that has crossed over to global dancefloors. DJ DX has been mixing house music for over 20 years, from the deep soulful house that defined late-night New York to the afro house movement (Black Coffee, Enoo Napa, Themba) that has become the dominant sound for upscale events and boutique clubs.</p>
                <p>Jersey Club is more than a regional novelty — it's a genre with specific technical demands: fast BPMs, complex kick patterns, chopped vocal samples, and a crowd that knows exactly what authentic Jersey Club sounds like. DJ DX brings that authenticity, integrating it with Afrobeats and hip-hop in ways that feel seamless rather than jarring. For events in Newark, Jersey City, and Brooklyn's club scene, Jersey Club is the expectation — DJ DX delivers it with 20+ years of experience behind the decks.</p>
                <p>Whether the event calls for a sophisticated deep house cocktail set or a peak-hour club experience, DJ DX reads the room and adapts. House music is not one sound — it's a spectrum, and knowing where to go on that spectrum at any given moment is the skill that separates a DJ from a playlist.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: 'Full House Spectrum', sub: 'Deep house, afro house, tech house, soulful house — every sub-genre covered with real catalogue depth and technical mixing skill.' },
                { label: 'Authentic Jersey Club', sub: 'The tri-state area\'s own genre — DJ DX plays authentic Jersey Club and integrates it with house and Afrobeats for dance floors across NYC and NJ.' },
                { label: 'Club to Private Events', sub: 'From nightclub residencies and rooftop parties to upscale private events — DJ DX scales the house sound to the venue and audience.' },
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
              <span className="sec-overline-line" /><span className="sec-label">Club Specialties</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">House & Club <span>DJ Services</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Deep House Sets', desc: 'Warm, chord-driven, soulful deep house for cocktail hours, upscale lounges, and late-night events where the music needs to feel elevated rather than aggressive.' },
              { title: 'Afro House', desc: 'The sound of Black Coffee, Themba, and Enoo Napa — afro house with African percussion, vocal elements, and an unmistakable cosmopolitan energy perfect for NYC\'s upscale event scene.' },
              { title: 'Jersey Club', desc: 'Authentic Jersey Club from Newark to Brooklyn — fast BPMs, chopped samples, and the dance energy that defines the tri-state area\'s own contribution to global club culture.' },
              { title: 'Tech House', desc: 'Percussion-forward, minimal, and relentlessly groovy — tech house for peak-hour club moments, brand activations, and high-energy private events.' },
              { title: 'Nightclub & Venue Residencies', desc: 'Multi-night bookings for NYC and NJ nightclubs and lounges — DJ DX brings the experience and name recognition of a TED-featured artist to venue residency work.' },
              { title: 'Rooftop & Outdoor Club Events', desc: 'Deep house and afro house for summer rooftop events and outdoor brand activations — the perfect genre bridge between day party and nighttime energy.' },
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
            <h2 className="sec-title">House & Club DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'What is Jersey Club music and does DJ DX play it?', a: 'Jersey Club is a high-energy dance music genre from Newark, NJ — characterized by chopped vocal samples, syncopated kick patterns, and fast BPMs (130-140 BPM). Yes — DJ DX plays authentic Jersey Club and integrates it with house, Afrobeats, and hip-hop in ways that keep dance floors moving from Brooklyn to Newark. It\'s one of the most distinctive sounds from the tri-state area and an important part of any NJ-rooted DJ\'s catalogue.' },
              { q: 'What house music sub-genres does DJ DX play?', a: 'DJ DX plays across the full house spectrum: deep house (warm, chord-driven, soulful), afro house (African percussion and vocal elements, popularized by Black Coffee and Enoo Napa), tech house (percussion-forward and minimal), and soulful house (gospel and R&B-influenced). The blend is calibrated to the crowd — lighter and melodic for upscale settings, peak-hour and high-energy for nightclub and rooftop events.' },
              { q: 'Can DJ DX play house music for a private party or corporate event?', a: 'Absolutely. House music is versatile across event types — deep house and soulful house work beautifully as cocktail hour or background music, while tech house and afro house are perfect for energizing a late-night dance floor. DJ DX has performed house-forward sets at corporate events, brand activations, rooftop parties, and private celebrations across New York and New Jersey with 500+ total events of experience.' },
              { q: 'How much does a house or club DJ cost in NYC and NJ?', a: 'House and club DJ rates in NYC and NJ range from $1,200 to $4,000+ depending on event type, duration, venue, and equipment needs. Nightclub residencies are priced separately from private event bookings. DJ DX provides transparent custom quotes within 24 hours — email djdxbusiness@gmail.com with your date, venue, and event type. Weekend and peak-date availability goes fast; contact early.' },
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
              <h2 className="sec-title">Book the <span>House & Club DJ</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Looking for a house or Jersey Club DJ in New York or New Jersey? Fill out the form with your event details and we'll respond within 24–48 hours.
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
