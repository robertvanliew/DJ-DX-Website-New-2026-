import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function AfrobeatsDJ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Afrobeats DJ NYC & NJ | Amapiano, Dancehall, Soca | DJ DX</title>
        <meta name="description" content="Looking for an Afrobeats DJ in New York or New Jersey? DJ DX specializes in Afrobeats, Amapiano, Afropop, Dancehall, and Soca for weddings, cultural events, and parties across NYC and NJ." />
        <link rel="canonical" href="https://djdxmusic.com/afrobeats-amapiano-dj-nyc-nj" />
        <meta property="og:title" content="Afrobeats DJ NYC & NJ — DJ DX" />
        <meta property="og:description" content="Professional Afrobeats DJ in New York and New Jersey specializing in Amapiano, Afropop, Dancehall, and Soca. Book DJ DX for your wedding, cultural celebration, or private party." />
        <meta property="og:url" content="https://djdxmusic.com/afrobeats-amapiano-dj-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Afrobeats DJ NYC & NJ — DJ DX" />
        <meta name="twitter:description" content="Professional Afrobeats DJ in New York and New Jersey specializing in Amapiano, Afropop, Dancehall, and Soca. Book DJ DX for your next event." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Afrobeats DJ NYC & NJ — Amapiano, Dancehall, Soca",
              "serviceType": "Afrobeats DJ",
              "url": "https://djdxmusic.com/afrobeats-amapiano-dj-nyc-nj",
              "description": "DJ DX is a professional Afrobeats DJ in New York and New Jersey specializing in Afropop, Amapiano, Dancehall, Soca, and R&B. Available for weddings, cultural celebrations, birthday parties, and corporate events across NYC and the tri-state area. TED-featured artist with 500+ events performed.",
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
                "name": "Afrobeats DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Afrobeats Wedding DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "African Cultural Event DJ New York"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Amapiano DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dancehall and Soca DJ NJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Afropop Birthday Party DJ NYC"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does DJ DX play Afrobeats and Afropop at events in NYC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX is one of New York City's most in-demand Afrobeats DJs, with a library of 3,000+ Afrobeats, Amapiano, and Afropop tracks updated weekly with the latest releases. Sets span the full spectrum — from classic Wizkid, Burna Boy, and Davido to cutting-edge South African Amapiano and diaspora crossovers. Available for weddings, cultural celebrations, and private events across NYC and NJ."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DJ DX mix Afrobeats with R&B and Hip-Hop at the same event?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. DJ DX is a genre-fluid multi-specialist who has spent 20+ years perfecting seamless transitions between Afrobeats, Amapiano, R&B, Hip-Hop, Dancehall, and Soca. This cross-genre expertise sets DJ DX apart from genre-specialist DJs — guests who know Afrobeats deeply and guests hearing it for the first time both stay engaged and on the dance floor throughout the night."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does DJ DX play Amapiano, Dancehall, and Soca?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ DX's sets cover the full African and Caribbean diaspora — Amapiano, Afro-house, Afro-fusion, Dancehall, Reggae, and Soca. Each subgenre is performed with genuine depth, not as a novelty add-on. Request specific sounds or combinations when you fill out the booking form."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does an Afrobeats DJ cost in New York City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Afrobeats DJ rates in New York City typically range from $1,200 to $4,000+ depending on event type, hours, guest count, and sound setup. DJ DX — with 20+ years of experience and 500+ events across the NYC tri-state area — provides custom quotes based on your specific event. Contact djdxbusiness@gmail.com for transparent pricing within 24 hours."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Afrobeats DJ NYC NJ", "item": "https://djdxmusic.com/afrobeats-amapiano-dj-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Afrobeats and Amapiano DJ New York — DJ DX live performance" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at bottom right, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 8%, transparent 20%), linear-gradient(to bottom, rgba(12,12,12,0.1) 0%, rgba(12,12,12,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.2) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Global Sounds</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            NYC's Premier Afrobeats DJ
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Bringing the authentic energy of the diaspora to your event. Unmatched blending of Afrobeats, Amapiano, Dancehall, and global club sounds across NY and NJ.
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
                  <span className="sec-label">Why DJ DX?</span>
                </div>
                <h2 className="sec-title">Curating the <span>Culture</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  Afrobeats and Amapiano aren't just genres; they require a deep understanding of rhythm, crowd energy, and the culture that drives the music. 
                </p>
                <p>
                  DJ DX delivers a masterclass in global sound curation. Whether it's the soulful log drum baselines of South African Amapiano, the infectious grooves of Nigerian Afrobeats, or seamless transitions into Caribbean Dancehall and Soca, the floor stays moving.
                </p>
                <p>
                  Perfect for cultural weddings, high-energy nightclub bookings, diaspora-focused brand activations, and private luxury parties where average Top 40 mixes simply won't cut it. 
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Deep Knowledge of Local & Global Sounds</div>
                  <div className="stat-sub">From Burna Boy and Asake to exclusive South African Amapiano cuts and underground Dancehall dubs.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Seamless Harmonic Mixing</div>
                  <div className="stat-sub">Flawlessly transitioning cross-BPMs to keep the energy continuous and the dance floor packed all night long.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Premium Sound Packages</div>
                  <div className="stat-sub">We can provide heavy-hitting bass setups and custom lighting rigs that truly do justice to the dynamic frequencies of Amapiano.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GENRES ── */}
      <section className="services">
        <div className="section-inner">
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">Genres & Sounds</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title">Full-Spectrum <span>African & Caribbean</span> Sound</h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '48px' }}>
            {[
              { title: 'Afrobeats & Afropop', desc: 'Burna Boy, Wizkid, Davido, Rema, Tems — the anthems that define modern African pop and fill every floor.' },
              { title: 'Amapiano', desc: 'Log drum-driven South African house grooves. Deep, hypnotic, and increasingly the sound of luxury events worldwide.' },
              { title: 'Afro-Fusion & Afro-House', desc: 'Blending African rhythms with deep house and electronic influences for sophisticated cocktail hours and late-night dance floors.' },
              { title: 'Dancehall & Reggae', desc: 'Caribbean energy that connects the African diaspora — from classics to current dancehall anthems from Jamaica and the islands.' },
              { title: 'Soca & Caribbean', desc: 'High-energy Trinidad and Tobago carnival sounds for fetes, cultural events, and anyone who wants the party to reach its peak.' },
              { title: 'R&B & Hip-Hop Crossovers', desc: 'Seamless blends between Afrobeats and American R&B and Hip-Hop — connecting the diaspora across generations and continents.' },
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
            <h2 className="sec-title">Afrobeats DJ <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'Does DJ DX play Afrobeats and Afropop at events in NYC?', a: 'Yes. DJ DX is one of New York City\'s most in-demand Afrobeats DJs, with a library of 3,000+ Afrobeats, Amapiano, and Afropop tracks updated weekly with the latest releases. Sets span the full spectrum — from classic Wizkid, Burna Boy, and Davido to cutting-edge South African Amapiano and diaspora crossovers.' },
              { q: 'Can DJ DX mix Afrobeats with R&B and Hip-Hop at the same event?', a: 'Absolutely. DJ DX is a genre-fluid multi-specialist who has spent 20+ years perfecting seamless transitions between Afrobeats, Amapiano, R&B, Hip-Hop, Dancehall, and Soca. Guests who know Afrobeats deeply and guests hearing it for the first time both stay engaged and on the dance floor throughout the night.' },
              { q: 'Does DJ DX play Amapiano, Dancehall, and Soca?', a: 'Yes. DJ DX\'s sets cover the full African and Caribbean diaspora — Amapiano, Afro-house, Afro-fusion, Dancehall, Reggae, and Soca. Each subgenre is performed with genuine depth, not as a novelty add-on. Request specific sounds when you fill out the booking form.' },
              { q: 'How much does an Afrobeats DJ cost in New York City?', a: 'Afrobeats DJ rates in New York City typically range from $1,200 to $4,000+ depending on event type, hours, guest count, and sound setup. DJ DX provides custom quotes based on your specific event — contact djdxbusiness@gmail.com for transparent pricing within 24 hours.' },
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
                Bring the Vibes to<br /><span>Your Event</span>
              </h2>
              <p className="booking-blurb">
                If you're looking for an unforgettable night of global music and relentless energy in NYC or NJ, fill out the form. We'll respond within 24-48 hours.
              </p>
            </div>

            <div className="booking-right sr" data-sr-delay="0.15s">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
