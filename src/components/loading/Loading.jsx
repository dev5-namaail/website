
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
}

export default Loading;
