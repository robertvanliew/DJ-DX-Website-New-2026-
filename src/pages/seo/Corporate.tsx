import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function Corporate() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Corporate Event DJ NYC, NJ, CT | Luxury & Brand Activations | DJ DX</title>
        <meta name="description" content="Looking for a professional corporate event DJ in NYC, NJ, or CT? DJ DX provides premium, brand-safe entertainment for corporate galas, holiday parties, and luxury activations." />
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
              "description": "Professional DJ entertainment for Fortune 500 companies, corporate galas, holiday parties, product launches, and luxury brand activations across New York City, New Jersey, and Connecticut. DJ DX brings 20+ years of experience and 500+ events performed.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$",
                "sameAs": ["https://djdxmusic.com/", "https://www.ted.com/talks/dj_dx_finally_moving"]
              },
              "areaServed": [
                {"@type": "City", "name": "New York City"},
                {"@type": "State", "name": "New York"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "AdministrativeArea", "name": "Tri-State Area"},
                {"@type": "City", "name": "Manhattan"},
                {"@type": "City", "name": "Brooklyn"},
                {"@type": "City", "name": "Jersey City"},
                {"@type": "City", "name": "Newark"}
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
          <img src="/latest-corporate-hero.jpg" alt="Corporate Event DJ New York City — DJ DX performing at gala" width="1920" height="1080" fetchPriority="high" loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.05) saturate(1.1)' }} />
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
                  With over 20 years of experience, TEDx features, and countless high-end performances across the NYC/NJ/CT tri-state area, DJ DX and Soul Shades represent the trusted choice for discerning corporate event planners.
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

      <SiteFooter />
    </>
  );
}
