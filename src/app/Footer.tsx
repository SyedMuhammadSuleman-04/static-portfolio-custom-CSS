import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contentSection}>
        <div className={styles.sectionsContainer}>
          {/* More Section */}
          <div>
            <h3 className={styles.heading}>More</h3>
            <ul className={styles.list}>
              <li>Web Development</li>
              <li>Ecommerce Website</li>
              <li>Portfolio</li>
              <li>Mobile App Development</li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className={styles.heading}>Address</h3>
            <ul className={styles.list}>
              <li>Madras Cooperative Housing</li>
              <li>Society Scheme 33</li>
              <li>Karachi</li>
              <li>sulemansyedmuhammad41@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.copyright}>
        <p>Copyright ©2024 Syed Muhammad Suleman</p>
      </div>
    </footer>
  );
};

export default Footer;
