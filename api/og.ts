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
  // Design: OLED dark base + gold accent. Apple Music / Spotify premium feel.
  // IMPORTANT: Satori-only CSS — no boxShadow, no multi-value backgrounds,
  // no CSS grid, no gap, no inset shorthand, no filter, no backdropFilter.
  if (isStory) {
    const artistLine = type === 'soul-shades' ? 'Soul Shades · DJ DX' : 'DJ DX'
    const trackLabel = label
    const deepLinkPath = type === 'soul-shades'
      ? `/soul-shades${trackId ? `#track-${trackId}` : ''}`
      : `/${trackId ? `#track-${trackId}` : ''}`
    const displayLink = `djdxmusic.com${deepLinkPath}`

    // Font size logic — keep title on 1-2 lines max
    const titleSize = trackLabel.length > 22 ? '68px'
                    : trackLabel.length > 14 ? '80px'
                    : '96px'

    const storyCard = h('div', {
      style: {
        width: '1080px', height: '1920px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        // Pure OLED black background — premium dark base
        background: '#080706',
        fontFamily: 'Arial Black, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }
    },
      // ── Gold top accent bar ──
      h('div', {
        style: {
          position: 'absolute', top: '0px', left: '0px', right: '0px', height: '5px',
          background: 'linear-gradient(to right, #9A7530, #E2C97E, #C9A84C, #E2C97E, #9A7530)',
        }
      }),

      // ── Gold bottom accent bar ──
      h('div', {
        style: {
          position: 'absolute', bottom: '0px', left: '0px', right: '0px', height: '5px',
          background: 'linear-gradient(to right, #9A7530, #E2C97E, #C9A84C, #E2C97E, #9A7530)',
        }
      }),

      // ── Spacer top ──
      h('div', { style: { height: '120px', flexShrink: '0' } }),

      // ── DJ DX wordmark at top ──
      h('div', {
        style: {
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          marginBottom: '60px',
        }
      },
        h('div', {
          style: {
            fontSize: '52px', fontWeight: '900', letterSpacing: '14px',
            color: '#C9A84C',
            textTransform: 'uppercase',
          }
        }, 'DJ DX'),
        // Thin gold rule under wordmark
        h('div', {
          style: {
            width: '120px', height: '1px',
            background: 'rgba(201,168,76,0.4)',
            marginTop: '12px',
          }
        }),
      ),

      // ── Album art square with gold border frame ──
      h('div', {
        style: {
          width: '860px', height: '860px',
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid rgba(201,168,76,0.35)',
          flexShrink: '0',
          display: 'flex',
        }
      },
        h('img', {
          src: bgUrl,
          style: {
            width: '860px', height: '860px',
            objectFit: 'cover',
          },
        }),
        // Dark gradient scrim at bottom of art for text legibility
        h('div', {
          style: {
            position: 'absolute', bottom: '0px', left: '0px', right: '0px', height: '260px',
            background: 'linear-gradient(to bottom, transparent, rgba(8,7,6,0.85))',
          }
        }),
      ),

      // ── Track info block ──
      h('div', {
        style: {
          width: '860px',
          display: 'flex', flexDirection: 'column',
          paddingTop: '52px',
        }
      },
        // "NOW PLAYING" label
        h('div', {
          style: {
            fontSize: '18px', fontWeight: '700', letterSpacing: '6px',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
          }
        }, 'NOW PLAYING'),

        // Track title
        h('div', {
          style: {
            fontSize: titleSize,
            fontWeight: '900', color: '#F5F0E8',
            lineHeight: '1.0',
            marginBottom: '16px',
            letterSpacing: '-1px',
          }
        }, trackLabel),

        // Artist name
        h('div', {
          style: {
            fontSize: '32px', fontWeight: '400',
            color: 'rgba(201,168,76,0.7)',
            marginBottom: '52px',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
          }
        }, artistLine),

        // Divider rule
        h('div', {
          style: {
            width: '100%', height: '1px',
            background: 'rgba(201,168,76,0.18)',
            marginBottom: '40px',
          }
        }),

        // Bottom row: play icon + link
        h('div', {
          style: {
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
          }
        },
          // Play now CTA
          h('div', {
            style: {
              display: 'flex', alignItems: 'center',
            }
          },
            // Play triangle icon
            h('div', {
              style: {
                width: '48px', height: '48px',
                borderRadius: '50%',
                background: '#C9A84C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginRight: '16px',
                flexShrink: '0',
              }
            },
              h('div', {
                style: {
                  width: '0px', height: '0px',
                  borderTop: '11px solid transparent',
                  borderBottom: '11px solid transparent',
                  borderLeft: '18px solid #080706',
                  marginLeft: '4px',
                }
              }),
            ),
            h('div', {
              style: {
                fontSize: '22px', fontWeight: '700',
                color: '#F5F0E8',
                letterSpacing: '1px',
                fontFamily: 'Arial, sans-serif',
              }
            }, 'Listen Now'),
          ),

          // Domain link
          h('div', {
            style: {
              fontSize: '19px', fontWeight: '600',
              color: 'rgba(201,168,76,0.6)',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.5px',
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
