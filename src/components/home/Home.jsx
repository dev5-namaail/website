import { T } from '../../i18n/translations';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// eslint-disable-next-line react/prop-types
function Home({ currentLang = 'en' }) {
  const t = T[currentLang];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t['home-hero-title']}{' '}
            <span className={styles.heroTitleGreen}>{t['home-hero-title-green']}</span>
          </h1>
          <p className={styles.heroSub}>{t['home-hero-sub']}</p>
          <Link to="/DocumentRetrieval" className={styles.heroCta}>{t['home-hero-cta']}</Link>
        </div>
      </section>


    
    </div>
  );
}

export default Home;
