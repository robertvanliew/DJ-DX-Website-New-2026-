import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { newsPosts } from '../news';

const categoryColors: Record<string, string> = {
  'Release':           'news-tag--release',
  'Event':             'news-tag--event',
  'Press':             'news-tag--press',
  'Behind The Scenes': 'news-tag--bts',
};

/* ── Share helpers ── */
function ShareBar({ url, headline }: { url: string; headline: string; image: string }) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  // Instagram Stories: open Instagram app on mobile with the image pre-loaded.
  // On desktop falls back to copying the link (Instagram web has no deep-link share).
  function shareInstagram() {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Use navigator.share to trigger native share sheet — Instagram picks it up
      if (navigator.share) {
        navigator.share({
          title: headline,
          text: `${headline} — djdxmusic.com`,
          url,
        }).catch(() => {});
      } else {
        // Fallback: open Instagram app directly
        window.open(`instagram://story-camera`, '_blank');
      }
    } else {
      // Desktop: copy link so user can paste into Instagram
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied! Open Instagram on your phone, go to Stories, and paste the link as a sticker.');
      });
    }
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + headline + '"')}&url=${encodeURIComponent(url)}&via=djdxmusic`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(headline + ' ' + url)}`;

  return (
    <div className="na-share">
      <span className="na-share-label">Share this story</span>
      <div className="na-share-btns">

        {/* Instagram Stories */}
        <button className="na-share-btn na-share-btn--ig" onClick={shareInstagram} aria-label="Share to Instagram Stories">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
          <span>Instagram Story</span>
        </button>

        {/* Twitter / X */}
        <a className="na-share-btn" href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>Twitter / X</span>
        </a>

        {/* Facebook */}
        <a className="na-share-btn" href={fbUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>

        {/* WhatsApp */}
        <a className="na-share-btn" href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Copy Link */}
        <button className="na-share-btn" onClick={copyLink} aria-label="Copy link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>

      </div>
    </div>
  );
}

/* ── Main component ── */
export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = newsPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/news" replace />;

  const canonicalUrl = `https://djdxmusic.com/news/${post.slug}`;
  const fullImageUrl = `https://djdxmusic.com${post.image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.headline,
    "description": post.excerpt,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "url": canonicalUrl,
    "image": { "@type": "ImageObject", "url": fullImageUrl, "alt": post.imageAlt },
    "author": { "@type": "Person", "name": "DJ DX", "url": "https://djdxmusic.com/" },
    "publisher": {
      "@type": "Organization",
      "name": "DJ DX Music",
      "url": "https://djdxmusic.com/",
      "logo": { "@type": "ImageObject", "url": "https://djdxmusic.com/og-image.jpg" }
    },
    "about": post.tags.map(tag => ({ "@type": "Thing", "name": tag })),
    "keywords": post.tags.join(", "),
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
  };

  const related = newsPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="news-page na-page">
      <Helmet>
        <title>{post.headline} — DJ DX</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.headline} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:author" content="DJ DX" />
        {post.tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.headline} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={fullImageUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <SiteNav />

      {/* ── CINEMATIC HERO ── */}
      <div className="na-hero">
        <div className="na-hero-img-wrap">
          <img src={post.image} alt={post.imageAlt} className="na-hero-img" fetchPriority="high" />
          <div className="na-hero-vignette" />
          <div className="na-hero-gradient" />
        </div>

        {/* Floating category badge */}
        <div className="na-hero-badge">
          <span className={`news-tag ${categoryColors[post.category] ?? ''}`}>{post.category}</span>
        </div>
      </div>

      {/* ── ARTICLE HEADER — drops below the hero ── */}
      <div className="na-header-wrap">
        <div className="na-header-inner">

          {/* breadcrumb */}
          <nav className="na-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="na-bc-link">Home</Link>
            <span className="na-bc-sep" aria-hidden="true">/</span>
            <Link to="/news" className="na-bc-link">News</Link>
            <span className="na-bc-sep" aria-hidden="true">/</span>
            <span className="na-bc-cur">{post.category}</span>
          </nav>

          {/* date + byline */}
          <div className="na-byline-row">
            <time dateTime={post.datePublished} className="na-date">{post.displayDate}</time>
            <span className="na-byline-dot" aria-hidden="true" />
            <span className="na-byline">By <strong>DJ DX</strong></span>
          </div>

          {/* headline */}
          <h1 className="na-headline">{post.headline}</h1>

          {/* subheadline / deck */}
          {post.subheadline && (
            <p className="na-deck">{post.subheadline}</p>
          )}

          {/* tags */}
          <div className="na-tags">
            {post.tags.map(tag => (
              <span key={tag} className="na-pill">{tag}</span>
            ))}
          </div>

          <div className="na-header-rule" />
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <main className="na-main">
        <div className="na-layout">

          {/* Sticky sidebar */}
          <aside className="na-sidebar">
            <div className="na-sidebar-inner">
              <p className="na-sidebar-label">Share</p>
              <div className="na-sidebar-share-stack">
                <button
                  className="na-side-share-btn na-side-share-btn--ig"
                  onClick={() => {
                    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
                    if (isMobile && navigator.share) {
                      navigator.share({ title: post.headline, url: canonicalUrl }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(canonicalUrl);
                      alert('Link copied! Paste it into your Instagram Story.');
                    }
                  }}
                  aria-label="Share to Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </button>
                <a
                  className="na-side-share-btn"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + post.headline + '"')}&url=${encodeURIComponent(canonicalUrl)}&via=djdxmusic`}
                  target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  className="na-side-share-btn"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`}
                  target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Article content */}
          <article
            className="na-article"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

        </div>

        {/* ── BOTTOM SHARE BAR ── */}
        <div className="na-bottom-share-wrap">
          <div className="na-bottom-share-inner">
            <ShareBar url={canonicalUrl} headline={post.headline} image={fullImageUrl} />
          </div>
        </div>

        {/* ── RELATED STORIES ── */}
        {related.length > 0 && (
          <div className="na-related-wrap">
            <div className="na-related-inner">
              <div className="na-related-header">
                <span className="na-related-rule" />
                <span className="na-related-label">More Stories</span>
                <span className="na-related-rule" />
              </div>
              <div className="na-related-grid">
                {related.map(rp => (
                  <Link key={rp.slug} to={`/news/${rp.slug}`} className="news-card">
                    <div className="news-card-img-wrap">
                      <img src={rp.image} alt={rp.imageAlt} className="news-card-img" loading="lazy" />
                    </div>
                    <div className="news-card-body">
                      <span className={`news-tag ${categoryColors[rp.category] ?? ''}`}>{rp.category}</span>
                      <h3 className="news-card-headline">{rp.headline}</h3>
                      <div className="news-card-footer">
                        <time className="news-date">{rp.displayDate}</time>
                        <span className="news-read-more">Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── BACK ── */}
        <div className="na-back-wrap">
          <Link to="/news" className="na-back-link">← Back to The DX Report</Link>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
