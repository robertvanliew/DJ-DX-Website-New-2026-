import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import BookingForm from '../../components/BookingForm';

export default function ViolinDJ() {
  // Always start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Violin and DJ Duo NYC & NJ | Soul Shades Entertainment</title>
        <meta name="description" content="Looking for a live Violin and DJ duo? Soul Shades provides premium live strings and DJ entertainment for luxury weddings, corporate events, and parties in NYC, NJ, and CT." />
        <link rel="canonical" href="https://djdxmusic.com/violin-dj-duo-nyc-nj" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Live Violin and DJ Duo NYC & NJ — Soul Shades",
              "serviceType": "Live Music Entertainment",
              "url": "https://djdxmusic.com/violin-dj-duo-nyc-nj",
              "description": "Soul Shades is a premium live violin and DJ duo based in New York City. Available for luxury weddings, corporate galas, rooftop parties, and upscale events across NYC, NJ, and CT. Featuring vocalist Julie Schatz on live violin and DJ DX on turntables.",
              "provider": {
                "@type": ["MusicGroup", "EntertainmentBusiness"],
                "name": "Soul Shades",
                "url": "https://djdxmusic.com/soul-shades",
                "image": "https://djdxmusic.com/ss-hero.jpg",
                "email": "djdxbusiness@gmail.com",
                "priceRange": "$$$-$$$$",
                "sameAs": [
                  "https://djdxmusic.com/soul-shades",
                  "https://www.instagram.com/soulshadesmusic/",
                  "https://open.spotify.com/artist/2GES5fSFNcx25lv9RFcQjP"
                ]
              },
              "areaServed": [
                {"@type": "City", "name": "New York City"},
                {"@type": "State", "name": "New York"},
                {"@type": "State", "name": "New Jersey"},
                {"@type": "State", "name": "Connecticut"},
                {"@type": "City", "name": "Manhattan"},
                {"@type": "City", "name": "Brooklyn"},
                {"@type": "City", "name": "The Hamptons"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Live Violin DJ Packages",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Luxury Wedding Violin DJ Duo NYC"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Gala Live Strings and DJ"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rooftop Party Live Violin DJ"}}
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://djdxmusic.com/"},
                {"@type": "ListItem", "position": 2, "name": "Violin DJ Duo NYC NJ", "item": "https://djdxmusic.com/violin-dj-duo-nyc-nj"}
              ]
            }
          ]`}
        </script>
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="epk-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="epk-hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <img src="/violin-dj-hero.jpg" alt="Violin and DJ Duo New York City" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.05) saturate(1.1)' }} />
        </div>
        <div className="epk-hero-overlay" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at bottom right, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 8%, transparent 20%), linear-gradient(to bottom, rgba(12,12,12,0.1) 0%, rgba(12,12,12,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(235, 191, 109, 0.2) 0%, transparent 60%)'
        }} />
        
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Live entertainment</span>
          </div>
          <h1 className="epk-title" style={{ fontSize: 'var(--text-6xl)', marginBottom: '1rem' }}>
            The Ultimate Live Strings & DJ Experience
          </h1>
          <p className="epk-lead" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Elevate your wedding or corporate event with Soul Shades: a high-energy Violin & DJ duo serving New York, New Jersey, and Connecticut.
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
                  <span className="sec-label">Why a Violin & DJ Duo?</span>
                </div>
                <h2 className="sec-title">The Best of <span>Both Worlds</span></h2>
              </div>
              <div className="about-body sr" data-sr-delay="0.12s">
                <p>
                  You don't have to choose between the elegance of live musicians and the high energy of a club DJ. With the <strong>Soul Shades Live Violin & DJ Duo</strong>, your guests experience the sophisticated ambiance of live strings seamlessly escalating into an upbeat, packed dance floor.
                </p>
                <p>
                  We specialize in reading the room and bringing performances to life. From classical pop covers during cocktail hour to live electric violin solos over modern house, hip-hop, and Top 40 hits, this is not just a DJ set—it is a live concert experience tailored to your crowd.
                </p>
                <p>
                  With featured performances on TEDx and regular bookings at premier venues across NYC and NJ, Julie Schatz (Violin) and DJ DX bring an unforgettable dynamic to luxury weddings and brand activations.
                </p>
              </div>
            </div>

            <div className="about-aside">
              <div className="stat-row sr" data-sr-delay="0.05s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Elegant Ceremony & Cocktail Music</div>
                  <div className="stat-sub">Live acoustic and electric violin performances featuring modern pop covers and timeless classics tailored for your guests.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.15s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>High-Energy Dance Floor Sets</div>
                  <div className="stat-sub">The DJ drops the beat while the violin shreds live on top—creating a club-style atmosphere that keeps everyone moving.</div>
                </div>
              </div>
              <div className="stat-row sr" data-sr-delay="0.25s">
                <div className="stat-meta">
                  <div className="stat-label" style={{ color: 'var(--gold)' }}>Premium Sound Packages</div>
                  <div className="stat-sub">We handle setup with premium sound reinforcement designed specifically to balance live acoustic instruments with digital DJ audio.</div>
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
                Bring Live Energy to<br />Your <span>Next Event</span>
              </h2>
              <p className="booking-blurb">
                Soul Shades fills dates quickly for peak wedding and corporate seasons. Whether you are in NYC, NJ, or CT, fill out the form and we will respond within 24–48 hours to discuss our live duo packages.
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
