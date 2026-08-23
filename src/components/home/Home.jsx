import heroVideo from "../../assets/Namaa-PRM-ERM-web-homepage-1-1.mp4";
import { T } from "../../i18n/translations";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Home.module.css";
import brochurePdf from "../../assets/Namaa-Brochure.pdf";
import profilePdf from "../../assets/Namaa-InfoLogistics-Company-Profile-2024-1.pdf";
import testimonialImg from "../../assets/WhatsApp-Image1.png";
import digitImg from "../../assets/HOME/Digitization.jpg";
import fixedImg from "../../assets/HOME/FAM.jpeg";
// import prmImg from "../../assets/prm.jpg";
import prmImg from "../../assets/HOME/prm.jpg";
import kodakImg from "../../assets/HOME/KODAK.jpg";
import service1 from "../../assets/service1.jpg";
import blogs1 from "../../assets/blogs/blog1.jpg";
import blogs2 from "../../assets/blogs/blogs2.jpg";
import blogs3 from "../../assets/blogs/blogs3.jpg";
import blogs4 from "../../assets/blogs/blogs4.jpg";
import blogs5 from "../../assets/blogs/blogs5.jpg";
import blogs6 from "../../assets/blogs/blogs9.jpg";
import service2 from "../../assets/logo5.jpg";
import service3 from "../../assets/service3.jpg";
import service4 from "../../assets/service4.jpg";
import logo1 from "../../assets/a5bar.png";
import logo2 from "../../assets/aman.png";
import logo3 from "../../assets/zera3a.png";
import logo4 from "../../assets/ta5teet.png";
import logo5 from "../../assets/gmhoria.png";
import logo6 from "../../assets/arabic.png";
import logo7 from "../../assets/elfnon.jpg";
import logo8 from "../../assets/fouad.png";
import logo9 from "../../assets/hegra.png";
import logo10 from "../../assets/malyia.jpg";
import logo11 from "../../assets/metlife.png";
import logo12 from "../../assets/rosa_el_youssef.jpg";
import logo13 from "../../assets/sena3a.png";
import logo14 from "../../assets/idida.png";
import successImg from "../../assets/HOME/SUCCESS.jpg";
import videoImg from "../../assets/HOME/video.jpg";
import stepsImg from "../../assets/HOME/stepss.jfif";
import { useEffect, useRef, useState } from "react";

const serviceItems = [
  { icon: kodakImg, nameKey: "home-serv1", descKey: "home-serv1d" },
  { icon: digitImg, nameKey: "home-serv2", descKey: "home-serv2d" },
  { icon: prmImg, nameKey: "home-serv3", descKey: "home-serv3d" },
  { icon: fixedImg, nameKey: "home-serv4", descKey: "home-serv4d" },
];
const whyItems = [
  { key: "hp-why1", icon: "🏆" },
  { key: "hp-why2", icon: "⚙️" },
  { key: "hp-why3", icon: "🔄" },
  { key: "hp-why4", icon: "🎯" },
  { key: "hp-why5", icon: "🤝" },
  { key: "hp-why6", icon: "🏢" },
  { key: "hp-why7", icon: "🔐" },
  { key: "hp-why8", icon: "✅" },
];
const service = [
  { icon: service1, nameKey: "home-serv1", descKey: "home-serv1d" },
  { icon: service2, nameKey: "home-serv2", descKey: "home-serv2d" },
  { icon: service3, nameKey: "home-serv34", descKey: "home-serv3d" },
  { icon: service3, nameKey: "home-serv3", descKey: "home-serv3d" },
  { icon: service4, nameKey: "home-serv4", descKey: "home-serv4d" },
];
const clientItems = [
  { icon: logo1, nameKey: "home-client1" },
  { icon: logo2, nameKey: "home-client2" },
  { icon: logo3, nameKey: "home-client3" },
  { icon: logo4, nameKey: "home-client4" },
  { icon: logo5, nameKey: "home-client5" },
  { icon: logo6, nameKey: "home-client6" },
  { icon: logo7, nameKey: "home-client7" },
  { icon: logo8, nameKey: "home-client8" },
  { icon: logo9, nameKey: "home-client9" },
  { icon: logo10, nameKey: "home-client10" },
  { icon: logo11, nameKey: "home-client11" },
  { icon: logo12, nameKey: "home-client12" },
  { icon: logo13, nameKey: "home-client13" },
  { icon: logo14, nameKey: "home-client14" },
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
      <span className={styles.downloadIcon}>⇩</span>
    </a>
  );
}
const counters = [
  { value: "hp-count1v", suffix: "hp-count1s", label: "hp-count1l", decimal: false },
  { value: "hp-count2v", suffix: "hp-count2s", label: "hp-count2l", decimal: false },
  { value: "hp-count3v", suffix: "hp-count3s", label: "hp-count3l", decimal: false },
  { value: "hp-count4v", suffix: "hp-count4s", label: "hp-count4l", decimal: true },
  { value: "hp-count5v", suffix: "hp-count5s", label: "hp-count5l", decimal: false },
];

export default function Home({ currentLang = "en" }) {
  const t = T[currentLang];
  const [ref1, count1] = useCountUp(17);
  const [ref2, count2] = useCountUp(30);
  const [ref3, count3] = useCountUp(100);
  const [ref4, count4] = useCountUp(100);
  const [ref5, count5] = useCountUp(20);
  const [ref6, count6] = useCountUp(95);
  const [ref7, count7] = useCountUp(99.9);


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

  function CountCard({ value, suffix, label, decimal }) {
    const end = parseFloat(value);
    const [ref, count] = useCountUp(end);
    const display = decimal ? (count / 10).toFixed(1) : String(count);
    return (
      <div className={styles.countCard} ref={ref}>
        <span className={styles.countNum}>
          {display}
          <span className={styles.countSuffix}>{suffix}</span>
        </span>
        <span className={styles.countLabel}>{label}</span>
      </div>
    );
  }
  return (
    <div className={styles.page} dir={t.dir} lang={currentLang}>
      <div className={styles.heroSlide}>
        <video className={styles.heroVideo} src={heroVideo} autoPlay muted loop playsInline />
        {/* <img className={styles.heroMobileFallback} src={videoImg} alt="" /> */}
        <div className={styles.heroOverlay} />
        <div className={styles.heroMobileContent}>
          <span className={styles.mobileBadge}>Namaa</span>
          <h1 className={styles.mobileTitle}>{t["home-hero-title"]}</h1>
          <p className={styles.mobileSub}>{t["home-hero-sub"]}</p>
          <div className={styles.mobileActions}>
            <Link to="/DocumentRetrieval" className={styles.mobileCta}>
              {t["home-hero-cta"]}
            </Link>
            <Link to="/contact" className={styles.mobileCtaSecondary}>
              {t["home-cta-btn"]}
            </Link>
          </div>
        </div>
      </div>
  {/* <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{t["home-serv-title"]}</h1>
          <p className={styles.sectionSub}>{t["home-serv-sub1"]}</p>
        </div>
        <div className={styles.servicesGrid}>
          {serviceItems.map((service) => (
            <article className={styles.serviceCard} key={service.nameKey}>
              <img className={styles.serviceIcon} src={service.icon} alt={t[service.nameKey]} />
              <h3 className={styles.serviceName}>{t[service.nameKey]}</h3>
              <p className={styles.serviceDesc}>{t[service.descKey]}</p>
            </article>
          ))}
        </div>
      </section> */}


       <section className={styles.solutions}>
        {/* <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t["home-serv-title"]}</h2>
        </div> */}
       {/* <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>{t["hp-sol-kicker"]}</span>
          <h2 className={styles.sectionTitle}>{t["hp-sol-title"]}</h2>
          <p className={styles.sectionSub}>{t["hp-sol-sub"]}</p>
        </div> */}
        <div className={styles.solutionsIntro}>
                    <h2 className={styles.sectionTitle}>{t["home-serv-title"]}</h2>
          <p>{t["hp-chal-close"]}</p>
        </div>
        <div className={styles.solutionsGrid}>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs1} alt={t["hp-sol1t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>01</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol1t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol1d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs2} alt={t["hp-sol2t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>02</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol2t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol2d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs3} alt={t["hp-sol3t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>03</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol3t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol3d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs4} alt={t["hp-sol4t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>04</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol4t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol4d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs5} alt={t["hp-sol5t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>05</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol5t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol5d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs6} alt={t["hp-sol6t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>06</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol6t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol6d"]}</p>
            </div>
          </article>
        </div>
        <div className={styles.solutionsActions}>
          <Link to="/portfolio" className={styles.docuarenaAction}>{t["hp-sol-cta"]}</Link>
        </div>

        
      </section>
      {/* <div className={styles.heroSuccess}>
        <div>
          <img className={styles.successImage} src={successImg} alt="" />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t["home-hero-title"]}</h1>
          <p className={styles.heroSub}>{t["home-hero-sub"]}</p>
          <div className={styles.heroActions}>
            <Link to="/DocumentRetrieval" className={styles.heroCta}>
              {t["home-hero-cta"]}
            </Link>
            <Link to="/contact" className={styles.heroCtaSecondary}>
              {t["home-cta-btn"]}
            </Link>
          </div>
        </div>
      </div> */}
      <section className={styles.transform}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>{t["hp-hero-title-1"]} {t["hp-hero-title-2"]} {t["hp-hero-title-3"]}</span>
          <p className={styles.sectionSub}>{t["hp-hero-desc"]}</p>
        </div>
        <div className={styles.transformFlow}>
          {[
            { key: "hp-flow1", num: "01" },
            { key: "hp-flow2", num: "02" },
            { key: "hp-flow3", num: "03" },
            { key: "hp-flow4", num: "04" },
            { key: "hp-flow5", num: "05" },
            { key: "hp-flow6", num: "06" },
          ].map((step, i) => (
            <div className={styles.transformStep} key={step.key}>
              <div className={styles.transformNode}>
                <span className={styles.transformNum}>{step.num}</span>
                <span className={styles.transformLabel}>{t[step.key]}</span>
              </div>
              {i < 5 && <span className={styles.transformConnector} />}
            </div>
          ))}
        </div>
        <div className={styles.transformActions}>
          <Link to="/contact" className={styles.docuarenaAction}>{t["hp-hero-cta1"]}</Link>
          <Link to="/contact" className={styles.docuarenaAction}>{t["hp-hero-cta2"]}</Link>
        </div>
      </section>
     

      

    {/* <section className={styles.solutions}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>{t["hp-sol-kicker"]}</span>
          <h2 className={styles.sectionTitle}>{t["hp-sol-title"]}</h2>
          <p className={styles.sectionSub}>{t["hp-sol-sub"]}</p>
        </div>
        <div className={styles.solutionsIntro}>
          <p>{t["hp-chal-close"]}</p>
        </div>
        <div className={styles.solutionsGrid}>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs1} alt={t["hp-sol1t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>01</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol1t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol1d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs2} alt={t["hp-sol2t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>02</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol2t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol2d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs3} alt={t["hp-sol3t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>03</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol3t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol3d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs4} alt={t["hp-sol4t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>04</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol4t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol4d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs5} alt={t["hp-sol5t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>05</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol5t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol5d"]}</p>
            </div>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionImageWrapper}>
              <img className={styles.solutionImage} src={blogs6} alt={t["hp-sol6t"]} />
              <div className={styles.solutionOverlay}>
                <span className={styles.solutionNumber}>06</span>
              </div>
            </div>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>{t["hp-sol6t"]}</h3>
              <p className={styles.solutionDesc}>{t["hp-sol6d"]}</p>
            </div>
          </article>
        </div>
        <div className={styles.solutionsActions}>
          <Link to="/portfolio" className={styles.docuarenaAction}>{t["hp-sol-cta"]}</Link>
        </div>
      </section> */}

    

{/* 
      <section className={styles.about}>
        <div className={styles.aboutSplit}>
          <div className={styles.aboutCopy}>
            <span className={styles.sectionKicker}>{t["home-about-title"]}</span>
            <ul className={styles.aboutList}>
              {aboutItems.map((key) => (
                <li key={key}>{t[key]}</li>
              ))}
            </ul>
          </div>
          <div className={styles.aboutCard}>
            <h3>{t["home-cta-profile"]}</h3>
            <p>{t["home-serv-sub"]}</p>
            <div className={styles.docuarenaActions}>
              <DownloadButton href={profilePdf}>
                {t["about-download-profile"]}
              </DownloadButton>
              <Link to="/contact" className={styles.docuarenaAction}>
                {t["home-cta-btn"]}
              </Link>
            </div>
          </div>
        </div>
      </section> */}



      <section className={styles.processSection}>
        <div className={styles.processContainer}>
          <div className={styles.processHeader}>
            <span className={styles.processMainTitle}>{t["home-process-title"]}</span>
            {/* <h2 className={styles.processMainTitle}>{t["home-process-sub"]}</h2> */}
          </div>
          <div className={styles.processImageWrapper}>
            <img className={styles.processImage} src={stepsImg} alt="Namaa 5-Step Process" />
          </div>
        </div>
      </section>
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>{t["hp-help-kicker"]}</span>
          <h2 className={styles.sectionTitle}>{t["hp-help-title"]}</h2>
          <p className={styles.sectionSub}>{t["hp-help-sub"]}</p>
        </div>
        <div className={styles.processGrid}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className={styles.processCard} key={i}>
              <div className={styles.processNum}>{String(i).padStart(2, "0")}</div>
              <h3 className={styles.processStep}>{t[`hp-help${i}t`]}</h3>
              <p className={styles.processStepDesc}>{t[`hp-help${i}d`]}</p>
            </div>
          ))}
        </div>
      </section>
    
{/* ═══════════════════════════════════════════
          6. WHY NAMAA INFOLOGISTICS
          ═══════════════════════════════════════════ */}
      <section className={styles.why}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>{t["hp-why-kicker"]}</span>
          <h2 className={styles.sectionTitle}>{t["hp-why-title"]}</h2>
        </div>
        <div className={styles.whyGrid}>
          {whyItems.map((item) => (
            <div className={styles.whyCard} key={item.key}>
              <span className={styles.whyIcon}>{item.icon}</span>
              <h3 className={styles.whyTitle}>{t[`${item.key}t`]}</h3>
              <p className={styles.whyDesc}>{t[`${item.key}d`]}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <section className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <h2>{t["home-testimonial-title"]}</h2>
          <p></p>
          <p><strong>{t["home-testimonial-DocuArena"]}</strong> : {t["home-testimonial-desc"]}</p>
          <img src={testimonialImg} alt="DocuArena" className={styles.testimonialImage} />
        </div>
      </section> */}
  <section className={styles.docuarena}>
        <div className={styles.docuarenaGrid}>
          <div className={styles.docuarenaPanel}>
            {/* <p className={styles.sectionKicker}>{t["home-docuarena-title"]}</p> */}
            <h2 className={styles.docuarenaTitle}>{t["home-docuarena-sub"]}</h2>
            {/* <p className={styles.docuarenaDesc}>{t["home-docuarena-desc"]}</p> */}
            {/* <div className={styles.docuarenaActions}>
              <Link to="/contact" className={styles.docuarenaAction}>
                {t["home-cta-btn"]}
              </Link>
              <DownloadButton href={brochurePdf}>
                {t["about-download-brochure"]}
              </DownloadButton>
            </div> */}
          </div>
          <div className={styles.docuarenaStats}>
            {/* <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref1}>{count1}+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat1lbl"]}</span>
              <p className={styles.statDesc}>{t["home-stat1desc"]}</p>
            </div> */}
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref2}>{count2}+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat2lbl"]}</span>
              {/* <p className={styles.statDesc}>{t["home-stat2desc"]}</p> */}
            </div>
            {/* <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref3}>{count3}+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat3lbl"]}</span>
              <p className={styles.statDesc}>{t["home-stat3desc"]}</p>
            </div> */}
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref4}>{count4}M+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat4lbl"]}</span>
              {/* <p className={styles.statDesc}>{t["home-stat3desc"]}</p> */}
            </div>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref5}>{count5}
                +</span>
              <span className={styles.docuarenaLabel}>{t["home-stat5lbl"]}</span>
              {/* <p className={styles.statDesc}>{t["home-stat3desc"]}</p> */}
            </div>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref6}>{count6}
                +</span>
              <span className={styles.docuarenaLabel}>{t["home-stat6lbl"]}</span>
              {/* <p className={styles.statDesc}>{t["home-stat3desc"]}</p> */}

            </div>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref7}>{count7}%
                +</span>
              <span className={styles.docuarenaLabel}>{t["home-stat7lbl"]}</span>
              {/* <p className={styles.statDesc}>{t["home-stat3desc"]}</p>  */}

            </div>
          </div>
          </div>

          {/* ── 11. COUNTERS ── */}
          {/* <section className={styles.counters}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>{t["hp-count-kicker"]}</span>
          </div>
          <div className={styles.countGrid}>
            {counters.map((c) => (
              <CountCard key={c.label} value={t[c.value]} suffix={t[c.suffix]} label={t[c.label]} decimal={c.decimal} />
            ))}
          </div>
          <p className={styles.countNote}>{t["hp-count-note"]}</p>
        </div>
      </section>  */}
      </section>
      <section className={styles.serveStyle}>
        <div className={styles.serveHeader}>
          <h2 className={styles.serveTitle}>{t["home-clients-title"]}</h2>
        </div>

        <div className={styles.serveGrid}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className={styles.serveSwiper}
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              900: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {service.map((item) => (
              <SwiperSlide key={item.nameKey}>
                <div className={styles.serveCard}>
                  <img
                    className={styles.serveCardImage}
                    src={item.icon}
                    alt={t[item.nameKey]}
                  />
                  <h3 className={styles.serveCardTitle}>{t[item.nameKey]}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>



      <section className={styles.clients}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t["home-serve-title"]}
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={4}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            500: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className={styles.clientSwiper}
        >
          {clientItems.map((client) => (
            <SwiperSlide key={client.nameKey}>
              <div className={styles.clientCard}>
                <img className={styles.clientIcon} src={client.icon} alt={t[client.nameKey]} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


{/* 8. CUSTOMER SUCCESS STORIES */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>{t["hp-test-kicker"]}</span>
          <h2 className={styles.sectionTitle}>{t["hp-test-title"]}</h2>
        </div>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialQuoteIcon}>"</div>
          <blockquote className={styles.testimonialQuote}>{t["hp-test-quote"]}</blockquote>
          <div className={styles.testimonialAuthor}>
            <span className={styles.testimonialName}>{t["hp-test-author"]}</span>
            <span className={styles.testimonialOrg}>{t["hp-test-org"]}</span>
            
          </div>
        </div>



      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t["home-cta-title"]}</h2>
          <p className={styles.ctaSub}>{t["home-serv-sub"]}</p>
          <div className={styles.ctaActions}>
            <Link to="/contact" className={styles.ctaBtn}>{t["hp-hero-cta2"]}</Link>
            <Link to="/DocumentRetrieval" className={styles.ctaBtnOutline}>{t["hp-hero-cta1"]}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
