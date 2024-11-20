import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href="#home" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className={styles.navLink}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
