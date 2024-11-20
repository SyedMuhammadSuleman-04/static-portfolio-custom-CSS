import React from "react";
import Image from "next/image";
import styles from "./Contact.module.css"; // Importing the custom CSS module

const Contact = () => {
  return (
    <main id="contact" className={styles.main}>
      {/* Contact Links Section */}
      <div className={styles.contactLinks}>
        <section>
          <h2 className={styles.heading}>GET IN TOUCH</h2>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Image
                src="/images/li.png"
                alt="LinkedIn"
                width={40}
                height={40}
              />
              <a
                href="https://www.linkedin.com/in/syed-muhammad-suleman-a3784b2ab/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.linkItem}>
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={40}
                height={40}
                className={styles.githubLogo}
              />
              <a
                href="https://github.com/SyedMuhammadSuleman-04"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className={styles.linkItem}>
              <Image
                src="/images/fb.png"
                alt="Facebook"
                width={40}
                height={40}
              />
              <a
                href="https://www.facebook.com/people/Muhammad-Suleman/pfbid027Ckhbnx5LicYrHeiRw66nEAws4hknEFSAoLT5u9xjoBrqgmwMkzbb6dzLf8QiYuJl/?mibextid=ngobeXctTp5pD3Zm"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className={styles.linkItem}>
              <Image
                src="/images/wa.png"
                alt="WhatsApp"
                width={40}
                height={40}
              />
              <a
                href="https://wa.me/923378425680"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className={styles.linkItem}>
              <Image
                src="/images/mail.png"
                alt="Email"
                width={40}
                height={40}
              />
              <a
                href="mailto:sulemansyedmuhammad41@gmail.com"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li className={styles.linkItem}>
              <Image
                src="/images/insta.png"
                alt="Instagram"
                width={40}
                height={40}
              />
              <a
                href="https://www.instagram.com/syedmuhammadsuleman_04/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className={styles.contactForm}>
        <section>
          <h1 className={styles.formHeading}>Feel Free To Contact Us</h1>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Enter Your Name:</label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Enter Your Email:</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Enter Your Password:</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="ABCabc123#@!"
                required
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="remember"
                className={styles.checkbox}
                required
              />
              <label htmlFor="remember" className={styles.checkboxLabel}>
                Remember me
              </label>
            </div>

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
