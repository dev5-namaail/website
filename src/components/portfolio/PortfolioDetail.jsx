import { Link, useParams, useNavigate } from 'react-router-dom';
import { T } from '../../i18n/translations';
import styles from './PortfolioDetail.module.css';
import   cmsImg from '../../assets/cms.jpg';
import digitImg from '../../assets/digit.jpg';
import kodakImg  from '../../assets/kodak.jpg';
import  ecmImg  from '../../assets/ECM.jpg';
import  famImg from '../../assets/fixedassets.jpg';
import   prmImg from '../../assets/prm.jpg';

const imgs = {
  ecm: ecmImg,
  fam: famImg,
  prm: prmImg,
  digit: digitImg,
  kodak: kodakImg,
  cms: cmsImg,
};

export default function PortfolioDetail({ currentLang = 'en' }) {
  const { key } = useParams();
  const navigate = useNavigate();
  const t = T[currentLang];

  const item = {
    key,
    titleKey: `portfolio-${key}-title`,
    descKey: `portfolio-${key}-desc`,
    contentKey: `portfolio-${key}-content`,
  };
  const raw = t[item.contentKey] || t[item.descKey] || '';
  const looksLikeHtml = /<[^>]+>/.test(raw);

  return (
    <div className={styles.page}>
      <div className={styles.backNav}>
   <Link to="/portfolio" className={styles.backLink}>
                <span className={styles.backArrow}>&larr;</span>
                {t['portfolio-back'] || 'Back to services'}
              </Link>      </div>

      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t[item.titleKey]}</h1>
          <p className={styles.subtitle}>{t[item.descKey]}</p>
        </header>

        <section className={styles.mainGrid}>
          <div className={styles.gallery}>
            <div className={styles.featured}>
              <img src={imgs[key]} alt={t[item.titleKey]} />
            </div>
            {/* <div className={styles.thumbs}>
              <img src={imgs[key]} alt="thumb1" />
              <img src={imgs[key]} alt="thumb2" />
              <img src={imgs[key]} alt="thumb3" />
            </div> */}
          </div>

          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>{t[item.titleKey]}</h2>
            {looksLikeHtml ? (
              <div className={styles.lead} dangerouslySetInnerHTML={{ __html: raw }} />
            ) : (
              <div className={styles.lead}>
                {String(raw)
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
              </div>
            )}

            <div className={styles.statements}>
              <h3 className={styles.statTitle}>{t['portfolio-features-title']}</h3>
              <ul className={styles.statList}>
                <li>{t['portfolio-feature-1']}</li>
                <li>{t['portfolio-feature-2']}</li>
                <li>{t['portfolio-feature-3']}</li>
              </ul>
            </div>

            <div className={styles.metaCta}>
              <button className={styles.cta} onClick={() => navigate('/contact')}>{t['portfolio-cta']}</button>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
