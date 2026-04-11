import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function PrivatePartyDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Private Party DJ NYC & NJ | Birthday, Anniversary & Milestone Events | DJ DX</title>
        <meta name="description" content="NYC's go-to private party DJ — birthday parties, anniversary celebrations, launch events & milestones. Custom sets. Professional. 500+ events. Book DJ DX." />
        <link rel="canonical" href="https://djdxmusic.com/private-party-dj-nyc-nj" />
        <meta property="og:title" content="Private Party DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional private party DJ in New York and New Jersey. DJ DX delivers custom sets for birthday parties, anniversaries, and milestone events. 500+ events performed." />
        <meta property="og:url" content="https://djdxmusic.com/private-party-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Private Party DJ NYC & NJ — DJ DX" />
        <meta name="twitter:description" content="Professional private party DJ in NYC and NJ. Birthday parties, anniversaries, milestones. Custom sets, 500+ events." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Private Party DJ NYC & NJ — Birthdays, Anniversaries & Milestones",
              "serviceType": "Private Party DJ",
              "url": "https://djdxmusic.com/private-party-dj-nyc-nj",
              "description": "DJ DX is a professional private party DJ in New York City and New Jersey available for birthday parties, anniversary celebrations, milestone events, launch parties, and exclusive private gatherings. R&B, Hip-Hop, Afrobeats, House, and more. 20+ years experience. 500+ events performed.",
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
                {"@type": "City", "name": "Hoboken"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Private Party DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Birthday Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Anniversary Party DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Milestone Celebration DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Launch Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Exclusive Private Event DJ New Jersey"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of private parties does DJ DX perform at in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX performs at birthday parties (18th, 21st, 30th, 40th, 50th milestones), anniversary celebrations, retirement parties, graduation parties, launch events, housewarming parties, and any private gathering where the music needs to be exceptional. Venues range from Manhattan rooftops and Brooklyn lofts to New Jersey estates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX customize the music for a specific birthday party theme?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX works directly with the host before every event to build a custom setlist — including the guest of honor's favorite artists, must-play songs, and any theme the party is built around. Decade-specific sets (80s, 90s, 2000s), genre themes, and artist tributes are all available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX bring sound and lighting equipment to private parties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX provides professional-grade sound systems and can coordinate lighting for private events. Setup requirements depend on the venue size and type. When you fill out the booking form, include the venue details and we'll advise on the appropriate equipment package."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far in advance should I book a private party DJ in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ideally 4–8 weeks in advance for most private parties in NYC and NJ. For peak dates (summer weekends, holiday weekends, New Year's Eve), book 3–6 months ahead. DJ DX does accommodate last-minute bookings when the calendar allows — check availability by contacting djdxbusiness@gmail.com."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Private Party DJ NYC NJ", "item": "https://djdxmusic.com/private-party-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Private Party DJ New York City — DJ DX birthday and milestone events" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Private Party DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            NYC's Private <span>Party DJ</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Birthdays, anniversaries, milestones, and launch parties — DJ DX makes
            your private event the one your guests never stop talking about.
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
                <div className="sec-overline"><span className="sec-label">Custom From the Start</span></div>
                <h2 className="sec-title">Your Party. <span>Your Music.</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>A private party is exactly that — personal. The music isn't supposed to feel like a venue's house playlist. It should feel like the person being celebrated: their tastes, their memories, their energy. DJ DX has spent over two decades learning how to translate a person into a setlist — researching the guest of honor's musical identity and building something that feels singularly theirs.</p>
                <p>From intimate birthday gatherings in Brooklyn lofts to sprawling anniversary galas at New Jersey estates, DJ DX brings the same level of craft to every private event regardless of scale. The pre-event consultation is thorough: DJ DX reviews the guest list age range, the host's musical preferences, any must-plays and never-plays, and the venue dimensions to build a sound plan that serves the space.</p>
                <p>Private parties also demand real-time responsiveness — knowing when to drop the tempo, when to ignite it, and when a surprise song will make twenty people rush the floor. That instinct is the product of 500+ events and a genuine love for DJing as a performing art.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { num: '500+', label: 'Events Performed', sub: 'Every type of private event — birthdays, anniversaries, launches, milestones, and more.' },
                { label: 'Pre-Event Consultation', sub: 'DJ DX works with you ahead of every booking to map must-plays, guest preferences, and the evening\'s arc.' },
                { label: 'Every Genre, Every Era', sub: 'R&B, Hip-Hop, Afrobeats, House, Old School — private party setlists are built from scratch every time.' },
              ].map(s => (
                <div className="stat-row sr" key={s.label}>
                  {'num' in s && <div className="stat-num">{(s as {num: string; label: string; sub: string}).num}</div>}
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
              <span className="sec-overline-line" /><span className="sec-label">Event Types</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Private <span>Party Services</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Birthday Party DJ', desc: 'Custom age-appropriate sets for 18th through 50th birthdays — built around the guest of honor\'s taste with crowd-reading expertise.' },
              { title: 'Anniversary Celebrations', desc: 'Romantic, sophisticated, and celebratory — DJ DX builds anniversary party setlists that honor the couple while keeping the floor active.' },
              { title: 'Milestone Events', desc: 'Graduations, retirements, 50th birthday galas — music that marks the moment and creates lasting memories for everyone in the room.' },
              { title: 'Launch Parties', desc: 'Brand launches, product unveilings, and entrepreneurial celebrations with a high-energy soundtrack that amplifies the event\'s identity.' },
              { title: 'Themed Private Parties', desc: '80s night, 90s throwback, Afrobeats fete, hip-hop block party — DJ DX executes theme-specific sets with full commitment and depth.' },
              { title: 'Intimate Gatherings', desc: 'From 20-person loft parties to 200-guest estate events — DJ DX scales the performance to the setting without sacrificing quality.' },
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
            <h2 className="sec-title">Private Party DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'What types of private parties does DJ DX perform at in NYC?', a: 'DJ DX performs at birthday parties (18th, 21st, 30th, 40th, 50th milestones), anniversary celebrations, retirement parties, graduation parties, launch events, and housewarming parties. Venues range from Manhattan rooftops and Brooklyn lofts to New Jersey estates.' },
              { q: 'Can DJ DX customize the music for a specific birthday party theme?', a: 'Yes. DJ DX works directly with the host before every event to build a custom setlist — including the guest of honor\'s favorite artists, must-play songs, and any theme the party is built around. Decade-specific sets, genre themes, and artist tributes are all available.' },
              { q: 'Does DJ DX bring sound and lighting equipment to private parties?', a: 'Yes. DJ DX provides professional-grade sound systems and can coordinate lighting for private events. Setup requirements depend on the venue size and type. Include the venue details in the booking form and we\'ll advise on the appropriate equipment package.' },
              { q: 'How far in advance should I book a private party DJ in New York City?', a: 'Ideally 4–8 weeks in advance for most private parties in NYC and NJ. For peak dates (summer weekends, holidays, New Year\'s Eve), book 3–6 months ahead. Last-minute bookings are accommodated when the calendar allows — contact djdxbusiness@gmail.com to check availability.' },
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
              <h2 className="sec-title">Make Your Party <span>Unforgettable</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Ready to book a private party DJ in New York or New Jersey? Fill out the form with your event details and we'll respond within 24–48 hours.
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
