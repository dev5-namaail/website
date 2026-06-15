import { T } from '../../i18n/translations';
import styles from './About.module.css';
import brochurePdf from '../../assets/Namaa-Brochure.pdf';
import profilePdf from '../../assets/Namaa-InfoLogistics-Company-Profile-2024-1.pdf';
import heroDesktop from '../../assets/about/about-hero-desktop.jpeg';

const valueKeys = [
  ['about-val1-title', 'about-val1-body-p1', 'about-val1-body-p2'],
  ['about-val2-title', 'about-val2-body'],
  ['about-val3-title', 'about-val3-body-p1', 'about-val3-body-p2'],
  ['about-val4-title', 'about-val4-body'],
  ['about-val5-title', 'about-val5-body'],
];

function DownloadBtn({ href, children }) {
  return (
    <a className={styles.downloadButton} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <span className={styles.downloadIcon}>⇩</span>
    </a>
  );
}

export default function About({ currentLang = 'en' }) {
  const t = T[currentLang];

  return (
    <article className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: `linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%), url(${heroDesktop})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t['about-title']}</h1>
          <p className={styles.heroSub}>{t['about-desc']}</p>
        </div>
      </section>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>{t['about-who']}</h2>
          <h3>{t['about-who-sub']}</h3>
          <div className={styles.accentBlock}>
            <p>{t['about-who-text']}</p>
          </div>
          <DownloadBtn href={brochurePdf}>{t['about-download-brochure']}</DownloadBtn>
        </section>

        <section className={styles.section}>
          <h2>{t['about-vision']}</h2>
          <div className={`${styles.accentBlock} ${styles.visionBlock}`}>
            <p><strong>{t['about-vision-text']}</strong></p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t['about-mission-title']}</h2>
          <div className={styles.missionText}>
            <p>{t['about-mission1']}</p>
            <p>{t['about-mission2']}</p>
            <p>{t['about-mission3']}</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.valuesSection}`}>
          <h2>{t['about-values-title']}</h2>
          <div className={styles.valuesList}>
            {valueKeys.map(([titleKey, ...bodyKeys]) => (
              <section className={styles.valueItem} key={titleKey}>
                <span className={styles.bookmark} />
                <div>
                  <h3>{t[titleKey]}</h3>
                  {bodyKeys.map((k) => <p key={k}>{t[k]}</p>)}
                </div>
              </section>
            ))}
          </div>
          <DownloadBtn href={profilePdf}>{t['about-download-profile']}</DownloadBtn>
        </section>
      </main>

    </article>
  );
}


