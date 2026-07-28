import { useEffect, useState } from 'react';

export interface HeroPhoto {
  src: string;
  alt: string;
}

interface Props {
  photos: HeroPhoto[];
  intervalMs?: number;
}

// Reusable full-bleed rotating background — same crossfade mechanic as the
// homepage marquee slideshow, but as a standalone component so any landing
// page's hero can drop in a growing set of real event photos instead of one
// static image. Add more photos to the array passed in; no other changes needed.
export default function HeroPhotoSlideshow({ photos, intervalMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => setIndex(i => (i + 1) % photos.length), intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    <>
      {photos.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={i === index ? photo.alt : ''}
          width="1920"
          height="1440"
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'contrast(1.05) saturate(1.1)',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        />
      ))}
    </>
  );
}
