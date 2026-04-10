import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function Hamptons() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Luxury DJ in The Hamptons | Private Estates & Summer Events | DJ DX</title>
        <meta name="description" content="Looking for an exclusive DJ for your Hamptons estate party, summer event, or luxury wedding? DJ DX provides premium entertainment from Southampton to Montauk." />
        <link rel="canonical" href="https://djdxmusic.com/hamptons-luxury-dj" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Luxury DJ in The Hamptons — Private Estates & Summer Events",
              "serviceType": "Luxury DJ Entertainment",
              "url": "https://djdxmusic.com/hamptons-luxury-dj",
              "description": "DJ DX is a premier luxury DJ serving The Hamptons — from Southampton to Montauk. Available for private estate parties, yacht events, summer galas, and exclusive weddings. TED-featured artist with 500+ luxury events performed.",
              "provider": {
                "@type": ["EntertainmentBusiness", "LocalBusiness"],
                "name": "DJ DX",
                "url": "https://djdxmusic.com/",
                "image": "https://djdxmusic.com/epk-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$$"
              },
              "areaServed": [
                {"@type": "City", "name": "East Hampton"},
                {"@type": "City", "name": "Southampton"},
                {"@type": "City", "name": "Montauk"},
                {"@type": "City", "name": "Bridgehampton"},
                {"@type": "City", "name": "Sag Harbor"},
                {"@type": "City", "name": "Water Mill"},
                {"@type": "City", "name": "Amagansett"},
                {"@type": "AdministrativeArea", "name": "The Hamptons, NY"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hamptons DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Private Estate Party DJ Hamptons"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Luxury Wedding DJ Southampton"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Yacht Party DJ Montauk"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Summer Gala DJ East Hampton"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Hamptons Luxury DJ", "item": "https://djdxmusic.com/hamptons-luxury-dj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/hero-1.jpg" alt="Luxury DJ in the Hamptons" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.5) 0%, rgba(12,12,12,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.15) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">The Hamptons & Montauk</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            Exclusive Estate <br />Entertainment
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Premium, high-energy DJ services for luxury summer events, private white parties, 
            and exclusive galas from Southampton to Montauk.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#booking" className="btn-gold">Secure Your Date</a>
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
                  <span className="sec-label">Summer Luxury Standard</span>
                </div>
                <h2 className="sec-title">Tailored For The <span>Hamptons</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  Throwing an event in the Hamptons requires a DJ who understands the assignment. Whether it's a sprawling private estate, a beachfront rental, or an exclusive country club, you need music curation that matches the sophistication of your guest list without losing the energy of a true summer celebration.
                </p>
                <p>
                  <strong>Upscale, seamless, and dialed in.</strong> I specialize in reading rooms of high-profile guests, blending classic house, modern hits, disco, and cocktail lounge vibes exactly when the moment calls for it. No awkward pauses, no club cliché routines—just purely refined, high-end entertainment.
                </p>
                <p>
                  With years of experience packing dance floors at the most prestigious venues in the North East, DJ DX and the Soul Shades duo deliver a premium musical experience worthy of a Hamptons summer.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Curated Summer Soundscapes</div>
                  <div className="stat-sub">From sun-drenched poolside deep house to sunset cocktail jazz, seamlessly transitioning into high-energy dance anthems after dark.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Absolute Discretion</div>
                  <div className="stat-sub">Accustomed to performing for VIPs, celebrities, and executives. Maximum professionalism and privacy for your exclusive estate.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Premium Sound & Lighting</div>
                  <div className="stat-sub">We can source full-scale, sleek audio and ambient lighting packages that look incredible without disrupting your high-end decor.</div>
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
                Reserve Your <br /><span>Hamptons</span> Date
              </h2>
              <p className="booking-blurb">
                Summer dates in the Hamptons fill up fast. Whether you are in East Hampton, Sag Harbor, or Montauk, fill out the form below and I will respond within 24–48 hours to discuss the vibe and vision for your event.
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
