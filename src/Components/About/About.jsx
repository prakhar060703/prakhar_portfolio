import React from "react";
import Styles from "./About.module.css";
import { getImageUrl } from "../../utils";
const About = () => {
  return (
    <section className={Styles.container} id="about">
      <h2 className={Styles.title}>About</h2>
      <div className={Styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={Styles.aboutImage}
        />
        <ul className={Styles.aboutItems}>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={Styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div className={Styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cpIcon" />
            <div className={Styles.aboutItemText}>
              <h3>Competitive programmer</h3>
              <p>
                I'm a competitive programmer with a Google
                Kickstart Round H rank of 1902. I excel at solving coding
                challenges with precision and creativity.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
