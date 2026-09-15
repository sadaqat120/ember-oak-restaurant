import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const initialValues = { name: '', email: '', phone: '', subject: '', message: '' };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!emailRe.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.phone && !/^[\d\s()+-]{7,}$/.test(values.phone)) errors.phone = 'Enter a valid phone number.';
  if (!values.subject.trim()) errors.subject = 'Please choose a subject.';
  if (!values.message.trim()) errors.message = 'Tell us a little about your message.';
  else if (values.message.trim().length < 10) errors.message = 'Please add a few more details (10+ characters).';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

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
      // Demo-only: no backend is connected yet. Replace this block with a
      // real request (e.g. fetch('/api/contact', { method: 'POST', ... }))
      // once an API or email service is wired up.
      await new Promise((resolve, reject) => setTimeout(() => (Math.random() > 0.05 ? resolve() : reject()), 1100));
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-sage bg-paper-light p-8 flex flex-col items-start gap-3">
        <CheckCircle2 className="text-sage" size={28} />
        <h3 className="font-display text-xl">Message received</h3>
        <p className="text-sm text-ink/65 leading-relaxed">
          Thanks for reaching out — this is a demo submission for the concept site, so nothing has been sent yet.
          Once a live inbox or contact API is connected, your message will reach our team directly.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && <p id="contact-name-error" className="mt-1.5 text-xs text-rust">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="w-full"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && <p id="contact-email-error" className="mt-1.5 text-xs text-rust">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone">Phone (optional)</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className="w-full"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-rust">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="contact-subject">Subject</label>
          <select
            id="contact-subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            className="w-full"
            aria-invalid={!!errors.subject}
          >
            <option value="">Select a subject</option>
            <option>General question</option>
            <option>Reservation</option>
            <option>Private event</option>
            <option>Catering</option>
            <option>Press / media</option>
            <option>Other</option>
          </select>
          {errors.subject && <p className="mt-1.5 text-xs text-rust">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="w-full"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && <p id="contact-message-error" className="mt-1.5 text-xs text-rust">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-rust">
          <AlertCircle size={16} /> Something went wrong sending your message. Please try again.
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
      <p className="text-xs text-ink/45">
        This is a frontend demo. Submissions are not yet delivered to a live inbox.
      </p>
    </form>
  );
}
