import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCatalog, pushCatalog, resetCatalog, type Track, type TrackTag } from '../catalog';

// Auth handled server-side — no secrets in client bundle
const SESSION_KEY = 'djdx-admin-token';

function AdminLogin({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) {
        const { token } = await res.json();
        sessionStorage.setItem(SESSION_KEY, token);
        onAuth();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0c0c0c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: 340, padding: '40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <div style={{ color: '#C9A84C', fontWeight: 800, fontSize: 22, letterSpacing: '0.05em', marginBottom: 4 }}>DJ DX</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Admin Panel</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Password</label>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setError(false); }}
            autoFocus
            style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: `1px solid ${error ? '#EF4444' : 'rgba(255,255,255,0.12)'}`, borderRadius: 8, color: '#f2f2f2', fontSize: 15, outline: 'none' }}
            placeholder="Enter password"
          />
          {error && <span style={{ fontSize: 12, color: '#EF4444' }}>Incorrect password</span>}
        </div>
        <button type="submit" disabled={loading || !pw} style={{ padding: '13px', background: '#C9A84C', border: 'none', borderRadius: 8, color: '#0c0c0c', fontWeight: 700, fontSize: 14, cursor: pw ? 'pointer' : 'not-allowed', opacity: pw ? 1 : 0.5 }}>
          {loading ? 'Checking…' : 'Enter'}
        </button>
      </form>
    </div>
  );
}

const TAG_COLORS: Record<TrackTag, string> = {
  Blend:    '#C9A84C',
  Remix:    '#8B5CF6',
  Original: '#10B981',
  Pack:     '#F59E0B',
  Album:    '#3B82F6',
  Live:     '#EF4444',
};

export default function Admin() {
  const [authed, setAuthed] = useState(() => !!sessionStorage.getItem(SESSION_KEY));

  if (!authed) return <AdminLogin onAuth={() => setAuthed(true)} />;
  return <AdminPanel />;
}

function AdminPanel() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'visible' | 'hidden'>('all');
  const [storeTab, setStoreTab] = useState<'djdx' | 'soulshades'>('djdx');
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dragRef = useRef<number | null>(null);
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCatalog().then(setTracks);
  }, []);

  const filtered = tracks.filter(t => {
    const matchStore = storeTab === 'djdx' ? (t.storePage !== 'soulshades') : (t.storePage === 'soulshades');
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.artists.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || (filter === 'visible' ? t.visible : !t.visible);
    return matchStore && matchSearch && matchFilter;
  });

  function toggleVisible(id: number) {
    setTracks(prev => prev.map(t => t.id === id ? { ...t, visible: !t.visible } : t));
    setSaved(false);
  }

  function moveUp(id: number) {
    setTracks(prev => {
      const idx = prev.findIndex(t => t.id === id);
      if (idx === 0) return prev;
      const next = [...prev];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      return next.map((t, i) => ({ ...t, order: i + 1 }));
    });
    setSaved(false);
  }

  function moveDown(id: number) {
    setTracks(prev => {
      const idx = prev.findIndex(t => t.id === id);
      if (idx === prev.length - 1) return prev;
      const next = [...prev];
      [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
      return next.map((t, i) => ({ ...t, order: i + 1 }));
    });
    setSaved(false);
  }

  async function handleSave() {
    setSaveError(false);
    const token = sessionStorage.getItem(SESSION_KEY) ?? '';
    const ok = await pushCatalog(tracks, token);
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } else {
      setSaveError(true);
      setTimeout(() => setSaveError(false), 3000);
    }
  }

  function handleReset() {
    if (!confirm('Reset all changes back to defaults?')) return;
    setTracks(resetCatalog());
    setSaved(false);
  }

  function playPreview(track: Track) {
    if (playingId === track.id) {
      audioRef.current?.pause();
      setPlayingId(null);
      return;
    }
    audioRef.current?.pause();
    const audio = new Audio(track.preview);
    audio.volume = 0.8;
    audio.play();
    audio.onended = () => setPlayingId(null);
    audioRef.current = audio;
    setPlayingId(track.id);
  }

  // Drag-to-reorder
  const dragOverRef = useRef<number | null>(null);

  function onDragStart(e: React.DragEvent, id: number) {
    dragRef.current = id;
    e.dataTransfer.effectAllowed = 'move';
    // required for Firefox
    e.dataTransfer.setData('text/plain', String(id));
  }
  function onDragOver(e: React.DragEvent, id: number) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    dragOverRef.current = id;
    setDragOverId(id);
  }
  function onDrop(e: React.DragEvent, id: number) {
    e.preventDefault();
    const fromId = dragRef.current;
    if (fromId === null || fromId === id) return;
    setTracks(prev => {
      const from = prev.findIndex(t => t.id === fromId);
      const to   = prev.findIndex(t => t.id === id);
      if (from === -1 || to === -1) return prev;
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next.map((t, i) => ({ ...t, order: i + 1 }));
    });
    setSaved(false);
    dragRef.current = null;
    dragOverRef.current = null;
    setDragOverId(null);
  }
  function onDragEnd() {
    dragRef.current = null;
    dragOverRef.current = null;
    setDragOverId(null);
  }

  const visibleCount = tracks.filter(t => t.visible).length;

  return (
    <div style={{ minHeight: '100vh', background: '#0c0c0c', color: '#f2f2f2', fontFamily: 'inherit' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#0c0c0c', zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link to="/" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 700, fontSize: 18, letterSpacing: '0.05em' }}>
            DJ DX
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Music Admin</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{visibleCount} visible · {tracks.length - visibleCount} hidden</span>
          <button onClick={handleReset} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 13 }}>
            Reset
          </button>
          <button onClick={handleSave} style={{ padding: '8px 20px', background: saveError ? '#EF4444' : saved ? '#10B981' : '#C9A84C', border: 'none', borderRadius: 6, color: saveError ? '#fff' : '#0c0c0c', cursor: 'pointer', fontWeight: 700, fontSize: 13, transition: 'background 0.3s' }}>
            {saveError ? '✗ Save Failed' : saved ? '✓ Saved' : 'Save Changes'}
          </button>
          <button onClick={() => { sessionStorage.removeItem(SESSION_KEY); window.location.reload(); }} style={{ padding: '8px 14px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 12 }} title="Log out">
            ⏏ Logout
          </button>
        </div>
      </div>

      {/* Store Tabs */}
      <div style={{ padding: '24px 32px 0', display: 'flex', gap: 8 }}>
        {([['djdx', 'DJ DX Store'], ['soulshades', 'Soul Shades Store']] as const).map(([tab, label]) => (
          <button key={tab} onClick={() => setStoreTab(tab)} style={{ padding: '10px 22px', background: storeTab === tab ? '#C9A84C' : 'rgba(255,255,255,0.05)', border: `1px solid ${storeTab === tab ? '#C9A84C' : 'rgba(255,255,255,0.12)'}`, borderRadius: 8, color: storeTab === tab ? '#0c0c0c' : 'rgba(255,255,255,0.55)', cursor: 'pointer', fontWeight: storeTab === tab ? 700 : 400, fontSize: 13, letterSpacing: '0.06em', transition: 'all 0.2s' }}>
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div style={{ padding: '16px 32px 0', display: 'flex', gap: 12, alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search tracks or artists…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, maxWidth: 360, padding: '10px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f2f2f2', fontSize: 14, outline: 'none' }}
        />
        {(['all', 'visible', 'hidden'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 16px', background: filter === f ? 'rgba(201,168,76,0.15)' : 'transparent', border: `1px solid ${filter === f ? '#C9A84C' : 'rgba(255,255,255,0.1)'}`, borderRadius: 6, color: filter === f ? '#C9A84C' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 13, textTransform: 'capitalize' }}>
            {f}
          </button>
        ))}
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 8 }}>Drag rows to reorder</span>
      </div>

      {/* Table */}
      <div style={{ padding: '20px 32px 80px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>

          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '36px 40px 1.5fr 1fr 1fr 80px 90px 80px', gap: 0, padding: '12px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
            <span />
            <span>#</span>
            <span>Title</span>
            <span>Artists</span>
            <span>Album / Store</span>
            <span>Type</span>
            <span style={{ textAlign: 'center' }}>Visible</span>
            <span style={{ textAlign: 'center' }}>Preview</span>
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>No tracks match</div>
          )}

          {filtered.map((track, idx) => (
            <div
              key={track.id}
              draggable
              onDragStart={e => onDragStart(e, track.id)}
              onDragOver={e => onDragOver(e, track.id)}
              onDrop={e => onDrop(e, track.id)}
              onDragEnd={onDragEnd}
              style={{
                display: 'grid',
                gridTemplateColumns: '36px 40px 1.5fr 1fr 1fr 80px 90px 80px',
                gap: 0,
                padding: '14px 16px',
                borderBottom: idx < filtered.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: dragOverId === track.id ? 'rgba(201,168,76,0.12)' : track.visible ? 'transparent' : 'rgba(0,0,0,0.2)',
                borderTop: dragOverId === track.id ? '2px solid #C9A84C' : undefined,
                opacity: track.visible ? 1 : 0.55,
                alignItems: 'center',
                cursor: 'grab',
                transition: 'background 0.1s',
              }}
            >
              {/* Drag handle */}
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 16, userSelect: 'none' }}>⠿</span>

              {/* Order + move buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <button onClick={() => moveUp(track.id)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 10, padding: '1px 4px', lineHeight: 1 }}>▲</button>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', minWidth: 20, textAlign: 'center' }}>{track.order}</span>
                <button onClick={() => moveDown(track.id)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 10, padding: '1px 4px', lineHeight: 1 }}>▼</button>
              </div>

              {/* Title */}
              <span style={{ fontSize: 14, fontWeight: 600, color: track.visible ? '#f2f2f2' : 'rgba(255,255,255,0.4)', paddingRight: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.title}</span>

              {/* Artists */}
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', paddingRight: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.artists}</span>

              {/* Album / Store */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingRight: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {track.album && <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{track.album}</span>}
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{track.storePage === 'soulshades' ? 'Soul Shades Excl.' : track.storePage === 'all' ? 'All Stores' : 'Main Store'}</span>
              </div>

              {/* Tag */}
              <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', background: `${TAG_COLORS[track.tag]}22`, color: TAG_COLORS[track.tag], border: `1px solid ${TAG_COLORS[track.tag]}44`, width: 'fit-content' }}>
                {track.tag}
              </span>

              {/* Visible toggle */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => toggleVisible(track.id)}
                  style={{ width: 44, height: 24, borderRadius: 12, background: track.visible ? '#C9A84C' : 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}
                  title={track.visible ? 'Hide from site' : 'Show on site'}
                >
                  <span style={{ position: 'absolute', top: 2, left: track.visible ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', display: 'block' }} />
                </button>
              </div>

              {/* Preview play */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => playPreview(track)}
                  style={{ width: 34, height: 34, borderRadius: '50%', background: playingId === track.id ? '#C9A84C' : 'rgba(255,255,255,0.08)', border: `1px solid ${playingId === track.id ? '#C9A84C' : 'rgba(255,255,255,0.12)'}`, color: playingId === track.id ? '#0c0c0c' : '#f2f2f2', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}
                  title="Play 30s preview"
                >
                  {playingId === track.id ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
          Click "Save Changes" to publish your order and visibility changes live for all visitors instantly.
        </p>
      </div>
    </div>
  );
}
