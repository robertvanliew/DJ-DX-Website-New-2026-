import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function HipHopDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Hip-Hop DJ NYC & NJ | Old School to New School | DJ DX</title>
        <meta name="description" content="NYC's premier hip-hop DJ for events — Biggie to Kendrick, custom-curated sets for parties, corporate nights & weddings. 20+ years. TED-featured. Book DJ DX today." />
        <link rel="canonical" href="https://djdxmusic.com/hip-hop-dj-nyc-nj" />
        <meta property="og:title" content="Hip-Hop DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional hip-hop DJ in New York and New Jersey. DJ DX plays Old School to New School — Biggie, Nas, Jay-Z through Drake and Kendrick. 500+ events." />
        <meta property="og:url" content="https://djdxmusic.com/hip-hop-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Hip-Hop DJ NYC & NJ — DJ DX" />
        <meta name="twitter:description" content="Professional hip-hop DJ in NYC and NJ. Old School to New School, custom sets for parties, weddings, and corporate events. TED-featured, 500+ events." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Hip-Hop DJ NYC & NJ — Old School to New School",
              "serviceType": "Hip-Hop DJ",
              "url": "https://djdxmusic.com/hip-hop-dj-nyc-nj",
              "description": "DJ DX is a professional hip-hop DJ in New York City and New Jersey serving private parties, corporate events, weddings, and nightclubs. Specializing in authentic hip-hop from the Golden Era through modern trap and drill. TED-featured artist. 20+ years experience. 500+ events.",
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
                {"@type": "City", "name": "The Bronx"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Newark"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hip-Hop DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop Party DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop Wedding DJ New Jersey"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Hip-Hop DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Old School Hip-Hop DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop Birthday Party DJ NJ"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does DJ DX play both old school and new school hip-hop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX curates across the full timeline of hip-hop — Golden Era classics from Biggie, Nas, Jay-Z, and Tupac through 2000s anthems (Kanye, Lil Wayne, T.I.) into modern trap and melodic hip-hop (Drake, Kendrick Lamar, Future, Cardi B, 21 Savage). Every set is custom-built for your crowd and event type."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX mix hip-hop with R&B and Afrobeats at the same event?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. DJ DX is a multi-genre specialist known for seamless cross-genre mixing. Hip-hop blended with R&B, Afrobeats, dancehall, and house is a DJ DX signature — keeping the entire crowd locked in without dead zones between genres. This approach is especially popular at NYC and NJ weddings with diverse guest lists."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is DJ DX available for hip-hop themed birthday parties in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Hip-hop birthday parties and milestone celebrations are one of DJ DX's specialties in New York City and New Jersey. From intimate loft gatherings to large venue parties, DJ DX brings professional sound, custom lighting options, and an expertly curated hip-hop setlist tailored to the guest of honor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a hip-hop DJ cost for an event in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hip-hop DJ rates in New York City typically range from $1,200 to $3,500+ depending on event type, duration, equipment requirements, and the DJ's experience. DJ DX offers transparent custom quotes — email djdxbusiness@gmail.com with your event date and details for pricing within 24 hours."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Hip-Hop DJ NYC NJ", "item": "https://djdxmusic.com/hip-hop-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Hip-Hop DJ New York City — DJ DX performing Old School to New School" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Hip-Hop DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            Hip-Hop Is <span>a Craft</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            From Biggie and Nas to Drake and Kendrick — authentic, era-spanning hip-hop
            custom-curated for your event. No filler. No autopilot.
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
                <div className="sec-overline"><span className="sec-label">Hip-Hop Expertise</span></div>
                <h2 className="sec-title">NYC Hip-Hop <span>Done Right</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>Hip-hop is not a playlist genre — it's a living culture with distinct eras, sounds, subgenres, and emotional registers. DJ DX grew up studying the art form from the inside: the call-and-response of a crowd when "Juicy" drops, the collective exhale when a Kendrick verse hits. Understanding <em>why</em> certain records work at certain moments is what separates a hip-hop DJ from someone who simply owns hip-hop songs.</p>
                <p>With over 20 years behind the decks and 500+ events performed across New York, New Jersey, and beyond, DJ DX has honed a reading of the room that no algorithm can replicate. Sets move from Golden Era storytelling to hard trap bass without a seam showing — because transitions are architected, not accidental. Whether you need boom-bap for an '85 crowd or drill for a room full of 22-year-olds, DJ DX builds the setlist to your guest list.</p>
                <p>As a <a href="https://www.ted.com/talks/dj_dx_finally_moving" target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>TED-featured recording artist</a> and producer with 100+ originals on Spotify, DJ DX brings an artist's ear to every event performance. Original blends and exclusive edits — music your guests will not hear anywhere else — are woven into every set.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { label: 'Golden Era to New School', sub: 'Biggie, Nas, Jay-Z, Kanye through Drake, Kendrick, Cardi B — every era covered with precision and genuine knowledge.' },
                { label: 'Original Blends & Edits', sub: 'Exclusive DJ DX remixes and mashups you won\'t hear on any other DJ\'s set list — a custom signature for your event.' },
                { num: '500+', label: 'Events Performed', sub: 'Parties, corporate nights, weddings, club residencies — DJ DX has built setlists for every type of hip-hop crowd.' },
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

      {/* ── GENRES ── */}
      <section className="services">
        <div className="section-inner">
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">Repertoire</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Hip-Hop <span>Specialties</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Golden Era & Old School', desc: 'The records that built the culture: Biggie, Nas, Jay-Z, Tupac, DMX, Lauryn Hill. Guaranteed to ignite every generation in the room.' },
              { title: 'Trap & Modern Hip-Hop', desc: 'Drake, Future, Cardi B, 21 Savage, Lil Baby — current chart anthems and deep cuts keeping NYC\'s streets talking.' },
              { title: 'Conscious & Lyrical Sets', desc: 'Kendrick Lamar, J. Cole, Joey Bada$$, and the lyrically dense side of hip-hop for crowds who want substance alongside energy.' },
              { title: 'Hip-Hop x R&B Blends', desc: 'The sweet spot between hip-hop and soul: Mary J. Blige, Usher, Ne-Yo, and contemporary blends that bridge genres seamlessly.' },
              { title: 'Corporate-Ready Hip-Hop', desc: 'Clean-version curation for brand-safe events — all the energy of hip-hop without content that compromises professional settings.' },
              { title: 'Custom Event Themes', desc: '90s throwback nights, decade-specific sets, artist tributes — DJ DX builds around your concept and crowd profile.' },
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
            <h2 className="sec-title">Hip-Hop DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'Does DJ DX play both old school and new school hip-hop?', a: 'Yes. DJ DX curates across the full timeline — Golden Era classics from Biggie, Nas, Jay-Z, and Tupac through 2000s anthems (Kanye, Lil Wayne, T.I.) into modern trap and melodic hip-hop (Drake, Kendrick Lamar, Future, Cardi B, 21 Savage). Every set is custom-built for your crowd.' },
              { q: 'Can DJ DX mix hip-hop with R&B and Afrobeats at the same event?', a: 'Absolutely. DJ DX is a multi-genre specialist known for seamless cross-genre mixing. Hip-hop blended with R&B, Afrobeats, dancehall, and house is a DJ DX signature — keeping the entire crowd locked in without dead zones between genres.' },
              { q: 'Is DJ DX available for hip-hop themed birthday parties in NYC?', a: 'Yes. Hip-hop birthday parties and milestone celebrations are one of DJ DX\'s specialties in New York City and New Jersey. From intimate loft gatherings to large venue parties, DJ DX brings professional sound and an expertly curated setlist tailored to the guest of honor.' },
              { q: 'How much does a hip-hop DJ cost for an event in New York City?', a: 'Hip-hop DJ rates in NYC typically range from $1,200 to $3,500+ depending on event type, duration, and equipment requirements. DJ DX offers transparent custom quotes — email djdxbusiness@gmail.com with your event date and details.' },
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
              <h2 className="sec-title">Book NYC's <span>Hip-Hop DJ</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Ready to bring authentic hip-hop energy to your event in New York or New Jersey? Fill out the form and we'll respond within 24–48 hours.
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
