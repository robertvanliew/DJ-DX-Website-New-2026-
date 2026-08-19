import { useRef, useState, type FormEvent } from 'react';
import { trackLead, trackFormSubmit, trackFormError } from '../lib/analytics';

interface Props {
  formName: string;
  onSent?: () => void;
}

// Stripped-down 4-field version of BookingForm for high-intent, low-friction
// entry points (sticky mobile CTA bottom sheets) where the full form's
// length is the thing killing conversion, not lack of interest. Posts to
// the same /api/booking endpoint with quick: true — the API relaxes
// required-field validation for that flag and DJ DX follows up by phone
// for the remaining details (times, venue, guest count).
export default function QuickInquiryForm({ formName, onSent }: Props) {
  const [fields, setFields] = useState({ name: '', contact: '', eventDate: '', eventType: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const mountedAt = useRef(Date.now());

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    trackFormSubmit(formName);
    const metaEventId = crypto.randomUUID();
    const isEmail = fields.contact.includes('@');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quick: true,
          name: fields.name,
          email: isEmail ? fields.contact : '',
          phone: isEmail ? '' : fields.contact,
          eventType: fields.eventType,
          eventDate: fields.eventDate,
          honeypot: fields.company,
          elapsedMs: Date.now() - mountedAt.current,
          metaEventId,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`http_${res.status}`);
      trackLead({ form: formName, event_type: fields.eventType }, metaEventId);
      setStatus('sent');
      onSent?.();
    } catch (err) {
      trackFormError(formName, err instanceof Error ? err.message : 'network_error');
      setStatus('error');
    }
  };

  if (status === 'sent') return (
    <div className="booking-success">
      <div className="booking-success-icon">✓</div>
      <h3>Got it!</h3>
      <p>DJ DX will text or call you within 24–48 hours to confirm availability for your date.</p>
    </div>
  );

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="qf-hp">Leave this field blank</label>
        <input id="qf-hp" name="qf-hp" type="text" tabIndex={-1} autoComplete="off" value={fields.company} onChange={e => set('company', e.target.value)} />
      </div>

      <div className="form-field">
        <label htmlFor="qf-name">Full Name</label>
        <input id="qf-name" type="text" placeholder="Jane Smith" required value={fields.name} onChange={e => set('name', e.target.value)} />
      </div>
      <div className="form-field">
        <label htmlFor="qf-contact">Phone or Email</label>
        <input id="qf-contact" type="text" placeholder="(555) 000-0000 or jane@example.com" required value={fields.contact} onChange={e => set('contact', e.target.value)} />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="qf-date">Event Date</label>
          <input id="qf-date" type="date" required value={fields.eventDate} onChange={e => set('eventDate', e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="qf-type">Event Type</label>
          <select id="qf-type" required value={fields.eventType} onChange={e => set('eventType', e.target.value)}>
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
      {status === 'error' && <p className="form-error">Something went wrong. Please try again or email bookings@djdxmusic.com directly.</p>}
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Check My Date'}
      </button>
      <p style={{ fontSize: '12px', color: 'rgba(242,242,242,0.45)', marginTop: '10px', textAlign: 'center' }}>
        Trouble with the form? Email <a href="mailto:bookings@djdxmusic.com" style={{ color: 'var(--gold)' }}>bookings@djdxmusic.com</a> directly.
      </p>
    </form>
  );
}
