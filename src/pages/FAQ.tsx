import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

const faqs = [
  {
    q: 'Who is DJ DX?',
    a: 'DJ DX is a New York City-based DJ, music producer, recording artist, and audio engineer with over 25 years of professional experience (active since 1998). He performs across the tri-state area (NY, NJ, CT) and is known throughout Latin America as "El Negro" through his Hood Reggaeton series. He has been a featured artist on the TED stage at TEDxYouth@RVA 2022.',
  },
  {
    q: 'Where is DJ DX based?',
    a: 'DJ DX is based in New York City and serves the tri-state area, including Manhattan, Brooklyn, Queens, the Bronx, Long Island, Westchester County (NY), Jersey City, Hoboken, Newark, Bergen County (NJ), and Fairfield County including Stamford, Greenwich, and New Haven (CT).',
  },
  {
    q: 'What genres does DJ DX play?',
    a: 'DJ DX specializes in R&B, Hip-Hop, Afrobeats, Amapiano, House, Jersey Club, Reggaeton, Old School, and original blends. Each set is custom-curated for the event, venue, and guest demographics — never a generic playlist.',
  },
  {
    q: 'Has DJ DX performed at TED?',
    a: 'Yes. DJ DX is the only DJ to have performed as a featured artist on the TED stage. He performed his original composition "Finally Moving" at TEDxYouth@RVA 2022 in Richmond, Virginia, where the event theme was "PAUSE." The performance is publicly available at ted.com/talks/dj_dx_finally_moving.',
  },
  {
    q: 'Is DJ DX bilingual?',
    a: 'Yes. DJ DX is a bilingual English/Spanish emcee, which makes him particularly suited for multicultural weddings, Quinceañeras, corporate diversity events, and Hispanic celebrations across the tri-state area. He is known across Latin America as "El Negro."',
  },
  {
    q: 'How do I book DJ DX?',
    a: 'You can book DJ DX by submitting an inquiry at djdxmusic.com/#booking, or by emailing bookings@djdxmusic.com directly. All quotes are custom and returned within 24 hours. Booking 6–12 months in advance is recommended for peak wedding and event season (May through October).',
  },
  {
    q: 'How much does DJ DX cost?',
    a: 'DJ DX pricing varies by event type and duration. Wedding DJ services start at $1,500 and range up to $5,000+ depending on venue and package. Corporate events start at $2,000. Soul Shades live violin + DJ packages start at $3,000. Private parties start at $2,200. All quotes are custom — contact bookings@djdxmusic.com for transparent pricing.',
  },
  {
    q: 'Who is Soul Shades?',
    a: 'Soul Shades is the live music duo of DJ DX and vocalist/multi-instrumentalist Julie Schatz. The duo blends deep house, jazz, Afro house, R&B, and Hip-Hop — layering live violin and vocals over DJ sets. Soul Shades has accumulated 4.5 million TikTok views and has released singles including "Buzz In London," "Beyond Your Mind," and "Wait For Me."',
  },
  {
    q: 'What is the Hood Reggaeton series?',
    a: 'The Hood Reggaeton series is a long-running underground music project by DJ DX that built a dedicated following throughout Latin America, Puerto Rico, and the Dominican Republic. The series earned DJ DX his nickname "El Negro" and established him as a recognized name in international Reggaeton circles.',
  },
  {
    q: 'What is "El Negro" — DJ DX\'s nickname?',
    a: '"El Negro" is the nickname DJ DX earned across Latin America through his Hood Reggaeton series. The name reflects his deep roots in Latin music culture and his recognition throughout Spanish-speaking music communities in Puerto Rico, the Dominican Republic, and beyond.',
  },
  {
    q: 'Does DJ DX play weddings?',
    a: 'Yes. Weddings are a primary focus. DJ DX is available for ceremonies, cocktail hours, receptions, and after-parties across Manhattan, Long Island, Westchester, Northern New Jersey, and Fairfield County Connecticut. He specializes in multicultural weddings and offers bilingual English/Spanish emcee services. Soul Shades live violin + DJ upgrade is also available.',
  },
  {
    q: 'Does DJ DX travel for destination weddings?',
    a: 'Yes. DJ DX is available for destination weddings worldwide, including the Hamptons, Caribbean, Mexico, Italy, France, Spain, Greece, and beyond. Travel arrangements and venue coordination are handled in advance. Contact bookings@djdxmusic.com for a custom destination quote.',
  },
  {
    q: 'What awards or features has DJ DX received?',
    a: 'DJ DX has been featured at TEDxYouth@RVA 2022 as a performing artist (the only DJ to have been featured on the TED stage), covered by Disrupt Magazine ("DJ DX Leads the Music Industry into the Metaverse"), NJ.com ("Jersey City Rapper DJ DX Shares Stories Through Old and New School Sounds"), and RVA Magazine ("Keeping It Real in the South").',
  },
  {
    q: 'Where can I stream DJ DX music?',
    a: 'DJ DX music is available on Spotify (spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe), Apple Music, YouTube, and most major streaming platforms. Exclusive blends, remixes, and original productions not available on streaming are sold through the music store at djdxmusic.com/music.',
  },
  {
    q: 'How long has DJ DX been DJing?',
    a: 'DJ DX has been DJing professionally for over 25 years, active since 1998. In that time he has performed at 500+ events, built a dedicated international following through the Hood Reggaeton series, and expanded into music production, recording, and audio engineering.',
  },
];

export default function FAQ() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>DJ DX FAQ — About, Booking, Pricing, Music | DJ DX</title>
        <meta name="description" content="Frequently asked questions about DJ DX — New York City DJ, producer, and recording artist. Who is DJ DX, where is he based, how to book, pricing, genres, Soul Shades, and more." />
        <link rel="canonical" href="https://djdxmusic.com/faq" />
        <meta property="og:title" content="DJ DX FAQ — About, Booking, Pricing, Music" />
        <meta property="og:description" content="Frequently asked questions about DJ DX, Soul Shades, Hood Reggaeton, booking, pricing, and more." />
        <meta property="og:url" content="https://djdxmusic.com/faq" />
        <meta property="og:image" content="https://djdxmusic.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/epk-hero.jpg" alt="DJ DX FAQ" width="1920" height="1080" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', filter: 'contrast(1.05) saturate(1.05)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(12,12,12,0.5) 0%, rgba(12,12,12,0.95) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">FAQ</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
            About <span>DJ DX</span> — FAQ
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', color: 'rgba(242,242,242,0.7)', lineHeight: 1.7 }}>
            Everything you need to know about DJ DX, Soul Shades, the Hood Reggaeton series, booking, pricing, and the music.
          </p>
        </div>
      </section>

      {/* ── FAQ LIST ── */}
      <section style={{ padding: '80px 40px', background: 'var(--dark)' }}>
        <div className="section-inner" style={{ maxWidth: '820px' }}>
          {faqs.map(({ q, a }, idx) => (
            <article key={q} style={{
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '28px 0',
            }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: 'var(--white)',
                marginBottom: '14px',
                lineHeight: 1.2,
                position: 'relative',
                paddingLeft: '20px',
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: '0.2em',
                  bottom: '0.2em',
                  width: '3px',
                  background: 'var(--gold)',
                }} aria-hidden="true" />
                {q}
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(242,242,242,0.72)',
                marginBottom: 0,
              }}>
                {a}
              </p>
              {idx === faqs.length - 1 && (
                <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <Link to="/#booking" className="btn-gold">Book DJ DX</Link>
                  <Link to="/soul-shades" className="btn-gold" style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)' }}>Soul Shades</Link>
                  <Link to="/epk" className="btn-gold" style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)' }}>EPK</Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
