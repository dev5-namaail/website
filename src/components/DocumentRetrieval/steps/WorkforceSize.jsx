import { T } from '../../../i18n/translations';
import { fmt } from '../../../utils/calculator';

// eslint-disable-next-line react/prop-types
export default function WorkforceSize({ lang, formData, onChange, onNext }) {
  const t = T[lang];
  // eslint-disable-next-line react/prop-types
  const { totEmp, retEmp } = formData;
  const showPreview = totEmp > 0 && retEmp > 0;

  return (
    <div className="step-panel">
      <div className="panel-header">
        <div className="panel-number">01</div>
        <div>
          <div className="panel-title">{t.s1title}</div>
          <div></div>
          <div className="panel-subtitle">{t.s1sub}</div>
        </div>
      </div>
      <div className="question-grid">
        <div className="q-card">
          <div className="q-num">01.A</div>
          <div className="q-label">{t.q1a}</div>
          <div className="q-hint">{t.q1ah}</div>
          <div className="q-input-wrap">
            <input
              type="number"
              min="1"
              value={totEmp || ''}
              onChange={e => onChange('totEmp', parseFloat(e.target.value) || 0)}
              placeholder="e.g. 500"
            />
          </div>
        </div>
        <div className="q-card">
          <div className="q-num">01.B</div>
          <div className="q-label">{t.q1b}</div>
          <div className="q-hint">{t.q1bh}</div>
          <div className="q-input-wrap">
            <input
              type="number"
              min="1"
              value={retEmp || ''}
              onChange={e => onChange('retEmp', parseFloat(e.target.value) || 0)}
              placeholder="e.g. 80"
            />
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="live-preview">
          <div>
            <div className="preview-label">{t['pv1a']}</div>
            <div className="preview-val">{fmt(retEmp)}</div>
          </div>
          <div className="preview-div" />
          <div>
            <div className="preview-label">{t['pv1b']}</div>
            <div className="preview-val">
              {Math.round(retEmp / totEmp * 100)}<span>%</span>
            </div>
          </div>
        </div>
      )}

      <div className="nav-row">
        <span />
        <button className="btn btn-primary" onClick={onNext}>
          {t.next}
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
