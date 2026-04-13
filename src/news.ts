export interface NewsPost {
  slug: string;
  headline: string;
  subheadline: string;
  datePublished: string;       // ISO 8601 for schema
  dateModified: string;
  displayDate: string;         // Human-readable
  category: 'Release' | 'Event' | 'Press' | 'Behind The Scenes';
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string;                // HTML string
  tags: string[];
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'buzz-in-london-soul-shades',
    headline: 'How "Buzz In London" Was Born: The Story Behind Soul Shades\' Breakout Single',
    subheadline: 'A minor 9 chord, a Sting classic, and a duo finding their sound — the making of Soul Shades\' debut release.',
    datePublished: '2026-04-12T10:00:00+00:00',
    dateModified: '2026-04-12T10:00:00+00:00',
    displayDate: 'April 12, 2026',
    category: 'Behind The Scenes',
    excerpt: 'When DJ DX and Julie Schatz formed Soul Shades, they knew their sound had to be something different — soulful, hip-hop-tinged, jazzy, and built for the dance floor. "Buzz In London" was the moment that vision clicked into place.',
    image: '/covers/buzz-in-london-dj-dx-julie-schatz-soul-shades.jpg',
    imageAlt: 'Soul Shades — Buzz In London single artwork',
    tags: ['Soul Shades', 'Buzz In London', 'Behind The Scenes', 'Deep House', 'Afro House'],
    body: `
<p class="news-lede">When DJ DX and Julie Schatz formed <strong>Soul Shades</strong>, they had a clear vision: music that lived at the intersection of soul, hip-hop, jazz, and dance — a sound that felt timeless but moved a room. Finding that sound on the very first try, though, was something neither of them fully expected.</p>

<p>"Buzz In London" wasn't planned. It arrived.</p>

<h2>Inspired by Bonobo</h2>

<p>The day they made the track, they had been listening to British producer <strong>Bonobo</strong> — known for his ability to weave jazz, soul, and electronic music into something that feels both intimate and expansive. That energy was in the room when Julie sat down at the keys.</p>

<p>"I wanted to lay down some chords that would give the track a swing and a wavy vibe," Julie recalls. "When I went to lay them down, it just felt right instantly — a <strong>minor 9 voicing with the 9 on top</strong>, and just staying there." That single chord voicing became the foundation of everything. It created space without emptiness, tension without chaos — the perfect bed for what was about to come.</p>

<h2>The Jazz Trumpet & DJ DX's Vocals</h2>

<p>With that harmonic foundation locked in, the rest of the track built itself around it. A jazz trumpet melody wove through the chord, giving the record the sophisticated, cosmopolitan character that Soul Shades was going for. Then DJ DX stepped up to the mic.</p>

<p>The verses flowed naturally over the groove, with the hook arriving from a place that felt both spontaneous and inevitable — because it drew from something the duo had just experienced in the streets of the internet.</p>

<h2>Going Viral First — Then Finding the Lyric</h2>

<p>Right before making the track, Soul Shades had gone viral mixing <strong>Sting's "Englishman in New York"</strong> with British electronic producer <strong>Nimino</strong> popular record <em>"I Only Smoke When I Drink."</em> The response was massive. The British energy was undeniable.</p>

<p>That momentum was still in the air when they entered the session. "DJ DX quickly created the verses to flow on top," Julie says, "with the hook speaking about having a 'buzz in London.'" The lyric captured the feeling perfectly — the excitement, the elevation, the vibe of being in a city that pulses with culture. <strong>"Buzz In London" was born.</strong></p>

<h2>A Sound That Represents Soul Shades</h2>

<p>More than a debut single, "Buzz In London" became the sonic blueprint for what Soul Shades is — a duo that refuses genre boxes. Deep house structure. Jazz harmonic language. Hip-hop cadence. Soul as the emotional core. It's the kind of music that works in a rooftop lounge in Manhattan, a sunset set in Ibiza, or a late-night session in London.</p>

<p>The track is available now on all streaming platforms. Stream it, share it, and if you feel that buzz — you know exactly where it came from.</p>

<div class="news-cta-block">
  <a href="/soul-shades" class="news-cta-btn">Explore Soul Shades</a>
  <a href="https://open.spotify.com/artist/2GES5fSFNcx25lv9RFcQjP" target="_blank" rel="noopener noreferrer" class="news-cta-btn news-cta-btn--outline">Stream on Spotify</a>
</div>
`,
  },
];
