import { Link } from "react-router-dom";
import { getDocuarenaContent } from "./docuarenaContent";
import styles from "./Docuarena.module.css";

import heroVideo from "../../assets/video.mp4";
import stage1 from "../../assets/1.jpg";
import stage2 from "../../assets/22.jpg";
import stage3 from "../../assets/33.jpg";
import stage4 from "../../assets/ECM.jpg";
import stage5 from "../../assets/77.jpg";
import stage6 from "../../assets/66.jpg";
import stage7 from "../../assets/5.jpg";
import stage8 from "../../assets/44.jpg";
import matterImg from "../../assets/prm.jpg";
import expertsImg from "../../assets/docuarena.png";
import trainingImg from "../../assets/digit.jpg";

function Kicker({ text }) {
  return <p className={styles.kicker}>{text}</p>;
}

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

function SectionHead({ kicker, title, sub }) {
  return (
    <div className={styles.sectionHead}>
      {kicker && <Kicker text={kicker} />}
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {sub && <p className={styles.sectionSub}>{sub}</p>}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Docuarena({ currentLang = "en" }) {
  const c = getDocuarenaContent(currentLang);
  const isRtl = currentLang === "ar";

  return (
    <div className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <video className={styles.heroVideo} src={heroVideo} autoPlay muted loop playsInline />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          {/* <span className={styles.heroBadge}>{c.heroBadge}</span> */}
          <h1 className={styles.heroTitle}>
            {highlightLastWord(c.heroTitle)}
          </h1>
          <p className={styles.heroSub}>{c.heroSub}</p>
          <p className={styles.heroPain}>{c.heroPain}</p>
          <p className={styles.heroDesc}>{c.heroDesc}</p>
          <p className={styles.heroDesc}>{c.heroDesc2}</p>
          <div className={styles.heroActions}>
            {/* <a href="mailto:info@namaa-il.com" className={styles.heroCta}>
              {c.heroCta}
            </a> */}
            <Link to="/DocumentRetrieval" className={styles.heroCtaAlt}>
              {c.heroCtaAlt}
            </Link>
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE READY ── */}
      {/* <section className={styles.ready}>
        <div className={styles.container}>
          <p className={styles.readyTitle}>{c.readyTitle}</p>
          <div className={styles.readyGrid}>
            {c.ready.map((item, i) => (
              <div key={i} className={styles.readyChip}>
                <span className={styles.readyCheck}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CHALLENGES ── */}
      <section className={styles.challenges}>
        <div className={styles.container}>
          <SectionHead kicker={c.challengesKicker} title={c.challengesTitle} sub={c.challengesSub} />
          <div className={styles.challengeGrid}>
            {c.challenges.map((item, i) => (
              <div key={i} className={styles.challengeCard}>
                <span className={styles.challengeNum}>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ))}
          </div>
          <p className={styles.challengeClose}>{c.challengesClose}</p>
        </div>
      </section>

      {/* ── PHYSICAL RECORDS STILL MATTER ── */}
      <section className={styles.matter}>
        <div className={styles.container}>
          <div className={styles.matterGrid}>
            <div className={styles.matterCopy}>
              <SectionHead kicker={c.matterKicker} title={c.matterTitle} />
              <p className={styles.matterP}>{c.matterP1}</p>
              <p className={styles.matterP}>{c.matterP2}</p>
              <p className={styles.matterP}>{c.matterP3}</p>
              {/* <ul className={styles.matterList}>
                {c.matter.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
              <p className={styles.matterClose}>{c.matterClose}</p>
            </div>
            <div className={styles.matterVisual}>
              <img src={matterImg} alt={c.matterTitle} className={styles.matterImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ── ONE PLATFORM ── */}
      {/* <section className={styles.platform}>
        <div className={styles.container}>
          <SectionHead kicker={c.platformKicker} title={c.platformTitle} /> 
          <div className={styles.platformGrid}>
            {c.platform.map((item, i) => (
              <div key={i} className={styles.platformCard}>
                <h3 className={styles.platformQ}>{item.q}</h3>
                <p className={styles.platformA}>{item.a}</p>
              </div>
            ))}
          </div>
          <p className={styles.platformClose}>{c.platformClose}</p>
        </div>
      </section> */}

      {/* ── LIFECYCLE ── */}
      <section className={styles.lifecycle}>
        <div className={styles.container}>
          <SectionHead kicker={c.lifecycleKicker} title={c.lifecycleTitle} sub={c.lifecycleSub} />
          <div className={styles.lifecycleGrid}>
            {c.lifecycle.map((step, i) => {
              const imgs = [stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8];
              return (
                <div key={i} className={styles.lifecycleCard}>
                  <div className={styles.lifecycleImgWrap}>
                    <img src={imgs[i % imgs.length]} alt={step.title} className={styles.lifecycleImg} />
                    <span className={styles.lifecycleNum}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className={styles.lifecycleTitle}>{step.title}</h3>
                  <p className={styles.lifecycleDesc}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      {/* <section className={styles.features}>
        <div className={styles.container}>
           <SectionHead kicker={c.featuresKicker} title={c.featuresTitle} sub={c.featuresSub} /> 
          <div className={styles.featureGrid}>
            {c.features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureIcon}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── MOBILE ── */}
      {/* <section className={styles.mobile}>
        <div className={styles.container}>
          <div className={styles.mobileGrid}>
            <div className={styles.mobileCopy}>
              <SectionHead kicker={c.mobileKicker} title={c.mobileTitle} sub={c.mobileSub} />
              <p className={styles.mobileDesc}>{c.mobileDesc}</p>
              <ul className={styles.mobileList}>
                {c.mobile.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className={styles.mobileClose}>{c.mobileClose}</p>
              <Link to="/DocuarenaMobile" className={styles.mobileCta}>
                {c.mobileCta}
              </Link>
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <span className={styles.phoneDot} />
                  DocuArena
                </div>
                <div className={styles.phoneBanner}>Operations</div>
                <div className={styles.phoneScan}>
                  <span className={styles.scanCorners} />
                  <span className={styles.phoneScanLabel}>Scan</span>
                </div>
                <div className={styles.phoneRow} />
                <div className={styles.phoneRow} />
                <div className={styles.phoneRow} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── COST CALCULATOR ── */}
      <section className={styles.cost}>
        <div className={styles.container}>
          <div className={styles.costGrid}>
            <div>
              <SectionHead kicker={c.costKicker} title={c.costTitle} />
              <p className={styles.costSub}>{c.costSub}</p>
              <p className={styles.costDesc}>{c.costDesc}</p>
            </div>
            <div className={styles.costListWrap}>
              <ul className={styles.costList}>
                {c.cost.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link to="/DocumentRetrieval" className={styles.costCta}>
                {c.costCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DIFFERENT ── */}
      <section className={styles.diff}>
        <div className={styles.container}>
          <SectionHead kicker={c.diffKicker} title={c.diffTitle} />
          <div className={styles.diffTable}>
            <div className={styles.diffRow}>
              <div className={`${styles.diffCell} ${styles.diffOldHead}`}>{c.diffHead[0]}</div>
              <div className={`${styles.diffCell} ${styles.diffNewHead}`}>{c.diffHead[1]}</div>
            </div>
            {c.diff.map((row, i) => (
              <div key={i} className={styles.diffRow}>
                <div className={`${styles.diffCell} ${styles.diffOld}`}>{row[0]}</div>
                <div className={`${styles.diffCell} ${styles.diffNew}`}>
                  <span className={styles.diffCheck}>✓</span>
                  {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTS ── */}
      <section className={styles.experts}>
        <div className={styles.container}>
          <div className={styles.expertsGrid}>
           
            <div className={styles.expertsCopy}>
              <SectionHead kicker={c.expertsKicker} title={c.expertsTitle} />
              {[c.expertsP1, c.expertsP2, c.expertsP3, c.expertsP4, c.expertsP5].map((p, i) => (
                <p key={i} className={styles.expertsP}>
                  {p}
                </p>
              ))}
            </div>
             <div className={styles.expertsVisual}>
              <img src={expertsImg} alt={c.expertsTitle} className={styles.expertsImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING ── */}
      <section className={styles.training}>
        <div className={styles.container}>
          <div className={styles.trainingGrid}>
           <div className={styles.trainingVisual}>
              <img src={trainingImg} alt={c.trainingTitle} className={styles.trainingImg} />
            </div>
            <div className={styles.trainingCopy}>
              <SectionHead kicker={c.trainingKicker} title={c.trainingTitle} />
              <p className={styles.trainingP}>{c.trainingP1}</p>
              <p className={styles.trainingP}>{c.trainingP2}</p>
              {/* <ul className={styles.trainingList}>
                {c.training.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
              <p className={styles.trainingP}>{c.trainingP3}</p>
              <Link to="/contact" className={styles.trainingCta}>
                {c.trainingCta}
              </Link>
            </div>
           
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className={styles.journey}>
        <div className={styles.container}>
          <SectionHead kicker={c.journeyKicker} title={c.journeyTitle} sub={c.journeySub} />
          <div className={styles.journeyGrid}>
            {c.journey.map((step, i) => (
              <div key={i} className={styles.journeyCard}>
                <span className={styles.journeyNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.journeyTitle}>{step.title}</h3>
                <p className={styles.journeyDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.final}>
        <div className={styles.container}>
          <h2 className={styles.finalTitle}>{c.finalTitle}</h2>
          <p className={styles.finalP}>{c.finalP1}</p>
          <p className={styles.finalP}>{c.finalP2}</p>
          <p className={styles.finalP3}>{c.finalP3}</p>
          <div className={styles.finalActions}>
            {/* <a href="mailto:info@namaa-il.com" className={styles.finalCtaPrimary}>
              {c.finalCta1}
            </a> */}
            <Link to="/DocumentRetrieval" className={styles.finalCtaPrimary}>
              {c.finalCta2}
            </Link>
            <Link to="/contact" className={styles.finalCta}>
              {c.finalCta3}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER CALLOUT ── */}
      <section className={styles.callout}>
        <div className={styles.container}>
          <p className={styles.calloutLine}>{c.calloutLine}</p>
          <p className={styles.calloutLine}>{c.calloutLine2}</p>
          <p className={styles.calloutLine}>{c.calloutLine3}</p>
        </div>
      </section>
    </div>
  );
}

export default Docuarena;
