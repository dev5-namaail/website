import { T } from '../../i18n/translations';
import { Link } from 'react-router-dom';
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blogs2.jpg";
import blog3 from "../../assets/blogs/blogs3.jpg";
import blog4 from "../../assets/blogs/blogs4.jpg";
import blog5 from "../../assets/blogs/blogs5.jpg";
import blog6 from "../../assets/blogs/blogs6.jpg";
import blog7 from "../../assets/blogs/blogs7.jpg";
import blog8 from "../../assets/blogs/blogs8.jpg";
import blog9 from "../../assets/blogs/blogs9.jpg";
import blog10 from "../../assets/blogs/blog1.jpg";
import styles from './Blogs.module.css';
function Blogs({ currentLang = 'en' }) {
  const t = T[currentLang];

  const blogs = [
    {
      id: 1,
      titleKey: 'blog-1-title',
      excerptKey: 'blog-1-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-1-date',
      image: blog1
    },
    {
      id: 2,
      titleKey: 'blog-2-title',
      excerptKey: 'blog-2-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-2-date',
      image: blog9
    },
    {
      id: 3,
      titleKey: 'blog-3-title',
      excerptKey: 'blog-3-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-3-date',
      image: blog8
    },
    {
      id: 4,
      titleKey: 'blog-4-title',
      excerptKey: 'blog-4-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-4-date',
      image: blog2
    },
    {
      id: 5,
      titleKey: 'blog-5-title',
      excerptKey: 'blog-5-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-5-date',
      image: blog4
    },
    {
      id: 6,
      titleKey: 'blog-6-title',
      excerptKey: 'blog-6-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-6-date',
      image: blog5
    },
    {
      id: 7,
      titleKey: 'blog-7-title',
      excerptKey: 'blog-7-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-7-date',
      image: blog6
    },
    {
      id: 8,
      titleKey: 'blog-8-title',
      excerptKey: 'blog-8-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-8-date',
      image: blog7
    }
    ,
    {
      id: 9,
      titleKey: 'blog-9-title',
      excerptKey: 'blog-9-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-9-date',
      image: blog9
    }
    ,
    {
      id: 10,
      titleKey: 'blog-10-title',
      excerptKey: 'blog-10-excerpt',
      categoryKey: 'blog-category',
      dateKey: 'blog-10-date',
      image: blog10
    }
  ];

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t['blogs-title']}</h1>
        <p className={styles.pageSubtitle}>{t['blogs-subtitle']}</p>
      </section>

      {/* Blogs Grid */}
      <section className={styles.blogsSection}>
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.blogCard}>
              {/* Image */}
          <img src={blog.image} alt={t[blog.titleKey]} className={styles.blogImage} />

              <div className={styles.blogContent}>
                {/* <span className={styles.blogCategory}>{t[blog.categoryKey]}</span> */}
                <h3 className={styles.blogTitle}>
                  <Link to={`/blog/${blog.id}`}>{t[blog.titleKey]}</Link>
                </h3>
                <p className={styles.blogExcerpt}>{t[blog.excerptKey]}</p>
              </div>
              <div className={styles.blogMeta}>
                <span>{t[blog.dateKey]}</span>
                <Link to={`/blog/${blog.id}`} className={styles.blogReadMore}>
                  {t['blog-read-more']}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t['blogs-cta-title']}</h2>
        <Link to="/contact" className={styles.ctaBtn}>
          {t['blogs-cta-btn']}
        </Link>
      </section> */}
    </div>
  );
}

export default Blogs;
