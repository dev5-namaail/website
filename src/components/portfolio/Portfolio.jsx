import { T } from '../../i18n/translations';
import styles from './Portfolio.module.css';
import { Link } from 'react-router-dom';
import   cmsImg from '../../assets/cms.jpg';
import digitImg from '../../assets/digit.jpg';
import kodakImg  from '../../assets/kodak.jpg';
import  ecmImg  from '../../assets/ECM.jpg';
import  famImg from '../../assets/fixedassets.jpg';
import   prmImg from '../../assets/prm.jpg';
import videoSrc from '../../assets/portfolio.mp4';
const items = [
  { key: 'ecm' },
  { key: 'fam'},
  { key: 'prm' },
  { key: 'digit' },
  { key: 'kodak'},
  { key: 'cms' },
];

const imgs = {
    ecm: ecmImg,
    fam: famImg,
    prm: prmImg,
    digit: digitImg,
    kodak: kodakImg,
    cms: cmsImg,
};


export default function Portfolio({ currentLang = 'en' }) {
  const t = T[currentLang];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t['portfolio-title']}</h1>
          <p className={styles.heroSub}>{t['portfolio-sub']}</p>
        </div>
      </section>
      <section className={styles.videoSection}>
      <h1 className={styles.sectionTitle}>{t['portfolio-projects']}</h1>
      <video className={styles.video} autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </section>


      <section className={styles.grid}>
        {items.map(({ key }) => (
          <div key={key} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={imgs[key]} alt={t[`portfolio-${key}-title`]} className={styles.cardImage} />
            </div>

            <h3 className={styles.cardTitle}>
              <Link to={`/portfolio/${key}`} className={styles.cardTitleLink}>
                 {t[`portfolio-${key}-title`]} 
              </Link>
              <span className={styles.cardKey}>( {key.toUpperCase()} )</span>
            </h3>
            <p className={styles.cardDesc}> {t[`portfolio-${key}-desc`]} </p>
            <div className={styles.cardFooter}>
              <Link to={`/portfolio/${key}`} className={styles.moreLink}>{t['portfolio-read-more']}</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
