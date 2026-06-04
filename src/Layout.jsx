/* eslint-disable react/prop-types */
import { NavLink, Outlet } from "react-router-dom";
import { T } from './i18n/translations';
import styles from './Layout.module.css';
import LangBar from "./components/DocumentRetrieval/LangBar";

function Layout({ lang = 'en', setLang }) {
  const t = T[lang];
  
  return (
    <div className={styles.layoutShell}>
        <header className={styles.header} dir={t.dir}>
          <div className={styles.langBarWrap}>
            <LangBar currentLang={lang} setLang={setLang} />
          </div>
          <nav className={styles.nav}>
            <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t['nav-home']}</NavLink>
            <NavLink to="/DocumentRetrieval" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t['nav-retrieval']}</NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t['nav-settings']}</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t['nav-about']}</NavLink>
          </nav>
        </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
