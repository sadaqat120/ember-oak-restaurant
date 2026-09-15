import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  occasion: '',
  requests: '',
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

function todayISO() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!emailRe.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.';
  else if (!/^[\d\s()+-]{7,}$/.test(values.phone)) errors.phone = 'Enter a valid phone number.';

  if (!values.date) errors.date = 'Please choose a date.';
  else if (values.date < todayISO()) errors.date = 'Please choose a date in the future.';

  if (!values.time) errors.time = 'Please choose a time.';

  const guestsNum = Number(values.guests);
  if (!values.guests || Number.isNaN(guestsNum) || guestsNum < 1) errors.guests = 'Enter at least 1 guest.';
  else if (guestsNum > 12) errors.guests = 'For parties over 12, please use our banquet inquiry form.';

  return errors;
}

export default function BookingForm() {
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
      // Demo-only: no reservation backend is connected. In production this
      // request would go to a booking API, Calendly, OpenTable, or a custom
      // backend endpoint — the validated `values` object below is already
      // shaped for that handoff.
      await new Promise((resolve, reject) => setTimeout(() => (Math.random() > 0.05 ? resolve() : reject()), 1200));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-sage bg-paper-light p-8 flex flex-col items-start gap-3">
        <CheckCircle2 className="text-sage" size={28} />
        <h3 className="font-display text-2xl">Request received</h3>
        <p className="text-sm text-ink/65 leading-relaxed max-w-md">
          We've noted your request for {values.guests} guest{values.guests === '1' ? '' : 's'} on{' '}
          <strong>{values.date}</strong> at <strong>{values.time}</strong>. This is a demo confirmation — no table
          has actually been held yet. Once a live reservation system is connected, you'll receive a real confirmation
          by email or text.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setStatus('idle');
          }}
          className="btn-secondary mt-2"
        >
          Start a new request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-name">Full name</label>
          <input id="booking-name" name="name" value={values.name} onChange={handleChange} className="w-full" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1.5 text-xs text-rust">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="booking-email">Email</label>
          <input id="booking-email" name="email" type="email" value={values.email} onChange={handleChange} className="w-full" aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1.5 text-xs text-rust">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="booking-phone">Phone</label>
        <input id="booking-phone" name="phone" type="tel" value={values.phone} onChange={handleChange} className="w-full sm:w-1/2" aria-invalid={!!errors.phone} />
        {errors.phone && <p className="mt-1.5 text-xs text-rust">{errors.phone}</p>}
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="booking-date">Date</label>
          <input id="booking-date" name="date" type="date" min={todayISO()} value={values.date} onChange={handleChange} className="w-full" aria-invalid={!!errors.date} />
          {errors.date && <p className="mt-1.5 text-xs text-rust">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="booking-time">Time</label>
          <select id="booking-time" name="time" value={values.time} onChange={handleChange} className="w-full" aria-invalid={!!errors.time}>
            <option value="">Select time</option>
            {timeSlots.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errors.time && <p className="mt-1.5 text-xs text-rust">{errors.time}</p>}
        </div>
        <div>
          <label htmlFor="booking-guests">Guests</label>
          <input id="booking-guests" name="guests" type="number" min="1" max="12" value={values.guests} onChange={handleChange} className="w-full" aria-invalid={!!errors.guests} />
          {errors.guests && <p className="mt-1.5 text-xs text-rust">{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="booking-occasion">Occasion (optional)</label>
        <select id="booking-occasion" name="occasion" value={values.occasion} onChange={handleChange} className="w-full sm:w-1/2">
          <option value="">None in particular</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Business dinner</option>
          <option>Date night</option>
          <option>Celebration</option>
        </select>
      </div>

      <div>
        <label htmlFor="booking-requests">Special requests (optional)</label>
        <textarea id="booking-requests" name="requests" rows={3} value={values.requests} onChange={handleChange} className="w-full" placeholder="Allergies, seating preference, accessibility needs…" />
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-rust">
          <AlertCircle size={16} /> We couldn't submit your request. Please try again.
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
        {status === 'submitting' ? 'Submitting…' : 'Request Reservation'}
      </button>
      <p className="text-xs text-ink/45">
        Parties larger than 12 should use our <a href="/banquet" className="underline">banquet inquiry form</a> instead.
      </p>
    </form>
  );
}
