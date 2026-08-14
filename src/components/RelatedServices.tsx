import { Link, useLocation } from 'react-router-dom';

type Item = { slug: string; title: string; desc: string };

const ALL: Record<string, Item> = {
  'corporate-event-dj-nyc-nj-ct':  { slug: 'corporate-event-dj-nyc-nj-ct',  title: 'Corporate Event DJ',          desc: 'Galas, brand activations, holiday parties — NYC, NJ, CT.' },
  'violin-dj-duo-nyc-nj':          { slug: 'violin-dj-duo-nyc-nj',          title: 'Live Violin + DJ Duo',         desc: 'Soul Shades — live violin layered over DJ sets.' },
  'piano-dj-duo-nyc-nj':           { slug: 'piano-dj-duo-nyc-nj',           title: 'Live Piano + DJ Duo',          desc: 'Premium piano-and-DJ pairing for luxury weddings and galas.' },
  'hamptons-luxury-dj':            { slug: 'hamptons-luxury-dj',            title: 'Hamptons Luxury DJ',           desc: 'Private estates, summer galas — Southampton to Montauk.' },
  'destination-wedding-dj':        { slug: 'destination-wedding-dj',        title: 'Destination Wedding DJ',       desc: 'NYC-based, internationally available.' },
  'wedding-dj-nyc-nj':             { slug: 'wedding-dj-nyc-nj',             title: 'Wedding DJ NYC & NJ',          desc: 'R&B, Hip-Hop, and Afrobeats wedding sets.' },
  'wedding-entertainment-package-nyc-nj': { slug: 'wedding-entertainment-package-nyc-nj', title: 'Full Entertainment Package', desc: 'DJ, live music, and videography — one team, one price.' },
  'wedding-dj-cost-nyc':           { slug: 'wedding-dj-cost-nyc',           title: 'Wedding DJ Cost Guide',        desc: 'Real NYC pricing — what a wedding DJ costs and why.' },
  'wedding-dj-manhattan-nyc':      { slug: 'wedding-dj-manhattan-nyc',      title: 'Wedding DJ Manhattan',         desc: 'Cipriani, Tribeca Rooftop, Pier Sixty, and beyond.' },
  'wedding-dj-long-island-ny':     { slug: 'wedding-dj-long-island-ny',     title: 'Wedding DJ Long Island',       desc: 'Nassau, Suffolk, and the Hamptons.' },
  'wedding-dj-stamford-ct':        { slug: 'wedding-dj-stamford-ct',        title: 'Wedding DJ Stamford CT',       desc: 'Fairfield County and the Connecticut Gold Coast.' },
  'wedding-dj-northern-nj':        { slug: 'wedding-dj-northern-nj',        title: 'Wedding DJ Northern NJ',       desc: 'Newark, Jersey City, Hoboken, Bergen County.' },
  'wedding-dj-westchester-ny':     { slug: 'wedding-dj-westchester-ny',     title: 'Wedding DJ Westchester',       desc: 'Tarrytown, Rye, Scarsdale, Hudson Valley.' },
  'afrobeats-amapiano-dj-nyc-nj':  { slug: 'afrobeats-amapiano-dj-nyc-nj',  title: 'Afrobeats & Amapiano DJ',      desc: 'Afrobeats, Amapiano, Dancehall, Soca.' },
  'rb-hip-hop-dj-nyc-nj':          { slug: 'rb-hip-hop-dj-nyc-nj',          title: 'R&B + Hip-Hop DJ',             desc: 'The classic crowd-mover combo.' },
  'dj-for-hire-nyc':               { slug: 'dj-for-hire-nyc',               title: 'DJ for Hire NYC',              desc: 'Weddings, corporate, private events, club nights.' },
  'new-years-eve-dj-nyc':          { slug: 'new-years-eve-dj-nyc',          title: 'New Year’s Eve DJ',       desc: 'Private parties, galas, rooftop countdowns.' },
  'private-party-dj-nyc-nj':       { slug: 'private-party-dj-nyc-nj',       title: 'Private Party DJ',             desc: 'Birthdays, anniversaries, milestones.' },
  'hip-hop-dj-nyc-nj':             { slug: 'hip-hop-dj-nyc-nj',             title: 'Hip-Hop DJ NYC & NJ',          desc: 'Golden era to current — for clubs and events.' },
  'sweet-16-dj-nyc-nj':            { slug: 'sweet-16-dj-nyc-nj',            title: 'Sweet 16 DJ',                  desc: 'Hip-hop, pop, and Afrobeats for milestone teen events.' },
  'sweet-16-dj-hudson-valley-ny':  { slug: 'sweet-16-dj-hudson-valley-ny',  title: 'Hudson Valley Sweet 16 DJ',    desc: 'Kingston, New Paltz, Saugerties, Red Hook, and beyond.' },
  'rooftop-party-dj-nyc':          { slug: 'rooftop-party-dj-nyc',          title: 'Rooftop Party DJ',             desc: 'Outdoor summer events — Manhattan, Brooklyn, Hamptons.' },
  'rb-dj-nyc-nj':                  { slug: 'rb-dj-nyc-nj',                  title: 'R&B DJ',                       desc: 'Classic soul, 90s R&B, neo-soul.' },
  'house-jersey-club-dj-nyc-nj':   { slug: 'house-jersey-club-dj-nyc-nj',   title: 'House & Jersey Club DJ',       desc: 'Club edits and Jersey Club for venues and events.' },
};

const RELATED: Record<string, string[]> = {
  'corporate-event-dj-nyc-nj-ct':  ['dj-for-hire-nyc', 'new-years-eve-dj-nyc', 'private-party-dj-nyc-nj', 'piano-dj-duo-nyc-nj'],
  'violin-dj-duo-nyc-nj':          ['piano-dj-duo-nyc-nj', 'hamptons-luxury-dj', 'wedding-entertainment-package-nyc-nj', 'destination-wedding-dj'],
  'piano-dj-duo-nyc-nj':           ['violin-dj-duo-nyc-nj', 'corporate-event-dj-nyc-nj-ct', 'hamptons-luxury-dj', 'wedding-entertainment-package-nyc-nj'],
  'wedding-entertainment-package-nyc-nj': ['wedding-dj-nyc-nj', 'violin-dj-duo-nyc-nj', 'piano-dj-duo-nyc-nj', 'wedding-dj-cost-nyc'],
  'hamptons-luxury-dj':            ['wedding-dj-long-island-ny', 'rooftop-party-dj-nyc', 'destination-wedding-dj', 'piano-dj-duo-nyc-nj'],
  'destination-wedding-dj':        ['wedding-dj-manhattan-nyc', 'hamptons-luxury-dj', 'violin-dj-duo-nyc-nj', 'wedding-dj-nyc-nj'],
  'wedding-dj-nyc-nj':             ['wedding-dj-cost-nyc', 'wedding-entertainment-package-nyc-nj', 'rb-hip-hop-dj-nyc-nj', 'afrobeats-amapiano-dj-nyc-nj'],
  'wedding-dj-cost-nyc':           ['wedding-dj-nyc-nj', 'wedding-entertainment-package-nyc-nj', 'violin-dj-duo-nyc-nj', 'destination-wedding-dj'],
  'wedding-dj-manhattan-nyc':      ['wedding-dj-nyc-nj', 'wedding-dj-cost-nyc', 'hamptons-luxury-dj', 'piano-dj-duo-nyc-nj'],
  'wedding-dj-long-island-ny':     ['wedding-dj-manhattan-nyc', 'hamptons-luxury-dj', 'wedding-dj-nyc-nj', 'rb-hip-hop-dj-nyc-nj'],
  'wedding-dj-stamford-ct':        ['wedding-dj-westchester-ny', 'wedding-dj-manhattan-nyc', 'wedding-dj-northern-nj', 'corporate-event-dj-nyc-nj-ct'],
  'wedding-dj-northern-nj':        ['wedding-dj-nyc-nj', 'wedding-dj-westchester-ny', 'wedding-dj-stamford-ct', 'corporate-event-dj-nyc-nj-ct'],
  'wedding-dj-westchester-ny':     ['sweet-16-dj-hudson-valley-ny', 'wedding-dj-stamford-ct', 'wedding-dj-northern-nj', 'wedding-dj-nyc-nj'],
  'afrobeats-amapiano-dj-nyc-nj':  ['rb-hip-hop-dj-nyc-nj', 'hip-hop-dj-nyc-nj', 'house-jersey-club-dj-nyc-nj', 'dj-for-hire-nyc'],
  'rb-hip-hop-dj-nyc-nj':          ['hip-hop-dj-nyc-nj', 'rb-dj-nyc-nj', 'afrobeats-amapiano-dj-nyc-nj', 'wedding-dj-nyc-nj'],
  'dj-for-hire-nyc':               ['corporate-event-dj-nyc-nj-ct', 'private-party-dj-nyc-nj', 'sweet-16-dj-nyc-nj', 'rooftop-party-dj-nyc'],
  'new-years-eve-dj-nyc':          ['corporate-event-dj-nyc-nj-ct', 'rooftop-party-dj-nyc', 'private-party-dj-nyc-nj', 'dj-for-hire-nyc'],
  'private-party-dj-nyc-nj':       ['sweet-16-dj-nyc-nj', 'dj-for-hire-nyc', 'corporate-event-dj-nyc-nj-ct', 'rooftop-party-dj-nyc'],
  'hip-hop-dj-nyc-nj':             ['rb-hip-hop-dj-nyc-nj', 'rb-dj-nyc-nj', 'afrobeats-amapiano-dj-nyc-nj', 'sweet-16-dj-nyc-nj'],
  'sweet-16-dj-nyc-nj':            ['sweet-16-dj-hudson-valley-ny', 'private-party-dj-nyc-nj', 'hip-hop-dj-nyc-nj', 'afrobeats-amapiano-dj-nyc-nj'],
  'sweet-16-dj-hudson-valley-ny':  ['sweet-16-dj-nyc-nj', 'wedding-dj-westchester-ny', 'private-party-dj-nyc-nj', 'hip-hop-dj-nyc-nj'],
  'rooftop-party-dj-nyc':          ['hamptons-luxury-dj', 'new-years-eve-dj-nyc', 'private-party-dj-nyc-nj', 'house-jersey-club-dj-nyc-nj'],
  'rb-dj-nyc-nj':                  ['rb-hip-hop-dj-nyc-nj', 'hip-hop-dj-nyc-nj', 'wedding-dj-nyc-nj', 'afrobeats-amapiano-dj-nyc-nj'],
  'house-jersey-club-dj-nyc-nj':   ['rooftop-party-dj-nyc', 'hip-hop-dj-nyc-nj', 'afrobeats-amapiano-dj-nyc-nj', 'dj-for-hire-nyc'],
};

export default function RelatedServices() {
  const { pathname } = useLocation();
  const currentSlug = pathname.replace(/^\/+|\/+$/g, '');
  const relatedSlugs = RELATED[currentSlug] ?? ['dj-for-hire-nyc', 'wedding-dj-nyc-nj', 'corporate-event-dj-nyc-nj-ct', 'hamptons-luxury-dj'];
  const items = relatedSlugs.map(s => ALL[s]).filter(Boolean);

  return (
    <section
      aria-label="Related DJ services"
      style={{
        background: 'var(--dark)',
        padding: '72px 24px 96px',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div className="section-inner" style={{ maxWidth: '1180px' }}>
        <div className="sec-overline" style={{ justifyContent: 'center' }}>
          <span className="sec-overline-line" />
          <span className="sec-label">Explore More</span>
          <span className="sec-overline-line" />
        </div>
        <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '8px' }}>
          Related <span>DJ Services</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'rgba(242,242,242,0.6)', maxWidth: '620px', margin: '0 auto 48px', fontSize: '1rem', lineHeight: 1.7 }}>
          Other ways DJ DX serves the NYC, NJ, and CT area.
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {items.map(item => (
            <li key={item.slug}>
              <Link
                to={`/${item.slug}`}
                style={{
                  display: 'block',
                  padding: '24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  margin: '0 0 8px',
                  lineHeight: 1.2,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'rgba(242,242,242,0.65)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: '0 0 14px',
                }}>
                  {item.desc}
                </p>
                <span style={{
                  color: 'var(--gold)',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}>
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
