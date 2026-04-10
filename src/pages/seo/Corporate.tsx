import React, { useEffect } from 'react';
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
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Corporate Event DJ Services",
            "provider": {
              "@type": "EntertainmentBusiness",
              "name": "DJ DX",
              "url": "https://djdxmusic.com/"
            },
            "areaServed": [
              {"@type": "City", "name": "New York City"},
              {"@type": "State", "name": "New York"},
              {"@type": "State", "name": "New Jersey"},
              {"@type": "State", "name": "Connecticut"},
              {"@type": "AdministrativeArea", "name": "Tri-State Area"}
            ],
            "description": "Professional DJ entertainment for corporate events, galas, holiday parties, and luxury brand activations across NYC, NJ, and CT."
          }`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="epk-hero-bg">
          <img src="/show-6.jpg" alt="Corporate Event DJ New York City" loading="eager" />
        </div>
        <div className="epk-hero-overlay" />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Corporate Entertainment</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            Elevate Your Corporate Event
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Premium, brand-safe DJ entertainment for Fortune 500 holiday parties, 
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
                  <span className="sec-label">Why DJ DX?</span>
                </div>
                <h2 className="sec-title">The Corporate <span>Standard</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  Finding the right entertainment for a corporate event is entirely different from booking a nightclub or a wedding. 
                  You need absolute professionalism, perfect volume control for networking, and a DJ who understands the flow of an executive "run of show."
                </p>
                <p>
                  <strong>No cheesy gimmicks, no inappropriate playlists.</strong> Just seamless, sophisticated mixing that matches the prestige of your brand. DJ DX specializes in curating the perfect vibe—from low-profile, tasteful background music during dinner & cocktails, to high-energy, tasteful dance floors to close out the night.
                </p>
                <p>
                  With over 20 years of experience, TEDx features, and countless high-end performances across the NYC/NJ/CT tri-state area, DJ DX is the trusted choice for professional event planners.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Brand-Safe Music</div>
                  <div className="stat-sub">Clean edits and appropriately selected tracks to protect your company's image.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Impeccable Timing</div>
                  <div className="stat-sub">Seamless integration with your run-of-show, awards, and guest speakers.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Turnkey Audio</div>
                  <div className="stat-sub">Professional sound and lighting packages available. Fully insured.</div>
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
