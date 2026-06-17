import styles from './Footer.module.css';

function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.mapColumn}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Namaa%20Infologistics%2C%20El%20Tayaran%20Street%2C%20Manteqet%20Al%20Cinema%2C%20Nasr%20City%2C%20Egypt&output=embed&hl=en-US&z=12"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className={styles.copyright}>
              Copyright © 2023 Namaa InfoLogistics.
              <br />
              Built with love in Egypt,
              <br />
              All rights reserved.
            </p>
          </div>
          <div className={styles.contactColumn}>
            <h4>About Namaa</h4>
            <p>
              76 El Tayaran St.
              <br />
              PO 11765
              <br />
              Nasr City, Cairo, Egypt
            </p>
            <p>
              Telephone: <a href="tel:+201019578070">+201019578070</a>
              <br />
              Email: <a href="mailto:info@namaa-il.com">info@namaa-il.com</a>
            </p>
            <a className={styles.linkedin} href="https://www.linkedin.com/company/namaa-infologistics/" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
