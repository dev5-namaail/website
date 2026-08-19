import { Link } from "react-router-dom";
import { getDocuarenaContent } from "./docuarenaContent";
import styles from "./DocuarenaMobile.module.css";

function highlightLastWord(text) {
  const words = String(text).split(" ");
  if (words.length < 2) return text;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span>{last}</span>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function DocuarenaMobile({ currentLang = "en" }) {
  const c = getDocuarenaContent(currentLang);
  const isRtl = currentLang === "ar";

  return (    <div className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* <span className={styles.heroBadge}>DocuArena Mobile</span> */}
          <h1 className={styles.heroTitle}>
            {highlightLastWord(c.mobileHeroTitle)}
          </h1>
          <p className={styles.heroSub}>{c.mobileHeroSub}</p>
          <p className={styles.heroDesc}>{c.mobileHeroDesc}</p>
          {/* <Link to="/contact" className={styles.heroCta}>
            {c.mobileCta}
          </Link> */}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            {/* <p className={styles.kicker}>{c.mobileKicker}</p> */}
            <h2 className={styles.sectionTitle}>{c.mobileTitle}</h2>
            <p className={styles.sectionSub}>{c.mobileSub}</p>
          </div>
          <div className={styles.featureGrid}>
            {c.mobile.map((item, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureIcon}>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{c.mobileClose}</h2>
          <div className={styles.ctaActions}>
            <Link to="/Docuarena" className={styles.ctaPrimary}>
              {c.heroCtaAlt}
            </Link>
            <Link to="/contact" className={styles.ctaAlt}>
              {c.trainingCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DocuarenaMobile;
