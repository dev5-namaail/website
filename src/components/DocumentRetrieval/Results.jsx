import { T } from '../../i18n/translations';
import { fmt, fmtS } from '../../utils/calculator';

export default function Results({ lang, results, curSym, onOpenModal, onReset, onViewDashboard }) {
  const t = T[lang];
  if (!results) return null;

  const { totalH = 0, totalC = 0, perEmpC = 0, perEmpH = 0, daily = 0 } = results;
  const sym = curSym || '';

  return (
    <div className="results-simple">
      <header className="results-header">
        <h3>{t['res-eye']}</h3>
        <h2>
          {t['res-loses']} <span className="res-total">{sym} {fmtS(totalC)}</span>
        </h2>
        <p className="res-sub">{t['res-per-year']}</p>
      </header>

      <section className="results-metrics">
        <div className="metric">
          <div className="label">{t['m1l']}</div>
          <div className="value">{fmt(Math.round(totalH))} <span className="unit">{t['m1u']}</span></div>
        </div>
        <div className="metric">
          <div className="label">{t['m2l']}</div>
          <div className="value">{sym} {fmtS(totalC)}</div>
        </div>
        <div className="metric">
          <div className="label">{t['m3l']}</div>
          <div className="value">{sym} {fmt(Math.round(perEmpC))}</div>
        </div>
      </section>

      <section className="results-actions">
        {/* <button className="btn btn-primary" onClick={onOpenModal}>{t['cta-btn']}</button> */}
        <button className="btn" onClick={onViewDashboard}>{t['dash-btn-lbl']}</button>
        <button className="btn-reset" onClick={onReset}>{t.reset}</button>
      </section>
    </div>
  );
}
