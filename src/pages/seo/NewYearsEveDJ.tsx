import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function NewYearsEveDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>New Year's Eve DJ NYC | NYE Party DJ New York | DJ DX</title>
        <meta name="description" content="Book NYC's premier NYE DJ — DJ DX delivers an unforgettable New Year's Eve countdown for private parties, corporate galas, and rooftop events across Manhattan, Brooklyn & NJ. Limited dates." />
        <link rel="canonical" href="https://djdxmusic.com/new-years-eve-dj-nyc" />
        <meta property="og:title" content="New Year's Eve DJ NYC — DJ DX" />
        <meta property="og:description" content="NYC's premier NYE DJ for private parties, corporate galas, and rooftop countdowns. DJ DX engineers the midnight moment. One slot per year — book early." />
        <meta property="og:url" content="https://djdxmusic.com/new-years-eve-dj-nyc" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="New Year's Eve DJ NYC — DJ DX" />
        <meta name="twitter:description" content="NYC's premier NYE DJ. One slot per year. Private parties, corporate galas, rooftop countdowns. Book early." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "New Year's Eve DJ NYC — NYE Party DJ New York",
              "serviceType": "New Year's Eve DJ",
              "url": "https://djdxmusic.com/new-years-eve-dj-nyc",
              "description": "DJ DX is a premier New Year's Eve DJ in New York City, delivering high-energy NYE performances at private parties, corporate NYE galas, rooftop countdowns, and nightclub residencies across Manhattan, Brooklyn, and New Jersey. 20+ years experience. One NYE slot available per year — book early.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$-$$$$",
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
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Hoboken"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "NYE DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "NYE Private Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "New Year's Eve Corporate Gala DJ Manhattan"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "NYE Rooftop Countdown DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "New Year's Eve Nightclub DJ NJ"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I book DJ DX for New Year's Eve in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Email djdxbusiness@gmail.com or use the booking form on this page. NYE is DJ DX's single most in-demand date — only one slot is available per year. Inquiries received by November 1st receive priority. Include your event type, venue, expected guest count, and budget range. Do not wait until December — this date books months in advance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What type of NYE events does DJ DX perform at?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX performs at private NYE parties (loft events, estate gatherings), corporate New Year's Eve galas, rooftop countdown parties, nightclub NYE residencies, and restaurant and lounge NYE celebrations across NYC and NJ. Every NYE set is engineered specifically for the midnight moment and the hours building up to it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does a DJ DX NYE set look like musically?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A DJ DX New Year's Eve set is built in deliberate phases: an elegant early-evening mix (R&B, Neo-Soul, background energy), a building mid-night hour that ramps up with hip-hop and Afrobeats, a scripted countdown sequence with maximum energy, and a post-midnight floor peak that keeps the party going until 2–3am. The midnight moment itself is engineered to make the entire room erupt simultaneously."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far in advance should I book a New Year's Eve DJ in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As early as possible — ideally by September or October. NYE is the most competitive booking date in the DJ calendar. Premium DJs in NYC are often fully booked by October 31st. Contact djdxbusiness@gmail.com now to check availability for the upcoming New Year's Eve."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "New Year's Eve DJ NYC", "item": "https://djdxmusic.com/new-years-eve-dj-nyc"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="New Year's Eve Party DJ New York City — DJ DX NYE countdown performance" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">New Year's Eve DJ — New York City</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', marginBottom: '1.2rem' }}>
            NYC's NYE DJ — <span>One Night. One Set. Unforgettable.</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 1rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            The countdown demands the best. DJ DX engineers NYE sets for private parties,
            corporate galas, and rooftop countdowns across New York.
          </p>
          <p style={{ maxWidth: '500px', margin: '0 auto 2rem', fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            One slot available per year — inquire early
          </p>
          <a href="#booking" className="btn-gold">Check NYE Availability</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr">
                <div className="sec-overline"><span className="sec-label">The Midnight Standard</span></div>
                <h2 className="sec-title">The Midnight <span>Moment Matters</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>New Year's Eve is the only night of the year where the entire room counts down together to a single second. That moment — the transition from 11:59 to 12:00 — has to be perfect. The buildup, the drop, the eruption, the song choice that carries the room from excitement into celebration — these decisions require years of reading crowds and engineering peak moments. DJ DX has been engineering them for over two decades.</p>
                <p>A DJ DX NYE set is an architecture, not a playlist. The early evening is designed for conversation and arrival energy — warm R&amp;B and neo-soul that sets a premium tone. As midnight approaches, the BPMs climb, the genres shift toward hip-hop and Afrobeats, and the energy builds in a curve that feels natural rather than forced. The countdown itself is a production moment: scripted, synced, and designed to make everyone erupt simultaneously.</p>
                <p>After midnight, the job isn't done — it's just beginning. DJ DX keeps the energy elevated for the hours after midnight, transitioning seamlessly through genres and eras to ensure the party runs until the last guest is ready to leave. One NYE slot. One chance to make the night legendary.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: 'One Slot Per NYE', sub: 'DJ DX accepts one New Year\'s Eve booking per year. This is not a high-volume operation — it\'s a commitment to doing one night right.' },
                { label: 'Scripted Midnight Moment', sub: 'The countdown transition is choreographed in advance — the buildup, the drop, and the post-midnight set are all deliberately designed.' },
                { label: 'Premium NYE Rates Apply', sub: 'New Year\'s Eve is premium-priced. Contact early for an accurate quote and to discuss the full scope of the evening.' },
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
              <span className="sec-overline-line" /><span className="sec-label">NYE Events</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">New Year's Eve <span>Packages</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Private NYE Party', desc: 'Exclusive gatherings in Manhattan lofts, Brooklyn venues, and New Jersey estates — intimate to 200+ guests.' },
              { title: 'Corporate NYE Gala', desc: 'Polished, professional New Year\'s Eve entertainment for company celebrations and corporate year-end events.' },
              { title: 'Rooftop NYE Countdown', desc: 'The ultimate NYC experience: rooftop countdown with the city skyline and DJ DX as the soundtrack.' },
              { title: 'Nightclub & Venue', desc: 'NYE nightclub sets with the experience and draw of a TED-featured DJ — premium entertainment for venue promoters.' },
              { title: 'Restaurant & Lounge', desc: 'Ambient-to-peak NYE curation for restaurant and lounge settings — building energy through dinner into celebration.' },
              { title: 'Full-Night NYE Production', desc: 'Complete NYE musical direction from 9pm through 2am+ — cocktail hour, dinner, countdown, and after-party.' },
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
            <h2 className="sec-title">NYE DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'How do I book DJ DX for New Year\'s Eve in NYC?', a: 'Email djdxbusiness@gmail.com or use the form below. NYE is DJ DX\'s single most in-demand date — only one slot is available per year. Inquiries received by November 1st receive priority. Include your event type, venue, expected guest count, and budget range.' },
              { q: 'What type of NYE events does DJ DX perform at?', a: 'DJ DX performs at private NYE parties, corporate New Year\'s Eve galas, rooftop countdown parties, nightclub NYE residencies, and restaurant and lounge NYE celebrations across NYC and NJ. Every NYE set is engineered specifically for the midnight moment.' },
              { q: 'What does a DJ DX NYE set look like musically?', a: 'A DJ DX NYE set is built in phases: elegant early-evening R&B and neo-soul, a building mid-night ramp-up with hip-hop and Afrobeats, a scripted countdown sequence, and a post-midnight floor peak that keeps the party going until 2–3am. The midnight moment is engineered to make the entire room erupt.' },
              { q: 'How far in advance should I book a NYE DJ in NYC?', a: 'As early as possible — ideally by September or October. NYE is the most competitive booking date in the DJ calendar. Premium DJs in NYC are often fully booked by October 31st. Contact djdxbusiness@gmail.com now to check availability.' },
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
              <div className="sec-overline"><span className="sec-label">NYE Bookings</span></div>
              <h2 className="sec-title">Reserve Your <span>NYE Date</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                One New Year's Eve slot available. Fill out the form with your event details and we'll respond within 24 hours. Don't wait — this date books months in advance.
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
