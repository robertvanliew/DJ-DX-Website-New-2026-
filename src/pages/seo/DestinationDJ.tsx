import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function DestinationDJ() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Destination Wedding DJ | International Luxury Events | DJ DX</title>
        <meta name="description" content="Looking for a Destination Wedding DJ? DJ DX brings the premium, high-energy NYC nightclub standard to luxury weddings and international events worldwide." />
        <link rel="canonical" href="https://djdxmusic.com/destination-wedding-dj" />
        <meta property="og:title" content="Destination Wedding DJ — International Luxury Events | DJ DX" />
        <meta property="og:description" content="Bring NYC's premier DJ to your destination wedding. DJ DX travels internationally for luxury weddings in Italy, Mexico, the Caribbean, Europe, and beyond." />
        <meta property="og:url" content="https://djdxmusic.com/destination-wedding-dj" />
        <meta property="og:image" content="https://djdxmusic.com/destination-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djdxmusic" />
        <meta name="twitter:title" content="Destination Wedding DJ — DJ DX" />
        <meta name="twitter:description" content="Bring NYC's premier DJ to your destination wedding. DJ DX travels internationally for luxury weddings in Italy, Mexico, the Caribbean, and beyond." />
        <meta name="twitter:image" content="https://djdxmusic.com/destination-hero.jpg" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Destination Wedding DJ — International Luxury Events",
              "serviceType": "Destination Wedding DJ",
              "url": "https://djdxmusic.com/destination-wedding-dj",
              "description": "DJ DX is an internationally available destination wedding DJ based in New York City. Bringing the NYC nightclub standard to luxury weddings in Italy, Mexico, the Caribbean, Europe, and beyond. TED-featured artist with 500+ events performed worldwide.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New York",
                  "addressRegion": "NY",
                  "addressCountry": "US"
                }
              },
              "areaServed": [
                {"@type": "Country", "name": "United States"},
                {"@type": "Country", "name": "Italy"},
                {"@type": "Country", "name": "Mexico"},
                {"@type": "Country", "name": "France"},
                {"@type": "Country", "name": "Spain"},
                {"@type": "Country", "name": "Greece"},
                {"@type": "Place", "name": "Caribbean"},
                {"@type": "Place", "name": "Worldwide"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Destination Wedding DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destination Wedding DJ Italy"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destination Wedding DJ Mexico"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Caribbean Wedding DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "International Luxury Event DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "European Wedding DJ from New York"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Destination Wedding DJ", "item": "https://djdxmusic.com/destination-wedding-dj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/destination-hero.jpg" alt="Destination Wedding DJ from New York City — DJ DX performing at international luxury wedding" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at bottom right, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 8%, transparent 20%), linear-gradient(to bottom, rgba(12,12,12,0.1) 0%, rgba(12,12,12,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.2) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Worldwide Travel Available</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            Destination Events &<br />International Weddings
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Don't risk your destination wedding on a random resort DJ. 
            Bring the premium, high-energy NYC standard to your international celebration.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#booking" className="btn-gold">Request Booking & Travel Estimate</a>
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
                  <span className="sec-label">Why Fly Us Out?</span>
                </div>
                <h2 className="sec-title">The Masterclass <span>Standard</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  When you are investing tens or hundreds of thousands of dollars into a destination wedding in Tulum, Lake Como, the Amalfi Coast, or the Caribbean, the last thing you want to do is leave the entertainment up to chance. Too often, local resort DJs play outdated playlists and lack the ability to truly read an international luxury crowd.
                </p>
                <p>
                  <strong>Bring the exact vibe you want, anywhere in the world.</strong> Based in NYC, DJ DX and the Soul Shades duo are accustomed to performing for highly discerning, elite crowds. We understand modern luxury pacing—from tasteful, curated cocktail hour ambiance to an explosive, seamless dance floor experience that your guests will talk about for years.
                </p>
                <p>
                  As an experienced multi-genre producer and DJ, DX flawlessly blends classics, deep house, top 40, and custom requests into a cohesive journey, ensuring your international event is nothing short of spectacular.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Seamless International Logistics</div>
                  <div className="stat-sub">We handle our own fast-tracked travel planning, passports, and necessary coordination with your venue so you don't have to stress.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Rider & Tech Coordination</div>
                  <div className="stat-sub">We work directly with your destination planner and local AV companies over email and Zoom to ensure our technical rider is perfectly met upon arrival.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>World-Class Peace of Mind</div>
                  <div className="stat-sub">Knowing exactly who is showing up to perform removes the biggest anxiety of throwing a destination party. We guarantee a packed dance floor, anywhere.</div>
                </div>
              </div>
            </div>
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
                Reserve Your Date<br /><span>Worldwide</span>
              </h2>
              <p className="booking-blurb">
                International engagements require significant lead time for travel and technical coordination. Please fill out the form below with your exact destination location and event dates so we can provide a customized quote covering performance and travel logistics.
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
