import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function RBHipHopDJ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>R&B & Hip-Hop DJ NYC & NJ | Events, Weddings & Parties | DJ DX</title>
        <meta name="description" content="Looking for an R&B and Hip-Hop DJ in New York or New Jersey? DJ DX specializes in classic and modern R&B, Hip-Hop, and Old School for weddings, corporate events, and private parties. TED-featured, 500+ events." />
        <link rel="canonical" href="https://djdxmusic.com/rb-hip-hop-dj-nyc-nj" />
        <meta property="og:title" content="R&B & Hip-Hop DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional R&B and Hip-Hop DJ in New York and New Jersey. DJ DX blends classic and modern R&B, Hip-Hop, and Old School for weddings, parties, and corporate events across the tri-state area." />
        <meta property="og:url" content="https://djdxmusic.com/rb-hip-hop-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="R&B & Hip-Hop DJ NYC & NJ — DJ DX" />
        <meta name="twitter:description" content="Professional R&B and Hip-Hop DJ in New York and New Jersey. 20+ years, 500+ events. TED-featured artist." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "R&B & Hip-Hop DJ NYC & NJ — Events, Weddings & Parties",
              "serviceType": "R&B and Hip-Hop DJ",
              "url": "https://djdxmusic.com/rb-hip-hop-dj-nyc-nj",
              "description": "DJ DX is a professional R&B and Hip-Hop DJ in New York and New Jersey with 20+ years of experience and 500+ events performed. Specializing in classic and modern R&B, Hip-Hop, Old School, blends, and mashups for weddings, corporate events, and private parties across NYC, NJ, and CT. TED-featured recording artist.",
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
                {"@type": "City", "name": "Hoboken"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "R&B & Hip-Hop DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "R&B Wedding DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop Party DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Old School R&B DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hip-Hop Corporate Event DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "R&B Private Party DJ Tri-State"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What R&B and Hip-Hop artists does DJ DX play?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ DX plays a wide spectrum — from classic Old School R&B (Marvin Gaye, Teddy Pendergrass, Mary J. Blige, D'Angelo) to modern artists (Drake, Beyoncé, SZA, Kendrick Lamar, J. Cole, Chris Brown). Every set is custom-built around your crowd's preferences and generational mix."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX mix R&B and Hip-Hop with Afrobeats or other genres?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — DJ DX specializes in multi-genre blending. R&B and Hip-Hop are seamlessly woven with Afrobeats, Amapiano, dancehall, and house depending on your crowd's vibe. This cross-genre approach is especially popular at New York and New Jersey weddings with diverse guest lists."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is DJ DX available for R&B birthday parties and private events in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX is available for birthday parties, private events, corporate events, rooftop parties, and more across NYC and NJ. Contact djdxbusiness@gmail.com for availability and pricing for your specific event."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does an R&B DJ cost in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "R&B DJ pricing in New York City ranges from $1,000 to $3,500+ depending on event type, duration, and experience level. DJ DX offers transparent, event-specific pricing — fill out the booking form for a custom quote."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "R&B & Hip-Hop DJ NYC NJ", "item": "https://djdxmusic.com/rb-hip-hop-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="R&B and Hip-Hop DJ New York City — DJ DX performing live" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.92) 100%)'
        }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">R&B & Hip-Hop DJ — New York & New Jersey</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '1.2rem' }}>
            The Sound of <span>New York</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Classic R&amp;B, modern Hip-Hop, Old School, and custom blends — curated for the culture.
            20+ years behind the decks. 500+ events. TED-featured artist.
          </p>
          <a href="#booking" className="btn-gold">Check Availability</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr">
                <div className="sec-overline"><span className="sec-label">Core Identity</span></div>
                <h2 className="sec-title">R&amp;B and Hip-Hop <span>Are the Foundation</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>R&amp;B and Hip-Hop aren't just genres DJ DX plays — they're the cultural foundation of everything he does. From the soulful introspection of D'Angelo and Lauryn Hill to the hard-hitting energy of Kendrick Lamar and Drake, every set is built on deep knowledge of the music and genuine love for the culture.</p>
                <p>At New York and New Jersey events, this means reading the room in real time — knowing when to drop a 90s throwback that makes everyone lose their mind, when to bring the temperature down with a smooth R&amp;B interlude, and when to go full peak hour Hip-Hop energy on the dance floor.</p>
                <p>DJ DX also blends R&amp;B and Hip-Hop seamlessly with Afrobeats, Amapiano, and Dancehall — perfect for the diverse, multicultural crowds that characterize NYC and NJ events.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { num: '20+', label: 'Years Experience', sub: 'R&B & Hip-Hop DJ in NY & NJ' },
                { num: '500+', label: 'Events Performed', sub: 'Weddings, parties, corporate events' },
                { num: '100+', label: 'Original Blends', sub: 'Custom R&B/Hip-Hop mashups' },
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

      {/* ── GENRES GRID ── */}
      <section className="services">
        <div className="section-inner">
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">Repertoire</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">R&amp;B &amp; Hip-Hop <span>Specialties</span></h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Classic R&B', desc: 'Motown, soul, and the golden era — Marvin Gaye, Stevie Wonder, Teddy Pendergrass, Whitney Houston, Anita Baker.' },
              { title: '90s & 2000s R&B', desc: 'The defining sound of a generation — Mary J. Blige, D\'Angelo, Usher, Alicia Keys, Destiny\'s Child, Ne-Yo.' },
              { title: 'Modern R&B', desc: 'SZA, Beyoncé, Frank Ocean, H.E.R., Jhené Aiko, Chris Brown — current sounds that dominate the dance floor.' },
              { title: 'Classic Hip-Hop', desc: 'Boom bap, East Coast essentials — Nas, Jay-Z, Biggie, Rakim, Big L, Wu-Tang Clan, and the golden era canon.' },
              { title: 'Modern Hip-Hop', desc: 'Drake, Kendrick Lamar, J. Cole, Travis Scott, Cardi B, Lil Baby — the artists that move crowds in 2025.' },
              { title: 'Old School & Blends', desc: 'Custom mashups and blends that bridge generations — taking a crowd from the 70s soul to today in a single mix.' },
            ].map(s => (
              <div key={s.title} className="service-cell sr">
                <div className="service-name">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="about">
        <div className="section-inner">
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">Perfect For</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Every Event <span>Deserves the Right Sound</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', marginTop: '48px' }}>
            {[
              { title: 'R&B Weddings NYC & NJ', desc: 'From cocktail hour neo-soul to a high-energy reception floor — R&B and Hip-Hop are the natural soundtrack for modern New York weddings.' },
              { title: 'Birthday & Private Parties', desc: 'Whether it\'s an intimate birthday dinner or a 200-person rooftop celebration, DJ DX curates the vibe you\'re going for from start to finish.' },
              { title: 'Corporate Events', desc: 'R&B and Hip-Hop at the right volume and energy for corporate galas, awards nights, and company parties across NYC and NJ.' },
              { title: 'Sweet 16s & Quinceañeras', desc: 'High-energy, crowd-moving sets built around the hits that today\'s teens and young adults actually love — no filler, no corny DJ moves.' },
            ].map(s => (
              <div key={s.title} style={{ padding: '28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>{s.title}</div>
                <p style={{ fontSize: '0.92rem', color: 'rgba(242,242,242,0.6)', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <div className="sec-header center sr">
            <h2 className="sec-title">R&amp;B &amp; Hip-Hop DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'What R&B and Hip-Hop artists does DJ DX play?', a: 'DJ DX plays a wide spectrum — from classic Old School R&B (Marvin Gaye, Teddy Pendergrass, Mary J. Blige, D\'Angelo) to modern artists (Drake, Beyoncé, SZA, Kendrick Lamar, J. Cole, Chris Brown). Every set is custom-built around your crowd\'s preferences and generational mix.' },
              { q: 'Can DJ DX mix R&B and Hip-Hop with Afrobeats or other genres?', a: 'Yes — DJ DX specializes in multi-genre blending. R&B and Hip-Hop are seamlessly woven with Afrobeats, Amapiano, dancehall, and house depending on your crowd\'s vibe. This cross-genre approach is especially popular at New York and New Jersey weddings with diverse guest lists.' },
              { q: 'Is DJ DX available for R&B birthday parties and private events in NYC?', a: 'Yes. DJ DX is available for birthday parties, private events, corporate events, rooftop parties, and more across NYC and NJ. Contact djdxbusiness@gmail.com for availability and pricing for your specific event.' },
              { q: 'How much does an R&B DJ cost in New York City?', a: 'R&B DJ pricing in New York City ranges from $1,000 to $3,500+ depending on event type, duration, and experience level. DJ DX offers transparent, event-specific pricing — fill out the booking form for a custom quote.' },
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
              <h2 className="sec-title">Request an <span>R&amp;B DJ Quote</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Fill out the form and DJ DX will get back to you within 24 hours with availability and pricing for your event.
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
