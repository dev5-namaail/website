import { Link, useParams, useNavigate } from 'react-router-dom';
import { T } from '../../i18n/translations';
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

  const blogPost = {
    id: numId,
    titleKey: `blog-${id}-title`,
    contentKey: `blog-${id}-content`,
    categoryKey: 'blog-category',
    dateKey: `blog-${id}-date`,
    image: blogImages[numId - 1]
  };

  const relatedPosts = [1, 2, 3].map(i => ({
    id: i,
    title: t[`blog-${i}-title`],
    date: t[`blog-${i}-date`],
    category: t['blog-category'],
    image: blogImages[i - 1]
  }));

  return (
    <div className={styles.page}>
      <div className={styles.featuredImageWrap}>
        <img src={blogPost.image} alt={t[blogPost.titleKey]} className={styles.featuredImage} />
      </div>

      <article className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <span className={styles.articleCategory}>{t[blogPost.categoryKey]}</span>
          <h2 className={styles.articleTitle}>{t[blogPost.titleKey]}</h2>
          <div className={styles.articleMeta}>
            <div className={styles.authorAvatar}>N</div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>Blog Writer</span>
              <span className={styles.articleDate}>{t[blogPost.dateKey]}</span>
            </div>
          </div>
        </div>

        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: t[blogPost.contentKey] }}
        />

        {/* <div className={styles.articleFooter}>
          <div className={styles.articleTags}>
            <Link to="/blogs" className={styles.tag}>{t[blogPost.categoryKey]}</Link>
            <a href="#" className={styles.commentsLink}>{t['blog-no-comments'] || 'No Comments'}</a>
          </div>
        </div> */}
      </article>

      {/* <nav className={styles.postNavigation}>
        {numId > 1 && (
          <Link to={`/blog/${numId - 1}`} className={styles.prevPost}>
            <span className={styles.navLabel}>{t['blog-prev-btn'] || 'Previous Post'}</span>
            <span className={styles.navTitle}>{t[`blog-${numId - 1}-title`]}</span>
          </Link>
        )}
      </nav> */}

      {/* <section className={styles.relatedSection}>
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
                  <div className={styles.relatedAvatar}>N</div>
                  <span>Blog Writer</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default BlogDetail;
