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
          "@type": "Blog",
          "name": "DJ DX News",
          "url": "https://djdxmusic.com/news",
          "description": "News, releases, and behind-the-scenes stories from DJ DX and Soul Shades.",
          "publisher": {
            "@type": "Organization",
            "name": "DJ DX Music",
            "url": "https://djdxmusic.com/",
            "logo": { "@type": "ImageObject", "url": "https://djdxmusic.com/og-image.jpg" }
          }
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
            <h1 className="news-masthead-title">The DX Report</h1>
            <p className="news-masthead-sub">Music · Events · Culture</p>
          </div>
          <div className="news-masthead-right">
            <span className="news-masthead-label">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        <div className="news-masthead-rule" />
        <div className="news-masthead-rule news-masthead-rule--thin" />
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
                      <span className={`news-tag ${categoryColors[post.category] ?? ''}`}>{post.category}</span>
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
