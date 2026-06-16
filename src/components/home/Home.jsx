import { useState, useEffect, useRef } from "react";
import { T } from "../../i18n/translations";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Home.module.css";
import brochurePdf from "../../assets/Namaa-Brochure.pdf";
import profilePdf from "../../assets/Namaa-InfoLogistics-Company-Profile-2024-1.pdf";
import digitImg from "../../assets/digit.jpg";
import fixedImg from "../../assets/fixedassets.jpg";
import prmImg from "../../assets/prm.jpg";
import kodakImg from "../../assets/kodak.jpg";
import testimonialImg from "../../assets/WhatsApp-Image-2024-09-02-at-10.19.18-AM-1536x734 (1).jpeg";
import img19 from "../../assets/19.jpg";
import img18 from "../../assets/18.jpg";
import img17 from "../../assets/17-1.jpg";
import img16 from "../../assets/16-1.jpg";
import a5bar from "../../assets/a5bar.png";
import img15 from "../../assets/15-1 - Copy.jpg";
import img155 from "../../assets/15-1.jpg";
import gamhoria from "../../assets/gomhoria.png";
import heroTablet from "../../assets/WhatsApp-Image-2024-09-02-at-10.19.18-AM-1536x734 (1).jpeg";
const serviceItems = [
  { icon: fixedImg, nameKey: "home-serv1", descKey: "home-serv1d" },
  { icon: digitImg, nameKey: "home-serv2", descKey: "home-serv2d" },
  { icon: prmImg, nameKey: "home-serv3", descKey: "home-serv3d" },
  { icon: kodakImg, nameKey: "home-serv4", descKey: "home-serv4d" },
];

const clientItems = [
  { icon: kodakImg, nameKey: "home-client1" },
  { icon: digitImg, nameKey: "home-client2" },
  { icon: fixedImg, nameKey: "home-client3" },
  { icon: prmImg, nameKey: "home-client4" },
  { icon: kodakImg, nameKey: "home-client5" },
  { icon: heroTablet, nameKey: "home-client6" },
  { icon: img19, nameKey: "home-client7" },
  { icon: img18, nameKey: "home-client8" },
  { icon: img17, nameKey: "home-client9" },
  { icon: img16, nameKey: "home-client10" },
  { icon: a5bar, nameKey: "home-client11" },
  { icon: gamhoria, nameKey: "home-client12" },
  { icon: img15, nameKey: "home-client13" },
  { icon: img155, nameKey: "home-client14" },
  
  
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
      {/* Hero */}
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

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t["home-serv-title"]}</p>
          <h2 className={styles.sectionTitle}>{t["home-serv-title"]}</h2>
          <p className={styles.sectionSub}>{t["home-serv-sub"]}</p>
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
      </section>

      {/* About */}
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
            <DownloadButton href={profilePdf}>{t["about-download-profile"]}</DownloadButton>
          </div>
        </div>
      </section>

      {/* Docuarena / Stats */}
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
            <DownloadButton href={brochurePdf}>{t["about-download-brochure"]}</DownloadButton>
          </div>

          <div className={styles.docuarenaStats}>
            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref1}>{count1}+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat1lbl"]}</span>
              <p className={styles.statDesc}>{t["home-stat1desc"]}</p>
            </div>

            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref2}>{count2}+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat2lbl"]}</span>
              <p className={styles.statDesc}>{t["home-stat2desc"]}</p>
            </div>

            <div className={styles.docuarenaCard}>
              <span className={styles.docuarenaNumber} ref={ref3}>{count3}+</span>
              <span className={styles.docuarenaLabel}>{t["home-stat3lbl"]}</span>
              <p className={styles.statDesc}>{t["home-stat3desc"]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <h2>{t["home-testimonial-title"]}</h2>
          <p>{t["home-testimonial-desc"]}</p>
          <img src={testimonialImg} alt="DocuArena" className={styles.testimonialImage} />
        </div>
      </section>

      {/* Clients */}
      <section className={styles.clients}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t["home-clients-title"]}</h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
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

      {/* Who We Serve */}
      <section className={styles.serve}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t["home-serve-title"]}</p>
          <h2 className={styles.sectionTitle}>{t["home-serve-title"]}</h2>
        </div>
        <div className={styles.serveGrid}>
          {serviceItems.map((service) => (
            <div className={styles.serveCard} key={service.nameKey}>
              <h3>{t[service.nameKey]}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t["home-cta-title"]}</h2>
          <p className={styles.ctaSub}>{t["home-serv-sub"]}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
