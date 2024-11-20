"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.gridContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>
              Hello, {`I'm`} {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Syed Muhammad Suleman",
                1000,
                "Front-End Developer",
                1000,
                "Web Developer",
                1000,
                "Learning Next.Js",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className={styles.description}>
            This is Syed Muhammad Suleman. I am a front-end developer. I have
            learned HTML, CSS5, and TypeScript, and I am currently learning
            Next.js. If you want to create an eCommerce website for your
            business, feel free to contact me without hesitation. I will provide
            you with a demo first.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.hireMeButton}>Hire Me</button>
            <button className={styles.downloadCvButton}>
              <span className={styles.downloadCvSpan}>Download CV</span>
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/new.jpeg"
              alt="profile-pic"
              className={styles.profileImage}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
