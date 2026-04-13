import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SiteNav() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);

  const href = (hash: string) => isHome ? hash : `/${hash}`;
  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); close(); }}>DJ DX</Link>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href={href('#about')}>About</a></li>
          <li><a href={href('#catalog')}>Music</a></li>
          <li><Link to="/music" onClick={() => window.scrollTo(0, 0)}>Albums</Link></li>
          <li><a href={href('#videos')}>Videos</a></li>
          <li><Link to="/soul-shades" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Soul Shades</Link></li>
          <li><Link to="/news" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>News</Link></li>
          <li className="nav-stream-group">
            <a href="https://open.spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe?autoplay_ok=1" target="_blank" rel="noopener noreferrer" className="nav-stream-btn" aria-label="Listen on Spotify">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.75.75 0 0 1-1.032.25c-2.827-1.727-6.39-2.117-10.585-1.16a.75.75 0 0 1-.334-1.463c4.592-1.048 8.533-.597 11.701 1.341a.75.75 0 0 1 .25 1.032zm1.472-3.27a.937.937 0 0 1-1.288.308c-3.232-1.987-8.158-2.563-11.984-1.402a.937.937 0 1 1-.543-1.794c4.37-1.323 9.8-.682 13.507 1.6a.937.937 0 0 1 .308 1.288zm.127-3.408C15.37 8.39 9.386 8.2 5.896 9.26a1.124 1.124 0 1 1-.651-2.151c4.07-1.233 10.83-1.003 15.102 1.585a1.124 1.124 0 0 1-1.232 1.936z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCqXcClmim62rc3Jqnzp855w" target="_blank" rel="noopener noreferrer" className="nav-stream-btn" aria-label="Watch on YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </li>
          <li><a href="https://www.djdxllc.com/" target="_blank" rel="noopener noreferrer" className="nav-shop">Shop</a></li>
          <li><Link to="/epk" className="nav-epk-link">EPK</Link></li>
          <li><a href={href('#booking')} className="nav-book">Book Now</a></li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className={`nav-ham-line${open ? ' nav-ham-line--open' : ''}`} />
          <span className={`nav-ham-line${open ? ' nav-ham-line--open' : ''}`} />
          <span className={`nav-ham-line${open ? ' nav-ham-line--open' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer" role="dialog" aria-label="Navigation menu">
          <div className="nav-drawer-backdrop" onClick={close} />
          <div className="nav-drawer-panel">
            {/* Close button */}
            <button className="nav-drawer-close" onClick={close} aria-label="Close menu">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20"/>
                <line x1="20" y1="4" x2="4" y2="20"/>
              </svg>
            </button>
            <ul className="nav-drawer-links">
              <li><Link to="/" onClick={() => { window.scrollTo({ top:0, behavior:'smooth' }); close(); }} className="nav-drawer-home">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight:'10px',verticalAlign:'middle',opacity:0.6}}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Home
              </Link></li>
              <li><a href={href('#about')} onClick={close}>About</a></li>
              <li><a href={href('#catalog')} onClick={close}>Music Store</a></li>
              <li><Link to="/music" onClick={() => { window.scrollTo(0,0); close(); }}>Albums</Link></li>
              <li><a href={href('#videos')} onClick={close}>Videos</a></li>
              <li><Link to="/soul-shades" onClick={() => { window.scrollTo({ top:0, behavior:'smooth' }); close(); }}>Soul Shades</Link></li>
              <li><Link to="/news" onClick={() => { window.scrollTo({ top:0, behavior:'smooth' }); close(); }}>News</Link></li>
              <li><Link to="/epk" onClick={close}>EPK</Link></li>
              <li><a href="https://www.djdxllc.com/" target="_blank" rel="noopener noreferrer" onClick={close}>Shop</a></li>
              <li><a href={href('#booking')} onClick={close} className="nav-drawer-book">Book Now</a></li>
            </ul>
            <div className="nav-drawer-streams">
              <a href="https://open.spotify.com/artist/4gGFdpDwEe8zIY1XSE3dGe" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.75.75 0 0 1-1.032.25c-2.827-1.727-6.39-2.117-10.585-1.16a.75.75 0 0 1-.334-1.463c4.592-1.048 8.533-.597 11.701 1.341a.75.75 0 0 1 .25 1.032zm1.472-3.27a.937.937 0 0 1-1.288.308c-3.232-1.987-8.158-2.563-11.984-1.402a.937.937 0 1 1-.543-1.794c4.37-1.323 9.8-.682 13.507 1.6a.937.937 0 0 1 .308 1.288zm.127-3.408C15.37 8.39 9.386 8.2 5.896 9.26a1.124 1.124 0 1 1-.651-2.151c4.07-1.233 10.83-1.003 15.102 1.585a1.124 1.124 0 0 1-1.232 1.936z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCqXcClmim62rc3Jqnzp855w" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
