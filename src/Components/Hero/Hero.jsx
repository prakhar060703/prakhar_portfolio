import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Prakhar</h1>
        <p className={Styles.description}>
          I'm full-stack developer proficient in React.js, Node.js, and with a
          passion for solving complex problems. Reach out if you'd like to learn
          more!
        </p>
        <a href="https://drive.google.com/file/d/1hD4XriZfzGibL8l7zDaD4utON3nE3mKs/view?usp=sharing" className={Styles.contactBtn}>
    Resume
</a>

        {/* it will directly open mail of individual who click the contact */}
      </div>
      <div >
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero Image of me"
          className={Styles.heroImg}
        />
        <div className={Styles.topBlur} />
        <div className={Styles.bottomBlur} />
      </div>
    </section>
  );
};

export default Hero;
