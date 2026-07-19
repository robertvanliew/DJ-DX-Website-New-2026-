import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import RelatedServices from '../../components/RelatedServices';
import BookingForm from '../../components/BookingForm';

export default function Sweet16HudsonValley() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Hudson Valley Sweet 16 DJ | Kingston, New Paltz & Beyond | DJ DX</title>
        <meta name="description" content="Sweet 16 DJ serving the Hudson Valley — Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, Catskill, and Putnam County. Hip-hop, pop, Afrobeats. Travel quoted upfront." />
        <link rel="canonical" href="https://djdxmusic.com/sweet-16-dj-hudson-valley-ny" />
        <meta property="og:title" content="Hudson Valley Sweet 16 DJ — DJ DX" />
        <meta property="og:description" content="Sweet 16 DJ serving Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, and the greater Hudson Valley. Hip-hop, pop, Afrobeats, and custom sets for her night." />
        <meta property="og:url" content="https://djdxmusic.com/sweet-16-dj-hudson-valley-ny" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Hudson Valley Sweet 16 DJ — DJ DX" />
        <meta name="twitter:description" content="Sweet 16 DJ serving Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, and the greater Hudson Valley." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Hudson Valley Sweet 16 DJ — Hip-Hop, Pop, Afrobeats",
              "serviceType": "Sweet 16 DJ",
              "url": "https://djdxmusic.com/sweet-16-dj-hudson-valley-ny",
              "description": "DJ DX is a Sweet 16 DJ serving the Hudson Valley — Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, Catskill, and Putnam County. Specializing in hip-hop, pop, Afrobeats, Amapiano, and TikTok viral tracks for sweet 16 parties and teen milestone events. 25+ years, 500+ events performed.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "bookings@djdxmusic.com",
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
                {"@type": "City", "name": "Kingston, NY"},
                {"@type": "City", "name": "New Paltz, NY"},
                {"@type": "City", "name": "Saugerties, NY"},
                {"@type": "City", "name": "Red Hook, NY"},
                {"@type": "City", "name": "Wappingers Falls, NY"},
                {"@type": "City", "name": "Millbrook, NY"},
                {"@type": "City", "name": "Catskill, NY"},
                {"@type": "City", "name": "Rhinebeck, NY"},
                {"@type": "City", "name": "Poughkeepsie, NY"},
                {"@type": "AdministrativeArea", "name": "Ulster County, NY"},
                {"@type": "AdministrativeArea", "name": "Dutchess County, NY"},
                {"@type": "AdministrativeArea", "name": "Putnam County, NY"},
                {"@type": "AdministrativeArea", "name": "Hudson Valley"},
                {"@type": "State", "name": "New York"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hudson Valley Sweet 16 DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Sweet 16 Party DJ Hudson Valley"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Sweet 16 DJ Kingston NY"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Sweet 16 DJ New Paltz NY"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Teen Party DJ Dutchess County"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does DJ DX travel to the Hudson Valley for sweet 16 parties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX regularly travels to the Hudson Valley for sweet 16 parties, serving Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, Catskill, Rhinebeck, Poughkeepsie, and surrounding areas across Ulster, Dutchess, and Putnam counties. Travel is quoted upfront as part of a single itemized total — no surprise fees on the invoice."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What music does DJ DX play at Hudson Valley sweet 16 parties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every set is built around what that specific group of teens is actually listening to — current hip-hop, pop, Afrobeats, Amapiano, dancehall, TikTok viral tracks, and Latin pop. The playlist is customized after a direct conversation with the birthday girl and her parents ahead of the event."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX keep the music age-appropriate for sweet 16 parties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every set is built with a mixed adult-teen audience in mind — clean versions, a parental preference consultation ahead of time, and reading the room throughout keep the energy high without anything inappropriate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX do a grand entrance or special moment for a Hudson Valley sweet 16?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. DJ DX coordinates grand entrances, birthday announcement moments, first dance songs, and special choreography breakout segments. These milestone moments are scripted with the host ahead of the event to ensure everything lands perfectly on the night."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a Hudson Valley sweet 16 DJ cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweet 16 DJ rates in the Hudson Valley typically range from $1,000 to $2,800+ depending on event duration, venue, and equipment needed, plus travel from NYC. DJ DX provides a single itemized quote — email bookings@djdxmusic.com with your date, town, venue, and expected number of guests."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Sweet 16 DJ NYC NJ", "item": "https://djdxmusic.com/sweet-16-dj-nyc-nj"},
                {"@type": "ListItem", "position": 3, "name": "Hudson Valley Sweet 16 DJ", "item": "https://djdxmusic.com/sweet-16-dj-hudson-valley-ny"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Hudson Valley Sweet 16 DJ — DJ DX teen milestone events" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Sweet 16 DJ — Hudson Valley, NY</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            Sweet 16 DJ Serving the <span>Hudson Valley</span>
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, and Catskill —
            hip-hop, pop, Afrobeats, and all the songs she's actually listening to right now.
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
                <p>A sweet 16 is one of the most memorable nights of a teenager's life — and the DJ sets the entire tone. For every sweet 16, the process starts with a direct conversation about her specific music taste: what's in rotation on her Spotify right now, what artists she actually loves. Those are the starting points DJ DX builds the whole night around.</p>
                <p>DJ DX travels to the Hudson Valley regularly for private events, bringing 25+ years and 500+ events across weddings, corporate galas, and private parties to every booking. The setlist is engineered in zones — an opening sequence that builds energy, a mid-point peak for the dance floor, a dedicated moment for the birthday highlight, and a closing hour that keeps the party going.</p>
                <p>Today's teen crowd moves between hip-hop, pop, Afrobeats, Amapiano, Latin reggaeton, and TikTok-viral sounds without hesitation — and DJ DX moves with them. Parents in the room get moments too: a crowd-pleasing throwback sequence that signals the DJ understands the full room, not just the birthday girl.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: 'Genre-Fluid for Gen Z', sub: 'Hip-hop, pop, Afrobeats, Amapiano, reggaeton, TikTok — DJ DX speaks the musical language of today\'s teen crowd.' },
                { label: 'Special Moments Scripted', sub: 'Grand entrances, birthday announcements, first songs, choreography breaks — every milestone moment is rehearsed and coordinated.' },
                { label: 'Travel Quoted Upfront', sub: 'One itemized total covering the Hudson Valley trip — no surprise fees added on the day of.' },
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

      {/* ── SERVICE AREA ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner" style={{ maxWidth: '900px' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-overline-line" />
            <span className="sec-label">Service Area</span>
            <span className="sec-overline-line" />
          </div>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Towns Across the <span>Hudson Valley</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Ulster County
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(242,242,242,0.72)', fontSize: '0.95rem', lineHeight: 2 }}>
                <li>Kingston</li>
                <li>New Paltz</li>
                <li>Saugerties</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Dutchess County
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(242,242,242,0.72)', fontSize: '0.95rem', lineHeight: 2 }}>
                <li>Red Hook</li>
                <li>Wappingers Falls</li>
                <li>Millbrook</li>
                <li>Rhinebeck</li>
                <li>Poughkeepsie</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Greene &amp; Putnam Counties
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(242,242,242,0.72)', fontSize: '0.95rem', lineHeight: 2 }}>
                <li>Catskill</li>
                <li>Putnam County (all towns)</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.5)', fontSize: '0.88rem', marginTop: '32px' }}>
            Don't see your town? Email <a href="mailto:bookings@djdxmusic.com" style={{ color: 'var(--gold)' }}>bookings@djdxmusic.com</a> — the Hudson Valley service area covers most of Ulster, Dutchess, Greene, and Putnam counties.
          </p>
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
            <h2 className="sec-title">Hudson Valley Sweet 16 <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'Does DJ DX travel to the Hudson Valley for sweet 16 parties?', a: 'Yes. DJ DX regularly travels to the Hudson Valley for sweet 16 parties, serving Kingston, New Paltz, Saugerties, Red Hook, Wappingers Falls, Millbrook, Catskill, Rhinebeck, Poughkeepsie, and surrounding areas across Ulster, Dutchess, and Putnam counties. Travel is quoted upfront as part of a single itemized total — no surprise fees on the invoice.' },
              { q: 'What music does DJ DX play at Hudson Valley sweet 16 parties?', a: 'Every set is built around what that specific group of teens is actually listening to — current hip-hop, pop, Afrobeats, Amapiano, dancehall, TikTok viral tracks, and Latin pop. The playlist is customized after a direct conversation with the birthday girl and her parents ahead of the event.' },
              { q: 'Does DJ DX keep the music age-appropriate for sweet 16 parties?', a: 'Yes. Every set is built with a mixed adult-teen audience in mind — clean versions, a parental preference consultation ahead of time, and reading the room throughout keep the energy high without anything inappropriate.' },
              { q: 'Can DJ DX do a grand entrance or special moment for a Hudson Valley sweet 16?', a: 'Absolutely. DJ DX coordinates grand entrances, birthday announcement moments, first dance songs, and special choreography breakout segments. These milestone moments are scripted with the host ahead of the event to ensure everything lands perfectly.' },
              { q: 'How much does a Hudson Valley sweet 16 DJ cost?', a: 'Sweet 16 DJ rates in the Hudson Valley typically range from $1,000 to $2,800+ depending on event duration, venue, and equipment needed, plus travel from NYC. DJ DX provides a single itemized quote — email bookings@djdxmusic.com with your date, town, venue, and expected guest count.' },
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
                Looking for a sweet 16 DJ in the Hudson Valley? Fill out the form and we'll respond within 24–48 hours with availability and a custom, itemized quote.
              </p>
            </div>
            <div className="booking-right">
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
