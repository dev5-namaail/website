import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.footerMain}>
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>N</span>
              <span className={styles.logoText}>Namaa InfoLogistics</span>
            </div>
            <p className={styles.brandDesc}>
              Leading provider of document management, digitization, and digital transformation solutions across the Middle East and Africa.
            </p>
            <div className={styles.contactBlock}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <a href="tel:+201019578070"> 01019578070 </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <a href="mailto:info@namaa-il.com">info@namaa-il.com</a>
              </div>
            </div>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.navList}>
              <li><a href="#about">About Namaa InfoLogistics</a></li>
              <li><a href="#experience">Our Experience</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.navList}>
              <li><a href="#paper-records">paper Records Management</a></li>
              <li><a href="#intelligent-capture">Intelligent Capture</a></li>
              <li><a href="#digital-content">Digital Content Management</a></li>
              <li><a href="#asset-management">Asset Management</a></li>
              <li><a href="#quality-assurance">Quality Assurance</a></li>
              <li><a href="#identity-visitor">Identity &amp; Visitor Management</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.navList}>
              <li><a href="#records-mgmt">Records Management</a></li>
              <li><a href="#digitization">Digitization &amp; Capture</a></li>
              <li><a href="#digital-transform">Digital Transformation</a></li>
              <li><a href="#implementation">Implementation &amp; Integration</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#managed-ops">Managed Operations</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Industries</h4>
            <ul className={styles.navList}>
              <li><a href="#banking">Banking &amp; Financial Services</a></li>
              <li><a href="#government">Government &amp; Public Sector</a></li>
              <li><a href="#healthcare">Healthcare</a></li>
              <li><a href="#oil-gas">Oil &amp; Gas &amp; Industrial</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.navList}>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#downloads">Downloads</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className={styles.mapSection}>
        <div className={styles.mapInner}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>N</span>
              <span className={styles.logoText}>Namaa InfoLogistics</span>
            </div>
            <p className={styles.brandDesc}>
              Leading provider of document management, digitization, and digital
              transformation solutions across the Middle East and Africa.
            </p>
            <div className={styles.contactBlock}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+201019578070"> 01019578070 </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:info@namaa-il.com">info@namaa-il.com</a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <a href="https://www.linkedin.com/company/namaa-infologistics/">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </span>
                <a href="https://www.linkedin.com/company/namaa-infologistics/">
                  Namaa LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className={styles.addressBlock}>
            <h4 className={styles.addressTitle}>Our Location</h4>
            <p className={styles.addressText}>
              76 El Tayaran St.
              <br />
              PO 11765
              <br />
              Nasr City, Cairo, Egypt
            </p>
          </div>
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Namaa%20Infologistics%2C%20El%20Tayaran%20Street%2C%20Manteqet%20Al%20Cinema%2C%20Nasr%20City%2C%20Egypt&output=embed&hl=en-US&z=12"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
          </div>
        </div>
      </div>

      {/* <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>&copy; 2024 Namaa InfoLogistics. All rights reserved.</span>
          </div>
          <div className={styles.bottomCenter}>
           <a href="#privacy">Privacy Policy</a> 
             <span className={styles.divider}>|</span> 
          <a href="#terms">Terms of Service</a> 
          </div>
          <div className={styles.bottomRight}>
            <a href="https://www.linkedin.com/company/namaa-infologistics/" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
