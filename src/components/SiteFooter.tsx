import { Link } from 'react-router-dom';

export default function SiteFooter({ email = 'djdxbusiness@gmail.com', bookLabel = 'Book DJ DX →', bookHref = '/#booking' }: { email?: string; bookLabel?: string; bookHref?: string }) {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-main">

          <div className="footer-brand-col">
            <div className="footer-brand-name">DJ DX</div>
            <div className="footer-tagline">Soulful · Nostalgic · Live</div>
            <p className="footer-brand-bio">Based in New York / New Jersey. Available worldwide for concerts, private events, tours &amp; more.</p>
            <a href={`mailto:${email}`} className="footer-email">{email}</a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-heading">Navigate</span>
            <Link to="/#about" className="footer-nav-link">About</Link>
            <Link to="/#services" className="footer-nav-link">Genres</Link>
            <Link to="/#catalog" className="footer-nav-link">Music</Link>
            <Link to="/#videos" className="footer-nav-link">Videos</Link>
            <Link to="/#booking" className="footer-nav-link">Booking</Link>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-heading">Services</span>
            <Link to="/corporate-event-dj-nyc-nj-ct" className="footer-nav-link">Corporate Event DJ NYC</Link>
            <Link to="/violin-dj-duo-nyc-nj" className="footer-nav-link">Violin + DJ Duo NYC</Link>
            <Link to="/piano-dj-duo-nyc-nj" className="footer-nav-link">Piano + DJ Duo NYC</Link>
            <Link to="/hamptons-luxury-dj" className="footer-nav-link">The Hamptons Luxury DJ</Link>
            <Link to="/destination-wedding-dj" className="footer-nav-link">Destination Wedding DJ</Link>
            <Link to="/wedding-dj-nyc-nj" className="footer-nav-link">Wedding DJ NYC & NJ</Link>
            <Link to="/afrobeats-amapiano-dj-nyc-nj" className="footer-nav-link">Afrobeats DJ NYC & NJ</Link>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-heading">Connect</span>
            <a href="https://Instagram.com/djdx" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Instagram</a>
            <a href="https://www.tiktok.com/@djdxmusic" target="_blank" rel="noopener noreferrer" className="footer-nav-link">TikTok</a>
            <a href="https://www.youtube.com/c/djdxmusic" target="_blank" rel="noopener noreferrer" className="footer-nav-link">YouTube</a>
            <a href="https://twitter.com/djdxmusic" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Twitter / X</a>
            <a href="https://facebook.com/djdxmusic" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Facebook</a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-heading">Press</span>
            <Link to="/epk" className="footer-nav-link">Electronic Press Kit</Link>
            <Link to="/soul-shades" className="footer-nav-link">Soul Shades</Link>
            <a href="https://disruptmagazine.com/dj-dx-leads-the-music-industry-into-the-metaverse/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Disrupt Magazine</a>
            <a href="https://www.ted.com/talks/dj_dx_finally_moving" target="_blank" rel="noopener noreferrer" className="footer-nav-link">TED Talk</a>
            <a href="https://rvamag.com/music/keeping-it-real-in-the-south-an-interview-with-dj-dx.html" target="_blank" rel="noopener noreferrer" className="footer-nav-link">RVA Magazine</a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-heading">Legal</span>
            <Link to="/pricing" className="footer-nav-link">Pricing</Link>
            <Link to="/terms" className="footer-nav-link">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="footer-nav-link">Privacy Policy</Link>
            <Link to="/refunds" className="footer-nav-link">Refund Policy</Link>
            <a href="mailto:frankpellallc@gmail.com" className="footer-nav-link">Support</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} FRANKPELLA LLC. All rights reserved.</p>
          <a href={bookHref} className="footer-book-cta">{bookLabel}</a>
        </div>

        <div className="footer-recognized" aria-label="Recognized by">
          <span className="footer-recognized-label">As Seen In &amp; Recognized By</span>
          <div className="footer-recognized-strip" role="list">

            <a href="https://www.ted.com/talks/dj_dx_finally_moving" target="_blank" rel="noopener noreferrer" className="footer-partner footer-partner--icon" aria-label="TED" role="listitem">
              <svg viewBox="0 0 24 24" className="footer-logo-svg" aria-hidden="true"><path d="M0 7.664v2.223h2.43v6.449H5.1v-6.45h2.43V7.665zm7.945 0v8.672h7.31v-2.223h-4.638v-1.08h4.637v-2.066h-4.637v-1.08h4.637V7.664zm7.759 0v8.672h3.863c3.024 0 4.433-1.688 4.433-4.349 0-2.185-1.021-4.323-3.912-4.323zm2.672 2.223h.85c1.931 0 2.102 1.518 2.102 2.063 0 .815-.243 2.163-1.907 2.163h-1.045z"/></svg>
            </a>

            <a href="https://www.ted.com/tedx/events/52176" target="_blank" rel="noopener noreferrer" className="footer-partner" aria-label="TEDx" role="listitem">TEDx</a>

            <a href="https://www.wikidata.org/wiki/Q110672065" target="_blank" rel="noopener noreferrer" className="footer-partner footer-partner--icon" aria-label="Wikidata" role="listitem">
              <svg viewBox="0 0 24 24" className="footer-logo-svg" aria-hidden="true"><path d="M0 4.583v14.833h.865V4.583zm1.788 0v14.833h2.653V4.583zm3.518 0v14.832H7.96V4.583zm3.547 0v14.834h.866V4.583zm1.789 0v14.833h.865V4.583zm1.759 0v14.834h2.653V4.583zm3.518 0v14.834h.923V4.583zm1.788 0v14.833h2.653V4.583zm3.64 0v14.834h.865V4.583zm1.788 0v14.834H24V4.583Z"/></svg>
              <span>Wikidata</span>
            </a>

            <a href="https://musicbrainz.org/artist/e18da2c6-dbad-4c6b-9bfd-a77e0ef77d5f" target="_blank" rel="noopener noreferrer" className="footer-partner footer-partner--icon" aria-label="MusicBrainz" role="listitem">
              <img src="https://simpleicons.org/icons/musicbrainz.svg" className="footer-logo-img" alt="MusicBrainz" />
              <span>MusicBrainz</span>
            </a>

            <a href="https://disruptmagazine.com/dj-dx-leads-the-music-industry-into-the-metaverse/" target="_blank" rel="noopener noreferrer" className="footer-partner" aria-label="Disrupt Magazine" role="listitem">Disrupt Mag</a>
            <a href="https://www.nj.com/hudson/2014/07/jersey_city_rapper_dj_dx_shares_stories_through_old_new_school_sounds.html" target="_blank" rel="noopener noreferrer" className="footer-partner" aria-label="NJ.com" role="listitem">NJ.com</a>
            <a href="https://rvamag.com/music/keeping-it-real-in-the-south-an-interview-with-dj-dx.html" target="_blank" rel="noopener noreferrer" className="footer-partner" aria-label="RVA Magazine" role="listitem">RVA Mag</a>
            <a href="https://www.youtube.com/watch?v=V2uWYlWhv64" target="_blank" rel="noopener noreferrer" className="footer-partner" aria-label="HearRVA" role="listitem">HearRVA</a>
            <a href="https://www.hourglasssessions.com/" target="_blank" rel="noopener noreferrer" className="footer-partner" aria-label="Hourglass Sessions" role="listitem">Hourglass Sessions</a>

          </div>
        </div>

      </div>
    </footer>
  );
}
