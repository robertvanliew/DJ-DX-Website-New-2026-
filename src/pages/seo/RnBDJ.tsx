import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function RnBDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>R&B DJ NYC & NJ | Soul, Neo-Soul & Contemporary R&B | DJ DX</title>
        <meta name="description" content="Looking for an R&B DJ in NYC or NJ? DJ DX specializes in classic soul, 90s R&B, neo-soul, and contemporary R&B for private parties, weddings & upscale events. Book DJ DX." />
        <link rel="canonical" href="https://djdxmusic.com/rb-dj-nyc-nj" />
        <meta property="og:title" content="R&B DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional R&B DJ in New York and New Jersey. DJ DX plays classic soul, 90s R&B, neo-soul, and contemporary R&B for parties, weddings, and upscale events." />
        <meta property="og:url" content="https://djdxmusic.com/rb-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="R&B DJ NYC & NJ — DJ DX" />
        <meta name="twitter:description" content="Professional R&B DJ in NYC and NJ. Classic soul, 90s R&B, neo-soul, and contemporary R&B for parties, weddings, and upscale events." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "R&B DJ NYC & NJ — Soul, Neo-Soul & Contemporary R&B",
              "serviceType": "R&B DJ",
              "url": "https://djdxmusic.com/rb-dj-nyc-nj",
              "description": "DJ DX is a professional R&B DJ in New York City and New Jersey, specializing in classic soul, 90s R&B, neo-soul, and contemporary R&B for private parties, weddings, milestone events, and upscale gatherings. 20+ years experience. 500+ events. 3,000+ R&B tracks in rotation.",
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
                {"@type": "City", "name": "Staten Island"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Newark"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "R&B DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Classic Soul DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "90s R&B Party DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Neo-Soul DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Contemporary R&B DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "R&B Wedding DJ New Jersey"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What R&B eras does DJ DX cover at events?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX covers the full spectrum of R&B — classic Motown and soul from the 60s and 70s, the golden era 90s R&B that defined the genre (Aaliyah, Usher, Mary J. Blige, D'Angelo), neo-soul from the 2000s, and today's contemporary R&B artists like SZA, H.E.R., and Brent Faiyaz. With 3,000+ R&B tracks catalogued and 20+ years of experience, every era is covered in depth, not just with surface-level hits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX play R&B for an upscale or formal event in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. R&B is one of the most versatile genres for upscale events — it carries sophistication, emotional depth, and a smooth energy that works for cocktail hours, dinner receptions, and late-night celebrations. DJ DX has performed at luxury galas, corporate dinners, wedding receptions, and rooftop events across Manhattan using R&B-forward setlists that match the formal atmosphere while keeping guests engaged throughout the evening."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX mix R&B with other genres or keep it pure R&B?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both options are available. For events where a pure R&B experience is requested — a 90s R&B-themed birthday, a neo-soul dinner set, or a classic soul cocktail hour — DJ DX delivers genre-focused sets with real depth. For mixed-crowd events, R&B serves as the connective tissue between hip-hop, Afrobeats, and house — genres DJ DX has blended for over 500+ events. The approach is always customized based on your event's specific vision."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does an R&B DJ cost in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "R&B DJ rates in NYC and NJ typically range from $1,200 to $3,500+ depending on event duration, venue size, and equipment requirements. DJ DX provides transparent custom quotes within 24 hours — email djdxbusiness@gmail.com with your date, venue, expected guest count, and any genre preferences. Peak weekend and holiday dates book quickly; contact early to check availability."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "R&B DJ NYC NJ", "item": "https://djdxmusic.com/rb-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="R&B DJ New York City — DJ DX soul and contemporary R&B events" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">R&B DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            NYC's <span>R&B DJ</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Classic soul, 90s R&B, neo-soul, and everything in between —
            DJ DX brings the full depth of R&B to every event.
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
                <div className="sec-overline"><span className="sec-label">The Full Spectrum</span></div>
                <h2 className="sec-title">R&B Is <span>a Lifestyle</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>R&B is the most emotionally resonant genre in American music — and it demands a DJ who doesn't just know the hits but understands the depth. DJ DX has spent over 20 years building a catalogue that spans classic Motown and soul, the golden era of 90s R&B (Aaliyah, Usher, Mary J. Blige, Maxwell, D'Angelo), the neo-soul renaissance of the 2000s, and today's boundary-pushing contemporary artists like SZA, H.E.R., Frank Ocean, and Brent Faiyaz.</p>
                <p>R&B works at every level of an event — it provides elegant background music during cocktail hours, emotional peaks during milestone moments, and danceable energy when the floor needs to move. DJ DX has used R&B as the backbone of sets at upscale corporate galas, intimate birthday parties, wedding receptions, and rooftop summer events across Manhattan, Brooklyn, and New Jersey. The genre is a tool; knowing when and how to deploy it is the craft.</p>
                <p>With 3,000+ R&B tracks catalogued across every sub-genre and era, DJ DX brings real depth to R&B bookings — not a surface-level playlist of obvious hits, but a curated journey through the genre that respects its history while connecting it to where it's going. Custom setlists built around your guests, your moment, your vision.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: '3,000+ R&B Tracks', sub: 'Classic soul through contemporary — every era catalogued with real depth, not just the obvious hits.' },
                { label: 'Every R&B Era Covered', sub: 'Motown and soul, 90s golden era, neo-soul, and today\'s SZA/H.E.R./Frank Ocean generation — all in one setlist.' },
                { label: 'Upscale Event Expertise', sub: 'R&B for cocktail hours, wedding receptions, corporate galas, and rooftop events — calibrated to the formality and energy of the room.' },
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
              <span className="sec-overline-line" /><span className="sec-label">R&B Specialties</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">R&B <span>DJ Services</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Classic Soul & Motown', desc: 'The foundation of R&B — Marvin Gaye, Stevie Wonder, Aretha Franklin, and the full Motown catalogue, perfectly mixed for upscale and nostalgic events.' },
              { title: '90s R&B Golden Era', desc: 'Aaliyah, Usher, TLC, Mary J. Blige, Boyz II Men, R. Kelly classics, D\'Angelo, Maxwell — the era that defined the genre for an entire generation.' },
              { title: 'Neo-Soul Sets', desc: 'Erykah Badu, Jill Scott, India.Arie, Anthony Hamilton, and the full neo-soul spectrum — sophisticated, smooth, and perfect for intimate and cocktail events.' },
              { title: 'Contemporary R&B', desc: 'SZA, H.E.R., Frank Ocean, Brent Faiyaz, Jhené Aiko, Summer Walker — today\'s R&B sound for audiences who want something current and elevated.' },
              { title: 'R&B Wedding Sets', desc: 'From ceremony processionals to cocktail hour to first dance to late-night — DJ DX curates R&B sets for every phase of the wedding day.' },
              { title: 'R&B x Hip-Hop Blends', desc: 'For events where the energy needs to build — DJ DX seamlessly blends R&B with hip-hop, Afrobeats, and soul to take a room from dinner to dancefloor.' },
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
            <h2 className="sec-title">R&B DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'What R&B eras does DJ DX cover at events?', a: 'DJ DX covers the full spectrum of R&B — classic Motown and soul from the 60s and 70s, the golden era 90s R&B (Aaliyah, Usher, Mary J. Blige, D\'Angelo), neo-soul from the 2000s, and today\'s contemporary artists like SZA, H.E.R., and Brent Faiyaz. With 3,000+ R&B tracks catalogued and 20+ years of experience, every era is covered in depth, not just surface-level hits.' },
              { q: 'Can DJ DX play R&B for an upscale or formal event in NYC?', a: 'Yes. R&B is one of the most versatile genres for upscale events — it carries sophistication, emotional depth, and a smooth energy that works for cocktail hours, dinner receptions, and late-night celebrations. DJ DX has performed at luxury galas, corporate dinners, and wedding receptions across Manhattan using R&B-forward setlists that match formal atmospheres while keeping guests engaged.' },
              { q: 'Does DJ DX mix R&B with other genres or keep it pure R&B?', a: 'Both options are available. For pure R&B events — a 90s-themed birthday, a neo-soul dinner set, a classic soul cocktail hour — DJ DX delivers genre-focused sets with real depth. For mixed-crowd events, R&B serves as the connective tissue between hip-hop, Afrobeats, and house. The approach is always customized based on your event\'s specific vision and guest demographics.' },
              { q: 'How much does an R&B DJ cost in New York City?', a: 'R&B DJ rates in NYC and NJ typically range from $1,200 to $3,500+ depending on event duration, venue size, and equipment requirements. DJ DX provides transparent custom quotes within 24 hours — email djdxbusiness@gmail.com with your date, venue, and expected guest count. Peak weekend and holiday dates book quickly; contact early to check availability.' },
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
              <h2 className="sec-title">Book the <span>R&B DJ Experience</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Looking for an R&B DJ in New York or New Jersey? Fill out the form with your event details and we'll respond within 24–48 hours with availability and custom pricing.
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
