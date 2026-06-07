import { T } from '../../../i18n/translations';
import { fmt, DAYS } from '../../../utils/calculator';

const RETRY_OPTIONS = [
  { value: 0, labelKey: 'ret0', name: 'rarely_under_5' },
  { value: 10, labelKey: 'ret1', name: 'occasionally_around_10' },
  { value: 20, labelKey: 'ret2', name: 'frequently_around_20' },
  { value: 35, labelKey: 'ret3', name: 'very_often_over_33' },
  { value: 55, labelKey: 'ret4', name: 'most_of_time_over_50' },
];

// eslint-disable-next-line react/prop-types
export default function TimePerRetrieval({ lang, formData, onChange, onNext, onBack }) {
  const t = T[lang];
  // eslint-disable-next-line react/prop-types
  const { mins, rp, daily, envM } = formData;
  const showPreview = mins > 0 && daily > 0;

  const ra = 1 + (rp / 100 * 0.5);
  const hpr = (mins / 60) * ra * (envM || 1);
  const annHrs = daily * DAYS * hpr;
  const uH = lang === 'ar' ? ' ساعة' : lang === 'fr' ? ' h' : ' hrs';

  return (
    <div className="step-panel">
      <div className="panel-header">
        <div className="panel-number">03</div>
        <div>
          <div className="panel-title">{t.s3title}</div>
          <div className="panel-subtitle">{t.s3sub}</div>
        </div>
      </div>
      <div className="question-grid">
        <div className="q-card">
          <div className="q-num">03.A</div>
          <div className="q-label">{t.q3a}</div>
          <div className="q-hint">{t.q3ah}</div>
          <div className="q-input-wrap">
            <input
              type="number"
              min="1"
              value={mins || ''}
              onChange={e => onChange('mins', parseFloat(e.target.value) || 0)}
              placeholder="e.g. 18"
            />
            <div className="q-suffix">{t.mins}</div>
          </div>
        </div>
        <div className="q-card">
          <div className="q-num">03.B</div>
          <div className="q-label">{t.q3b}</div>
          <div className="q-hint">{t.q3bh}</div>
          <div className="q-input-wrap">
            <select
              value={rp}
              onChange={e => onChange('rp', parseFloat(e.target.value) || 0)}
            >
              {RETRY_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{t[opt.labelKey]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="live-preview">
          <div>
            <div className="preview-label">{t['pv3a']}</div>
            <div className="preview-val">{hpr.toFixed(2)}<span>{uH}</span></div>
          </div>
          <div className="preview-div" />
          <div>
            <div className="preview-label">{t['pv3b']}</div>
            <div className="preview-val">{fmt(annHrs)} <span>{lang === 'ar' ? 'ساعة' : lang === 'fr' ? 'h' : 'hrs'}</span></div>
          </div>
        </div>
      )}

      <div className="nav-row">
        <button className="btn btn-secondary" onClick={onBack}>
          <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          {t.back}
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          {t.next}
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
