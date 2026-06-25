import { Link, useParams, useNavigate } from 'react-router-dom';
import { T } from '../../i18n/translations';
import styles from './BlogsDetails.module.css';
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blogs2.jpg";
import blog3 from "../../assets/blogs/blogs3.jpg";
import blog4 from "../../assets/blogs/blogs4.jpg";
import blog5 from "../../assets/blogs/blogs5.jpg";
import blog6 from "../../assets/blogs/blogs6.jpg";
import blog7 from "../../assets/blogs/blogs7.jpg";
import blog8 from "../../assets/blogs/blogs8.jpg";
import blog9 from "../../assets/blogs/blogs9.jpg";

function BlogDetail({ currentLang = 'en' }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = T[currentLang];

  const blogPost = {
    id: parseInt(id),
    titleKey: `blog-${id}-title`,
    excerptKey: `blog-${id}-excerpt`,
    contentKey: `blog-${id}-content`,
    categoryKey: 'blog-category',
    dateKey: `blog-${id}-date`,
    image: [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog1][parseInt(id) - 1]
  };

  const handlePrevious = () => {
    if (id > 1) navigate(`/blog/${parseInt(id) - 1}`);
  };

  const handleNext = () => {
    if (id < 10) navigate(`/blog/${parseInt(id) + 1}`);
  };

  return (
    <div className={styles.page}>
      {/* Back Button */}
      <div className={styles.backNav}>
        <Link to="/blogs" className={styles.backLink}>
          ← {t['blog-back'] || 'Back to Blogs'}
        </Link>
      </div>

      {/* Article Header */}
      <article className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <span className={styles.articleCategory}>{t[blogPost.categoryKey]}</span>
          <h1 className={styles.articleTitle}>{t[blogPost.titleKey]}</h1>
          <div className={styles.articleMeta}>
            <time>{t[blogPost.dateKey]}</time>
            <span className={styles.readingTime}>{t['blog-reading-time']}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className={styles.featuredImage}>
          <img src={blogPost.image} alt={t[blogPost.titleKey]} className={styles.image} />
        </div>

        {/* Article Content */}
        <div className={styles.articleContent}>
          <p className={styles.excerpt}>{t[blogPost.excerptKey]}</p>
          
          <section className={styles.contentSection}>
            <h2>{t['blog-article-content']}</h2>
            <p>{t[blogPost.contentKey]}</p>
            <ul>
              <li>{t['blog-insight-1']}</li>
              <li>{t['blog-insight-2']}</li>
              <li>{t['blog-insight-3']}</li>
              <li>{t['blog-insight-4']}</li>
            </ul>
            <p>{t['blog-benefits']}</p>
          </section>

          <section className={styles.contentSection}>
            <h2>{t['blog-implementation-title']}</h2>
            <p>{t['blog-implementation-intro']}</p>
            <ol>
              <li>{t['blog-phase-1']}</li>
              <li>{t['blog-phase-2']}</li>
              <li>{t['blog-phase-3']}</li>
              <li>{t['blog-phase-4']}</li>
              <li>{t['blog-phase-5']}</li>
            </ol>
          </section>

          
        </div>
      </article>

      {/* Navigation */}
      <nav className={styles.postNavigation}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          disabled={id === '1'}
        >
          ← {t['blog-prev-btn']}
        </button>
        <span className={styles.postCounter}>{id} / 10</span>
        <button
          className={styles.navButton}
          onClick={handleNext}
          disabled={id === '10'}
        >
          {t['blog-next-btn']} →
        </button>
      </nav>
    </div>
  );
}

export default BlogDetail;
