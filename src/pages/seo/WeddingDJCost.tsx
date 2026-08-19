import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import RelatedServices from '../../components/RelatedServices';
import BookingForm from '../../components/BookingForm';

const FAQ_ITEMS = [
  {
    q: 'How much does a wedding DJ cost in NYC?',
    a: 'Most NYC couples pay between $1,500 and $5,000 for a professional wedding DJ. Budget DJs advertise under $1,000 but usually cut corners on equipment, backup gear, or experience. Established solo DJs and boutique companies land in the $2,000–$3,500 range for a full reception. DJ DX weddings start at $2,800 with sound, wireless mics, and MC announcements included.',
  },
  {
    q: 'What affects the price of a wedding DJ?',
    a: 'Five things move the number most: total performance hours (ceremony + cocktail hour + reception costs more than reception only), the date (peak Saturdays in May–October price higher than weekdays or winter), guest count and room size (bigger rooms need more sound), travel outside NYC, and add-ons like uplighting, a second sound system for the ceremony, or live musicians.',
  },
  {
    q: 'What is included in a wedding DJ package?',
    a: 'With DJ DX: professional DJ performance, full sound system sized to your room, wireless microphones for toasts and officiant, MC announcements (introductions, first dance, cake cutting), a planning consultation to build your must-play and do-not-play lists, and backup equipment on site. There is no separate charge for the planning call or the mic.',
  },
  {
    q: 'Do you send an associate or trainee DJ?',
    a: 'No. You book DJ DX, you get DJ DX. Many NYC wedding entertainment companies quote you a price and then assign an associate or trainee DJ you have never spoken to. That does not happen here — the person you talk to on the planning call is the person behind the decks at your wedding.',
  },
  {
    q: 'Is a DJ cheaper than a live band for a NYC wedding?',
    a: 'Significantly. A professional wedding band in NYC runs $8,000–$20,000+. A top-tier DJ is $2,000–$5,000 and can cover every genre and era your guest list spans. If you want live music without band pricing, DJ DX offers a live violin + DJ duo (Soul Shades) from $2,400 — live performance layered over a full DJ set.',
  },
  {
    q: 'Do you charge for travel?',
    a: 'Travel within New York City is included in the quoted total. Weddings in New Jersey, Long Island, Westchester, and Connecticut are quoted with travel included up front — one number, no surprise fees on the invoice.',
  },
  {
    q: 'Are there hidden fees?',
    a: 'No. Your quote is itemized and includes setup, breakdown, equipment, and travel for the NYC area. If the party is going too hard to stop, overtime is available and the rate is agreed before the wedding, not invented at 11pm.',
  },
  {
    q: 'How far in advance should we book a wedding DJ in NYC?',
    a: 'Nine to fourteen months out for peak-season Saturdays (May–October). Popular dates go first, and DJ DX books one wedding per day — there is no roster of backup DJs to absorb double bookings. Off-season and weekday dates can often be booked three to six months out.',
  },
  {
    q: 'Can you cover both the ceremony and the reception?',
    a: 'Yes. Ceremony sound (processional music, officiant mic), cocktail hour, reception, and after-party can all be covered under one package. If the ceremony is in a separate space, a second sound setup is quoted as an add-on.',
  },
  {
    q: 'How do we get an exact quote?',
    a: 'Send the date, venue, guest count, and hours through the booking form on this page or email bookings@djdxmusic.com. You get an itemized quote within 24 hours. Full starting rates for every service are published at djdxmusic.com/pricing.md — nothing is hidden behind a sales call.',
  },
];

export default function WeddingDJCost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Wedding DJ Cost in NYC: Real 2026 Prices | DJ DX</title>
        <meta name="description" content="What a wedding DJ actually costs in NYC and NJ in 2026: real hourly rates, travel fees, and what's included. Straight numbers from a working DJ." />
        <link rel="canonical" href="https://djdxmusic.com/wedding-dj-cost-nyc" />
        <meta property="og:title" content="Wedding DJ Cost in NYC: Real 2026 Prices | DJ DX" />
        <meta property="og:description" content="What a wedding DJ actually costs in NYC and NJ in 2026: real hourly rates, travel fees, and what's included. Straight numbers from a working DJ." />
        <meta property="og:url" content="https://djdxmusic.com/wedding-dj-cost-nyc" />
        <meta property="og:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Wedding DJ Cost in NYC: Real 2026 Prices | DJ DX" />
        <meta name="twitter:description" content="What a wedding DJ actually costs in NYC and NJ in 2026: real hourly rates, travel fees, and what's included. Straight numbers from a working DJ." />
        <meta name="twitter:image" content="https://djdxmusic.com/epk-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wedding DJ — NYC & New Jersey",
              "serviceType": "Wedding DJ",
              "url": "https://djdxmusic.com/wedding-dj-cost-nyc",
              "description": "Professional wedding DJ services in New York City and New Jersey with published starting rates. Ceremony, cocktail hour, reception, and after-party coverage by DJ DX — TED-featured, 25+ years, 500+ events.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "bookings@djdxmusic.com",
                "priceRange": "$$-$$$",
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
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Long Island"},
                {"@type": "AdministrativeArea", "name": "Westchester County"}
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Wedding DJ package",
                  "priceSpecification": {"@type": "PriceSpecification", "minPrice": "2800", "priceCurrency": "USD"},
                  "description": "Full reception coverage from $2,800 — sound system, wireless mics, MC announcements, planning consultation."
                },
                {
                  "@type": "Offer",
                  "name": "DJ + Live Violin Duo (Soul Shades)",
                  "priceSpecification": {"@type": "PriceSpecification", "minPrice": "2400", "priceCurrency": "USD"},
                  "description": "Live violin over DJ sets for ceremony, cocktail hour, and reception — from $2,400."
                }
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
                {"@type": "ListItem", "position": 2, "name": "Wedding DJ NYC & NJ", "item": "https://djdxmusic.com/wedding-dj-nyc-nj"},
                {"@type": "ListItem", "position": 3, "name": "Wedding DJ Cost NYC", "item": "https://djdxmusic.com/wedding-dj-cost-nyc"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '48vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '48px',
        background: 'var(--dark)',
      }}>
        <img
          src="/epk-hero.jpg"
          alt="DJ DX performing at a New York wedding"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.35 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.97) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">2026 Pricing Guide</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(1.9rem, 4.6vw, 3.2rem)', marginBottom: '1rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            How Much Does a Wedding DJ <span>Cost in NYC?</span>
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.08rem', color: 'rgba(242,242,242,0.75)', lineHeight: 1.75 }}>
            A professional wedding DJ in New York City costs <strong style={{ color: 'var(--gold)' }}>$2,800 to $6,000</strong>, depending
            on hours, date, and add-ons. DJ DX weddings start at <strong style={{ color: 'var(--gold)' }}>$2,800</strong> with sound,
            wireless mics, and MC work included. Here is exactly where the money goes.
          </p>
          <p style={{ marginTop: '14px', fontSize: '12px', color: 'rgba(242,242,242,0.45)', letterSpacing: '0.08em' }}>
            Last updated: July 1, 2026 · Written by DJ DX — 25+ years, 500+ events, TED-featured
          </p>
        </div>
      </section>

      {/* ── PRICE TABLE ── */}
      <section style={{ padding: '72px 24px', background: 'var(--dark)' }}>
        <div className="section-inner" style={{ maxWidth: '860px' }}>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '10px' }}>
            DJ DX Starting Rates — <span>Published, Not Hidden</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.6)', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Most NYC DJ companies make you request a quote to see a single number. These are real starting rates —
            final quotes depend on date, hours, venue, and guest count, and arrive itemized within 24 hours.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.98rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(201,168,76,0.4)' }}>
                  <th style={{ textAlign: 'left', padding: '14px 12px', color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Package</th>
                  <th style={{ textAlign: 'left', padding: '14px 12px', color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Starting At</th>
                  <th style={{ textAlign: 'left', padding: '14px 12px', color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Typical For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Wedding DJ (reception)', '$2,800', 'Reception coverage, sound, mics, MC announcements'],
                  ['Ceremony + reception', 'Quoted', 'Separate ceremony sound, processional cues, officiant mic'],
                  ['DJ + Live Violin Duo (Soul Shades)', '$2,400', 'Live violin over DJ sets — ceremony through reception'],
                  ['Live violin add-on', '$150/hr', 'Added to any DJ package for cocktail hour or ceremony'],
                  ['Destination wedding', '$3,000', 'The Hamptons, Catskills, international — travel coordinated'],
                ].map(([pkg, price, desc]) => (
                  <tr key={pkg as string} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <td style={{ padding: '16px 12px', color: 'var(--white)', fontWeight: 600 }}>{pkg}</td>
                    <td style={{ padding: '16px 12px', color: 'var(--gold)', fontWeight: 700, whiteSpace: 'nowrap' }}>{price}</td>
                    <td style={{ padding: '16px 12px', color: 'rgba(242,242,242,0.6)', lineHeight: 1.6 }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.88rem', color: 'rgba(242,242,242,0.5)', textAlign: 'center' }}>
            Machine-readable rates for every service: <a href="/pricing.md" style={{ color: 'var(--gold)' }}>djdxmusic.com/pricing.md</a>
          </p>
        </div>
      </section>

      {/* ── WHAT MOVES THE PRICE ── */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner" style={{ maxWidth: '860px' }}>
          <h2 className="sec-title" style={{ marginBottom: '28px' }}>What Actually Moves the <span>Price</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              ['Hours', 'Reception-only is the baseline. Adding ceremony and cocktail hour extends the day to 7–9 hours of coverage and adds equipment for a second space.'],
              ['The date', 'Peak Saturdays from May through October carry the highest demand. Fridays, Sundays, and winter dates leave real room in the budget.'],
              ['Room and guest count', 'A 250-guest ballroom needs more sound than a 75-guest loft. Quotes size the system to the room so the dance floor hits without drowning dinner conversation.'],
              ['Travel', 'NYC is included. New Jersey, Long Island, Westchester, and Connecticut are quoted with travel built into one number up front.'],
              ['Add-ons', 'Uplighting, a second ceremony sound system, extended after-party hours, or live violin. Each is itemized — you approve every line before signing.'],
              ['Who shows up', 'Agencies quote one price and send whichever roster DJ is free. With DJ DX the quote and the performer are the same person. That is what the rate buys.'],
            ].map(([h, body]) => (
              <div key={h as string} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</h3>
                <p style={{ color: 'rgba(242,242,242,0.65)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', padding: '32px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px' }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: 'var(--white)', marginBottom: '12px' }}>
              DJ vs. Band: the honest math
            </h2>
            <p style={{ color: 'rgba(242,242,242,0.7)', lineHeight: 1.75, margin: 0 }}>
              A professional wedding band in NYC runs $8,000–$20,000+. A top-tier DJ covers every era and genre your
              guest list spans for $2,000–$5,000. The middle path most couples never hear about: live musicians layered
              over a DJ set. The <Link to="/violin-dj-duo-nyc-nj" style={{ color: 'var(--gold)' }}>Soul Shades violin + DJ duo</Link> starts
              at $2,400 — live performance energy at a quarter of band pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '72px 24px', background: 'var(--dark)' }}>
        <div className="section-inner" style={{ maxWidth: '780px' }}>
          <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Wedding DJ Pricing <span>FAQ</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '22px' }}>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>{q}</h3>
                <p style={{ fontSize: '0.93rem', color: 'rgba(242,242,242,0.6)', lineHeight: 1.75, margin: 0 }}>{a}</p>
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
                <span className="sec-label">Get Your Number</span>
              </div>
              <h2 className="booking-big-title">
                An Itemized Quote<br />Within <span>24 Hours</span>
              </h2>
              <p className="booking-blurb">
                Date, venue, guest count, hours — that's all it takes. The quote is itemized, travel is included in the
                total, and the DJ on the quote is the DJ at your wedding.
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
