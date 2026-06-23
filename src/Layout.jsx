/* eslint-disable react/prop-types */
import { NavLink, Outlet } from "react-router-dom";
import { T } from './i18n/translations';
import styles from './Layout.module.css';
import LangBar from "./components/DocumentRetrieval/LangBar";
import { useState, useEffect } from "react";
import logoImg from "./assets/logos/namaa-logo.png";
import Footer from "./components/footer/Footer";

function Layout({ lang = 'en', setLang }) {
  const t = T[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function closeAll() {
    setMenuOpen(false);
    setNewsOpen(false);
  }

  return (
    <div className={styles.layoutShell}>
      <header className={styles.header} dir={t.dir}>
        <div className={styles.headerInner}>
          <NavLink to="/" className={styles.logo} onClick={closeAll}>
            <img src={logoImg} alt="Namaa" />
          </NavLink>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeAll}>{t['nav-home']}</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeAll}>{t['nav-portfolio']}</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeAll}>{t['nav-about']}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeAll}>{t['nav-contact']}</NavLink>
            <NavLink to="/DocumentRetrieval" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeAll}>{t['nav-retrieval']}</NavLink>
            <div
              className={styles.dropdown}
              onMouseEnter={isMobile ? undefined : () => setNewsOpen(true)}
              onMouseLeave={isMobile ? undefined : () => setNewsOpen(false)}
            >
              <button
                className={`${styles.navLink} ${styles.dropdownTrigger}`}
                onClick={() => setNewsOpen(v => !v)}
              >
                {t['nav-media']}
                <span className={styles.arrow} style={{ transform: newsOpen ? 'rotate(180deg)' : '' }}>▼</span>
              </button>
              <div className={`${styles.dropdownMenu} ${newsOpen ? styles.dropdownMenuOpen : ''}`}>
                <NavLink to="/news" className={({ isActive }) => isActive ? `${styles.dropdownItem} ${styles.active}` : styles.dropdownItem} onClick={closeAll}>{t['nav-news']}</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? `${styles.dropdownItem} ${styles.active}` : styles.dropdownItem} onClick={closeAll}>{t['nav-blog']}</NavLink>
              </div>
            </div>
          </nav>
          <div className={styles.headerRight}>
            <div className={styles.langBarWrap}>
              <LangBar currentLang={lang} setLang={setLang} />
            </div>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
