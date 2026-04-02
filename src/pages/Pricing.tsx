import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--light)' }}>
      <Helmet>
        <title>Pricing — DJ DX Music Store</title>
        <meta name="description" content="Buy exclusive DJ DX blends, remixes, and originals. Name your price — starting at $2.00 per track. Instant digital download delivered to your email." />
        <link rel="canonical" href="https://djdxmusic.com/pricing" />
      </Helmet>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 120px' }}>

        <button
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', opacity: 0.8, padding: 0 }}
        >
          ← Back
        </button>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
          Pricing
        </h1>
        <p style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '56px', opacity: 0.7 }}>
          Digital downloads · Name your price · Instant delivery
        </p>

        {/* Main pricing card */}
        <div style={{ border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '40px', marginBottom: '32px', background: 'rgba(201,168,76,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>$2</span>
            <span style={{ color: 'rgba(242,242,242,0.5)', fontSize: '16px', marginBottom: '12px' }}>/ track minimum</span>
          </div>
          <p style={{ color: 'rgba(242,242,242,0.65)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
            Every track starts at <strong style={{ color: 'var(--gold)' }}>$2.00</strong>. You choose what to pay — support the work as much as you'd like. All purchases include an instant download link delivered to your email.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Single Track', price: '$2+' },
              { label: '5 Tracks', price: '$10+' },
              { label: '10 Tracks', price: '$20+' },
              { label: 'Full Catalog', price: 'Your call' },
            ].map(({ label, price }) => (
              <div key={label} style={{ border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '20px', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ color: 'rgba(242,242,242,0.5)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--gold)', fontWeight: 700 }}>{price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', marginBottom: '20px', fontWeight: 700 }}>What's Included</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'High-quality MP3 download',
              'Instant delivery via email',
              'Personal use license',
              'Exclusive blends, remixes & originals',
              'Preview tracks before you buy',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(242,242,242,0.7)', fontSize: '15px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.15)" />
                  <polyline points="4,8 7,11 12,5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', marginBottom: '24px', fontWeight: 700 }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                q: 'How does "name your price" work?',
                a: 'Pick the tracks you want, then enter any amount above the $2.00/track minimum. Pay more if you love the music — it goes directly to supporting the work.',
              },
              {
                q: 'How do I receive my download?',
                a: 'After checkout, a download link is emailed to you instantly. No account needed — just a valid email address.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Because these are digital downloads, all sales are final. If you have a delivery issue, contact us and we\'ll sort it out.',
              },
              {
                q: 'What can I do with the tracks?',
                a: 'Purchases are for personal use. For event, broadcast, or commercial licensing, reach out via the booking form.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: '15px', marginBottom: '6px' }}>{q}</p>
                <p style={{ color: 'rgba(242,242,242,0.55)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '56px', textAlign: 'center' }}>
          <button
            onClick={() => navigate('/#catalog')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 36px', background: 'linear-gradient(90deg, #C9A84C, #E2C97E)', color: '#0c0c0c', border: 'none', borderRadius: '10px', fontFamily: 'var(--font-condensed)', fontSize: '14px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}
          >
            Browse the Catalog
          </button>
        </div>

      </div>
    </div>
  )
}
