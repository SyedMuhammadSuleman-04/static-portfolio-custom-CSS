import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>SKILLS</h2>
      </div>

      <p className={styles.description}>
        Hi, I’m Syed Muhammad Suleman, a passionate Front-end Developer with a
        strong command over modern web technologies and design principles. I
        specialize in crafting customized portfolio and ecommerce websites that
        not only look visually appealing but are also highly responsive and
        user-friendly. My focus is on delivering solutions that align with
        clients’ unique needs, whether it’s building a personal brand portfolio
        or creating a robust ecommerce platform for a startup. I understand that
        every project is unique, and I’m committed to ensuring that each website
        is a perfect fit for the intended audience and business goals. If you’re
        interested in having a customized website created, feel free to get in
        touch! I’m happy to provide a demo and discuss how we can bring your
        vision to life. Let’s create something amazing together!
      </p>

      <div className={styles.skillsContainer}>
        {[
          { skill: "HTML5", level: "90%" },
          { skill: "Tailwind CSS", level: "70%" },
          { skill: "JavaScript", level: "75%" },
          { skill: "TypeScript", level: "80%" },
          { skill: "Shadcn", level: "70%" },
          { skill: "Next.js", level: "60%" },
        ].map((item, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span>{item.skill}</span>
              <span>{item.level}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: item.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
