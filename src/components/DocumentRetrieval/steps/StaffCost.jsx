import { T, regions } from '../../../i18n/translations';

// eslint-disable-next-line react/prop-types
export default function StaffCost({ lang, formData, onChange, onBack, onCalculate }) {
  const t = T[lang];
  // eslint-disable-next-line react/prop-types
  const { regionKey, rate } = formData;

  function handleRegionChange(e) {
    const key = e.target.value;
    const region = regions[key];
    if (region) {
      onChange('regionKey', key);
      onChange('rate', region.rate);
      onChange('curSym', region.sym);
    } else {
      onChange('regionKey', '');
    }
  }

  return (
    <div className="step-panel">
      <div className="panel-header">
        <div className="panel-number">05</div>
        <div>
          <div className="panel-title">{t.s5title}</div>
        </div>
      </div>

      <div className="question-grid">
        <div className="q-card">
          <label className="q-label">{t.q5a}</label>
          <select value={regionKey || ''} onChange={handleRegionChange} aria-label={t.q5a}>
            <option value="">{t['sel-choose']}</option>
            {Object.entries(regions).map(([k, region]) => (
              <option key={k} value={k}>{region.lbl}</option>
            ))}
          </select>
        </div>

        <div className="q-card">
          <label className="q-label">{t.q5b}</label>
          <input
            type="number"
            min="1"
            value={rate || ''}
            onChange={e => onChange('rate', parseFloat(e.target.value) || 0)}
            placeholder={t['example-rate'] || 'e.g. 85'}
            aria-label={t.q5b}
          />
        </div>
      </div>

      <div className="nav-row">
        <button className="btn btn-secondary" onClick={onBack}>{t.back}</button>
        <button className="btn btn-primary" onClick={onCalculate}>{t.calc}</button>
      </div>
    </div>
  );
}
