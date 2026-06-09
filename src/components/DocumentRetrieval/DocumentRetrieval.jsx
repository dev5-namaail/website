import { useState } from 'react';
import { T } from '../../i18n/translations';
import { calculate } from '../../utils/calculator';
import Header from './Header';
import ProgressStrip from './ProgressStrip';
import WorkforceSize from './steps/WorkforceSize';
import RetrievalVolume from './steps/RetrievalVolume';
import TimePerRetrieval from './steps/TimePerRetrieval';
import FailureFrictionRate from './steps/FailureFrictionRate';
import StaffCost from './steps/StaffCost';
import Results from './Results';
import Dashboard from './Dashboard';
import Modal from './Modal';

const DEFAULT_FORM = {
  totEmp: 0,
  retEmp: 0,
  daily: 0,
  envM: 1.0,
  mins: 0,
  rp: 0,
  failP: 2,
  refileM: 1.0,
  regionKey: '',
  rate: 0,
  curSym: '',
};

// eslint-disable-next-line react/prop-types
export default function DocumentRetrieval({ currentLang = 'en' }) {
  const t = T[currentLang];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [results, setResults] = useState(null);
  const [curSym, setCurSym] = useState('');
  const [view, setView] = useState('form');
  const [modalOpen, setModalOpen] = useState(false);
  const [showRoi, setShowRoi] = useState(true);

  function updateForm(field, value) {
    if (field === 'curSym') {
      setCurSym(value);
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  function handleCalculate() {
    const { totEmp, retEmp, daily, envM, mins, rp, failP, refileM, rate } = formData;
    if (!totEmp || !retEmp || !daily || !mins || !rate) {
      alert(
        `${t.calc}: ${currentLang === 'ar' ? 'يرجى تعبئة جميع الحقول' : currentLang === 'fr' ? 'Veuillez remplir tous les champs' : 'Please complete all fields.'}`
      );
      return;
    }

    const result = calculate({
      totEmp,
      retEmp,
      daily,
      envM: envM || 1,
      mins,
      rp: rp || 0,
      failP: failP || 2,
      refileM: refileM || 1,
      rate,
    });

    setResults(result);
    setShowRoi(true);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleReset() {
    setFormData(DEFAULT_FORM);
    setCurSym('');
    setResults(null);
    setView('form');
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const steps = [
    WorkforceSize,
    RetrievalVolume,
    TimePerRetrieval,
    FailureFrictionRate,
    StaffCost,
  ];

  const StepComponent = steps[currentStep - 1];

  return (
    <>
      <Header lang={currentLang} />
       <ProgressStrip
        lang={currentLang}
        currentStep={currentStep}
        showResults={view === 'results'}
        showDashboard={view === 'dashboard'}
      /> 

     <div className="main">
        {view === 'form' && (
          <StepComponent
            lang={currentLang}
            formData={formData}
            onChange={updateForm}
            onNext={() => setCurrentStep(currentStep + 1)}
            onBack={() => setCurrentStep(currentStep - 1)}
            onCalculate={handleCalculate}
            curSym={curSym}
          />
        )}

        {view === 'results' && (
          <Results
            lang={currentLang}
            results={results}
            curSym={curSym}
            onOpenModal={() => setModalOpen(true)}
            onReset={handleReset}
            onViewDashboard={() => {
              setView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            showRoi={showRoi}
            onRemoveRoi={() => setShowRoi(false)}
          />
        )}
        {view === 'dashboard' && (
          <Dashboard lang={currentLang} results={results} curSym={curSym} onReset={handleReset} />
        )}
      </div> 

      <Modal lang={currentLang} isOpen={modalOpen} onClose={() => setModalOpen(false)} results={results} curSym={curSym} />
    </>
  );
}
