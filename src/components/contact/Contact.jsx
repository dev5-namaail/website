import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { T } from "../../i18n/translations";
import styles from "./Contact.module.css";

export default function Contact({ currentLang = "en" }) {
  const t = T[currentLang];
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    const f = form.current;
    const errs = {};
    if (!f.user_name.value.trim()) errs.user_name = t["contact-err-name"];
    if (!f.user_email.value.trim()) errs.user_email = t["contact-err-email"];
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.user_email.value))
      errs.user_email = t["contact-err-email-invalid"];
    if (!f.message.value.trim()) errs.message = t["contact-err-message"];
    setErrors(errs);
    if (Object.keys(errs).length) return;

    emailjs
emailjs
  .sendForm("service_t1tnmn1", "template_fqiaq81", form.current, "0QE4DuP8HM6CwzodW")
        .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (err) => {
          console.error("EmailJS error:", err);
          errs._api = err.text || "Failed to send. Try again later.";
          setErrors({ ...errs });
        }
      );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t["contact-title"]}</h1>
          <p className={styles.heroSub}>{t["contact-desc"]}</p>
        </div>
      </section>

      <div className={styles.content}>
        <form ref={form} className={styles.form} onSubmit={sendEmail} noValidate>
          <div className={styles.row}>
            <label className={styles.label}>
              {t["contact-name"]}
              <input name="user_name" className={styles.input} placeholder={t["contact-name-ph"]} required />
              {errors.user_name && <div className={styles.error}>{errors.user_name}</div>}
            </label>
            <label className={styles.label}>
              {t["contact-email"]}
              <input name="user_email" type="email" className={styles.input} placeholder={t["contact-email-ph"]} required />
              {errors.user_email && <div className={styles.error}>{errors.user_email}</div>}
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              {t["contact-phone"]}
              <input name="user_phone" className={styles.input} placeholder={t["contact-phone-ph"]} />
            </label>
            <label className={styles.label}>
              {t["contact-subject"]}
              <input name="subject" className={styles.input} placeholder={t["contact-subject-ph"]} />
            </label>
          </div>

          <label className={styles.label}>
            {t["contact-message"]}
            <textarea name="message" className={styles.textarea} rows={6} placeholder={t["contact-message-ph"]} required />
            {errors.message && <div className={styles.error}>{errors.message}</div>}
          </label>

          <button type="submit" className={styles.button}>{t["contact-submit"]}</button>

          {sent && <div className={styles.status}>{t["contact-success"]}</div>}
          {errors._api && <div className={styles.error}>{errors._api}</div>}
        </form>

        <div className={styles.info}>
          <h3>{t["contact-info-title"]}</h3>
          <p>{t["contact-info-email"]}</p>
          <p>{t["contact-info-phone"]}</p>
        </div>
      </div>
    </div>
  );
}
