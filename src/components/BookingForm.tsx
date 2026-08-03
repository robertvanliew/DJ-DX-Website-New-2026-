import { useRef, useState, type FormEvent } from 'react';
import { trackLead } from '../lib/analytics';
import AddressAutocomplete from './AddressAutocomplete';

const Send = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function BookingForm() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', eventType: '', eventDate: '', eventStartTime: '', eventEndTime: '', location: '', locationCity: '', locationState: '', locationCountry: '', message: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const mountedAt = useRef(Date.now());

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const metaEventId = crypto.randomUUID();
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          honeypot: fields.company,
          elapsedMs: Date.now() - mountedAt.current,
          metaEventId,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error();
      trackLead({ form: 'booking_widget', event_type: fields.eventType }, metaEventId);
      setStatus('sent');
      setFields({ name: '', email: '', phone: '', eventType: '', eventDate: '', eventStartTime: '', eventEndTime: '', location: '', locationCity: '', locationState: '', locationCountry: '', message: '', company: '' });
      mountedAt.current = Date.now();
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
      {/* Honeypot — hidden from real visitors, bots fill it blindly.
          Deliberately NOT named/labeled "Company"/"Organization" — that
          matches a common saved browser autofill profile field, which was
          silently autofilling this and causing real (often corporate)
          submitters to get dropped as false-positive spam. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="bf-hp">Leave this field blank</label>
        <input id="bf-hp" name="bf-hp" type="text" tabIndex={-1} autoComplete="off" value={fields.company} onChange={e => set('company', e.target.value)} />
      </div>

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
          <label htmlFor="bf-phone">Phone</label>
          <input id="bf-phone" type="tel" placeholder="+1 (555) 000-0000" required value={fields.phone} onChange={e => set('phone', e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="bf-event-date">Event Date</label>
          <input id="bf-event-date" type="date" required value={fields.eventDate} onChange={e => set('eventDate', e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bf-event-start-time">Start Time</label>
          <input id="bf-event-start-time" type="time" required value={fields.eventStartTime} onChange={e => set('eventStartTime', e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="bf-event-end-time">End Time</label>
          <input id="bf-event-end-time" type="time" required value={fields.eventEndTime} onChange={e => set('eventEndTime', e.target.value)} />
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
        <AddressAutocomplete
          id="bf-location"
          label="Event Location"
          placeholder="Venue name, city, state"
          required
          maxLength={200}
          value={fields.location}
          onChange={v => set('location', v)}
          onSelect={d => setFields(f => ({ ...f, locationCity: d.city, locationState: d.state, locationCountry: d.country }))}
        />
      </div>
      <div className="form-field">
        <label htmlFor="bf-message">Tell me about your event</label>
        <textarea id="bf-message" placeholder="Guest count, vibe you're going for, any special requests…" required value={fields.message} onChange={e => set('message', e.target.value)} />
      </div>
      {status === 'error' && <p className="form-error">Something went wrong. Please try again or email bookings@djdxmusic.com directly.</p>}
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <><span>Send Inquiry</span> <Send /></>}
      </button>
    </form>
  );
}
