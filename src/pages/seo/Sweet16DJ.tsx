import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function Sweet16DJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Sweet 16 DJ NYC & NJ | Hip-Hop, Pop, Afrobeats | DJ DX</title>
        <meta name="description" content="Looking for a sweet 16 DJ in NYC or NJ? DJ DX brings the energy — hip-hop, pop, Afrobeats & custom sets for an unforgettable sweet sixteen party. Book now." />
        <link rel="canonical" href="https://djdxmusic.com/sweet-16-dj-nyc-nj" />
        <meta property="og:title" content="Sweet 16 DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional sweet 16 DJ in New York and New Jersey. DJ DX plays hip-hop, pop, Afrobeats, and all the songs teens are actually listening to. Custom sets, grand entrance coordination." />
        <meta property="og:url" content="https://djdxmusic.com/sweet-16-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Sweet 16 DJ NYC & NJ — DJ DX" />
        <meta name="twitter:description" content="Professional sweet 16 DJ in NYC and NJ. Hip-hop, pop, Afrobeats, and custom sets for unforgettable sweet sixteen parties." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Sweet 16 DJ NYC & NJ — Hip-Hop, Pop, Afrobeats",
              "serviceType": "Sweet 16 DJ",
              "url": "https://djdxmusic.com/sweet-16-dj-nyc-nj",
              "description": "DJ DX is a professional sweet sixteen DJ in New York City and New Jersey. Specializing in hip-hop, pop, Afrobeats, Amapiano, dancehall, and TikTok viral tracks for sweet 16 parties and teen milestone events. 500+ events performed. Available for venues across NYC and NJ.",
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
                "name": "Sweet 16 DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Sweet 16 Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Sweet Sixteen DJ New Jersey"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Teen Party DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop Sweet 16 DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Afrobeats Sweet 16 DJ NYC"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What music does DJ DX play at sweet 16 parties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX builds every sweet 16 setlist around what that specific group of teens is actually listening to — current hip-hop, pop, Afrobeats, Amapiano, dancehall, TikTok viral tracks, and Latin pop. The playlist is customized after a direct conversation with the birthday girl and her parents. Old school surprises for the parents in the room are included too."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX keep the music age-appropriate for sweet 16 parties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX is experienced with family-attended events and can maintain the energy and vibe of current music while keeping content appropriate for a mixed adult-teen audience. Clean versions, parental preference consultation, and reading the room are all part of the service."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX do a grand entrance or special moment for the sweet 16?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. DJ DX coordinates grand entrances, birthday announcement moments, first dance songs (if applicable), and special choreography breakout segments. These milestone moments are scripted with the host ahead of the event to ensure everything lands perfectly on the night."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a sweet 16 DJ cost in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweet 16 DJ rates in NYC and NJ typically range from $1,000 to $2,800+ depending on event duration, venue, and equipment needed. DJ DX provides transparent custom quotes — email djdxbusiness@gmail.com with your date, venue, and expected number of guests."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Sweet 16 DJ NYC NJ", "item": "https://djdxmusic.com/sweet-16-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Sweet 16 Party DJ New York City — DJ DX teen milestone events" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Sweet 16 DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            The DJ That Makes Her <span>Sweet 16 Legendary</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Hip-hop, pop, Afrobeats, and all the songs she's actually listening to right now —
            custom-built for her night, her style, her energy.
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
                <div className="sec-overline"><span className="sec-label">Built for Her Moment</span></div>
                <h2 className="sec-title">Her Night. <span>Her Music.</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>A sweet 16 is one of the most memorable nights of a teenager's life — and the DJ sets the entire tone. DJ DX approaches sweet sixteens differently than most: rather than assuming what teens want to hear, the process starts with a direct conversation about her specific music taste. What's in rotation on her Spotify right now? What artists does she actually love? Those are the starting points.</p>
                <p>The sweet 16 crowd presents a unique challenge: teenagers with current tastes, parents who want appropriate content, and a birthday girl who needs to feel like the night was built specifically for her. DJ DX navigates this balance with experience built across 500+ events. The setlist is engineered in zones — an opening sequence that builds energy, a mid-point peak for the dance floor, a dedicated moment for the birthday highlight, and a closing hour that keeps the party going.</p>
                <p>Today's teen crowd moves between hip-hop, pop, Afrobeats, Amapiano, Latin reggaeton, and TikTok-viral sounds without hesitation — and DJ DX moves with them. Parents in the room get moments too: a crowd-pleasing throwback sequence that signals the DJ understands the full room, not just the birthday girl.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: 'Genre-Fluid for Gen Z', sub: 'Hip-hop, pop, Afrobeats, Amapiano, reggaeton, TikTok — DJ DX speaks the musical language of today\'s teen crowd.' },
                { label: 'Special Moments Scripted', sub: 'Grand entrances, birthday announcements, first songs, choreography breaks — every milestone moment is rehearsed and coordinated.' },
                { label: 'Family-Friendly Energy', sub: 'High energy, current music, age-appropriate content — DJ DX keeps parents comfortable and teens on the floor simultaneously.' },
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
              <span className="sec-overline-line" /><span className="sec-label">What's Included</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Sweet 16 <span>Services</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Hip-Hop & Trap Sets', desc: 'Current Billboard hip-hop, viral trap anthems, and clean-version fan favorites curated specifically for today\'s teenage crowd.' },
              { title: 'Pop & TikTok Viral', desc: 'The songs blowing up on TikTok and streaming right now — DJ DX stays current so the sweet 16 soundtrack feels fresh, not dated.' },
              { title: 'Afrobeats & Amapiano', desc: 'For multicultural sweet 16 events, DJ DX brings the Afrobeats and Amapiano energy that Gen Z is actively listening to globally.' },
              { title: 'Latin Pop & Reggaeton', desc: 'Bad Bunny, J Balvin — Latin party energy that brings diverse groups together on one dance floor.' },
              { title: 'Grand Entrance & Special Moments', desc: 'Scripted DJ-assisted grand entrance, birthday song, and key event moments that make the night feel truly cinematic.' },
              { title: 'Throwbacks for the Parents', desc: 'Strategic Old School and 90s/2000s drops that get the parents off their seats and prove DJ DX reads the whole room.' },
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
            <h2 className="sec-title">Sweet 16 DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'What music does DJ DX play at sweet 16 parties?', a: 'DJ DX builds every sweet 16 setlist around what that specific group of teens is actually listening to — current hip-hop, pop, Afrobeats, Amapiano, dancehall, TikTok viral tracks, and Latin pop. The playlist is customized after a direct conversation with the birthday girl and her parents.' },
              { q: 'Does DJ DX keep the music age-appropriate for sweet 16 parties?', a: 'Yes. DJ DX is experienced with family-attended events and maintains the energy of current music while keeping content appropriate for a mixed adult-teen audience. Clean versions, parental preference consultation, and room reading are all part of the service.' },
              { q: 'Can DJ DX do a grand entrance or special moment for the sweet 16?', a: 'Absolutely. DJ DX coordinates grand entrances, birthday announcement moments, first dance songs, and special choreography breakout segments. These milestone moments are scripted with the host ahead of the event to ensure everything lands perfectly.' },
              { q: 'How much does a sweet 16 DJ cost in New York City?', a: 'Sweet 16 DJ rates in NYC and NJ typically range from $1,000 to $2,800+ depending on event duration, venue, and equipment needed. DJ DX provides transparent custom quotes — email djdxbusiness@gmail.com with your date, venue, and expected guest count.' },
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
              <h2 className="sec-title">Make Her Sweet 16 <span>Unforgettable</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Looking for a sweet 16 DJ in New York or New Jersey? Fill out the form and we'll respond within 24–48 hours with availability and custom pricing.
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
