import { useState, type FormEvent } from 'react';

const Send = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function BookingForm() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setFields({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') return (
    <div className="booking-success">
      <div className="booking-success-icon">✓</div>
      <h3>Inquiry sent!</h3>
      <p>DJ DX will get back to you within 24–48 hours. Check your inbox for a confirmation.</p>
    </div>
  );

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bf-name">Full Name</label>
          <input id="bf-name" type="text" placeholder="Jane Smith" required value={fields.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="bf-email">Email Address</label>
          <input id="bf-email" type="email" placeholder="jane@example.com" required value={fields.email} onChange={e => set('email', e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bf-phone">Phone <span style={{ opacity: 0.45, fontWeight: 400 }}>(optional)</span></label>
          <input id="bf-phone" type="tel" placeholder="+1 (555) 000-0000" value={fields.phone} onChange={e => set('phone', e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="bf-event-date">Event Date</label>
          <input id="bf-event-date" type="date" required value={fields.eventDate} onChange={e => set('eventDate', e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bf-event-type">Event Type</label>
          <select id="bf-event-type" required value={fields.eventType} onChange={e => set('eventType', e.target.value)}>
            <option value="" disabled>Select type…</option>
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Private Party</option>
            <option>Club / Venue Night</option>
            <option>Birthday / Celebration</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="bf-message">Tell me about your event</label>
        <textarea id="bf-message" placeholder="Location, guest count, vibe you're going for, any special requests…" required value={fields.message} onChange={e => set('message', e.target.value)} />
      </div>
      {status === 'error' && <p style={{ color: '#e55', fontSize: '13px', margin: '0 0 12px' }}>Something went wrong. Please try again or email djdxbusiness@gmail.com directly.</p>}
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <><span>Send Inquiry</span> <Send /></>}
      </button>
    </form>
  );
}
