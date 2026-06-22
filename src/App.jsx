import DocumentRetrieval from "./components/DocumentRetrieval/DocumentRetrieval";
import Home from "./components/home/Home";
import { lazy, Suspense, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { T } from "./i18n/translations";

import Layout from "./Layout";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/loading/Loading";

const About = lazy(() => import("./components/about/About"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const ContactLazy = lazy(() => import("./components/contact/Contact"));
const NewsLazy = lazy(() => import("./components/new/News"));
const BlogsLazy = lazy(() => import("./components/blogs/Blogs"));
const BlogDetailLazy = lazy(() => import("./components/blogs/Blogs"));
const PortfolioDetail = lazy(() => import("./components/portfolio/PortfolioDetail"));

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
              <Route path="about" element={<About currentLang={lang} />} />
              <Route path="portfolio" element={<Portfolio currentLang={lang} />} />
              <Route path="contact" element={<ContactLazy currentLang={lang} />} />
              <Route path="news" element={<NewsLazy currentLang={lang} />} />
              <Route path="blogs" element={<BlogsLazy currentLang={lang} />} />
              <Route path="blog/:id" element={<BlogDetailLazy currentLang={lang} />} />
              <Route path="portfolio/:key" element={<PortfolioDetail currentLang={lang} />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
