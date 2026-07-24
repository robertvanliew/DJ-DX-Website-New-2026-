import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import AddressAutocomplete from '../components/AddressAutocomplete';
import { trackLead } from '../lib/analytics';

const SUBJECT_OPTIONS = [
  { value: 'booking',    label: 'Booking inquiry (weddings, events, parties)' },
  { value: 'soulshades', label: 'Soul Shades (live violin + DJ duo)' },
  { value: 'press',      label: 'Press / media / podcast' },
  { value: 'support',    label: 'Music store support (download issues, refunds)' },
  { value: 'legal',      label: 'Legal / contract / licensing' },
  { value: 'privacy',    label: 'Privacy / data request (GDPR, CCPA)' },
  { value: 'other',      label: 'Something else' },
];

const DIRECT_EMAILS: Record<string, string> = {
  booking:    'bookings@djdxmusic.com',
  press:      'bookings@djdxmusic.com',
  soulshades: 'soulshades@djdxmusic.com',
  support:    'support@djdxmusic.com',
  legal:      'legal@djdxmusic.com',
  privacy:    'privacy@djdxmusic.com',
  other:      'bookings@djdxmusic.com',
};

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'booking',
    eventDate: '',
    eventStartTime: '',
    eventEndTime: '',
    venue: '',
    venueCity: '',
    venueState: '',
    venueCountry: '',
    message: '',
    company: '', // honeypot — real visitors never see or fill this
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const mountedAt = useRef(Date.now());

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));
  const showEventFields = fields.subject === 'booking' || fields.subject === 'soulshades';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const metaEventId = crypto.randomUUID();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          honeypot: fields.company,
          elapsedMs: Date.now() - mountedAt.current,
          metaEventId,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || 'Failed to send');
      }
      trackLead({ form: 'contact', subject: fields.subject }, metaEventId);
      setStatus('sent');
      setFields({ name: '', email: '', phone: '', subject: 'booking', eventDate: '', eventStartTime: '', eventEndTime: '', venue: '', venueCity: '', venueState: '', venueCountry: '', message: '', company: '' });
      mountedAt.current = Date.now();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact DJ DX — Booking, Press, Support | DJ DX</title>
        <meta name="description" content="Get in touch with DJ DX. Booking inquiries, press, Soul Shades collaborations, music store support, legal, and more — routed to the right inbox based on your topic." />
        <link rel="canonical" href="https://djdxmusic.com/contact" />
        <meta property="og:title" content="Contact DJ DX" />
        <meta property="og:description" content="Reach DJ DX for bookings, press, Soul Shades, support, legal, or general inquiries." />
        <meta property="og:url" content="https://djdxmusic.com/contact" />
        <meta property="og:image" content="https://djdxmusic.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <SiteNav />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '38vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '40px',
        background: 'var(--dark)',
      }}>
        <img
          src="/epk-hero.jpg"
          alt=""
          aria-hidden="true"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.05) saturate(1.05)', opacity: 0.45 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,12,12,0.6) 0%, rgba(12,12,12,0.96) 100%)' }} />
        <div className="section-inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="sec-overline" style={{ justifyContent: 'center' }}>
            <span className="sec-label">Get In Touch</span>
          </div>
          <h1 className="sec-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', marginBottom: '1rem' }}>
            Contact <span>DJ DX</span>
          </h1>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1.05rem', color: 'rgba(242,242,242,0.7)', lineHeight: 1.7 }}>
            Pick a topic and your message lands in the right inbox automatically. Most replies within 24&ndash;48 hours.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <main style={{ padding: '64px 24px 100px', background: 'var(--dark)' }}>
        <div className="section-inner" style={{ maxWidth: '1080px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '48px', alignItems: 'start' }}>

          {/* LEFT — Form */}
          <div>
            {status === 'sent' ? (
              <div className="booking-success">
                <div className="booking-success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>Your message went to the right inbox. You&apos;ll get a reply within 24&ndash;48 hours. Check your email for a confirmation.</p>
                <button
                  onClick={() => { setStatus('idle'); setErrorMsg(''); }}
                  className="btn-gold"
                  style={{ marginTop: '24px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                {/* Honeypot — hidden from real visitors, bots fill it blindly */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={fields.company}
                    onChange={e => set('company', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      maxLength={120}
                      value={fields.name}
                      onChange={e => set('name', e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      maxLength={254}
                      value={fields.email}
                      onChange={e => set('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    maxLength={30}
                    value={fields.phone}
                    onChange={e => set('phone', e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">What is this about?</label>
                  <select
                    id="contact-subject"
                    required
                    value={fields.subject}
                    onChange={e => set('subject', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      color: '#f2f2f2',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%23C9A84C%22%20d%3D%22M6%208L0%202l1.4-1.4L6%205.2%2010.6.6%2012%202z%22/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: '40px',
                    }}
                  >
                    {SUBJECT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value} style={{ background: '#0c0c0c', color: '#f2f2f2' }}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {showEventFields && (
                  <>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contact-event-date">Event Date</label>
                        <input
                          id="contact-event-date"
                          type="date"
                          required
                          value={fields.eventDate}
                          onChange={e => set('eventDate', e.target.value)}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="contact-event-start-time">Start Time</label>
                        <input
                          id="contact-event-start-time"
                          type="time"
                          required
                          value={fields.eventStartTime}
                          onChange={e => set('eventStartTime', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contact-event-end-time">End Time</label>
                        <input
                          id="contact-event-end-time"
                          type="time"
                          required
                          value={fields.eventEndTime}
                          onChange={e => set('eventEndTime', e.target.value)}
                        />
                      </div>
                      <AddressAutocomplete
                        id="contact-venue"
                        label="Venue / Location"
                        placeholder="Venue name, city, state (e.g. The Plaza, New York, NY)"
                        required
                        maxLength={200}
                        value={fields.venue}
                        onChange={v => set('venue', v)}
                        onSelect={d => setFields(f => ({ ...f, venueCity: d.city, venueState: d.state, venueCountry: d.country }))}
                      />
                    </div>
                  </>
                )}

                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    required
                    maxLength={5000}
                    placeholder="Tell us about your event, question, or request..."
                    value={fields.message}
                    onChange={e => set('message', e.target.value)}
                  />
                  <div style={{ fontSize: '11px', color: 'rgba(242,242,242,0.4)', marginTop: '4px', textAlign: 'right' }}>
                    {fields.message.length} / 5000
                  </div>
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ff7676', fontSize: '14px', marginBottom: '12px' }}>
                    {errorMsg || 'Something went wrong. Please try again or email '}
                    <a href={`mailto:${DIRECT_EMAILS[fields.subject] || 'bookings@djdxmusic.com'}`} style={{ color: 'var(--gold)' }}>
                      {DIRECT_EMAILS[fields.subject] || 'bookings@djdxmusic.com'}
                    </a>
                    {' directly.'}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-gold"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p style={{ fontSize: '12px', color: 'rgba(242,242,242,0.45)', marginTop: '16px', textAlign: 'center' }}>
                  We respect your inbox. No spam. No newsletters unless you ask.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — Direct Email Aliases */}
          <aside style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '10px',
            padding: '32px',
          }}>
            <div className="sec-overline" style={{ marginBottom: '12px' }}>
              <span className="sec-label">Prefer Email Direct?</span>
            </div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--white)',
              marginBottom: '24px',
              lineHeight: 1.15,
            }}>
              Skip the form
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(242,242,242,0.65)', lineHeight: 1.7, marginBottom: '24px' }}>
              All emails are routed to the right inbox by topic. Pick the one that fits.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { topic: 'Bookings', email: 'bookings@djdxmusic.com', desc: 'Weddings, corporate, parties, press' },
                { topic: 'Soul Shades', email: 'soulshades@djdxmusic.com', desc: 'Live violin + DJ duo inquiries' },
                { topic: 'Support', email: 'support@djdxmusic.com', desc: 'Music store, downloads, refunds' },
                { topic: 'Legal', email: 'legal@djdxmusic.com', desc: 'Contracts, licensing, IP' },
                { topic: 'Privacy', email: 'privacy@djdxmusic.com', desc: 'Data requests, GDPR, CCPA' },
              ].map(({ topic, email, desc }) => (
                <li key={email} style={{ paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.85)', marginBottom: '4px' }}>{topic}</div>
                  <a href={`mailto:${email}`} style={{ color: 'var(--white)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
                    {email}
                  </a>
                  <div style={{ fontSize: '12px', color: 'rgba(242,242,242,0.45)', marginTop: '2px' }}>{desc}</div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Or</div>
              <Link to="/faq" style={{ color: 'var(--white)', fontSize: '15px', textDecoration: 'none' }}>
                Browse the FAQ →
              </Link>
              <p style={{ fontSize: '12px', color: 'rgba(242,242,242,0.45)', marginTop: '4px' }}>
                Most common questions answered there.
              </p>
            </div>
          </aside>

        </div>
      </main>

      <SiteFooter />

      {/* Responsive: single column on small screens */}
      <style>{`
        @media (max-width: 880px) {
          main .section-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
