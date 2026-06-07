/* eslint-disable react/prop-types */
import { T } from '../../../i18n/translations';
import { fmt, DAYS } from '../../../utils/calculator';

const ENV_OPTIONS = [
  { value: '', labelKey: 'sel-choose', name: 'choose' },
  { value: '1.0', labelKey: 'stor1', name: 'fully_digital' },
  { value: '1.1', labelKey: 'stor2', name: 'hybrid_mostly_digital' },
  { value: '1.3', labelKey: 'stor3', name: 'hybrid_mostly_physical' },
  { value: '1.6', labelKey: 'stor4', name: 'predominantly_physical' },
  { value: '2.0', labelKey: 'stor5', name: 'physical_only' },
];

// eslint-disable-next-line react/prop-types
export default function RetrievalVolume({ lang, formData, onChange, onNext, onBack }) {
  const t = T[lang];
  // eslint-disable-next-line react/prop-types
  const { daily, envM } = formData;
  const showPreview = daily > 0;

  return (
    <div className="step-panel">
      <div className="panel-header">
        <div className="panel-number">02</div>
        <div>
          <div className="panel-title">{t.s2title}</div>
          <div className="panel-subtitle">{t.s2sub}</div>
        </div>
      </div>
      <div className="question-grid">
        <div className="q-card">
          <div className="q-num">02.A</div>
          <div className="q-label">{t.q2a}</div>
          <div className="q-hint">{t.q2ah}</div>
          <div className="q-input-wrap">
            <input
              type="number"
              min="1"
              value={daily || ''}
              onChange={e => onChange('daily', parseFloat(e.target.value) || 0)}
              placeholder="e.g. 120"
            />
            <div className="q-suffix">{lang === 'ar' ? 'يومياً' : lang === 'fr' ? '/ jour' : '/ day'}</div>
          </div>
        </div>
        <div className="q-card">
          <div className="q-num">02.B</div>
          <div className="q-label">{t.q2b}</div>
          <div className="q-hint">{t.q2bh}</div>
          <div className="q-input-wrap">
            <select
              value={envM || ''}
              onChange={e => onChange('envM', parseFloat(e.target.value) || 1.0)}
            >
              {ENV_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{t[opt.labelKey]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="live-preview">
          <div>
            <div className="preview-label">{t['pv2a']}</div>
            <div className="preview-val">{fmt(daily * DAYS)}</div>
          </div>
          {envM > 0 && (
            <>
              <div className="preview-div" />
              <div>
                <div className="preview-label">{t['pv2b']}</div>
                <div className="preview-val">{envM.toFixed(1)}<span>x</span></div>
              </div>
            </>
          )}
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
