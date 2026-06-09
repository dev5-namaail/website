import { T } from '../../i18n/translations';

// eslint-disable-next-line react/prop-types
export default function ProgressStrip({ lang, currentStep, showResults, showDashboard }) {
  const t = T[lang];
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="progress-strip">
      {steps.map(n => {
        const isActive = !showResults && !showDashboard && currentStep === n;
        const isCompleted = !showResults && !showDashboard && currentStep > n;
        return (
          <div
            key={n}
            className={`step-tab${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`}
          >
            <div className="step-num">{String(n).padStart(2, '0')}</div>
            <div className="step-label">{t[`tab${n}`]}</div>
          </div>
        );
      })}
    </div>
  );
}
