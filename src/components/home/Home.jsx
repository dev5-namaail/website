import { useState, useEffect, useRef } from "react";
import { T } from "../../i18n/translations";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import brochurePdf from "../../assets/Namaa-Brochure.pdf";
import profilePdf from "../../assets/Namaa-InfoLogistics-Company-Profile-2024-1.pdf";

const serviceItems = [
  { icon: "📄", nameKey: "home-serv1", descKey: "home-serv1d" },
  { icon: "🔍", nameKey: "home-serv2", descKey: "home-serv2d" },
  { icon: "🛡️", nameKey: "home-serv3", descKey: "home-serv3d" },
  { icon: "📊", nameKey: "home-serv4", descKey: "home-serv4d" },
];

const aboutItems = ["home-about1", "home-about2", "home-about3"];

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, count];
}

function DownloadButton({ href, children }) {
  return (
    <a className={styles.downloadButton} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <span className={styles.downloadIcon} aria-hidden="true">
        ⇩
      </span>
    </a>
  );
}

function Home({ currentLang = "en" }) {
  const t = T[currentLang];
  const [ref1, count1] = useCountUp(17);
  const [ref2, count2] = useCountUp(30);
  const [ref3, count3] = useCountUp(100);

  const heroSlide = {
    title: `${t["home-hero-title"]} ${t["home-hero-title-green"]}`,
    subtitle: t["home-hero-sub"],
    cta: t["home-hero-cta"],
    link: "/DocumentRetrieval",
  };

  return (
    <div className={styles.page}>
      <section className={styles.heroSlider}>
        <div className={styles.heroSlide}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>{t["home-hero-title-green"]}</p>
            <h1 className={styles.heroTitle}>{heroSlide.title}</h1>
            <p className={styles.heroSub}>{heroSlide.subtitle}</p>
            <div className={styles.heroActions}>
              <Link to={heroSlide.link} className={styles.heroCta}>
                {heroSlide.cta}
              </Link>
              <Link to="/contact" className={styles.heroCtaSecondary}>
                {t["home-cta-btn"]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t["home-serv-title"]}</p>
          <h2 className={styles.sectionTitle}>{t["home-serv-title"]}</h2>
          <p className={styles.sectionSub}>{t["home-serv-sub"]}</p>
        </div>

        <div className={styles.servicesGrid}>
          {serviceItems.map((service) => (
            <article className={styles.serviceCard} key={service.nameKey}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceName}>{t[service.nameKey]}</h3>
              <p className={styles.serviceDesc}>{t[service.descKey]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutSplit}>
          <div className={styles.aboutCopy}>
            <p className={styles.sectionKicker}>{t["home-about-title"]}</p>
            <h2 className={styles.aboutTitle}>{t["home-about-title"]}</h2>
            <ul className={styles.aboutList}>
              {aboutItems.map((key) => (
                <li key={key}>{t[key]}</li>
              ))}
            </ul>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.aboutCardAccent} />
            <h3>{t["home-cta-profile"]}</h3>
            <p>{t["home-serv-sub"]}</p>
            <DownloadButton href={profilePdf}>{t['about-download-profile']}</DownloadButton>

          </div>
        </div>
      </section>

      <section className={styles.docuarena}>
        <div className={styles.docuarenaGrid}>
          <div className={styles.docuarenaPanel}>
            <p className={styles.sectionKicker}>{t["home-docuarena-title"]}</p>
            <h2 className={styles.docuarenaTitle}>{t["home-docuarena-title"]}</h2>
            <p className={styles.docuarenaSub}>{t["home-docuarena-sub"]}</p>
            <p className={styles.docuarenaDesc}>{t["home-docuarena-desc"]}</p>
            <Link to="/contact" className={styles.docuarenaAction}>
              {t["home-cta-btn"]}
            </Link>
            <DownloadButton href={brochurePdf}>{t['about-download-brochure']}</DownloadButton>

          </div>

          <div className={styles.docuarenaStats}>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref1}>
                {count1}+
              </span>
              <span className={styles.docuarenaLabel}>{t["home-stat1lbl"]}</span>
            </div>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref2}>
                {count2}+
              </span>
              <span className={styles.docuarenaLabel}>{t["home-stat2lbl"]}</span>
            </div>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref3}>
                {count3}+
              </span>
              <span className={styles.docuarenaLabel}>{t["home-stat3lbl"]}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t["home-cta-title"]}</h2>
          <p className={styles.ctaSub}>{t["home-serv-sub"]}</p>
          {/* <Link to="/contact" className={styles.ctaBtn}>
            {t["home-cta-btn"]}
          </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
