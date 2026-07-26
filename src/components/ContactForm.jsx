import { useState } from 'react';
import ShimmerButton from './ui/shimmer-button.tsx';
import { homePage, company } from '../content';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+0-9][0-9 ()/-]{5,19}$/;

const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Bitte geben Sie Ihren Namen an (mind. 2 Zeichen).'),
  email: (v) => (EMAIL_RE.test(v.trim()) ? '' : 'Bitte geben Sie eine gültige E-Mail-Adresse an.'),
  phone: (v) => (v.trim() === '' || PHONE_RE.test(v.trim()) ? '' : 'Bitte geben Sie eine gültige Telefonnummer an.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).'),
  privacy: (v) => (v ? '' : 'Bitte stimmen Sie der Datenschutzerklärung zu.'),
};

function CheckIcon() {
  return (
    <svg className="kf-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ContactForm() {
  const f = homePage.contact.form;
  const [values, setValues] = useState({ name: '', email: '', phone: '', service: '', message: '', privacy: false });
  const [touched, setTouched] = useState({});
  const [formState, setFormState] = useState('idle');

  const errorOf = (field) => (validators[field] ? validators[field](values[field]) : '');
  const isValid = (field) => errorOf(field) === '';
  const showError = (field) => touched[field] && !isValid(field);
  const showValid = (field) =>
    touched[field] && isValid(field) && (field === 'privacy' ? values.privacy : values[field].trim() !== '');

  const setValue = (field, value) => setValues((v) => ({ ...v, [field]: value }));
  const touch = (field) => setTouched((t) => ({ ...t, [field]: true }));

  const fieldClass = (field) =>
    `kf-field${showError(field) ? ' kf-invalid' : ''}${showValid(field) ? ' kf-valid' : ''}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true, privacy: true };
    setTouched(allTouched);
    const firstError = ['name', 'email', 'phone', 'message', 'privacy'].find((k) => !isValid(k));
    if (firstError) {
      document.getElementById(`kf-${firstError}`)?.focus();
      return;
    }
    setFormState('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
          _subject: `Neue Anfrage über rs-digitalsolutions.de von ${values.name}`,
          _template: 'table',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setFormState('sent');
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'sent') {
    return (
      <div className="kf-success" role="status">
        <div className="kf-success-icon"><CheckIcon /></div>
        <h3>{f.successTitle}</h3>
        <p>{f.successText}</p>
      </div>
    );
  }

  return (
    <form className="kf" onSubmit={handleSubmit} noValidate>
      <div className="kf-row">
        <div className={fieldClass('name')}>
          <label htmlFor="kf-name">{f.name.label}</label>
          <div className="kf-input-wrap">
            <input
              type="text"
              id="kf-name"
              autoComplete="name"
              placeholder={f.name.placeholder}
              value={values.name}
              onChange={(e) => setValue('name', e.target.value)}
              onBlur={() => touch('name')}
              aria-invalid={showError('name')}
              aria-describedby={showError('name') ? 'kf-name-error' : undefined}
            />
            {showValid('name') && <CheckIcon />}
          </div>
          {showError('name') && <p className="kf-error" id="kf-name-error">{errorOf('name')}</p>}
        </div>
        <div className={fieldClass('email')}>
          <label htmlFor="kf-email">{f.email.label}</label>
          <div className="kf-input-wrap">
            <input
              type="email"
              id="kf-email"
              autoComplete="email"
              placeholder={f.email.placeholder}
              value={values.email}
              onChange={(e) => setValue('email', e.target.value)}
              onBlur={() => touch('email')}
              aria-invalid={showError('email')}
              aria-describedby={showError('email') ? 'kf-email-error' : undefined}
            />
            {showValid('email') && <CheckIcon />}
          </div>
          {showError('email') && <p className="kf-error" id="kf-email-error">{errorOf('email')}</p>}
        </div>
      </div>

      <div className="kf-row">
        <div className={fieldClass('phone')}>
          <label htmlFor="kf-phone">{f.phone.label}</label>
          <div className="kf-input-wrap">
            <input
              type="tel"
              id="kf-phone"
              autoComplete="tel"
              placeholder={f.phone.placeholder}
              value={values.phone}
              onChange={(e) => setValue('phone', e.target.value)}
              onBlur={() => touch('phone')}
              aria-invalid={showError('phone')}
              aria-describedby={showError('phone') ? 'kf-phone-error' : undefined}
            />
            {showValid('phone') && <CheckIcon />}
          </div>
          {showError('phone') && <p className="kf-error" id="kf-phone-error">{errorOf('phone')}</p>}
        </div>
        <div className="kf-field">
          <label htmlFor="kf-service">{f.service.label}</label>
          <div className="kf-input-wrap">
            <select
              id="kf-service"
              value={values.service}
              onChange={(e) => { setValue('service', e.target.value); touch('service'); }}
            >
              <option value="">{f.service.placeholder}</option>
              {f.service.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={fieldClass('message')}>
        <label htmlFor="kf-message">{f.message.label}</label>
        <div className="kf-input-wrap">
          <textarea
            id="kf-message"
            rows="5"
            placeholder={f.message.placeholder}
            value={values.message}
            onChange={(e) => setValue('message', e.target.value)}
            onBlur={() => touch('message')}
            aria-invalid={showError('message')}
            aria-describedby={showError('message') ? 'kf-message-error' : undefined}
          ></textarea>
          {showValid('message') && <CheckIcon />}
        </div>
        {showError('message') && <p className="kf-error" id="kf-message-error">{errorOf('message')}</p>}
      </div>

      <div className={`${fieldClass('privacy')} kf-privacy`}>
        <label htmlFor="kf-privacy" className="kf-privacy-label">
          <input
            type="checkbox"
            id="kf-privacy"
            checked={values.privacy}
            onChange={(e) => { setValue('privacy', e.target.checked); touch('privacy'); }}
            aria-invalid={showError('privacy')}
            aria-describedby={showError('privacy') ? 'kf-privacy-error' : undefined}
          />
          <span>
            {f.privacy.labelStart}
            <a href="/datenschutz" target="_blank" rel="noopener">{f.privacy.linkLabel}</a>
            {f.privacy.labelEnd}
          </span>
        </label>
        {showError('privacy') && <p className="kf-error" id="kf-privacy-error">{errorOf('privacy')}</p>}
      </div>

      <div className="kf-submit">
        <ShimmerButton
          label={formState === 'sending' ? f.submit.loading : f.submit.default}
          onClick={(e) => {
            if (formState !== 'sending') e.target.closest('form').requestSubmit();
          }}
        />
        <p className="kf-reassure">{f.reassurance}</p>
        {formState === 'error' && (
          <p className="kf-error kf-error-global" role="alert">
            {f.error} <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
