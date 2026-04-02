
import { Helmet } from 'react-helmet-async'

export default function Privacy() {

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--light)' }}>
      <Helmet>
        <title>Privacy Policy — DJ DX | FRANKPELLA LLC</title>
        <meta name="description" content="Privacy policy for djdxmusic.com. Learn how FRANKPELLA LLC collects, uses, and protects your information on the DJ DX website and music store." />
        <link rel="canonical" href="https://djdxmusic.com/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 120px' }}>

        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', opacity: 0.8, padding: 0 }}>
          ← Back
        </button>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '56px', opacity: 0.7 }}>
          Last updated: March 27, 2026 &nbsp;·&nbsp; FRANKPELLA LLC
        </p>

        <LegalSection title="1. Introduction">
          <p>FRANKPELLA LLC ("we," "us," or "our") operates the DJ DX website and music store. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or make a purchase. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.</p>
        </LegalSection>

        <LegalSection title="2. Information We Collect">
          <p>We may collect the following types of information:</p>
          <p style={{ marginTop: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Information You Provide Directly:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Email address (required for purchase and download delivery)</li>
            <li>Name (optional, provided at checkout)</li>
            <li>Payment information (processed directly by Paddle — we never see or store card details)</li>
          </ul>
          <p style={{ marginTop: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Information Collected Automatically:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>IP address and general location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on the Site</li>
            <li>Referring URLs</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Process your purchase and deliver your digital download via email</li>
            <li>Send transactional emails related to your purchase</li>
            <li>Respond to customer support inquiries</li>
            <li>Improve the Site's functionality and user experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and unauthorized use</li>
          </ul>
          <p style={{ marginTop: '16px' }}>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
        </LegalSection>

        <LegalSection title="4. Third-Party Services">
          <p>We work with the following trusted third-party services that may process your data:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Paddle</strong> — Payment processing and Merchant of Record. Paddle processes all payment data in accordance with PCI-DSS standards. See <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Paddle's Privacy Policy</a>.</li>
            <li><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Resend</strong> — Transactional email delivery for purchase confirmations and download links.</li>
            <li><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Cloudflare</strong> — Infrastructure, security, and file storage (R2). Your audio files are stored securely in Cloudflare R2 with time-limited access links.</li>
            <li><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Vercel</strong> — Website hosting and serverless infrastructure.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Data Retention">
          <p>We retain your email address and purchase records for as long as necessary to fulfill the purposes outlined in this policy, including providing customer support and complying with legal obligations. You may request deletion of your data at any time by contacting us at <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a>.</p>
        </LegalSection>

        <LegalSection title="6. Cookies and Tracking">
          <p>Our Site may use cookies and similar tracking technologies to enhance your browsing experience. Essential cookies are required for core functionality. You can control non-essential cookies through your browser settings. We do not currently use third-party advertising cookies.</p>
        </LegalSection>

        <LegalSection title="7. Security">
          <p>We implement commercially reasonable technical and organizational measures to protect your personal information. All data is transmitted over HTTPS. Payment data is handled exclusively by Paddle and never touches our servers. Download links are time-limited and cryptographically signed to prevent unauthorized access.</p>
        </LegalSection>

        <LegalSection title="8. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Lodge a complaint with a supervisory authority (for EU/UK residents)</li>
          </ul>
          <p style={{ marginTop: '16px' }}>To exercise any of these rights, contact us at <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a>.</p>
        </LegalSection>

        <LegalSection title="9. Children's Privacy">
          <p>Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </LegalSection>

        <LegalSection title="10. Changes to This Policy">
          <p>We may update this Privacy Policy periodically. Changes will be reflected by the updated date at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised policy.</p>
        </LegalSection>

        <LegalSection title="11. Contact">
          <p>For any privacy-related questions or requests, please contact FRANKPELLA LLC at:</p>
          <p style={{ marginTop: '12px' }}>
            <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a>
          </p>
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
