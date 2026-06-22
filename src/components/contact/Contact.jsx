import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { T } from "../../i18n/translations";
import styles from "./Contact.module.css";

export default function Contact({ currentLang = "en" }) {
  const t = T[currentLang];
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    emailjs.init("0QE4DuP8HM6CwzodW");
  }, []);

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 4000);
    return () => clearTimeout(timer);
  }, [sent]);

  function validate() {
    const f = form.current;
    const errs = {};
    if (!f.name.value.trim()) errs.name = t["contact-err-name"];
    if (!f.email.value.trim()) errs.email = t["contact-err-email"];
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value))
      errs.email = t["contact-err-email-invalid"];
    if (!f.message.value.trim()) errs.message = t["contact-err-message"];
    return errs;
  }

  function sendEmail(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    form.current.time.value = new Date().toLocaleString();
    emailjs
      .sendForm("service_ti133mc", "template_5kiycuc", form.current)
      .then(
        () => { setSent(true); form.current.reset(); },
        (err) => setErrors({ _api: err.text || "Failed to send. Try again later." })
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
          <input type="hidden" name="time" />
          <div className={styles.row}>
            <label className={styles.label}>
              {t["contact-name"]}
              <input name="name" className={styles.input} placeholder={t["contact-name-ph"]} required />
              {errors.name && <div className={styles.error}>{errors.name}</div>}
            </label>
            <label className={styles.label}>
              {t["contact-email"]}
              <input name="email" type="email" className={styles.input} placeholder={t["contact-email-ph"]} required />
              {errors.email && <div className={styles.error}>{errors.email}</div>}
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              {t["contact-phone"]}
              <input name="phone" className={styles.input} placeholder={t["contact-phone-ph"]} />
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
