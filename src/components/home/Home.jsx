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
import testimonialImg from "../../assets/WhatsApp-Image-2024-09-02-at-10.19.18-AM-1536x734 (1).jpeg";
import digitImg from "../../assets/digit.jpg";
import fixedImg from "../../assets/fixedassets.jpg";
import prmImg from "../../assets/prm.jpg";
import kodakImg from "../../assets/kodak.jpg";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
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
import { useEffect, useRef, useState } from "react";

const serviceItems = [
  { icon: kodakImg, nameKey: "home-serv1", descKey: "home-serv1d" },
  { icon: digitImg, nameKey: "home-serv2", descKey: "home-serv2d" },
  { icon: prmImg, nameKey: "home-serv3", descKey: "home-serv3d" },
  { icon: fixedImg, nameKey: "home-serv4", descKey: "home-serv4d" },
];
const service = [
  { icon: service1, nameKey: "home-serv1", descKey: "home-serv1d" },
  { icon: service2, nameKey: "home-serv2", descKey: "home-serv2d" },
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

export default function Home({ currentLang = "en" }) {
  const t = T[currentLang];
  const [ref1, count1] = useCountUp(17);
  const [ref2, count2] = useCountUp(30);
  const [ref3, count3] = useCountUp(100);

  return (
    <div className={styles.page} dir={t.dir} lang={currentLang}>
      <section className={styles.heroSlider}>
        <div className={styles.heroSlide}>
          <video className={styles.heroVideo} src={heroVideo} autoPlay muted loop playsInline />
          <div className={styles.heroOverlay} />
          {/* <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{t["home-hero-title-green"]}</span>
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
          </div> */}
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t["home-serv-title"]}</p>
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

      <section className={styles.about}>
        <div className={styles.aboutSplit}>
          <div className={styles.aboutCopy}>
            <p className={styles.sectionKicker}>{t["home-about-title"]}</p>
            <ul className={styles.aboutList}>
              {aboutItems.map((key) => (
                <li key={key}>{t[key]}</li>
              ))}
            </ul>
          </div>
          <div className={styles.aboutCard}>
            <h3>{t["home-cta-profile"]}</h3>
            <p>{t["home-serv-sub"]}</p>
            <DownloadButton href={profilePdf}>
              {t["about-download-profile"]}
            </DownloadButton>
          </div>
        </div>
      </section>

      <section className={styles.docuarena}>
        <div className={styles.docuarenaGrid}>
          <div className={styles.docuarenaPanel}>
            <p className={styles.sectionKicker}>{t["home-docuarena-title"]}</p>
            <h2 className={styles.docuarenaTitle}>{t["home-docuarena-sub"]}</h2>
            <p className={styles.docuarenaDesc}>{t["home-docuarena-desc"]}</p>
            <div className={styles.docuarenaActions}>
              <Link to="/contact" className={styles.docuarenaAction}>
                {t["home-cta-btn"]}
              </Link>
              <DownloadButton href={brochurePdf}>
                {t["about-download-brochure"]}
              </DownloadButton>
            </div>
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

      <section className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <h2>{t["home-testimonial-title"]}</h2>
          <p>{t["home-testimonial-desc"]}</p>
          <img src={testimonialImg} alt="DocuArena" className={styles.testimonialImage} />
        </div>
      </section>

      <section className={styles.clients}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t["home-clients-title"]}</h2>
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

<section className={styles.serveStyle}>
        <div className={styles.serveHeader}>
          <p className={styles.serveKicker}>{t["home-serve-title"]}</p>
          <h2 className={styles.serveTitle}>{t["home-serve-title"]}</h2>
        </div>

        <div className={styles.serveGrid}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
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
      
      
           {/* <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t["home-cta-title"]}</h2>
          <p className={styles.ctaSub}>{t["home-serv-sub"]}</p>
          <div className={styles.ctaActions}>
            <Link to="/contact" className={styles.ctaBtn}>{t["home-cta-btn"]}</Link>
            <Link to="/portfolio" className={styles.ctaBtnOutline}>{t["nav-portfolio"]}</Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
