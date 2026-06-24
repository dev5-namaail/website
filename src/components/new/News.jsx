import { T } from '../../i18n/translations';
import { Link } from 'react-router-dom';
import styles from './News.module.css';
import mediastrategic from '../../assets/mediastrategic.png';
import mcitdigutal from '../../assets/mcitdigutal.png';

const partnerships = [
  {
    titleKey: 'media-partnership-1-title',
    descKey: 'media-partnership-1-desc',
    img: mediastrategic,
    sites: [
      { nameKey: 'media-partnership-1-site1', urlKey: 'media-partnership-1-url1' },
      { nameKey: 'media-partnership-1-site2', urlKey: 'media-partnership-1-url2' },
    ],
  },
  {
    titleKey: 'media-partnership-2-title',
    descKey: 'media-partnership-2-desc',
    img: mcitdigutal,
    sites: [
      { nameKey: 'media-partnership-2-site1', urlKey: 'media-partnership-2-url1' },
      { nameKey: 'media-partnership-2-site2', urlKey: 'media-partnership-2-url2' },
      { nameKey: 'media-partnership-2-site3', urlKey: 'media-partnership-2-url3' },
    ],
  },
];

// eslint-disable-next-line react/prop-types
function News({ currentLang = 'en' }) {
  const t = T[currentLang];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t['media-title']}</h1>
          <p className={styles.heroSub}>{t['media-subtitle']}</p>
        </div>
      </section>

      <section className={styles.partnerships}>
        <h2 className={styles.sectionTitle}>{t['media-partnerships-title']}</h2>
        <div className={styles.partnershipList}>
          {partnerships.map((p, idx) => (
            <div key={idx} className={styles.partnershipCard}>
              <div className={styles.partnershipImgWrap}>
                <img src={p.img} alt="" className={styles.partnershipImg} />
              </div>
              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>{t[p.descKey]}</p>
                <footer className={styles.quoteFooter}>
                  <strong>{t[p.titleKey]}</strong>
                </footer>
              </blockquote>
              <div className={styles.pressLinks}>
                {p.sites.map((site, i) => (
                  <a
                    key={i}
                    href={t[site.urlKey]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pressLink}
                  >
                    {t[site.nameKey]}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.awards}>
        <h2 className={styles.sectionTitle}>{t['media-awards-title']}</h2>
        <div className={styles.awardCard}>
          <div className={styles.awardImgWrap}>
            <img
              src="https://namaa-il.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-28-at-4.04.57-PM-768x858.jpeg"
              alt={t['media-award-1-title']}
              className={styles.awardImg}
            />
          </div>
          <div className={styles.awardContent}>
            <h3 className={styles.awardTitle}>{t['media-award-1-title']}</h3>
            <p className={styles.awardDesc}>{t['media-award-1-desc']}</p>
          </div>
        </div>
      </section>

      {/* <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>{t['media-cta-title']}</h2>
        <Link to="/contact" className={styles.ctaBtn}>{t['media-cta-btn']}</Link>
      </section> */}
    </div>
  );
}

export default News;
