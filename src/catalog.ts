export type TrackTag = 'Blend' | 'Remix' | 'Original' | 'Pack' | 'Album' | 'Live';

export interface Track {
  id: number;
  title: string;
  artists: string;
  tag: TrackTag;
  preview: string;
  visible: boolean;
  order: number;
  album?: string;
  year?: string;
  storePage?: 'main' | 'soulshades' | 'all';
}

// Source of truth — edit order/visible here or via the Admin panel
export const defaultCatalog: Track[] = [
  { id: 1,  title: "Yukon × That's The Way Love Goes", artists: "Janet Jackson × DJ DX",                  tag: "Blend",    preview: "/previews/yukon-loves-goes.mp3",             visible: true,  order: 1,   year: "2024" },
  { id: 2,  title: "Song For You",                     artists: "Snoh Aalegra × JAY Z",                   tag: "Blend",    preview: "/previews/song-for-you.mp3",                 visible: true,  order: 2,   year: "2024" },
  { id: 3,  title: "No One Talking",                   artists: "Kanye West × Maxwell",                   tag: "Blend",    preview: "/previews/no-one-talking.mp3",               visible: true,  order: 3,   year: "2024" },
  { id: 4,  title: "Man In The Mirror",                artists: "Michael Jackson × DJ DX",                tag: "Blend",    preview: "/previews/man-in-the-mirror.mp3",            visible: true,  order: 4,   year: "2023" },
  { id: 5,  title: "Don't Touch Me",                   artists: "Busta Rhymes × Kane",                    tag: "Blend",    preview: "/previews/dont-touch-me.mp3",                visible: true,  order: 5,   year: "2023" },
  { id: 6,  title: "Ballin'",                          artists: "Roddy Ricch × DJ DX",                    tag: "Remix",    preview: "/previews/ballin.mp3",                       visible: true,  order: 6,   year: "2022" },
  { id: 7,  title: "Don't Nobody Else",                artists: "Sade × DJ DX",                           tag: "Blend",    preview: "/previews/sade-dont-nobody-else.mp3",        visible: true,  order: 7,   year: "2024" },
  { id: 8,  title: "Nasty",                            artists: "Tinashe × DJ DX",                        tag: "Blend",    preview: "/previews/tinashe-nasty.mp3",                visible: true,  order: 8,   year: "2024" },
  { id: 9,  title: "The Weekend (Moment For Life)",    artists: "SZA × Nicki Minaj",                      tag: "Blend",    preview: "/previews/sza-the-weekend.mp3",              visible: true,  order: 9,   year: "2023" },
  { id: 10, title: "Suit & Tie",                       artists: "Justin Timberlake × JAY Z × DJ DX",      tag: "Remix",    preview: "/previews/suit-and-tie.mp3",                 visible: true,  order: 10,  year: "2022" },
  { id: 11, title: "Niggas In Paris Jersey Club",      artists: "JAY Z × Kanye West",                     tag: "Blend",    preview: "/previews/niggas-in-paris.mp3",              visible: true,  order: 11,  year: "2023" },
  { id: 12, title: "Pills & Potions",                  artists: "Nicki Minaj × DJ DX",                    tag: "Remix",    preview: "/previews/pills-and-potions.mp3",            visible: true,  order: 12,  year: "2022" },
  { id: 13, title: "Deadly Combo",                     artists: "Notorious B.I.G × BIG L",                tag: "Blend",    preview: "/previews/deadly-combo.mp3",                 visible: true,  order: 13,  year: "2023" },
  { id: 14, title: "Exchange Location",                artists: "Khalid × DJ DX",                         tag: "Blend",    preview: "/previews/khalid-exchange-location.mp3",     visible: true,  order: 14,  year: "2023" },
  { id: 15, title: "Crocodile Tearz",                  artists: "J. Cole × Lil Scrappy × DJ DX",          tag: "Blend",    preview: "/previews/crocodile-tearz.mp3",              visible: true,  order: 15,  year: "2024" },
  { id: 16, title: "Lovin On Me",                      artists: "Jack Harlow × Joe Budden",               tag: "Blend",    preview: "/previews/lovin-on-me.mp3",                  visible: true,  order: 16,  year: "2024" },
  { id: 17, title: "Bood Up",                          artists: "Ella Mai × DJ DX",                       tag: "Blend",    preview: "/previews/ella-mai-bood-up.mp3",             visible: true,  order: 17,  year: "2023" },
  { id: 18, title: "Not Today",                        artists: "Mary J. Blige × DJ DX",                  tag: "Blend",    preview: "/previews/not-today.mp3",                    visible: true,  order: 18,  year: "2023" },
  { id: 19, title: "The Worst",                        artists: "Jhene Aiko × DJ DX",                     tag: "Blend",    preview: "/previews/jhene-aiko-the-worst.mp3",         visible: true,  order: 19,  year: "2023" },
  { id: 20, title: "Whip Ya Head",                     artists: "50 Cent × Young Buck",                   tag: "Remix",    preview: "/previews/50-cent-whip-ya-head.mp3",         visible: true,  order: 20,  year: "2022" },
  { id: 21, title: "21 Questions For You",             artists: "50 Cent × Snoh Aalegra",                 tag: "Blend",    preview: "/previews/21-questions-for-you.mp3",         visible: true,  order: 21,  year: "2023" },
  { id: 22, title: "Why You Do That",                  artists: "6lack × DJ DX",                          tag: "Blend",    preview: "/previews/6lack-why-you-do-that.mp3",        visible: true,  order: 22,  year: "2023" },
  { id: 23, title: "Aaliyah × Drake Remix",            artists: "Aaliyah × Drake × DJ DX",                tag: "Remix",    preview: "/previews/aaliyah-drake-remix.mp3",          visible: true,  order: 23,  year: "2022" },
  { id: 24, title: "Shake Sum",                        artists: "DaBaby × DJ DX",                         tag: "Blend",    preview: "/previews/dababy-shake-sum.mp3",             visible: true,  order: 24,  year: "2023" },
  { id: 25, title: "Checkmate",                        artists: "DJ DX",                                  tag: "Blend",    preview: "/previews/checkmate.mp3",                    visible: true,  order: 25,  year: "2024" },
  { id: 26, title: "Hustle All Day",                   artists: "DJ DX × DJ Madden",                      tag: "Remix",    preview: "/previews/hustle-all-day.mp3",               visible: true,  order: 26,  year: "2023" },
  { id: 27, title: "I Am The One (Intro)",             artists: "DJ DX",                                  tag: "Original", preview: "/previews/i-am-the-one.mp3",                 visible: true,  order: 27,  year: "2024" },
  { id: 28, title: "Koze Kuse",                        artists: "DJ DX",                                  tag: "Blend",    preview: "/previews/koze-kuse.mp3",                    visible: true,  order: 28,  year: "2024" },
  { id: 29, title: "World Famous (Live On Air)",       artists: "DJ DX",                                  tag: "Live",     preview: "/previews/world-famous.mp3",                 visible: true,  order: 29,  year: "2024" },
  { id: 30, title: "Dios Mio",                         artists: "EL Vacan G × Wesley × DJ DX",            tag: "Remix",    preview: "/previews/dios-mio.mp3",                     visible: true,  order: 30,  year: "2023" },
  { id: 31, title: "The Way It Is",                    artists: "Justin Bieber × Gunna × DJ DX",          tag: "Blend",    preview: "/previews/bieber-the-way-it-is.mp3",         visible: true,  order: 31,  year: "2024" },
  { id: 32, title: "Let's Ride",                       artists: "DJ DX",                                  tag: "Blend",    preview: "/previews/lets-ride.mp3",                    visible: true,  order: 32,  year: "2024" },
  { id: 33, title: "Red Ruby",                         artists: "Nicki Minaj × DJ DX",                    tag: "Blend",    preview: "/previews/red-ruby.mp3",                     visible: true,  order: 33,  year: "2024" },
  { id: 34, title: "La Culi Suelta",                   artists: "Og Black × Guayoman × DJ DX",            tag: "Remix",    preview: "/previews/la-culi-suelta.mp3",               visible: true,  order: 34,  year: "2023" },
  { id: 35, title: "Don't Jealous Me",                 artists: "Tekno × Raze × DJ DX",                   tag: "Blend",    preview: "/previews/dont-jealous-me.mp3",              visible: true,  order: 35,  year: "2023" },
  { id: 36, title: "Thong Fart",                       artists: "Sisqo × Ice Spice × DJ DX",              tag: "Blend",    preview: "/previews/thong-fart.mp3",                   visible: true,  order: 36,  year: "2024" },
  { id: 37, title: "Because of You",                   artists: "DJ DX",                                  tag: "Blend",    preview: "/previews/because-of-you.mp3",               visible: true,  order: 37,  year: "2024" },
  { id: 38, title: "Good Energy",                      artists: "Yung Wylin × PM Dawn × DJ DX",           tag: "Blend",    preview: "/previews/good-energy.mp3",                  visible: true,  order: 38,  year: "2023" },
  { id: 39, title: "All Gold Everything",              artists: "Trinidad James × DJ DX",                 tag: "Blend",    preview: "/previews/all-gold-everything.mp3",          visible: true,  order: 39,  year: "2022" },
  { id: 40, title: "Don't Fuck With DX",               artists: "Busta Rhymes × DJ DX",                   tag: "Remix",    preview: "/previews/busta-dont-fuck-with-dx.mp3",      visible: true,  order: 40,  year: "2023" },
  { id: 41, title: "Lady Melody",                      artists: "D'Angelo × Nas × DJ DX",                 tag: "Blend",    preview: "/previews/dangelo-lady-melody.mp3",          visible: true,  order: 41,  year: "2024" },
  { id: 42, title: "Yo Se Lo Que (Te Gusta)",          artists: "DJ DX × DJ Madden",                      tag: "Blend",    preview: "/previews/yo-se-lo-que.mp3",                 visible: true,  order: 42,  year: "2023" },
  { id: 43, title: "Defasio",                          artists: "Daddy Yankee × Don Omar × DJ DX",        tag: "Blend",    preview: "/previews/defasio.mp3",                      visible: true,  order: 43,  year: "2023" },
  { id: 44, title: "6 Foot 7 Foot",                    artists: "JAY Z × DJ DX",                          tag: "Blend",    preview: "/previews/6-foot-7-foot.mp3",                visible: true,  order: 44,  year: "2022" },
  { id: 45, title: "Fuck MDK",                         artists: "Joe Budden × DJ DX",                     tag: "Remix",    preview: "/previews/fuck-mdk.mp3",                     visible: true,  order: 45,  year: "2022" },
  { id: 46, title: "I Run New York",                   artists: "50 Cent × Diddy × JAY Z × DJ DX",        tag: "Remix",    preview: "/previews/i-run-new-york.mp3",               visible: true,  order: 46,  year: "2022" },
  { id: 47, title: "Otis (Massacre Blend)",            artists: "JAY Z × Kanye West × DJ DX × DJ Madden", tag: "Blend",    preview: "/previews/otis-massacre.mp3",                visible: true,  order: 47,  year: "2022" },
  { id: 48, title: "Work Out",                         artists: "J. Cole × DJ DX",                        tag: "Blend",    preview: "/previews/jcole-work-out.mp3",               visible: true,  order: 48,  year: "2024" },
  { id: 49, title: "Peaches",                          artists: "Justin Bieber × DJ DX",                  tag: "Blend",    preview: "/previews/bieber-peaches.wav",               visible: true,  order: 49,  year: "2024" },
  { id: 50, title: "Nobody",                           artists: "Nas × Ms. Lauryn Hill × DJ DX",          tag: "Blend",    preview: "/previews/nas-nobody.wav",                   visible: true,  order: 50,  year: "2024" },
  { id: 51, title: "Freaks (Remix)",                   artists: "Nicki Minaj × Patra × DJ DX",            tag: "Remix",    preview: "/previews/nicki-freaks-remix.wav",           visible: true,  order: 51,  year: "2024" },
  { id: 52, title: "Loyal",                            artists: "Albee Al × DJ DX",                       tag: "Blend",    preview: "/previews/albee-al-loyal.mp3",               visible: true,  order: 52,  year: "2024" },
  // Soul Shades Exclusive Tracks
  { id: 101, title: "Wait For Me",                                    artists: "Soul Shades",  tag: "Original", preview: "/previews/ss-wait-for-me.mp3",                         visible: true, order: 101, year: "2025", storePage: 'soulshades' },
  { id: 102, title: "Beyond Your Mind",                               artists: "Soul Shades",  tag: "Original", preview: "/previews/ss-beyond-your-mind.mp3",                    visible: true, order: 102, year: "2025", storePage: 'soulshades' },
  { id: 103, title: "Buzz In London",                                 artists: "Soul Shades",  tag: "Original", preview: "/previews/ss-buzz-in-london.wav",                      visible: true, order: 103, year: "2024", storePage: 'soulshades' },
  { id: 104, title: "Always On Time x Fired Up",                      artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-always-on-time-x-fired-up.mp3",           visible: true, order: 104, year: "2024", storePage: 'soulshades' },
  { id: 105, title: "Be Honest x Everything",                         artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-be-honest-x-everything.wav",              visible: true, order: 105, year: "2024", storePage: 'soulshades' },
  { id: 106, title: "Cola x Vivrant Thing",                           artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-cola-x-vivrant-thing.wav",                visible: true, order: 106, year: "2024", storePage: 'soulshades' },
  { id: 107, title: "Hannah x Everybody Everybody",                   artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-hannah-x-everybody-everybody.mp3",        visible: true, order: 107, year: "2024", storePage: 'soulshades' },
  { id: 108, title: "Kiss Of Life",                                   artists: "Soul Shades",  tag: "Original", preview: "/previews/ss-kiss-of-life.wav",                        visible: true, order: 108, year: "2025", storePage: 'soulshades' },
  { id: 109, title: "Money Talks (Dirty Cash) x RIZZ",                artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-money-talks-x-rizz.wav",                  visible: true, order: 109, year: "2024", storePage: 'soulshades' },
  { id: 110, title: "Rock The Boat x You Are The One",                artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-rock-the-boat-x-you-are-the-one.mp3",     visible: true, order: 110, year: "2024", storePage: 'soulshades' },
  { id: 111, title: "Streets x Rapture III x Violin",                 artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-streets-x-rapture-iii-x-violin.wav",      visible: true, order: 111, year: "2024", storePage: 'soulshades' },
  { id: 112, title: "The Way You x Everybody x Never x Beso",         artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-the-way-you-x-everybody-x-never-x-beso.wav", visible: true, order: 112, year: "2024", storePage: 'soulshades' },
  { id: 113, title: "Unthinkable x Life Gets Hard",                   artists: "Soul Shades",  tag: "Blend",    preview: "/previews/ss-unthinkable-x-life-gets-hard.wav",        visible: true, order: 113, year: "2024", storePage: 'soulshades' },
  { id: 114, title: "Addicted x Give Me The Night",                   artists: "Soul Shades",  tag: "Remix",    preview: "/previews/ss-addicted-x-give-me-the-night.wav",        visible: true, order: 114, year: "2024", storePage: 'soulshades' },
];

// ── Server-backed catalog (used by the site) ────────────────
export async function fetchCatalog(): Promise<Track[]> {
  try {
    const res = await fetch('/api/catalog');
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    if (data.tracks && Array.isArray(data.tracks)) {
      // Merge: add any new defaultCatalog tracks not yet saved server-side
      const savedIds = new Set((data.tracks as Track[]).map((t: Track) => t.id));
      const merged = [
        ...data.tracks,
        ...defaultCatalog.filter(t => !savedIds.has(t.id)),
      ];
      return merged.sort((a: Track, b: Track) => a.order - b.order);
    }
  } catch { /* fall through */ }
  return [...defaultCatalog].sort((a, b) => a.order - b.order);
}

export async function pushCatalog(tracks: Track[], secret: string): Promise<boolean> {
  try {
    const res = await fetch('/api/catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${secret}` },
      body: JSON.stringify({ tracks }),
    });
    return res.ok;
  } catch { return false; }
}

// ── Legacy localStorage helpers (kept for Admin fallback) ───
const STORAGE_KEY = 'djdx-catalog-v1';

export function loadCatalog(): Track[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: Track[] = JSON.parse(saved);
      const savedIds = new Set(parsed.map(t => t.id));
      const merged = [
        ...parsed,
        ...defaultCatalog.filter(t => !savedIds.has(t.id)),
      ];
      return merged.sort((a, b) => a.order - b.order);
    }
  } catch { /* ignore */ }
  return [...defaultCatalog].sort((a, b) => a.order - b.order);
}

export function saveCatalog(tracks: Track[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tracks));
}

export function resetCatalog(): Track[] {
  localStorage.removeItem(STORAGE_KEY);
  return [...defaultCatalog].sort((a, b) => a.order - b.order);
}
