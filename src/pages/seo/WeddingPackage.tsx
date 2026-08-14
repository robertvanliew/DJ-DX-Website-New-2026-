import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import RelatedServices from '../../components/RelatedServices';
import BookingForm from '../../components/BookingForm';

const TIERS = [
  {
    id: 'essentials',
    name: 'Essentials',
    price: '$6,200',
    tagline: 'DJ + professional videography',
    features: [
      'Full reception DJ set — cocktail hour through last dance',
      'MC / emcee announcements',
      'Professional cinematic videography — full event coverage',
      'Edited highlight film, delivered digitally',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: '$8,800',
    tagline: 'DJ + live violin duo + elevated videography',
    popular: true,
    features: [
      'Everything in Essentials',
      'Live violin — ceremony & cocktail hour',
      'Upgraded videography package — highlight film + social clips',
      'One planning call, one point of contact for all three',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Experience',
    price: '$14,000',
    tagline: 'Full production — DJ, live violin & piano duo, premium cinematic coverage',
    features: [
      'Everything in Signature',
      'Live violin & piano duo — ceremony through reception',
      'Premium videography — drone footage, full-day coverage, advanced editing',
      'Priority date lock + extended DJ hours',
    ],
  },
];

const ADDONS = [
  { name: 'Uplighting package', price: '$300' },
  { name: 'Stage platform (4×4)', price: '$60' },
  { name: 'Stage platform (4×8)', price: '$120' },
  { name: 'Fog effect', price: '$110' },
  { name: 'Premium fog / pyro effect', price: '$155' },
];

const FAQ_ITEMS = [
  {
    q: 'How much does a full wedding entertainment package cost in NYC and NJ?',
    a: 'DJ DX\'s full wedding entertainment packages — DJ, live music, and professional videography combined — start at $6,200 and range up to $14,000+ depending on tier, hours, and add-ons like staging or lighting. Every package is one price, one contract, one point of contact. Custom quotes provided within 24-48 hours.',
  },
  {
    q: 'Why book a bundled package instead of separate vendors?',
    a: 'The average wedding hires 14-16 separate vendors, and nearly half of couples go over budget coordinating them. A bundled package means one point of contact, one timeline, and one team that already knows how to work together — instead of hoping your DJ, videographer, and musicians sync up on the day.',
  },
  {
    q: 'Is the videography and live music actually DJ DX, or subcontracted?',
    a: 'DJ DX personally performs every DJ set. The videography and live violin/piano are delivered by trusted, established professionals DJ DX has worked with directly and coordinates on your behalf — so you get one seamless team, not three disconnected vendors.',
  },
  {
    q: 'Can we add staging or lighting to any package?',
    a: 'Yes. Uplighting, staging platforms, and fog effects are available as add-ons to any tier, priced individually so you only pay for what you want. Ask for current availability and pricing when you request your quote.',
  },
  {
    q: 'How is this different from other NYC wedding entertainment companies?',
    a: 'Every DJ set is mixed live by DJ DX personally — 25+ years of experience, TED-featured, 500+ events — not a rotating roster DJ or a pre-programmed playlist. Pricing is published upfront, not hidden behind a sales call.',
  },
];

export default function WeddingPackage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Wedding Entertainment Package NYC & NJ: DJ + Live Music + Video | DJ DX</title>
        <meta name="description" content="Full wedding entertainment package: DJ, live violin & piano, and professional videography — one team, one price, from $6,200. Serving NYC, NJ, CT & the Hamptons." />
        <link rel="canonical" href="https://djdxmusic.com/wedding-entertainment-package-nyc-nj" />
        <meta property="og:title" content="Wedding Entertainment Package NYC & NJ — DJ + Live Music + Video" />
        <meta property="og:description" content="One team for DJ, live music, and videography — instead of coordinating three separate vendors. Packages from $6,200." />
        <meta property="og:url" content="https://djdxmusic.com/wedding-entertainment-package-nyc-nj" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Wedding Entertainment Package NYC & NJ — DJ + Live Music + Video" />
        <meta name="twitter:description" content="DJ, live music, and videography under one team — packages from $6,200." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wedding Entertainment Package — DJ, Live Music & Videography",
              "serviceType": "Wedding Entertainment Package",
              "url": "https://djdxmusic.com/wedding-entertainment-package-nyc-nj",
              "description": "A bundled wedding entertainment package combining DJ services, live violin and piano, and professional videography under one coordinated team. Serving New York City, New Jersey, Connecticut, and the Hamptons.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "packages@djdxmusic.com",
                "priceRange": "$$$"
              },
              "areaServed": [
                {"@type": "City", "name": "New York City"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Long Island"},
                {"@type": "AdministrativeArea", "name": "The Hamptons"}
              ],
              "offers": [
                {"@type": "Offer", "name": "Essentials Package", "priceSpecification": {"@type": "PriceSpecification", "minPrice": "6200", "priceCurrency": "USD"}, "description": "DJ reception coverage plus professional videography with edited highlight film."},
                {"@type": "Offer", "name": "Signature Package", "priceSpecification": {"@type": "PriceSpecification", "minPrice": "8800", "priceCurrency": "USD"}, "description": "DJ, live violin for ceremony and cocktail hour, and elevated videography with social clips."},
                {"@type": "Offer", "name": "Platinum Experience", "priceSpecification": {"@type": "PriceSpecification", "minPrice": "14000", "priceCurrency": "USD"}, "description": "Full production — DJ, live violin and piano duo ceremony through reception, and premium videography with drone coverage."}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${FAQ_ITEMS.map(({ q, a }) => `{
                  "@type": "Question",
                  "name": ${JSON.stringify(q)},
                  "acceptedAnswer": {"@type": "Answer", "text": ${JSON.stringify(a)}}
                }`).join(',\n                ')}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Wedding DJ NYC NJ", "item": "https://djdxmusic.com/wedding-dj-nyc-nj"},
                {"@type": "ListItem", "position": 3, "name": "Wedding Entertainment Package", "item": "https://djdxmusic.com/wedding-entertainment-package-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="Full wedding entertainment package — DJ, live music, and videography in New York and New Jersey" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.35) 0%, rgba(12,12,12,0.95) 100%)'
        }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Full Wedding Entertainment Package</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', marginBottom: '1.2rem' }}>
            One Team for DJ, <span>Live Music &amp; Video</span>
          </h1>
          <p style={{ maxWidth: '620px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.7 }}>
            Instead of coordinating a DJ, a videographer, and live musicians separately — book one team that already works together. Packages from $6,200.
          </p>
          <a href="#packages" className="btn-gold">See Packages</a>
        </div>
      </section>

      {/* ── WHY BUNDLE ── */}
      <section className="about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <div className="sec-header sr">
                <div className="sec-overline"><span className="sec-label">Why It Matters</span></div>
                <h2 className="sec-title">The Average Wedding Hires <span>14–16 Vendors</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.1s">
                <p>Fourteen to sixteen separate people to coordinate, sixteen separate timelines to sync, and nearly half of couples still end up over budget trying to manage it all.</p>
                <p>A bundled entertainment package cuts that down to <strong>one point of contact</strong> for your DJ, live music, and videography — one planning call, one contract, one team that already knows how to work a room together instead of meeting for the first time on your wedding day.</p>
                <p>Every package is <strong>one published price</strong>, not a number you have to request behind a sales call.</p>
              </div>
            </div>
            <div className="about-aside">
              {[
                { num: '14–16', label: 'Vendors Hired', sub: 'Average per wedding' },
                { num: '1', label: 'Point of Contact', sub: 'With a bundled package' },
                { num: '36–48%', label: 'Go Over Budget', sub: 'Coordinating separate vendors' },
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

      {/* ── PACKAGES ── */}
      <section id="packages" style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner" style={{ maxWidth: '1100px' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-overline-line" /><span className="sec-label">Packages</span><span className="sec-overline-line" />
          </div>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '12px' }}>
            Published Pricing — <span>No Sales Call Required</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.62)', maxWidth: '640px', margin: '0 auto 48px', fontSize: '1rem', lineHeight: 1.7 }}>
            Every tier is one all-in price. Final quotes are confirmed after a quick planning call to account for hours, travel, and any add-ons.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {TIERS.map(tier => (
              <div
                key={tier.id}
                style={{
                  position: 'relative',
                  padding: '32px 28px',
                  borderRadius: '14px',
                  background: tier.popular ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.03)',
                  border: tier.popular ? '1.5px solid rgba(201,168,76,0.5)' : '1px solid rgba(255,255,255,0.08)',
                  transform: tier.popular ? 'translateY(-8px)' : 'none',
                }}
              >
                {tier.popular && (
                  <span style={{
                    position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--gold)', color: '#0c0c0c', fontSize: '11px', fontWeight: 800,
                    letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '20px',
                  }}>
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: 'var(--white)', marginBottom: '4px' }}>
                  {tier.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(242,242,242,0.55)', marginBottom: '18px', lineHeight: 1.5 }}>{tier.tagline}</p>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '22px' }}>{tier.price}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ fontSize: '0.9rem', color: 'rgba(242,242,242,0.72)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={tier.popular ? 'btn-gold' : 'btn-ghost'} style={{ display: 'block', textAlign: 'center' }}>
                  Get This Package
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Available Add-Ons — Any Tier
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              {ADDONS.map(a => (
                <span key={a.name} style={{ fontSize: '0.85rem', color: 'rgba(242,242,242,0.65)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '8px 16px' }}>
                  {a.name} <strong style={{ color: 'var(--gold)' }}>{a.price}</strong>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATION ── */}
      <section className="about">
        <div className="section-inner">
          <div className="sec-header center sr">
            <div className="sec-overline" style={{ justifyContent: 'center' }}>
              <span className="sec-overline-line" /><span className="sec-label">What You're Actually Booking</span><span className="sec-overline-line" />
            </div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Not a Directory Listing — <span>A Coordinated Team</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { title: 'DJ DX Personally Performs', desc: 'You book DJ DX, you get DJ DX behind the decks — mixed live, not a pre-built Spotify queue and not a rotating roster DJ you\'ve never spoken to.' },
              { title: 'Real Professionals, Coordinated', desc: 'The videography and live music are delivered by established professionals DJ DX works with directly — one timeline, one team, on the same page before the day starts.' },
              { title: 'Published Pricing', desc: 'Every package price is right here. No quote-request games, no waiting on a callback to find out what something costs.' },
            ].map(f => (
              <div key={f.title} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'rgba(242,242,242,0.65)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px' }}>
        <div className="section-inner" style={{ maxWidth: '780px' }}>
          <div className="sec-header center sr">
            <h2 className="sec-title">Package <span>FAQ</span></h2>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {FAQ_ITEMS.map(({ q, a }) => (
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
              <div className="sec-overline"><span className="sec-label">Book Your Package</span></div>
              <h2 className="sec-title">Request a <span>Package Quote</span></h2>
              <p style={{ color: 'rgba(242,242,242,0.55)', lineHeight: 1.8, marginTop: '16px' }}>
                Tell us your date, venue, and which package you're leaning toward — DJ DX will confirm final pricing and availability within 24–48 hours. Prefer email? Reach the packages team directly at <a href="mailto:packages@djdxmusic.com" style={{ color: 'var(--gold)' }}>packages@djdxmusic.com</a>.
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
