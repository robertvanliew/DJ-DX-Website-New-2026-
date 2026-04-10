import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function PianoDJ() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Piano & DJ Duo NYC | Luxury Live Entertainment | DJ DX</title>
        <meta name="description" content="Looking for a Piano and DJ Duo for your NYC, NJ, or CT event? DJ DX provides a premium live keys and DJ experience for luxury weddings and corporate galas." />
        <link rel="canonical" href="https://djdxmusic.com/piano-dj-duo-nyc-nj" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Live Piano and DJ Duo NYC & NJ",
              "serviceType": "Live Music Entertainment",
              "url": "https://djdxmusic.com/piano-dj-duo-nyc-nj",
              "description": "Premium live piano and DJ duo based in New York City — available for luxury weddings, cocktail hours, rooftop parties, and corporate galas across NYC, NJ, and CT. A unique fusion of live keys and DJ production.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$-$$$$"
              },
              "areaServed": [
                {"@type": "City", "name": "New York City"},
                {"@type": "City", "name": "Manhattan"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Piano DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding Cocktail Hour Piano DJ NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Gala Piano and DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Luxury Event Live Keys DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rooftop Party Piano DJ New York"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Piano DJ Duo NYC NJ", "item": "https://djdxmusic.com/piano-dj-duo-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/piano-dj-hero.jpg" alt="Piano and DJ Duo New York City" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at bottom right, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 8%, transparent 20%), linear-gradient(to bottom, rgba(12,12,12,0.1) 0%, rgba(12,12,12,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.2) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Live Instrument & DJ</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            Live Piano & DJ Duo
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            The ultimate hybrid of timeless live keys and high-energy DJ sets. 
            Elevate your luxury wedding or corporate gala in NYC, NJ, and CT.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#booking" className="btn-gold">Check Availability</a>
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
                <h2 className="sec-title">The Best of <span>Both Worlds</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  Why choose between a live band and a DJ when you can have both? The Piano & DJ duo is the perfect option for luxury events that want to start with elegance and end with a massive dance party.
                </p>
                <p>
                  <strong>Seamless flow from cocktails to the dance floor.</strong> Imagine your guests arriving to gorgeous, soulful live piano versions of classic R&B, jazz, and modern hits during cocktail hour. Then, as dinner transitions into the reception, the heavy bass and dynamic drums of the DJ setup take over seamlessly. In between, experience jaw-dropping live piano solos played directly over deep house and top 40 anthems.
                </p>
                <p>
                  This hybrid approach gives you the organic, emotional feel of live instrumentation combined with the limitless song choices, heavy bass, and perfect mixing of a professional nightclub DJ.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Elegant Ceremonies & Cocktails</div>
                  <div className="stat-sub">Beautiful live piano renditions of your favorite songs for walking down the aisle, first dances, or sophisticated networking hours.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>High-Energy "Live" Dance Floors</div>
                  <div className="stat-sub">Live piano solos layered on top of bumping house music and club edits that look and sound incredible to your guests.</div>
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
                Because this requires coordination between two elite musicians, dates for the Piano and DJ duo book up 6–12 months in advance. Fill out the form below to confirm availability and discuss packages for your NYC, NJ, or CT event.
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
