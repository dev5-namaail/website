import { T } from '../../i18n/translations';
import styles from './Settings.module.css';

function Settings({ currentLang = 'en' }) {
  const t = T[currentLang];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {t['settings-title']}
      </h1>
      <div className={styles.settingGroup}>
        <label className={styles.settingLabel}>
          {t['settings-language']}
        </label>
        <p className={styles.settingValue}>
          {currentLang === 'en' ? 'English' : currentLang === 'ar' ? 'العربية' : 'Français'}
        </p>
      </div>
      <p className={styles.note}>
        {t['settings-save']}
      </p>
    </div>
  );
}

export default Settings;
