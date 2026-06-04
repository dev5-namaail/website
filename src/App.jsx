import DocumentRetrieval from "./components/DocumentRetrieval/DocumentRetrieval";
import Home from "./components/home/Home";
import { lazy, Suspense, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { T } from "./i18n/translations";

import Layout from "./Layout";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/loading/Loading";
// Settings
const Settings = lazy(() => import("./components/settings/Settings"));

const About = lazy(() => import("./components/about/About"));

function App() {
    const [lang, setLang] = useState('en');
    const t = T[lang];

    useEffect(() => {
      document.documentElement.lang = lang;
      document.documentElement.dir = t.dir;
      document.body.classList.toggle('lang-ar', lang === 'ar');
    }, [lang, t.dir]);
  
  return (
    <HashRouter>
    
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Loading />
          </div>
        }
      >
        <Routes>

          {/* Protected Layout-wrapped Routes */}
          <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Layout lang={lang} setLang={setLang} />}>
              <Route index element={<Home currentLang={lang} />} />
              <Route path="DocumentRetrieval" element={<DocumentRetrieval currentLang={lang}/>} />
              <Route path="settings" element={<Settings currentLang={lang} />} />
              <Route path="about" element={<About currentLang={lang} />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
