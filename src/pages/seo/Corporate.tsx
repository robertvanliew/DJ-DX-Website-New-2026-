import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import RelatedServices from '../../components/RelatedServices';
import BookingForm from '../../components/BookingForm';
import HeroPhotoSlideshow from '../../components/HeroPhotoSlideshow';

// Real corporate event photos — add more here as they come in.
const CORPORATE_HERO_PHOTOS = [
  { src: '/nautadutilh-dj-booth-cathedral-nyc.jpg', alt: 'DJ DX at the DJ booth, NautaDutilh corporate reception rooftop, NYC skyline and St. Patrick\'s Cathedral' },
  { src: '/nautadutilh-julie-violin-cathedral-nyc.jpg', alt: 'Julie Schatz performing live violin, NautaDutilh rooftop reception, St. Patrick\'s Cathedral backdrop' },
  { src: '/nautadutilh-group-photo-cathedral-nyc.jpg', alt: 'NautaDutilh corporate reception guests, rooftop garden with St. Patrick\'s Cathedral and Manhattan skyline' },
];

export default function Corporate() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Corporate Event DJ NYC, NJ, CT: From $2,000 | DJ DX</title>
        <meta name="description" content="Corporate event DJ in NYC, NJ, or CT starting at $2,000. Brand-safe, HR-approved playlists for galas, holiday parties, and brand activations — including recent work for NautaDutilh at 620 Loft & Garden. Custom quote in 24 hours." />
        <link rel="canonical" href="https://djdxmusic.com/corporate-event-dj-nyc-nj-ct" />
        <meta property="og:title" content="Corporate Event DJ NYC, NJ, CT — DJ DX" />
        <meta property="og:description" content="Professional corporate event DJ for Fortune 500 galas, holiday parties, and luxury brand activations. DJ DX — NYC's premium corporate entertainment. TED-featured, 500+ events." />
        <meta property="og:url" content="https://djdxmusic.com/corporate-event-dj-nyc-nj-ct" />
        <meta property="og:image" content="https://djdxmusic.com/latest-corporate-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Corporate Event DJ NYC, NJ, CT — DJ DX" />
        <meta name="twitter:description" content="Professional corporate event DJ for Fortune 500 galas, holiday parties, and luxury brand activations in NYC and the tri-state area." />
        <meta name="twitter:image" content="https://djdxmusic.com/latest-corporate-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Corporate Event DJ NYC, NJ & CT",
              "serviceType": "Corporate Event DJ",
              "url": "https://djdxmusic.com/corporate-event-dj-nyc-nj-ct",
              "description": "Professional DJ entertainment for Fortune 500 companies, corporate galas, holiday parties, product launches, and luxury brand activations across New York City, New Jersey, and Connecticut. DJ DX brings 25+ years of experience and 500+ events performed.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "bookings@djdxmusic.com",
                "priceRange": "$$$",
                "sameAs": ["https://djdxmusic.com/", "https://www.ted.com/talks/dj_dx_finally_moving", "https://share.google/v7RARn4fdsghIcXyX", "https://profile.google.com/@djdxmusic"],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "6",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              "areaServed": [
                {"@type": "City", "name": "New York City"},
                {"@type": "City", "name": "Manhattan"},
                {"@type": "City", "name": "Brooklyn"},
                {"@type": "City", "name": "Long Island"},
                {"@type": "City", "name": "Westchester"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Hoboken"},
                {"@type": "City", "name": "Newark"},
                {"@type": "City", "name": "Stamford"},
                {"@type": "City", "name": "Greenwich"},
                {"@type": "City", "name": "New Haven"},
                {"@type": "City", "name": "Hartford"},
                {"@type": "State", "name": "New York"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area (NY, NJ, CT)"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Corporate DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Gala DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Holiday Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Brand Activation DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Product Launch Entertainment"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Live Violin and DJ Duo for Corporate Events"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes DJ DX different from other corporate event DJs in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX brings 25+ years of professional experience, a TEDx performance credit, and a proven track record of 500+ events across New York, New Jersey, and Connecticut to every corporate booking. Specialties include clean, HR-approved playlist curation, professional emcee services, and the ability to read a room — shifting seamlessly from background networking music to a full dance floor closer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a corporate event DJ cost in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Corporate event DJ pricing in New York City typically ranges from $2,000 to $8,000+ depending on event duration, guest count, setup complexity, and whether emcee or live entertainment add-ons like the Soul Shades violin duo are included. DJ DX provides transparent, itemized quotes within 24–48 hours — contact bookings@djdxmusic.com with your event date, venue, and estimated guest count."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX provide clean, work-appropriate playlists for corporate events?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX specializes in radio-edited, HR-approved music programming designed specifically for professional corporate environments. Sets are custom-curated to maintain appropriate volume levels for networking during cocktail hour, then escalate to high-energy dance floor programming for the event's social portion. No inappropriate lyrics, no embarrassing moments — just sophisticated entertainment that reflects well on your brand and event team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of corporate events does DJ DX perform at in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX performs at Fortune 500 holiday parties, corporate galas, product launches, brand activations, award ceremonies, rooftop events, and executive retreats across New York City, New Jersey, and Connecticut. The Soul Shades violin and DJ duo package is particularly popular for upscale brand activations and gala dinners where live music elevates the experience beyond a standard DJ set."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Corporate Event DJ NYC NJ CT", "item": "https://djdxmusic.com/corporate-event-dj-nyc-nj-ct"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <HeroPhotoSlideshow photos={CORPORATE_HERO_PHOTOS} />
        </div>
        <div className="epk-hero-overlay" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at bottom right, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 8%, transparent 20%), linear-gradient(to bottom, rgba(12,12,12,0.1) 0%, rgba(12,12,12,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.2) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Corporate Entertainment</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            Elevate Your Corporate Event
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Premium, brand-safe DJ and Producer entertainment for Fortune 500 holiday parties, 
            galas, and luxury activations across New York, New Jersey, and Connecticut.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#booking" className="btn-gold">Request Quote</a>
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
                  <span className="sec-label">Why DJ DX / Soul Shades?</span>
                </div>
                <h2 className="sec-title">The Corporate <span>Standard</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  Finding the right entertainment for a corporate event in the NY, NJ, or CT area is entirely different from booking a nightclub or a wedding. 
                  You need absolute professionalism, perfect volume control for networking, and talent who genuinely understands the flow of an executive "run of show."
                </p>
                <p>
                  <strong>No cheesy gimmicks, no inappropriate playlists.</strong> Whether you book DJ DX individually or the high-energy live DJ/Producer duo Soul Shades, expect seamless, sophisticated music curation that matches the prestige of your brand. We specialize in curating the perfect vibe—from tasteful background music during dinner & cocktails to packed dance floors to close out the night.
                </p>
                <p>
                  With over 25 years of experience, TEDx features, and countless high-end performances across the NYC/NJ/CT tri-state area, DJ DX and Soul Shades represent the trusted choice for discerning corporate event planners.
                </p>
                <p>
                  Recent booking: the <strong>NautaDutilh</strong> reception at <strong>620 Loft &amp; Garden</strong>, a rooftop garden space overlooking St. Patrick's Cathedral and the Rockefeller Center skyline. 175 guests, full evening coverage from cocktail hour through the after-party — DJ DX on the decks with Soul Shades violinist Julie Schatz layering live strings over the set.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Clean Corporate Playlists</div>
                  <div className="stat-sub">Radio-edited, HR-approved music that keeps the dance floor packed while staying appropriate for the workplace.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>MC Duties & Announcements</div>
                  <div className="stat-sub">Need someone to announce awards or introduce the CEO? We handle all MC duties with a clear, professional voice.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Premium Sound & Lighting</div>
                  <div className="stat-sub">We provide full-scale audio and lighting add-ons tailored to your venue size, ensuring a pristine auditory and visual experience without the hassle of third-party rentals.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT BOOKING SHOWCASE ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner" style={{ maxWidth: '1100px' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-overline-line" />
            <span className="sec-label">Recent Booking</span>
            <span className="sec-overline-line" />
          </div>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '12px' }}>
            NautaDutilh Reception — <span>620 Loft &amp; Garden</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.62)', maxWidth: '680px', margin: '0 auto 48px', fontSize: '1rem', lineHeight: 1.7 }}>
            June 2026 — a 175-guest rooftop reception for the international law firm NautaDutilh, steps from Rockefeller Center with St. Patrick's Cathedral as the backdrop.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: '24px', alignItems: 'stretch' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', aspectRatio: '9/16', maxHeight: '520px' }}>
              <video
                src="/videos/nautadutilh-rooftop-night-nyc.mp4"
                poster="/nautadutilh-rooftop-night-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="DJ DX rooftop setup at night, Manhattan skyline, NautaDutilh reception at 620 Loft & Garden"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <img
                src="/nautadutilh-dj-dx-620-loft-garden-nyc.jpg"
                alt="DJ DX performing at the NautaDutilh corporate reception, 620 Loft & Garden rooftop, NYC, with St. Patrick's Cathedral in the background"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}
              />
              <img
                src="/nautadutilh-soul-shades-violin-nyc.jpg"
                alt="Soul Shades violinist Julie Schatz performing live at the NautaDutilh rooftop reception, 620 Loft & Garden, NYC"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}
              />
              <img
                src="/nautadutilh-violin-skyline-nyc.jpg"
                alt="Live violin and DJ duo performance with Manhattan skyline and St. Patrick's Cathedral, 620 Loft & Garden rooftop, NYC"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', gridColumn: '1 / -1', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '24px' }}>
              <p style={{ fontSize: '0.92rem', color: 'rgba(242,242,242,0.75)', lineHeight: 1.7, marginBottom: '14px' }}>
                &ldquo;The music was just perfect and the vibe was great. I love the uniqueness of keyboard and violin together with DJing — I don&apos;t think there are a lot of DJs who come with this built into the duo.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                Sue Krebs<span style={{ fontWeight: 400, color: 'rgba(242,242,242,0.5)' }}> — NautaDutilh New York P.C.</span>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '24px' }}>
              <p style={{ fontSize: '0.92rem', color: 'rgba(242,242,242,0.75)', lineHeight: 1.7, marginBottom: '14px' }}>
                &ldquo;Your performance set the tone for our event, and the addition of the violin amplified our guests&apos; experience and made the evening memorable.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                Anna Naraine<span style={{ fontWeight: 400, color: 'rgba(242,242,242,0.5)' }}> — NautaDutilh New York P.C.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VENUES & INDUSTRIES ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner" style={{ maxWidth: '1100px' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-overline-line" />
            <span className="sec-label">Venues & Industries</span>
            <span className="sec-overline-line" />
          </div>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '12px' }}>
            Where DJ DX <span>Performs</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.62)', maxWidth: '720px', margin: '0 auto 56px', fontSize: '1rem', lineHeight: 1.7 }}>
            Two decades of corporate work across the tri-state means familiarity with the venues, AV teams, and production cadences planners already know.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Manhattan Venues
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(242,242,242,0.72)', fontSize: '0.95rem', lineHeight: 2 }}>
                <li>Pier Sixty &amp; Pier 61 (Chelsea Piers)</li>
                <li>Cipriani — Wall Street, 25 Broadway, 42nd</li>
                <li>Tribeca Rooftop</li>
                <li>Edison Ballroom</li>
                <li>The Plaza Hotel</li>
                <li>620 Loft &amp; Garden</li>
                <li>Brooklyn Navy Yard event spaces</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                NJ &amp; CT Venues
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(242,242,242,0.72)', fontSize: '0.95rem', lineHeight: 2 }}>
                <li>Maritime Parc — Jersey City</li>
                <li>Liberty House — Jersey City</li>
                <li>The Newark Club</li>
                <li>Stamford Hilton &amp; Marriott</li>
                <li>Greenwich Country Club</li>
                <li>Hoboken waterfront spaces</li>
                <li>Bergen County corporate campuses</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Industries Served
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(242,242,242,0.72)', fontSize: '0.95rem', lineHeight: 2 }}>
                <li>Finance &amp; investment banking</li>
                <li>Tech &amp; SaaS product launches</li>
                <li>Fashion &amp; lifestyle activations</li>
                <li>Hospitality &amp; hotel openings</li>
                <li>Law firms &amp; consulting partners</li>
                <li>Non-profits &amp; foundation galas</li>
                <li>Media, agencies &amp; publishing</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '32px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '10px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontWeight: 700 }}>
              What's Included
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', textAlign: 'left' }}>
              {[
                { label: 'Full DJ rig', desc: 'Pioneer / Rane setup, professional mixer, backup gear on-site.' },
                { label: 'PA & monitors', desc: 'QSC or comparable line array sized to room and headcount.' },
                { label: 'MC services', desc: 'Award announcements, speaker intros, run-of-show calls.' },
                { label: 'Set planning call', desc: 'Walkthrough of timeline, do-not-play list, energy curve.' },
                { label: 'Insurance', desc: 'COI provided for any venue that requires it.' },
                { label: 'Soul Shades upgrade', desc: 'Add live violin / live producer duo for galas.' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ color: 'rgba(242,242,242,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <div className="sec-header center sr">
            <h2 className="sec-title">Corporate DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'What makes DJ DX different from other corporate event DJs in NYC?', a: 'DJ DX brings 25+ years of professional experience, a TEDx performance credit, and a proven track record of 500+ events across New York, New Jersey, and Connecticut to every corporate booking. Specialties include clean, HR-approved playlist curation, professional emcee services, and the ability to read a room — shifting seamlessly from background networking music to a full dance floor closer.' },
              { q: 'How much does a corporate event DJ cost in New York City?', a: 'Corporate event DJ pricing in NYC typically ranges from $2,000 to $8,000+ depending on event duration, guest count, and whether add-ons like the Soul Shades violin duo are included. DJ DX provides transparent, itemized quotes within 24–48 hours — contact bookings@djdxmusic.com with your event date, venue, and guest count.' },
              { q: 'Does DJ DX provide clean, work-appropriate playlists for corporate events?', a: 'Yes. DJ DX specializes in radio-edited, HR-approved music programming for professional corporate environments. Sets are curated to maintain appropriate volume for networking during cocktail hour, then escalate to high-energy dance floor programming for the social portion. No inappropriate lyrics, no embarrassing moments.' },
              { q: 'What types of corporate events does DJ DX perform at in NYC?', a: 'DJ DX performs at Fortune 500 holiday parties, corporate galas, product launches, brand activations, award ceremonies, rooftop events, and executive retreats across NYC, NJ, and CT. The Soul Shades violin and DJ duo is particularly popular for upscale brand activations and gala dinners.' },
              { q: 'Do you DJ corporate events in Brooklyn?', a: 'Yes. DJ DX regularly performs at corporate events across Brooklyn — including DUMBO loft spaces, Brooklyn Navy Yard venues, Williamsburg rooftops, and Industry City. Setup and load-in are factored into the quote so there are no day-of surprises around freight elevators or load-in windows.' },
              { q: 'Do you DJ corporate events in Jersey City and Hoboken?', a: 'Yes. Jersey City and Hoboken are core service areas. Frequent venues include Maritime Parc, Liberty House, and the W Hotel Hoboken waterfront. Travel and setup for Hudson County events is included in the standard NYC-area corporate rate.' },
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
                Secure Your Date<br />in the <span>Tri-State</span>
              </h2>
              <p className="booking-blurb">
                Whether you're planning a massive product launch in Manhattan, an executive retreat in Connecticut, or a holiday gala in New Jersey, fill out the form and I will respond within 24–48 hours to discuss availability, packages, and pricing.
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
