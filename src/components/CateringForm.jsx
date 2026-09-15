import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  guestCount: '',
  location: '',
  message: '',
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!emailRe.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.';
  else if (!/^[\d\s()+-]{7,}$/.test(values.phone)) errors.phone = 'Enter a valid phone number.';
  if (!values.eventDate) errors.eventDate = 'Please choose an event date.';
  else if (values.eventDate < todayISO()) errors.eventDate = 'Please choose a date in the future.';
  if (!values.eventType) errors.eventType = 'Please select an event type.';
  const guests = Number(values.guestCount);
  if (!values.guestCount || Number.isNaN(guests) || guests < 1) errors.guestCount = 'Enter an estimated guest count.';
  if (!values.location.trim()) errors.location = 'Please share a location or venue.';
  if (!values.message.trim()) errors.message = 'Tell us a bit about your event.';
  return errors;
}

export default function CateringForm({ eventTypes, context = 'catering' }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    try {
      // Demo-only: no backend is connected. This is where a request to a
      // catering/events CRM, booking API, or email service would be sent.
      await new Promise((resolve, reject) => setTimeout(() => (Math.random() > 0.05 ? resolve() : reject()), 1200));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const noun = context === 'banquet' ? 'event inquiry' : 'catering inquiry';

  if (status === 'success') {
    return (
      <div className="border border-sage bg-paper p-8 flex flex-col items-start gap-3">
        <CheckCircle2 className="text-sage" size={28} />
        <h3 className="font-display text-2xl">Inquiry sent</h3>
        <p className="text-sm text-ink/65 leading-relaxed max-w-md">
          Thank you — we've noted your {noun} for approximately {values.guestCount} guests on{' '}
          <strong>{values.eventDate}</strong>. This is a demo submission for the concept site; our events team will
          respond once a live inbox is connected.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setStatus('idle');
          }}
          className="btn-secondary mt-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${context}-name`}>Full name</label>
          <input id={`${context}-name`} name="name" value={values.name} onChange={handleChange} className="w-full" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1.5 text-xs text-rust">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${context}-email`}>Email</label>
          <input id={`${context}-email`} name="email" type="email" value={values.email} onChange={handleChange} className="w-full" aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1.5 text-xs text-rust">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${context}-phone`}>Phone</label>
          <input id={`${context}-phone`} name="phone" type="tel" value={values.phone} onChange={handleChange} className="w-full" aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1.5 text-xs text-rust">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor={`${context}-eventType`}>Event type</label>
          <select id={`${context}-eventType`} name="eventType" value={values.eventType} onChange={handleChange} className="w-full" aria-invalid={!!errors.eventType}>
            <option value="">Select event type</option>
            {eventTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errors.eventType && <p className="mt-1.5 text-xs text-rust">{errors.eventType}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor={`${context}-eventDate`}>Event date</label>
          <input id={`${context}-eventDate`} name="eventDate" type="date" min={todayISO()} value={values.eventDate} onChange={handleChange} className="w-full" aria-invalid={!!errors.eventDate} />
          {errors.eventDate && <p className="mt-1.5 text-xs text-rust">{errors.eventDate}</p>}
        </div>
        <div>
          <label htmlFor={`${context}-guestCount`}>Estimated guests</label>
          <input id={`${context}-guestCount`} name="guestCount" type="number" min="1" value={values.guestCount} onChange={handleChange} className="w-full" aria-invalid={!!errors.guestCount} />
          {errors.guestCount && <p className="mt-1.5 text-xs text-rust">{errors.guestCount}</p>}
        </div>
        <div>
          <label htmlFor={`${context}-location`}>{context === 'banquet' ? 'Preferred room' : 'Event location'}</label>
          <input
            id={`${context}-location`}
            name="location"
            value={values.location}
            onChange={handleChange}
            className="w-full"
            placeholder={context === 'banquet' ? 'e.g. The Oak Room' : 'Venue or address'}
            aria-invalid={!!errors.location}
          />
          {errors.location && <p className="mt-1.5 text-xs text-rust">{errors.location}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={`${context}-message`}>Tell us about your event</label>
        <textarea id={`${context}-message`} name="message" rows={4} value={values.message} onChange={handleChange} className="w-full" aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1.5 text-xs text-rust">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-rust">
          <AlertCircle size={16} /> We couldn't send your inquiry. Please try again.
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
        {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
      </button>
      <p className="text-xs text-ink/45">This is a frontend demo — no live events inbox is connected yet.</p>
    </form>
  );
}
