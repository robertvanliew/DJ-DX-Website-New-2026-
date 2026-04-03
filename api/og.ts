import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ImageResponse } from '@vercel/og'
import { createElement as h } from 'react'

export const config = { maxDuration: 10 }

// Album cover map — matches album IDs used in Music.tsx
const ALBUM_COVERS: Record<string, string> = {
  'the-unfortunate-child': '/covers/the-unfortunate-child.png',
  'made-from-scratch':     '/covers/made-from-scratch.jpg',
}

function base(origin: string, path: string) {
  return `${origin}${path}`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // SITE_URL is your custom env var. VERCEL_URL is auto-set by Vercel on every deploy.
  // Fall back to production domain so image fetches always resolve.
  const origin =
    process.env.SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://djdxmusic.com')

  const { type = 'store', track = '', album = '', format = 'og', trackId = '' } = req.query as Record<string, string>
  const isStory = format === 'story'

  // ── Determine background image ────────────────────────────────────────────
  let bgUrl: string
  let coverUrl: string | null = null
  let label = 'DJ DX'

  if (type === 'album' && album) {
    const key = album.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    const coverPath = ALBUM_COVERS[key] ?? ALBUM_COVERS['the-unfortunate-child']
    bgUrl    = base(origin, coverPath)
    coverUrl = base(origin, coverPath)
    label    = track || album
  } else if (type === 'soul-shades') {
    bgUrl  = base(origin, '/ss-hero.jpg')
    label  = track || 'Soul Shades'
  } else {
    bgUrl  = base(origin, '/og-image.jpg')
    label  = track || 'DJ DX'
  }

  // ── Layout ─────────────────────────────────────────────────────────────────
  // Different card designs per type

  let card

  if (type === 'album' && coverUrl) {
    // Album card — Spotify album share style
    // Left: album cover art square | Right: track name + album + artist
    card = h('div', {
      style: {
        width: '1200px', height: '630px',
        display: 'flex', flexDirection: 'row',
        background: '#0a0805',
        fontFamily: 'Arial Black, sans-serif',
        overflow: 'hidden',
      }
    },
      // Album art — left column, fills full height
      h('div', {
        style: {
          width: '630px', height: '630px',
          flexShrink: '0',
          position: 'relative',
        }
      },
        h('img', {
          src: coverUrl, width: 630, height: 630,
          style: { objectFit: 'cover', display: 'block' },
        }),
        // Gradient bleed into right panel
        h('div', {
          style: {
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(to right, transparent, #0a0805)',
          }
        }),
      ),
      // Right panel — track info
      h('div', {
        style: {
          flex: '1',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 60px 0 32px',
          gap: '0',
        }
      },
        // "NOW PLAYING" tag
        h('div', {
          style: {
            fontSize: '13px', letterSpacing: '4px', fontWeight: '700',
            color: '#C9A84C', textTransform: 'uppercase',
            marginBottom: '20px', fontFamily: 'Arial, sans-serif',
          }
        }, '♪  NOW PLAYING'),
        // Track title
        h('div', {
          style: {
            fontSize: label.length > 18 ? '52px' : '64px',
            fontWeight: '900', color: '#f2f2f2',
            lineHeight: '1.05', marginBottom: '16px',
            fontFamily: 'Arial Black, sans-serif',
          }
        }, label),
        // Album name
        h('div', {
          style: {
            fontSize: '22px', fontWeight: '400',
            color: 'rgba(242,242,242,0.55)',
            marginBottom: '8px', fontFamily: 'Arial, sans-serif',
          }
        }, album),
        // Artist
        h('div', {
          style: {
            fontSize: '20px', fontWeight: '700',
            color: '#C9A84C', fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
          }
        }, 'DJ DX'),
        // Bottom — domain
        h('div', {
          style: {
            marginTop: '40px',
            fontSize: '14px', color: 'rgba(242,242,242,0.28)',
            letterSpacing: '3px', fontFamily: 'Arial, sans-serif',
          }
        }, 'djdxmusic.com'),
      ),
    )
  } else if (type === 'soul-shades') {
    // Soul Shades — full-bleed photo + centered name overlay (Apple Music vibe)
    card = h('div', {
      style: {
        width: '1200px', height: '630px',
        display: 'flex', position: 'relative',
        fontFamily: 'Arial Black, sans-serif',
        overflow: 'hidden',
      }
    },
      h('img', {
        src: bgUrl, width: 1200, height: 630,
        style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
      }),
      // Dark gradient overlay
      h('div', {
        style: {
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.72) 100%)',
        }
      }),
      // Content
      h('div', {
        style: {
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '52px 60px',
        }
      },
        // "SOUL SHADES" collection tag
        h('div', {
          style: {
            fontSize: '13px', letterSpacing: '5px', fontWeight: '700',
            color: '#C9A84C', textTransform: 'uppercase',
            marginBottom: '16px', fontFamily: 'Arial, sans-serif',
          }
        }, 'SOUL SHADES · DJ DX'),
        // Track name — large
        h('div', {
          style: {
            fontSize: label.length > 22 ? '56px' : '72px',
            fontWeight: '900', color: '#ffffff',
            lineHeight: '1.0', marginBottom: '20px',
            textShadow: '0 2px 24px rgba(0,0,0,0.6)',
          }
        }, label),
        // Bottom row
        h('div', {
          style: {
            display: 'flex', alignItems: 'center', gap: '16px',
          }
        },
          h('div', {
            style: {
              width: '4px', height: '20px',
              background: 'linear-gradient(to bottom, #E2C97E, #C9A84C)',
              borderRadius: '2px',
            }
          }),
          h('div', {
            style: {
              fontSize: '16px', color: 'rgba(242,242,242,0.7)',
              letterSpacing: '2px', fontFamily: 'Arial, sans-serif',
            }
          }, 'djdxmusic.com/soul-shades'),
        ),
      ),
    )
  } else {
    // Music Store — logo card, dark with gold DX mark
    card = h('div', {
      style: {
        width: '1200px', height: '630px',
        display: 'flex', position: 'relative',
        background: '#0a0805',
        fontFamily: 'Arial Black, sans-serif',
        overflow: 'hidden',
      }
    },
      // Subtle background photo at low opacity
      h('img', {
        src: bgUrl, width: 1200, height: 630,
        style: {
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: '0.18',
        },
      }),
      // Strong dark overlay
      h('div', {
        style: {
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,8,5,0.9) 0%, rgba(10,8,5,0.7) 100%)',
        }
      }),
      // Gold left bar
      h('div', {
        style: {
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px',
          background: 'linear-gradient(to bottom, #E2C97E, #9A7A2E)',
        }
      }),
      // Content — centered
      h('div', {
        style: {
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '0', padding: '0 80px',
        }
      },
        // DJ DX wordmark (giant logo feel)
        h('div', {
          style: {
            fontSize: '120px', fontWeight: '900', letterSpacing: '12px',
            color: '#C9A84C',
            marginBottom: '8px',
          }
        }, 'DJ DX'),
        // Divider
        h('div', {
          style: {
            width: '80px', height: '1px',
            background: 'rgba(201,168,76,0.4)',
            marginBottom: '24px',
          }
        }),
        // Track name
        h('div', {
          style: {
            fontSize: label.length > 24 ? '36px' : '44px',
            fontWeight: '700', color: '#f2f2f2',
            textAlign: 'center', letterSpacing: '1px',
            marginBottom: '12px',
          }
        }, label),
        h('div', {
          style: {
            fontSize: '15px', color: 'rgba(242,242,242,0.4)',
            letterSpacing: '4px', textTransform: 'uppercase',
            fontFamily: 'Arial, sans-serif',
          }
        }, 'djdxmusic.com · music store'),
      ),
    )
  }

  // ── Story card (9:16 — 1080×1920 for Instagram Stories) ───────────────────
  if (isStory) {
    const artistLine = type === 'soul-shades' ? 'Soul Shades · DJ DX' : 'DJ DX'
    const collectionLine = type === 'soul-shades' ? 'SOUL SHADES' : type === 'album' ? album.toUpperCase() : 'MUSIC STORE'
    const trackLabel = label
    const deepLinkPath = type === 'soul-shades'
      ? `/soul-shades${trackId ? `#track-${trackId}` : ''}`
      : `/${trackId ? `#track-${trackId}` : ''}`
    const displayLink = `djdxmusic.com${deepLinkPath}`

    const storyCard = h('div', {
      style: {
        width: '1080px', height: '1920px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        background: '#0a0805',
        fontFamily: 'Arial Black, sans-serif',
        overflow: 'hidden',
      }
    },
      // Full-bleed background image (top 65%)
      h('img', {
        src: bgUrl,
        style: {
          position: 'absolute', top: 0, left: 0,
          width: '1080px', height: '1248px',
          objectFit: 'cover', objectPosition: 'center top',
        },
      }),
      // Gradient fade from photo into dark bottom
      h('div', {
        style: {
          position: 'absolute', top: '800px', left: 0, right: 0, height: '600px',
          background: 'linear-gradient(to bottom, transparent, #0a0805)',
        }
      }),
      // Dark bottom panel
      h('div', {
        style: {
          position: 'absolute', top: '1248px', left: 0, right: 0, bottom: 0,
          background: '#0a0805',
        }
      }),

      // Gold top bar
      h('div', {
        style: {
          position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
          background: 'linear-gradient(to right, #C9A84C, #E2C97E, #C9A84C)',
        }
      }),

      // Content overlay
      h('div', {
        style: {
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 72px 100px',
        }
      },
        // Collection tag
        h('div', {
          style: {
            fontSize: '22px', letterSpacing: '6px', fontWeight: '700',
            color: '#C9A84C', textTransform: 'uppercase',
            marginBottom: '24px', fontFamily: 'Arial, sans-serif',
          }
        }, collectionLine),

        // Track title — big
        h('div', {
          style: {
            fontSize: trackLabel.length > 20 ? '88px' : '108px',
            fontWeight: '900', color: '#ffffff',
            lineHeight: '1.0', marginBottom: '24px',
            textShadow: '0 4px 40px rgba(0,0,0,0.8)',
            letterSpacing: '-1px',
          }
        }, trackLabel),

        // Artist
        h('div', {
          style: {
            fontSize: '34px', fontWeight: '600',
            color: 'rgba(242,242,242,0.75)',
            marginBottom: '60px', fontFamily: 'Arial, sans-serif',
          }
        }, artistLine),

        // Divider
        h('div', {
          style: {
            width: '80px', height: '3px',
            background: 'linear-gradient(to right, #C9A84C, #E2C97E)',
            borderRadius: '2px', marginBottom: '48px',
          }
        }),

        // Bottom row — logo + link
        h('div', {
          style: {
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
          }
        },
          // DJ DX wordmark
          h('div', {
            style: {
              fontSize: '72px', fontWeight: '900', letterSpacing: '6px',
              color: '#C9A84C',
            }
          }, 'DJ DX'),

          // Listen link pill
          h('div', {
            style: {
              padding: '18px 40px',
              border: '2px solid rgba(201,168,76,0.6)',
              borderRadius: '50px',
              fontSize: '24px', fontWeight: '700', letterSpacing: '2px',
              color: 'rgba(242,242,242,0.8)',
              fontFamily: 'Arial, sans-serif',
            }
          }, displayLink),
        ),
      ),
    )

    const storyResponse = new ImageResponse(storyCard, { width: 1080, height: 1920 })
    res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=86400')
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Disposition', `attachment; filename="djdx-${encodeURIComponent(trackLabel)}.png"`)
    const buf = Buffer.from(await storyResponse.arrayBuffer())
    res.send(buf)
    return
  }

  const imageResponse = new ImageResponse(card, {
    width: 1200,
    height: 630,
  })

  // Cache for 7 days on CDN
  res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=86400')
  res.setHeader('Content-Type', 'image/png')

  const buf = Buffer.from(await imageResponse.arrayBuffer())
  res.send(buf)
}
