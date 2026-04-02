
import { Helmet } from 'react-helmet-async'

export default function Refunds() {

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--light)' }}>
      <Helmet>
        <title>Refund Policy — DJ DX Music Store | FRANKPELLA LLC</title>
        <meta name="description" content="Refund policy for DJ DX music store purchases. All digital sales are final. Contact djdxbusiness@gmail.com for support." />
        <link rel="canonical" href="https://djdxmusic.com/refunds" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 120px' }}>

        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', opacity: 0.8, padding: 0 }}>
          ← Back
        </button>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
          Refund Policy
        </h1>
        <p style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '56px', opacity: 0.7 }}>
          Last updated: March 27, 2026 &nbsp;·&nbsp; FRANKPELLA LLC
        </p>

        <div style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '48px',
        }}>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            <strong style={{ color: 'var(--gold)' }}>Important:</strong> All sales of digital audio files are final. Because our products are high-resolution audio files that are delivered instantly upon payment, we are unable to offer refunds once the download link has been sent. However, we stand fully behind the quality of every file we deliver.
          </p>
        </div>

        <LegalSection title="1. All Sales Are Final">
          <p>FRANKPELLA LLC sells high-quality digital audio files ("Digital Goods") through the DJ DX music store. Due to the nature of digital products — which are delivered electronically and cannot be "returned" — all sales are final once the purchase is complete and the download link has been delivered to your email address.</p>
          <p style={{ marginTop: '16px' }}>By completing a purchase, you acknowledge that you understand and agree to this policy.</p>
        </LegalSection>

        <LegalSection title="2. Corrupted or Defective Files">
          <p>We take quality seriously. If you receive a digital audio file that is:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Corrupted, unplayable, or damaged</li>
            <li>Significantly different from what was described or previewed</li>
            <li>Incomplete or truncated</li>
          </ul>
          <p style={{ marginTop: '16px' }}>We will replace the defective file at no additional cost. To request a replacement, please contact us at <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a> within <strong style={{ color: 'rgba(255,255,255,0.9)' }}>14 days</strong> of your purchase with:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Your order confirmation or transaction ID</li>
            <li>The email address used at checkout</li>
            <li>A brief description of the issue</li>
          </ul>
          <p style={{ marginTop: '16px' }}>We will respond within 2 business days and issue a replacement download link promptly.</p>
        </LegalSection>

        <LegalSection title="3. Non-Delivered Downloads">
          <p>If you completed payment but did not receive a download link via email, please first:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Check your spam or junk mail folder</li>
            <li>Verify the email address you provided at checkout was correct</li>
          </ul>
          <p style={{ marginTop: '16px' }}>If your download link was still not received within 1 hour of purchase, contact us at <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a> with your transaction details and we will resend the download link immediately.</p>
        </LegalSection>

        <LegalSection title="4. Expired Download Links">
          <p>Download links are time-limited for security purposes. If your link has expired before you were able to download your purchase, contact us at <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a> and we will issue a new link at no charge. Please save your files promptly after downloading.</p>
        </LegalSection>

        <LegalSection title="5. Unauthorized Charges">
          <p>If you believe an unauthorized charge was made to your payment method, please contact your bank or payment provider directly. You may also contact Paddle (our payment processor) at <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>paddle.com</a>, as they serve as the Merchant of Record for all transactions.</p>
        </LegalSection>

        <LegalSection title="6. Exceptions and Discretion">
          <p>FRANKPELLA LLC reserves the right to issue refunds or store credit on a case-by-case basis at our sole discretion in exceptional circumstances. Contacting us does not guarantee a refund outside of the conditions described above.</p>
        </LegalSection>

        <LegalSection title="7. Contact Us">
          <p>For all refund requests, file replacements, or questions about this policy, please reach out to:</p>
          <p style={{ marginTop: '16px' }}>
            <strong style={{ color: 'rgba(255,255,255,0.9)' }}>FRANKPELLA LLC</strong><br />
            <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a>
          </p>
          <p style={{ marginTop: '16px' }}>We aim to respond to all support requests within 2 business days.</p>
        </LegalSection>

      </div>
    </div>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.1rem',
        fontWeight: 600,
        color: 'var(--gold)',
        marginBottom: '12px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      }}>
        {title}
      </h2>
      <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)' }}>
        {children}
      </div>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginTop: '40px' }} />
    </div>
  )
}
