import { Link, useParams, useNavigate } from 'react-router-dom';
import { T } from '../../i18n/translations';
import { useState, useEffect, useRef } from 'react';
import styles from './BlogsDetails.module.css';
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blogs9.jpg";
import blog3 from "../../assets/blogs/blogs8.jpg";
import blog4 from "../../assets/blogs/blogs2.jpg";
import blog5 from "../../assets/blogs/blogs4.jpg";
import blog6 from "../../assets/blogs/blogs5.jpg";
import blog7 from "../../assets/blogs/blogs6.jpg";
import blog8 from "../../assets/blogs/blogs7.jpg";

const blogImages = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog1];

function BlogDetail({ currentLang = 'en' }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = T[currentLang];
  const numId = parseInt(id);
  const [readProgress, setReadProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
      setShowTopBtn(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPost = {
    id: numId,
    titleKey: `blog-${id}-title`,
    contentKey: `blog-${id}-content`,
    dateKey: `blog-${id}-date`,
    image: blogImages[numId - 1]
  };

  const relatedPosts = [1, 2, 3,4]
    .filter(i => i !== numId)
    .slice(0, 3)
    .map(i => ({
      id: i,
      title: t[`blog-${i}-title`],
      date: t[`blog-${i}-date`],
      // category: t['blog-category'],
      image: blogImages[i - 1]
    }));

  const hasPrev = numId > 1;
  const hasNext = numId < 10;

  return (
    <div className={styles.page}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${readProgress}%` }} />
      </div>

      <div className={styles.backWrap}>
        <Link to="/blogs" className={styles.backLink}>
          <span className={styles.backArrow}>&larr;</span>
          {t['blog-back'] || 'Back to Blogs'}
        </Link>
      </div>

      <div className={styles.featuredImageWrap}>
        <img src={blogPost.image} alt={t[blogPost.titleKey]} className={styles.featuredImage} />
        <div className={styles.imageOverlay} />
      </div>

      <article className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          {/* <span className={styles.articleCategory}>{t['blog-category']}</span> */}
          <h1 className={styles.articleTitle}>{t[blogPost.titleKey]}</h1>
          <div className={styles.articleMeta}>
            {/* <div className={styles.authorAvatar}>N</div> */}
            <div className={styles.authorInfo}>
              {/* <span className={styles.authorName}>Namaa Team</span> */}
              <span className={styles.articleDate}>{t[blogPost.dateKey]}</span>
            </div>
            <span className={styles.metaDot}>&middot;</span>
          </div>
        </div>

        {/* <div className={styles.shareBar}>
          <span className={styles.shareLabel}>Share</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noreferrer"
            className={styles.shareBtn}
          >
            Fb
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(t[blogPost.titleKey])}`}
            target="_blank"
            rel="noreferrer"
            className={styles.shareBtn}
          >
            X
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(t[blogPost.titleKey])}`}
            target="_blank"
            rel="noreferrer"
            className={styles.shareBtn}
          >
            In
          </a>
        </div> */}

        <div
          ref={contentRef}
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: t[blogPost.contentKey] }}
        />

        {/* <div className={styles.articleFooter}>
          <div className={styles.articleTags}>
            <Link to="/blogs" className={styles.tag}>{t['blog-category']}</Link>
          </div>
        </div> */}

        {/* <div className={styles.authorBio}>
          <div className={styles.authorBioAvatar}>N</div>
          <div className={styles.authorBioInfo}>
            <span className={styles.authorBioLabel}>Written by</span>
            <span className={styles.authorBioName}>Namaa Team</span>
            <p className={styles.authorBioText}>
              Experts in document management, records governance, and digital transformation solutions.
            </p>
          </div>
        </div> */}
           {/* <section className={styles.relatedSection}> */}
      
      {/* </section> */}
      </article>
<div className={styles.relatedSection}>
    <h2 className={styles.relatedTitle}>{t['blog-article-content'] || 'You May Also Like'}</h2>
        <div className={styles.relatedGrid}>
          {relatedPosts.map(post => (
            <Link to={`/blog/${post.id}`} key={post.id} className={styles.relatedCard}>
              <div className={styles.relatedImageWrap}>
                <img src={post.image} alt={post.title} className={styles.relatedImage} />
              </div>
              <div className={styles.relatedBody}>
                <span className={styles.relatedCategory}>{post.category}</span>
                <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                <div className={styles.relatedMeta}>
                  <span>&middot;</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
</div>
      {/* <nav className={styles.postNavigation}>
        {hasPrev && (
          <Link to={`/blog/${numId - 1}`} className={styles.navPrev}>
            <span className={styles.navLabel}>{t['blog-prev-btn'] || 'Previous Article'}</span>
            <span className={styles.navTitle}>{t[`blog-${numId - 1}-title`]}</span>
          </Link>
        )}
        {hasNext && (
          <Link to={`/blog/${numId + 1}`} className={styles.navNext}>
            <span className={styles.navLabel}>{t['blog-next-btn'] || 'Next Article'}</span>
            <span className={styles.navTitle}>{t[`blog-${numId + 1}-title`]}</span>
          </Link>
        )}
      </nav> */}

      {/* <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2 className={styles.ctaBannerTitle}>{t['blog-detail-cta-title'] || 'Ready to Transform Your Document Management?'}</h2>
          <p className={styles.ctaBannerDesc}>{t['blog-detail-cta-desc'] || 'Contact our team to discuss how we can help your organization.'}</p>
          <Link to="/contact" className={styles.ctaBannerBtn}>{t['blog-detail-cta-btn'] || 'Get Started Today'}</Link>
        </div>
      </section> */}

   

      <button
        className={`${styles.scrollTopBtn} ${showTopBtn ? styles.scrollTopVisible : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        &uarr;
      </button>
    </div>
  );
}

export default BlogDetail;
