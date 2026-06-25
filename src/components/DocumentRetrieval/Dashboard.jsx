import { useEffect, useRef } from 'react';
import { T } from '../../i18n/translations';
import { fmt } from '../../utils/calculator';


// eslint-disable-next-line react/prop-types
function PieChart({ wastedPct, lang }) {
  const circleRef = useRef(null);
  const circumference = 2 * Math.PI * 60;

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.setAttribute('stroke-dashoffset', circumference);
    const dashOffset = circumference - (circumference * wastedPct / 100);
    const stroke = wastedPct > 15 ? '#d42b2b' : wastedPct > 8 ? '#c9a84c' : '#3aaa35';
    el.setAttribute('stroke', stroke);
    const t = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)';
      el.style.strokeDashoffset = dashOffset;
    }, 200);
    return () => clearTimeout(t);
  }, [wastedPct, circumference]);

  return (
    <div className="gauge-wrap">
      <svg className="gauge-svg" viewBox="0 0 140 80" style={{ overflow: 'visible' }}>
        <circle cx="70" cy="70" r="60" fill="none" stroke="#dde3ea" strokeWidth="14" strokeDasharray={`${circumference * 0.5} ${circumference}`} strokeDashoffset={0} strokeLinecap="butt" transform="rotate(180 70 70)" />
        <circle
          ref={circleRef}
          cx="70" cy="70" r="60"
          fill="none" stroke="#d42b2b" strokeWidth="14"
          strokeDasharray={`${circumference * 0.5} ${circumference}`}
          strokeLinecap="butt"
          transform="rotate(180 70 70)"
          style={{ strokeDashoffset: circumference }}
        />
      </svg>
      <div className="gauge-val">{wastedPct}%</div>
      <div className="gauge-lbl">{lang === 'ar' ? 'مُهدَر' : lang === 'fr' ? 'PERDU' : 'WASTED'}</div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function DonutChart({ recoverPct, lang }) {
  const circleRef = useRef(null);
  const circumference = 2 * Math.PI * 60;

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.setAttribute('stroke-dashoffset', circumference);
    const dOffset = circumference - (circumference * recoverPct / 100);
    const t = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)';
      el.style.strokeDashoffset = dOffset;
    }, 400);
    return () => clearTimeout(t);
  }, [recoverPct, circumference]);

  return (
    <div className="gauge-wrap">
      <svg className="gauge-svg" viewBox="0 0 140 80" style={{ overflow: 'visible' }}>
        <circle cx="70" cy="70" r="60" fill="none" stroke="#dde3ea" strokeWidth="14" strokeDasharray={`${circumference * 0.5} ${circumference}`} strokeDashoffset={0} strokeLinecap="butt" transform="rotate(180 70 70)" />
        <circle
          ref={circleRef}
          cx="70" cy="70" r="60"
          fill="none" stroke="#3aaa35" strokeWidth="14"
          strokeDasharray={`${circumference * 0.5} ${circumference}`}
          strokeLinecap="butt"
          transform="rotate(180 70 70)"
          style={{ strokeDashoffset: circumference }}
        />
      </svg>
      <div className="gauge-val">70%</div>
      <div className="gauge-lbl">{lang === 'ar' ? 'قابل للاسترداد' : lang === 'fr' ? 'RÉCUPÉRABLE' : 'RECOVERABLE'}</div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function RecoveryBars({ drivers, sym, lang }) {
  const refs = useRef([]);
  useEffect(() => {
    const timers = refs.current.map((el, i) => {
      if (!el) return null;
      el.style.width = '0%';
      return setTimeout(() => { el.style.width = drivers[i].pct + '%'; }, 300 + i * 60);
    });
    return () => timers.forEach(t => t && clearTimeout(t));
  }, [drivers]);

  return (
    <div>
      {drivers.map((dr, i) => (
        <div key={i} className="recovery-item">
          <div className="recovery-head">
            <span className="recovery-name">{dr.name}</span>
            <span className="recovery-pct">{dr.pct}%</span>
          </div>
          <div className="recovery-track">
            <div
              ref={el => refs.current[i] = el}
              className="recovery-fill"
              style={{ width: 0, transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)' }}
            />
          </div>
          <div className="recovery-cost">
            {lang === 'ar' ? 'توفير محتمل: ' : 'Potential saving: '}{sym} {fmt(dr.cost)}
          </div>
        </div>
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function BarChart({ drivers, sym, lang }) {
  const refs = useRef([]);
  const maxHrs = Math.max(...drivers.map(d => d.hrs), 1);
  const totalHrs = drivers.reduce((s, d) => s + d.hrs, 0);
  const uH = lang === 'ar' ? 'ساعة' : lang === 'fr' ? 'h' : 'hrs';

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      el.style.width = '0%';
      setTimeout(() => { el.style.width = (drivers[i].hrs / maxHrs * 100).toFixed(1) + '%'; }, 120 + i * 80);
    });
  }, [drivers, maxHrs]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {drivers.map((dr, i) => {
        const share = totalHrs > 0 ? Math.round(dr.hrs / totalHrs * 100) : 0;
        const cost = Math.round(dr.hrs * (dr.rate || 0));
        return (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>{dr.lbl}</span>
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mid)' }}>
                {fmt(dr.hrs)} {uH} &nbsp; {sym} {fmt(cost)} &nbsp; <strong style={{ color: dr.col }}>{share}%</strong>
              </span>
            </div>
            <div style={{ height: 10, background: '#edf0f4', overflow: 'hidden' }}>
              <div
                ref={el => refs.current[i] = el}
                style={{ height: '100%', width: 0, background: dr.col, transition: 'width 1.1s cubic-bezier(0.16,1,0.3,1)' }}
              />
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid var(--rule)', fontSize: 11, color: 'var(--mid)' }}>
        {fmt(totalHrs)} {uH} {lang === 'ar' ? 'مُهدَرة إجمالاً' : lang === 'fr' ? 'perdues au total' : 'wasted in total'}
        &nbsp;·&nbsp;
        {sym} {fmt(Math.round(totalHrs * (drivers[0]?.rate || 0)))} {lang === 'ar' ? 'التكلفة الإجمالية' : lang === 'fr' ? 'coût total' : 'total annual cost'}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function PaybackChart({ results, sym, lang }) {
  const { totalC, totalH } = results;
  const annSaving = Math.round(totalC * 0.70);
  const implCost = Math.round(annSaving * 0.35);
  const monthly = Math.round(annSaving / 12);
  const payback = implCost > 0 && monthly > 0 ? Math.min(12, Math.ceil(implCost / monthly)) : 5;
  const uMo = lang === 'ar' ? 'شهر' : lang === 'fr' ? 'mois' : 'mo';
  const maxCum = monthly * 12;

  const stats = [
    { v: sym + ' ' + fmt(implCost), l: lang === 'ar' ? 'تكلفة التطبيق المقدرة' : lang === 'fr' ? 'Coût impl. estimé' : 'Est. Implementation Cost', c: 'var(--red)' },
    { v: sym + ' ' + fmt(monthly), l: lang === 'ar' ? 'الوفورات الشهرية (70%)' : lang === 'fr' ? 'Économies mensuelles' : 'Monthly Savings (70%)', c: '#3aaa35' },
    { v: payback + ' ' + uMo, l: lang === 'ar' ? 'فترة استرداد رأس المال' : lang === 'fr' ? 'Retour sur invest.' : 'Payback Period', c: 'var(--blue)' },
  ];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3, marginBottom: 20 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: 'var(--paper)', padding: '16px 20px', border: '1px solid var(--rule)' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: s.c, fontFamily: 'Barlow Condensed,Tajawal,sans-serif', letterSpacing: '-0.5px' }}>{s.v}</div>
            <div style={{ fontSize: 11, color: 'var(--mid)', marginTop: 3 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 90, marginBottom: 6 }}>
        {Array.from({ length: 12 }, (_, i) => {
          const mo = i + 1;
          const cum = monthly * mo;
          const net = cum - implCost;
          const bh = maxCum > 0 ? Math.round((cum / maxCum) * 84) : 0;
          const col = net >= 0 ? '#3aaa35' : '#d42b2b';
          const op = mo <= payback ? 1 : 0.3;
          const isPayback = mo === payback;
          return (
            <div key={mo} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              {isPayback
                ? <div style={{ fontSize: 8, color: 'var(--blue)', fontWeight: 700, whiteSpace: 'nowrap' }}>{lang === 'ar' ? '✓ استرداد' : '✓ ROI'}</div>
                : <div style={{ height: 12 }} />}
              <div style={{ width: '100%', height: bh, background: col, opacity: op }} />
              <div style={{ fontSize: 8, color: 'var(--mid)' }}>M{mo}</div>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 10, color: 'var(--mid)' }}>
        {lang === 'ar' ? 'أحمر = التكلفة لم تُسترد بعد · أخضر = عائد صافي إيجابي' : lang === 'fr' ? 'Rouge = coût non recouvré · Vert = retour net positif' : 'Red = cost not yet recovered · Green = net positive return'}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export default function Dashboard({ lang, results, curSym, onReset }) {
  const t = T[lang];
  if (!results) return null;

  // eslint-disable-next-line react/prop-types
  const { totEmp, retEmp, daily, rate, totalH, totalC, h1_pure, h2_pure, h3_envGain, h4_pure, h5_misgain } = results;
  const sym = curSym || '';
  const uH = lang === 'ar' ? 'ساعة' : lang === 'fr' ? 'h' : 'hrs';

  const workHrsTotal = totEmp * 2000;
  const wastedPct = Math.min(98, Math.round((totalH / workHrsTotal) * 100));
  const recoverPct70 = Math.min(98, Math.round((totalH * 0.70 / workHrsTotal) * 100));

  const targetH = Math.round(totalH * 0.30);
  const targetC = Math.round(totalC * 0.30);
  const savedH = Math.round(totalH * 0.70);
  const savedC = Math.round(totalC * 0.70);
  const paybackMonths = totalC > 0 ? Math.max(3, Math.round((totalC * 0.15) / (savedC / 12))) : 6;

  const featureLabels = {
    en: ['Barcode Re-filing', 'Work Orders', 'Real-time Location', 'Failure Reporting', 'Multi-site Mgmt'],
    fr: ['Reclassement barcode', 'Bons de travail', 'Localisation temps réel', 'Reporting échecs', 'Multi-sites'],
    ar: ['إعادة التصنيف بالباركود', 'أوامر العمل', 'تتبع الموقع الفوري', 'تقارير الأخطاء', 'إدارة متعددة المواقع'],
  };

  const donutFeatures = [
    { col: '#1a5fa8', lbl: (featureLabels[lang] || featureLabels.en)[0], pct: 32 },
    { col: '#3aaa35', lbl: (featureLabels[lang] || featureLabels.en)[1], pct: 25 },
    { col: '#c9a84c', lbl: (featureLabels[lang] || featureLabels.en)[2], pct: 22 },
    { col: '#d42b2b', lbl: (featureLabels[lang] || featureLabels.en)[3], pct: 11 },
    { col: '#7b5ea7', lbl: (featureLabels[lang] || featureLabels.en)[4], pct: 10 },
  ];

  const priorityLabels = { en: ['p1', 'p2', 'p3', 'p4'], fr: ['p1', 'p2', 'p3', 'p4'], ar: ['p1', 'p2', 'p3', 'p4'] };
  const priorities = [
    { rank: 1, cls: 'rank-1', key: 'p1', impact: sym + ' ' + fmt(Math.round(totalC * 0.22)) },
    { rank: 2, cls: 'rank-2', key: 'p2', impact: sym + ' ' + fmt(Math.round(totalC * 0.30)) },
    { rank: 3, cls: 'rank-3', key: 'p3', impact: sym + ' ' + fmt(Math.round(totalC * 0.28)) },
    { rank: 4, cls: 'rank-4', key: 'p4', impact: sym + ' ' + fmt(Math.round(totalC * 0.20)) },
  ];

  const recoveryDrivers = [
    { name: t.p1, pct: 35, cost: Math.round(totalC * 0.22) },
    { name: t.p2, pct: 25, cost: Math.round(totalC * 0.30) },
    { name: t.p3, pct: 20, cost: Math.round(totalC * 0.28) },
    { name: t.p4, pct: 15, cost: Math.round(totalC * 0.20) },
  ];

  const barDriverLabels = {
    en: ['Base Retrieval Time', 'Retry Overhead', 'Storage Environment', 'Document Failures', 'Misfiling'],
    fr: ['Temps de base', 'Surcharge retry', 'Environnement', 'Échecs', 'Mauvais classement'],
    ar: ['وقت الاسترداد الأساسي', 'عبء إعادة البحث', 'بيئة التخزين', 'أخطاء الوثائق', 'سوء التصنيف'],
  };
  const bl = barDriverLabels[lang] || barDriverLabels.en;
  const barDrivers = [
    { lbl: bl[0], hrs: Math.round(h1_pure || 0), col: '#1a5fa8', rate },
    { lbl: bl[1], hrs: Math.round(h2_pure || 0), col: '#c9a84c', rate },
    { lbl: bl[2], hrs: Math.round(h3_envGain || 0), col: '#7b5ea7', rate },
    { lbl: bl[3], hrs: Math.round(h4_pure || 0), col: '#f07c3a', rate },
    { lbl: bl[4], hrs: Math.round(h5_misgain || 0), col: '#d42b2b', rate },
  ];

  return (
    <div className="step-panel">
      <div className="dash-hero">
        <div className="dash-eyebrow">{t['dash-eye']}</div>
        <div className="dash-title">{t['dash-title']}</div>
        <p className="dash-sub">{t['dash-sub']}</p>
      </div>

      {/* ROI strip */}
      <div className="roi-block">
        <div className="roi-cell">
          <div className="roi-val green">{sym} {fmt(savedC)}</div>
          <div className="roi-lbl">{t['dash-roi1']}</div>
        </div>
        <div className="roi-cell">
          <div className="roi-val">{fmt(savedH)} {uH}</div>
          <div className="roi-lbl">{t['dash-roi2']}</div>
        </div>
        <div className="roi-cell">
          <div className="roi-val gold">{paybackMonths} {lang === 'ar' ? 'شهر' : lang === 'fr' ? 'mois' : 'mo'}</div>
          <div className="roi-lbl">{t['dash-roi3']}</div>
        </div>
      </div>

      <div className="dash-grid">
        {/* Gauge */}
        <div className="dash-card">
          <div className="dash-card-title">{t['dash-g1']}</div>
          <PieChart wastedPct={wastedPct} lang={lang} />
          <p style={{ fontSize: 12, color: 'var(--mid)', marginTop: 12, lineHeight: 1.6, textAlign: 'center' }}>
            {wastedPct}% {lang === 'ar' ? 'من إجمالي ساعات العمل' : lang === 'fr' ? 'du temps total perdu' : 'of total working hours lost'}
            {' — '}{fmt(Math.round(totalH))} {lang === 'ar' ? 'ساعة' : lang === 'fr' ? 'h' : 'hrs'} / {fmt(workHrsTotal)}
          </p>
        </div>

        {/* Donut */}
        <div className="dash-card">
          <div className="dash-card-title">{t['dash-g2']}</div>
          <DonutChart recoverPct={recoverPct70} lang={lang} />
          <div style={{ marginTop: 16 }}>
            {donutFeatures.map((f, i) => {
              const fHrs = Math.round(savedH * f.pct / 100);
              const fCost = Math.round(savedC * f.pct / 100);
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 10, height: 10, background: f.col, flexShrink: 0, borderRadius: 2, marginTop: 3 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink)' }}>{f.lbl} <span style={{ color: 'var(--mid)', fontWeight: 400 }}>({f.pct}%)</span></div>
                    <div style={{ fontSize: 11, color: 'var(--mid)' }}>{fmt(fHrs)} {uH} · {sym} {fmt(fCost)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* State compare */}
        <div className="dash-card full">
          <div className="dash-card-title">{t['dash-g3']}</div>
          <div className="state-compare">
            <div className="state-col current">
              <div className="state-label">{t['dash-current']}</div>
              <div className="state-metric">
                <div className="state-metric-val">{fmt(Math.round(totalH))}</div>
                <div className="state-metric-lbl">{t['dash-hrs-yr']}</div>
              </div>
              <div className="state-metric">
                <div className="state-metric-val">{sym} {fmt(Math.round(totalC))}</div>
                <div className="state-metric-lbl">{t['dash-cost-yr']}</div>
              </div>
              <div className="state-metric">
                <div className="state-metric-val">{fmt(daily)}</div>
                <div className="state-metric-lbl">{t['dash-req-day']}</div>
              </div>
            </div>
            <div className="state-arrow">→</div>
            <div className="state-col target">
              <div className="state-label">{t['dash-target']}</div>
              <div className="state-metric">
                <div className="state-metric-val">{fmt(targetH)}</div>
                <div className="state-metric-lbl">{t['dash-hrs-yr']}</div>
              </div>
              <div className="state-metric">
                <div className="state-metric-val">{sym} {fmt(targetC)}</div>
                <div className="state-metric-lbl">{t['dash-cost-yr']}</div>
              </div>
              <div className="state-metric">
                <div className="state-metric-val">{fmt(daily)}</div>
                <div className="state-metric-lbl">{t['dash-req-day']}</div>
              </div>
            </div>
          </div>
        </div>

    
  
      </div>

     
    </div>
  );
}
