import { T } from '../../i18n/translations';
import logo from '../../assets/logos/namaa-logo.png';

// eslint-disable-next-line react/prop-types
export default function Header({ lang }) {
  const t = T[lang];
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <div className="logo-wrap">
            <img src={logo} alt="DocuArena" onError={e => { e.target.style.display = 'none'; }} />
          </div>
          <h1
            className="header-title"
            dangerouslySetInnerHTML={{
              __html: lang === 'ar'
                ? 'حاسبة تكلفة<span>استرداد الوثائق</span>'
                : lang === 'fr'
                ? 'Calculateur du Coût<span>de Récupération Documentaire</span>'
                : 'Document Retrieval<span>Cost Calculator</span>',
            }}
          />
          <p className="header-desc">{t['hdr-desc']}</p>
        </div>
        <div className="header-right">
          <div className="header-stat">
            <div className="stat-item">
              <div className="stat-num">2.5</div>
              <div className="stat-lbl">{t['stat-lbl1']}</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">625</div>
              <div className="stat-lbl">{t['stat-lbl2']}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
