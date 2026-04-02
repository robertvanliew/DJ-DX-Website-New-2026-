import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Terms() {

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--light)' }}>
      <Helmet>
        <title>Terms & Conditions — DJ DX Music Store | FRANKPELLA LLC</title>
        <meta name="description" content="Terms and conditions for the DJ DX music store. Read our purchase, download, and usage policies before buying exclusive tracks and productions." />
        <link rel="canonical" href="https://djdxmusic.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 120px' }}>

        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', opacity: 0.8, padding: 0 }}>
          ← Back
        </button>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '56px', opacity: 0.7 }}>
          Last updated: March 27, 2026 &nbsp;·&nbsp; FRANKPELLA LLC
        </p>

        <LegalSection title="1. Acceptance of Terms">
          <p>By accessing or using the DJ DX website (the "Site") and purchasing any digital products or services offered by FRANKPELLA LLC ("we," "us," or "our"), you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use the Site or make any purchases.</p>
        </LegalSection>

        <LegalSection title="2. About FRANKPELLA LLC">
          <p>FRANKPELLA LLC is the legal entity operating the DJ DX brand, website, and music store. All purchases, transactions, and contractual agreements are with FRANKPELLA LLC. For any inquiries, contact us at <a href="mailto:frankpellallc@gmail.com" style={{ color: 'var(--gold)' }}>frankpellallc@gmail.com</a>.</p>
        </LegalSection>

        <LegalSection title="3. Digital Products">
          <p>All products sold through this Site are digital audio files ("Digital Goods"). Upon successful payment, you will receive a secure download link delivered to your provided email address. You are purchasing a personal, non-exclusive, non-transferable license to use the downloaded audio files for personal, non-commercial purposes only.</p>
          <p style={{ marginTop: '16px' }}>You may not:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: 2 }}>
            <li>Resell, redistribute, or sublicense any purchased files</li>
            <li>Use purchased files in commercial projects without a separate commercial license</li>
            <li>Share download links with third parties</li>
            <li>Claim authorship or ownership of any purchased work</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Pay What You Want Pricing">
          <p>Our music store operates on a "Pay What You Want" model with a minimum price of $2.00 USD per transaction. You may choose to pay any amount at or above the stated minimum. All prices are in US Dollars (USD). Prices are subject to applicable taxes depending on your jurisdiction, processed through our payment partner Paddle.</p>
        </LegalSection>

        <LegalSection title="5. Payment Processing">
          <p>All payments are processed securely by Paddle (paddle.com), our authorized payment provider. FRANKPELLA LLC does not store your credit card or payment information. By completing a purchase, you also agree to Paddle's terms of service and privacy policy. Paddle acts as the Merchant of Record for all transactions.</p>
        </LegalSection>

        <LegalSection title="6. Refund Policy">
          <p>Please review our <Link to="/refunds" style={{ color: 'var(--gold)' }}>Digital Goods Refund Policy</Link> for complete details. Due to the nature of digital audio downloads, all sales are final once the download link has been delivered. Exceptions are made for corrupted or undelivered files — see the Refund Policy for details.</p>
        </LegalSection>

        <LegalSection title="7. Intellectual Property">
          <p>All music, audio files, artwork, branding, and content on this Site are the intellectual property of FRANKPELLA LLC and/or their respective rights holders. DJ DX blends and remixes may incorporate elements from third-party recordings under applicable fair use and creative remixing frameworks. Purchasing a file does not transfer any intellectual property rights to the buyer.</p>
        </LegalSection>

        <LegalSection title="8. Disclaimer of Warranties">
          <p>The Site and all digital products are provided "as is" without warranty of any kind, express or implied. FRANKPELLA LLC makes no warranties regarding the accuracy, completeness, or suitability of any content. We do not guarantee uninterrupted access to the Site or download links.</p>
        </LegalSection>

        <LegalSection title="9. Limitation of Liability">
          <p>To the fullest extent permitted by applicable law, FRANKPELLA LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site or purchase of digital products. Our total liability to you for any claim shall not exceed the amount you paid for the relevant transaction.</p>
        </LegalSection>

        <LegalSection title="10. Governing Law">
          <p>These Terms are governed by and construed in accordance with the laws of the State of New Jersey, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of New Jersey.</p>
        </LegalSection>

        <LegalSection title="11. Changes to Terms">
          <p>FRANKPELLA LLC reserves the right to update these Terms &amp; Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the Site following changes constitutes acceptance of the revised terms.</p>
        </LegalSection>

        <LegalSection title="12. Contact">
          <p>For questions regarding these Terms &amp; Conditions, please contact FRANKPELLA LLC at:</p>
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
