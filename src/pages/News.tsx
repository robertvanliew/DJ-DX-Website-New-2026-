import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { newsPosts } from '../news';

const categoryColors: Record<string, string> = {
  'Release':           'news-tag--release',
  'Event':             'news-tag--event',
  'Press':             'news-tag--press',
  'Behind The Scenes': 'news-tag--bts',
};

function isNew(datePublished: string) {
  const days = (Date.now() - new Date(datePublished).getTime()) / (1000 * 60 * 60 * 24);
  return days <= 30;
}

export default function News() {
  const sorted = [...newsPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <div className="news-page">
      <Helmet>
        <title>News — DJ DX | Releases, Events & Behind The Scenes</title>
        <meta name="description" content="The latest from DJ DX and Soul Shades — new music releases, event announcements, and behind-the-scenes stories from New York/New Jersey's premier DJ and producer." />
        <link rel="canonical" href="https://djdxmusic.com/news" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://djdxmusic.com/news" />
        <meta property="og:title" content="News — DJ DX | Releases, Events & Behind The Scenes" />
        <meta property="og:description" content="The latest from DJ DX and Soul Shades — new music, events, and behind-the-scenes stories." />
        <meta property="og:image" content="https://djdxmusic.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Periodical", "Blog"],
          "name": "The DX Report",
          "alternateName": "DJ DX News",
          "url": "https://djdxmusic.com/news",
          "description": "The DX Report — official news publication of DJ DX and Soul Shades. Covers new music releases, events, and behind-the-scenes stories from New York/New Jersey.",
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": ["MusicGroup", "Person"],
            "@id": "https://djdxmusic.com/#djdx",
            "name": "DJ DX",
            "url": "https://djdxmusic.com/"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://djdxmusic.com/#organization",
            "name": "DJ DX Music",
            "url": "https://djdxmusic.com/",
            "logo": { "@type": "ImageObject", "url": "https://djdxmusic.com/og-image.jpg" },
            "sameAs": [
              "https://open.spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe",
              "https://www.youtube.com/channel/UCqXcClmim62rc3Jqnzp855w"
            ]
          },
          "about": [
            { "@type": "Thing", "name": "Music" },
            { "@type": "Thing", "name": "Events" },
            { "@type": "Thing", "name": "Culture" }
          ]
        })}</script>
      </Helmet>

      <SiteNav />

      {/* ── MASTHEAD ── */}
      <header className="news-masthead">
        <div className="news-masthead-rule" />
        <div className="news-masthead-inner">
          <div className="news-masthead-left">
            <span className="news-masthead-label">Est. 1998 · New York / New Jersey</span>
          </div>
          <div className="news-masthead-center">
            <h1 className="news-masthead-title">The <span>DX</span> Report</h1>
            <p className="news-masthead-sub">Music · Events · Culture</p>
          </div>
          <div className="news-masthead-right">
            <span className="news-masthead-label">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        <div className="news-masthead-rule" />
        <div className="news-masthead-rule news-masthead-rule--thin" />

        {/* ── TICKER STRIP ── */}
        <div className="news-ticker">
          <div className="news-ticker-label">
            <span className="news-ticker-dot" />
            Breaking
          </div>
          <div className="news-ticker-track">
            <div className="news-ticker-inner">
              {/* Duplicate items for seamless loop */}
              {[0, 1].map(i => (
                <span key={i} style={{ display: 'contents' }}>
                  <span className="news-ticker-item"><strong>Soul Shades</strong> debut single "Buzz In London" out now<span className="news-ticker-sep">·</span></span>
                  <span className="news-ticker-item"><strong>DJ DX</strong> × Julie Schatz — new collaboration<span className="news-ticker-sep">·</span></span>
                  <span className="news-ticker-item"><strong>Stream now</strong> on Spotify & Apple Music<span className="news-ticker-sep">·</span></span>
                  <span className="news-ticker-item"><strong>The DX Report</strong> — music news from the source<span className="news-ticker-sep">·</span></span>
                  <span className="news-ticker-item"><strong>Soul Shades</strong> — soul, jazz &amp; timeless grooves<span className="news-ticker-sep">·</span></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="news-main">
        <div className="news-container">

          {/* ── FEATURED STORY ── */}
          {featured && (
            <section className="news-lead">
              <Link to={`/news/${featured.slug}`} className="news-lead-link">
                <div className="news-lead-img-col">
                  <div className="news-lead-img-wrap">
                    <img
                      src={featured.image}
                      alt={featured.imageAlt}
                      className="news-lead-img"
                      fetchPriority="high"
                    />
                    <div className="news-lead-img-grain" />
                  </div>
                  <div className="news-lead-img-caption">
                    <span className={`news-tag ${categoryColors[featured.category] ?? ''}`}>{featured.category}</span>
                  </div>
                </div>

                <div className="news-lead-body">
                  <div className="news-lead-kicker">
                    <span className="news-kicker-line" />
                    <span className="news-kicker-text">Featured Story</span>
                    {isNew(featured.datePublished) && <span className="news-badge-new">New</span>}
                    <span className="news-kicker-line" />
                  </div>
                  <h2 className="news-lead-headline">{featured.headline}</h2>
                  <p className="news-lead-deck">{featured.excerpt}</p>
                  <div className="news-lead-meta">
                    <time className="news-lead-date">{featured.displayDate}</time>
                    <span className="news-lead-read">Read the full story →</span>
                  </div>
                </div>
              </Link>

              <div className="news-section-rule" />
            </section>
          )}

          {/* ── GRID ── */}
          {rest.length > 0 && (
            <>
              <div className="news-section-header">
                <span className="news-section-rule-line" />
                <span className="news-section-label">Latest Stories</span>
                <span className="news-section-rule-line" />
              </div>
              <div className="news-grid">
                {rest.map(post => (
                  <Link key={post.slug} to={`/news/${post.slug}`} className="news-card">
                    <div className="news-card-img-wrap">
                      <img src={post.image} alt={post.imageAlt} className="news-card-img" loading="lazy" />
                      <div className="news-card-img-overlay" />
                    </div>
                    <div className="news-card-body">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span className={`news-tag ${categoryColors[post.category] ?? ''}`}>{post.category}</span>
                        {isNew(post.datePublished) && <span className="news-badge-new">New</span>}
                      </div>
                      <h3 className="news-card-headline">{post.headline}</h3>
                      <p className="news-card-excerpt">{post.excerpt}</p>
                      <div className="news-card-footer">
                        <time className="news-date">{post.displayDate}</time>
                        <span className="news-read-more">Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
