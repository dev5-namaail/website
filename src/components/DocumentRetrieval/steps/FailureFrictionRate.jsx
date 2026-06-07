import { T } from '../../../i18n/translations';

const FAIL_OPTIONS = [
  { value: 2, labelKey: 'fail0', name: 'rarely_under_2' },
  { value: 5, labelKey: 'fail1', name: 'occasionally_around_5' },
  { value: 10, labelKey: 'fail2', name: 'frequently_around_10' },
  { value: 20, labelKey: 'fail3', name: 'very_often_20' },
];

const REFILE_OPTIONS = [
  { value: 1.0, labelKey: 'ref0', name: 'ref_yes_system' },
  { value: 1.05, labelKey: 'ref1', name: 'ref_mostly_trained' },
  { value: 1.12, labelKey: 'ref2', name: 'ref_sometimes' },
  { value: 1.22, labelKey: 'ref3', name: 'ref_rarely' },
  { value: 1.35, labelKey: 'ref4', name: 'ref_no_problem' },
];
// eslint-disable-next-line react/prop-types
export default function FailureFrictionRate({ lang, formData, onChange, onNext, onBack }) {
  const t = T[lang];
  // eslint-disable-next-line react/prop-types
  const { failP, refileM } = formData;

  return (
    <div className="step-panel">
      <div className="panel-header">
        <div className="panel-number">04</div>
        <div>
          <div className="panel-title">{t.s4title}</div>
          <div className="panel-subtitle">{t.s4sub}</div>
        </div>
      </div>
      <div className="question-grid">
        <div className="q-card">
          <div className="q-num">04.A</div>
          <div className="q-label">{t.q4a}</div>
          <div className="q-hint">{t.q4ah}</div>
          <div className="q-input-wrap">
            <select
              value={failP}
              onChange={e => onChange('failP', parseFloat(e.target.value) || 2)}
            >
              {FAIL_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{t[opt.labelKey]}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="q-card">
          <div className="q-num">04.B</div>
          <div className="q-label">{t.q4b}</div>
          <div className="q-hint">{t.q4bh}</div>
          <div className="q-input-wrap">
            <select
              value={refileM}
              onChange={e => onChange('refileM', parseFloat(e.target.value) || 1.0)}
            >
              {REFILE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{t[opt.labelKey]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

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
