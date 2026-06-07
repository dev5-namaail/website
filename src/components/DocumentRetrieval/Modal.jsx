import { useState } from 'react';
import { T } from '../../i18n/translations';
import { fmt } from '../../utils/calculator';


export default function Modal({ lang, isOpen, onClose, results, curSym }) {
  const t = T[lang];
  const [form, setForm] = useState({ name: '', org: '', email: '', country: '', title: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const sym = curSym || '';
  const totalCStr = results ? `${sym} ${fmt(Math.round(results.totalC))}` : '';

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      if (results) {
        body.append('annual_cost', totalCStr);
        body.append('hours_lost', fmt(Math.round(results.totalH)));
        body.append('language', lang);
      }
      await fetch('https://formspree.io/f/xnnqdwqg', { method: 'POST', body, headers: { Accept: 'application/json' } });
    } catch (_) {}
    setSending(false);
    setSubmitted(true);
  }

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <div className="modal-title">{t['submit-msg']}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="modal-title">{t['modal-title']}</div>
            <div className="modal-sub">{t['modal-sub']}</div>

            {results && (
              <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', padding: '14px 16px', marginBottom: 20, fontSize: 12, color: 'var(--mid)' }}>
                {lang === 'ar' ? 'التكلفة المحسوبة: ' : lang === 'fr' ? 'Coût calculé: ' : 'Calculated cost: '}
                <strong style={{ color: 'var(--red)', fontSize: 14 }}>{totalCStr}</strong>
              </div>
            )}

            <div className="form-row">
              <label className="form-lbl">{t['f-name']}</label>
              <input className="form-inp" name="name" placeholder={t['f-name-ph']} value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label className="form-lbl">{t['f-org']}</label>
              <input className="form-inp" name="org" placeholder={t['f-org-ph']} value={form.org} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label className="form-lbl">{t['f-email']}</label>
              <input className="form-inp" type="email" name="email" placeholder={t['f-email-ph']} value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label className="form-lbl">{t['f-country']}</label>
              <input className="form-inp" name="country" placeholder={t['f-country-ph']} value={form.country} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label className="form-lbl">{t['f-title']}</label>
              <input className="form-inp" name="title" placeholder={t['f-title-ph']} value={form.title} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label className="form-lbl">{t['f-phone']}</label>
              <input className="form-inp" name="phone" placeholder={t['f-phone-ph']} value={form.phone} onChange={handleChange} />
            </div>

            <button type="submit" className="btn-cta" style={{ width: '100%', marginTop: 8 }} disabled={sending}>
              {sending ? '...' : t['modal-btn']}
            </button>
            <div className="modal-disc">{t['modal-disc']}</div>
          </form>
        )}
      </div>
    </div>
  );
}
