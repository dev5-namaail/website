
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.title}>Page Not Found</div>
      <p className={styles.description}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={styles.link}>Go Home</Link>
    </div>
  );
}

export default PageNotFound;
