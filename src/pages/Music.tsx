import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { useCart, CartFab, CartPanel } from '../components/CartContext';
import { usePlayer } from '../components/PlayerContext';
import type { Track } from '../catalog';

/* ── Types ── */
interface ReleaseTrack {
  title: string;
  featuring?: string;
  preview: string;
}

interface Release {
  id: string;
  title: string;
  type: 'Album' | 'Single' | 'EP';
  year: string;
  cover: string;
  genre: string;
  tracks: ReleaseTrack[];
  buyUrl?: string;
  streamUrl?: string;
}

/* ── Data ── */
const albums: Release[] = [
  {
    id: 'unfortunate-child',
    title: 'The Unfortunate Child',
    type: 'Album',
    year: '2024',
    cover: '/covers/the-unfortunate-child.png',
    genre: 'Hip-Hop',
    tracks: [
      { title: 'Deep Inside',       featuring: 'Brydgs',                   preview: '/previews/tuc-deep-inside.wav' },
      { title: 'In The Park',       featuring: 'DJ Madden',                preview: '/previews/tuc-in-the-park.wav' },
      { title: 'Left Right',        featuring: 'DJ Madden',                preview: '/previews/tuc-left-right.wav' },
      { title: 'Many Dreams',       featuring: 'DJ Madden',                preview: '/previews/tuc-many-dreams.wav' },
      { title: 'Shot Down',                                                 preview: '/previews/tuc-shot-down.wav' },
      { title: 'Summer Solstice',   featuring: 'Brydgs & Kate Kilbourne',  preview: '/previews/tuc-summer-solstice.wav' },
      { title: 'The Chorus',                                                preview: '/previews/tuc-the-chorus.wav' },
      { title: "Thug Doesn't Rest", featuring: 'Brydgs',                   preview: '/previews/tuc-thug-doesnt-rest.wav' },
    ],
  },
  {
    id: 'made-from-scratch',
    title: 'Made From Scratch',
    type: 'Album',
    year: '2022',
    cover: '/covers/made-from-scratch.jpg',
    genre: 'Hip-Hop',
    tracks: [
      { title: "You Don't Stop", featuring: 'DJ Madden',                   preview: '/previews/mfs-you-dont-stop.mp3' },
      { title: 'Bond',           featuring: 'DJ Madden',                   preview: '/previews/mfs-bond.mp3' },
      { title: "Don't Worry",    featuring: 'DJ Madden',                   preview: '/previews/mfs-dont-worry.mp3' },
      { title: 'Ninja of Rap',   featuring: 'DJ Madden',                   preview: '/previews/mfs-ninja-of-rap.mp3' },
      { title: 'Shining Stars',  featuring: 'DJ Madden',                   preview: '/previews/mfs-shining-stars.mp3' },
      { title: 'Twerk It',       featuring: 'DJ Madden',                   preview: '/previews/mfs-twerk-it.mp3' },
      { title: 'Tape Pop',       featuring: 'DJ Madden, Beast Mode Billy', preview: '/previews/mfs-tape-pop.mp3' },
      { title: 'Riots',                                                     preview: '/previews/mfs-riots.mp3' },
      { title: 'So Simple',                                                 preview: '/previews/mfs-so-simple.mp3' },
    ],
  },
];

const singles: ReleaseTrack[] = [
  { title: 'Hello',                featuring: 'Adele',               preview: '/previews/single-adele-feat.-dj-dx--hello.wav' },
  { title: 'My Baby',              featuring: 'El DaBarge',           preview: '/previews/single-el-dabarge--my-baby.mp3' },
  { title: 'Run Bro',              featuring: 'Nadia Gold',           preview: '/previews/single-nadia-gold--run-bro.wav' },
  { title: '1000 Reasons',         featuring: 'DJ Madden',            preview: '/previews/single-1000-reasons-feat.-dj-madden.flac' },
  { title: 'Blessings',                                               preview: '/previews/single-blessings.mp3' },
  { title: 'Chick',                                                   preview: '/previews/single-chick.mp3' },
  { title: 'I Will',                                                  preview: '/previews/single-i-will.flac' },
  { title: 'Keep Me Going',        featuring: 'Pooh Bear, DJ Madden', preview: '/previews/single-dj-dx-feat.-pooh-bear-dj-madden--keep-me-going.wav' },
  { title: 'Make It a Better Day', featuring: '2Pac',                 preview: '/previews/single-2-pac--make-it-a-better-day.wav' },
  { title: 'Two of Us',            featuring: 'Bill Withers',         preview: '/previews/single-bill-withers--two-of-us.mp3' },
  { title: "I'm Outstanding",      featuring: 'Catamounts',           preview: '/previews/single-catamounts--im-outstanding.wav' },
  { title: 'Crime Side',           featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--crime-side.wav' },
  { title: 'How Deep Is Our Bond', featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--how-deep-is-our-bond.mp3' },
  { title: 'March It Out',         featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--march-it-out.wav' },
  { title: 'Stop Playing',         featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--stop-playing.wav' },
  { title: 'Radio Shook',          featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--radio-shook.mp3' },
  { title: 'This Is Hip-Hop',      featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--this-is-hip-hop.mp3' },
  { title: 'When I Rhyme',         featuring: 'DJ Madden',            preview: '/previews/single-dj-madden--when-i-rhyme.mp3' },
  { title: 'Dark Paradise',        featuring: 'Lana Del Rey',         preview: '/previews/single-lana-del-rey--dark-paradise.mp3' },
  { title: 'Lonely Girl',          featuring: 'The Weeknd',           preview: '/previews/single-the-weeknd--lonely-girl.mp3' },
  { title: 'Harmonia',             featuring: 'Funkerman',            preview: '/previews/single-funkerman_feat.dj_dx_-_harmonia.mp3' },
  { title: 'Help Me Stand',        featuring: 'Deniz Reno',           preview: '/previews/single-deniz-reno--help-me-stand.wav' },
  { title: 'Boys',                 featuring: 'KEMPEL, DJ Madden',    preview: '/previews/single-kempel-feat.-dj-dx-dj-madden---boys.wav' },
];

/* ── Helpers — convert to Track shape for the shared cart ── */
let _nextId = 2000;
function makeTrack(title: string, artists: string, preview: string): Track {
  return { id: _nextId++, title, artists, tag: 'Original', preview, visible: true, order: 0 };
}

/* ── Icons ── */
const PlayIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
    <polygon points="3,1 14,8 3,15" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
    <rect x="2" y="1" width="4" height="14" rx="1"/><rect x="10" y="1" width="4" height="14" rx="1"/>
  </svg>
);
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <polyline points="16 6 12 2 8 6"/>
    <line x1="12" y1="2" x2="12" y2="15"/>
  </svg>
);

/* ── Component ── */
export default function Music() {
  const [toastKey, setToastKey] = useState<string | null>(null);
  const { cart, addToCart } = useCart();
  const { play, playingTrack, isPlaying } = usePlayer();
  const playingPreview = playingTrack?.preview ?? null;

  async function handleShare(
    e: React.MouseEvent,
    title: string,
    key: string,
    albumId?: string,
  ) {
    e.stopPropagation();
    const origin = window.location.origin;
    const pageUrl = `${origin}/music`;
    const shareData = {
      title: `${title} · DJ DX`,
      text: `🎵 ${title} by DJ DX — stream & buy at djdxmusic.com`,
      url: pageUrl,
    };
    if (navigator.share) {
      // On mobile, try attaching the OG image as a file for richer previews
      if (albumId && navigator.canShare) {
        try {
          const ogUrl = `${origin}/api/og?type=album&track=${encodeURIComponent(title)}&album=${encodeURIComponent(albumId)}`;
          const imgRes = await fetch(ogUrl);
          const blob   = await imgRes.blob();
          const file   = new File([blob], 'djdx-track.png', { type: 'image/png' });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ ...shareData, files: [file] });
            return;
          }
        } catch { /* fall through to text share */ }
      }
      try { await navigator.share(shareData); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(pageUrl);
      setToastKey(key);
      setTimeout(() => setToastKey(null), 2500);
    }
  }

  // Stable track objects per session (ids fixed after first render)
  const albumTrackObjects = useRef<Map<string, Track>>(new Map());
  const singleTrackObjects = useRef<Map<string, Track>>(new Map());

  function getAlbumTrack(albumTitle: string, track: ReleaseTrack): Track {
    const key = `${albumTitle}::${track.title}`;
    if (!albumTrackObjects.current.has(key)) {
      const artists = track.featuring ? `DJ DX ft. ${track.featuring}` : 'DJ DX';
      albumTrackObjects.current.set(key, makeTrack(`${track.title} (${albumTitle})`, artists, track.preview));
    }
    return albumTrackObjects.current.get(key)!;
  }

  function getSingleTrack(track: ReleaseTrack): Track {
    if (!singleTrackObjects.current.has(track.preview)) {
      const artists = track.featuring ? `DJ DX ft. ${track.featuring}` : 'DJ DX';
      singleTrackObjects.current.set(track.preview, makeTrack(track.title, artists, track.preview));
    }
    return singleTrackObjects.current.get(track.preview)!;
  }

  function playPreview(e: React.MouseEvent, trackObj: Track) {
    e.stopPropagation();
    play(trackObj);
  }

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const nav = document.querySelector('.nav') as HTMLElement | null;
      const offset = (nav?.offsetHeight ?? 70) + 16;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  return (
    <div className="rl-page">
      <Helmet>
        <title>DJ DX — Discography | Albums, Singles & Productions</title>
        <meta name="description" content="Browse the full DJ DX discography — albums, singles, and original productions. Preview and buy exclusive tracks from New York/New Jersey DJ and producer DJ DX." />
        <link rel="canonical" href="https://djdxmusic.com/music" />
        <meta property="og:type" content="music.musician" />
        <meta property="og:url" content="https://djdxmusic.com/music" />
        <meta property="og:title" content="DJ DX — Discography | Albums, Singles & Productions" />
        <meta property="og:description" content="Browse the full DJ DX discography — albums, singles, and original productions. Preview and buy exclusive tracks." />
        <meta property="og:image" content="https://djdxmusic.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DJ DX — Discography | Albums, Singles & Productions" />
        <meta name="twitter:description" content="Browse the full DJ DX discography — albums, singles, and original productions." />
        <meta name="twitter:image" content="https://djdxmusic.com/og-image.jpg" />
        <script type="application/ld+json">{`[
          {
            "@context": "https://schema.org",
            "@type": "MusicAlbum",
            "name": "The Unfortunate Child",
            "url": "https://djdxmusic.com/music",
            "datePublished": "2024",
            "genre": "Hip-Hop",
            "image": "https://djdxmusic.com/covers/the-unfortunate-child.png",
            "byArtist": {"@type": "MusicGroup", "name": "DJ DX", "url": "https://djdxmusic.com/"},
            "track": [
              {"@type": "MusicRecording", "name": "Deep Inside", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. Brydgs"}},
              {"@type": "MusicRecording", "name": "In The Park", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Left Right", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Many Dreams", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Shot Down", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}},
              {"@type": "MusicRecording", "name": "Summer Solstice", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. Brydgs & Kate Kilbourne"}},
              {"@type": "MusicRecording", "name": "The Chorus", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}},
              {"@type": "MusicRecording", "name": "Thug Doesn't Rest", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. Brydgs"}}
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "MusicAlbum",
            "name": "Made From Scratch",
            "url": "https://djdxmusic.com/music",
            "datePublished": "2022",
            "genre": "Hip-Hop",
            "image": "https://djdxmusic.com/covers/made-from-scratch.jpg",
            "byArtist": {"@type": "MusicGroup", "name": "DJ DX", "url": "https://djdxmusic.com/"},
            "track": [
              {"@type": "MusicRecording", "name": "You Don't Stop", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Bond", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Don't Worry", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Ninja of Rap", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Shining Stars", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Twerk It", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}},
              {"@type": "MusicRecording", "name": "Tape Pop", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden & Beast Mode Billy"}},
              {"@type": "MusicRecording", "name": "Riots", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}},
              {"@type": "MusicRecording", "name": "So Simple", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}}
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "DJ DX — Singles & Productions",
            "url": "https://djdxmusic.com/music",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "item": {"@type": "MusicRecording", "name": "Run Bro", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. Nadia Gold"}}},
              {"@type": "ListItem", "position": 2, "item": {"@type": "MusicRecording", "name": "1000 Reasons", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}}},
              {"@type": "ListItem", "position": 3, "item": {"@type": "MusicRecording", "name": "Blessings", "byArtist": {"@type": "MusicGroup", "name": "DJ DX"}}},
              {"@type": "ListItem", "position": 4, "item": {"@type": "MusicRecording", "name": "Keep Me Going", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. Pooh Bear & DJ Madden"}}},
              {"@type": "ListItem", "position": 5, "item": {"@type": "MusicRecording", "name": "Stop Playing", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}}},
              {"@type": "ListItem", "position": 6, "item": {"@type": "MusicRecording", "name": "Crime Side", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}}},
              {"@type": "ListItem", "position": 7, "item": {"@type": "MusicRecording", "name": "How Deep Is Our Bond", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}}},
              {"@type": "ListItem", "position": 8, "item": {"@type": "MusicRecording", "name": "This Is Hip-Hop", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. DJ Madden"}}},
              {"@type": "ListItem", "position": 9, "item": {"@type": "MusicRecording", "name": "Harmonia", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. Funkerman"}}},
              {"@type": "ListItem", "position": 10, "item": {"@type": "MusicRecording", "name": "Boys", "byArtist": {"@type": "MusicGroup", "name": "DJ DX ft. KEMPEL & DJ Madden"}}}
            ]
          }
        ]`}</script>
      </Helmet>
      <SiteNav />

      {/* ── HERO ── */}
      <section className="rl-hero">
        <div className="rl-hero-bg" aria-hidden="true" />
        <div className="rl-hero-content">
          <p className="rl-hero-overline">Discography</p>
          <h1 className="rl-hero-title">DJ DX</h1>
          <p className="rl-hero-sub">DJ · Producer · Recording Artist</p>
          <div className="rl-hero-counts">
            <span><strong>{albums.length}</strong> Albums</span>
            <span className="rl-hero-div" />
            <span><strong>{singles.length}</strong> Singles</span>
            <span className="rl-hero-div" />
            <span><strong>{albums.reduce((s, a) => s + a.tracks.length, 0) + singles.length}</strong> Tracks</span>
          </div>
        </div>
      </section>

      {/* ── STICKY SUBNAV ── */}
      <nav className="rl-subnav">
        <div className="rl-subnav-inner">
          <button className="rl-subnav-link" onClick={() => scrollTo('rl-albums')}>Albums</button>
          {albums.map(a => (
            <button key={a.id} className="rl-subnav-link rl-subnav-link--album" onClick={() => scrollTo(a.id)}>
              {a.title}
            </button>
          ))}
          <button className="rl-subnav-link" onClick={() => scrollTo('rl-singles')}>Singles</button>
        </div>
      </nav>

      {/* ── ALBUMS ── */}
      <section id="rl-albums" className="rl-section">
        <div className="rl-section-label">
          <span className="rl-section-num">01</span>
          <span>Albums</span>
        </div>

        {albums.map((album, ai) => (
          <div key={album.id} id={album.id} className={`rl-album${ai % 2 === 1 ? ' rl-album--flip' : ''}`}>
            {/* Cover */}
            <div className="rl-album-cover-wrap">
              {album.cover ? (
                <img src={album.cover} alt={album.title} className="rl-album-cover" />
              ) : (
                <div className="rl-album-cover rl-album-cover--empty">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" width="80" height="80" opacity="0.15">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
              )}
              <div className="rl-album-cover-glow" aria-hidden="true" />
            </div>

            {/* Info + tracks */}
            <div className="rl-album-body">
              <div className="rl-album-meta">
                <span className="rl-album-type">{album.type}</span>
                <span className="rl-album-year">{album.year}</span>
              </div>
              <h2 className="rl-album-title">{album.title}</h2>
              <p className="rl-album-genre">{album.genre} · {album.tracks.length} tracks</p>

              <div className="rl-album-ctas">
                <button
                  className="rl-cta"
                  onClick={e => album.tracks.forEach(t => addToCart(e, getAlbumTrack(album.title, t)))}
                >
                  Add Full Album to Cart
                </button>
              </div>

              {/* Track list */}
              <div className="rl-tracklist">
                {album.tracks.map((track, ti) => {
                  const cartTrack = getAlbumTrack(album.title, track);
                  const inCart = cart.some(t => t.id === cartTrack.id);
                  return (
                    <div key={ti} className={`rl-track${playingPreview === track.preview ? ' rl-track--playing' : ''}`}>
                      <button
                        className="rl-track-play"
                        onClick={e => playPreview(e, cartTrack)}
                        aria-label={playingPreview === track.preview && isPlaying ? 'Pause' : 'Play preview'}
                      >
                        {playingPreview === track.preview && isPlaying ? <PauseIcon /> : <PlayIcon />}
                      </button>
                      <span className="rl-track-num">{String(ti + 1).padStart(2, '0')}</span>
                      <div className="rl-track-info">
                        <span className="rl-track-title">{track.title}</span>
                        {track.featuring && <span className="rl-track-feat">feat. {track.featuring}</span>}
                      </div>
                      <div className="rl-track-actions">
                        <button
                          className="rl-share-btn"
                          onClick={e => handleShare(e, track.title, `album-${album.id}-${ti}`, album.id)}
                          aria-label={`Share ${track.title}`}
                        >
                          <ShareIcon />
                          <span>Share</span>
                          {toastKey === `album-${album.id}-${ti}` && <span className="rl-share-toast">Link Copied!</span>}
                        </button>
                        <button
                          className={`rl-track-buy${inCart ? ' rl-track-buy--added' : ''}`}
                          onClick={e => addToCart(e, cartTrack)}
                        >
                          {inCart ? <><Check size={12} strokeWidth={3} /><span>Added</span></> : 'Buy'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── SINGLES ── */}
      <section id="rl-singles" className="rl-section rl-section--singles">
        <div className="rl-section-label">
          <span className="rl-section-num">02</span>
          <span>Singles</span>
          <span className="rl-section-count">{singles.length} tracks · 2018–2025</span>
        </div>

        <div className="rl-singles-table">
          <div className="rl-singles-header">
            <span className="rl-sh-col-play" />
            <span className="rl-sh-col-num">#</span>
            <span className="rl-sh-col-title">Title</span>
            <span className="rl-sh-col-action" />
          </div>
          {singles.map((track, i) => {
            const cartTrack = getSingleTrack(track);
            const inCart = cart.some(t => t.id === cartTrack.id);
            return (
              <div key={i} className={`rl-single-row${playingPreview === track.preview ? ' rl-single-row--playing' : ''}`}>
                <button
                  className="rl-track-play"
                  onClick={e => playPreview(e, cartTrack)}
                  aria-label={playingPreview === track.preview && isPlaying ? 'Pause' : 'Play preview'}
                >
                  {playingPreview === track.preview && isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <span className="rl-track-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="rl-track-info">
                  <span className="rl-track-title">{track.title}</span>
                  {track.featuring && <span className="rl-track-feat">feat. {track.featuring}</span>}
                </div>
                <div className="rl-track-actions">
                  <button
                    className="rl-share-btn"
                    onClick={e => handleShare(e, track.title, `single-${i}`)}
                    aria-label={`Share ${track.title}`}
                  >
                    <ShareIcon />
                    <span>Share</span>
                    {toastKey === `single-${i}` && <span className="rl-share-toast">Link Copied!</span>}
                  </button>
                  <button
                    className={`rl-track-buy${inCart ? ' rl-track-buy--added' : ''}`}
                    onClick={e => addToCart(e, cartTrack)}
                  >
                    {inCart ? '✓' : 'Buy'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CartFab />
      <CartPanel />
      <SiteFooter />
    </div>
  );
}
