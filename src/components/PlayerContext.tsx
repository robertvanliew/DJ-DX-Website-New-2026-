import { createContext, useContext, useRef, useState, useCallback } from 'react';
import type { Track } from '../catalog';
import { useCart } from './CartContext';
import { Check } from 'lucide-react';

const PREVIEW_LIMIT = 40;

interface PlayerContextValue {
  playingTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  play: (track: Track) => void;
  pause: () => void;
  stop: () => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlayingTrack(null);
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const play = useCallback((track: Track) => {
    // If same track, toggle play/pause
    if (audioRef.current && playingTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
      return;
    }

    // New track
    audioRef.current?.pause();
    const audio = new Audio(track.preview);
    audio.volume = 0.8;
    audio.play().catch(() => {});

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime >= PREVIEW_LIMIT) {
        audio.pause();
        setIsPlaying(false);
        setCurrentTime(PREVIEW_LIMIT);
      }
    };

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audioRef.current = audio;
    setPlayingTrack(track);
    setIsPlaying(true);
    setCurrentTime(0);
  }, [playingTrack, isPlaying]);

  return (
    <PlayerContext.Provider value={{ playingTrack, isPlaying, currentTime, play, pause, stop }}>
      {children}
      <MiniPlayer />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used inside PlayerProvider');
  return ctx;
}

function MiniPlayer() {
  const { playingTrack, isPlaying, currentTime, play, stop } = usePlayer();
  const { cart, addToCart } = useCart();

  if (!playingTrack) return null;

  const progress = Math.min((currentTime / PREVIEW_LIMIT) * 100, 100);
  const inCart = cart.some(t => t.id === playingTrack.id);
  const remaining = Math.max(0, PREVIEW_LIMIT - Math.floor(currentTime));

  return (
    <div className="mini-player">
      <div className="mini-player-progress-bar">
        <div className="mini-player-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="mini-player-inner">
        {/* Track info */}
        <div className="mini-player-info">
          <span className="mini-player-title">{playingTrack.title}</span>
          <span className="mini-player-artists">{playingTrack.artists}</span>
        </div>

        {/* Controls */}
        <div className="mini-player-controls">
          <span className="mini-player-time">{remaining}s</span>

          {/* Play/Pause */}
          <button
            className="mini-player-btn mini-player-playpause"
            onClick={() => play(playingTrack)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <polygon points="4,2 13,8 4,14" />
              </svg>
            )}
          </button>

          {/* Stop */}
          <button
            className="mini-player-btn mini-player-stop"
            onClick={stop}
            aria-label="Stop"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
            </svg>
          </button>

          {/* Add to Cart */}
          <button
            className={`mini-player-cart${inCart ? ' mini-player-cart--added' : ''}`}
            onClick={(e) => !inCart && addToCart(e as unknown as React.MouseEvent, playingTrack)}
            aria-label={inCart ? 'Added to cart' : 'Add to cart'}
          >
            {inCart ? (
              <Check size={13} strokeWidth={3} />
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            )}
            <span>{inCart ? 'Added' : 'Buy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
