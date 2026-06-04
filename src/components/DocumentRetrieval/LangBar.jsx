const LANGUAGES = [
  { code: 'ar', label: 'عربي' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

// eslint-disable-next-line react/prop-types
export default function LangBar({ currentLang, setLang }) {
  return (
    <div className="lang-bar">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          className={`lang-btn${currentLang === code ? ' active' : ''}`}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
