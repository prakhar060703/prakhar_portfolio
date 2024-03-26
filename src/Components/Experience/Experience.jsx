import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

const Experience = () => {
  return (
    <section className={Styles.container} id="experience">
      <h2 className={Styles.title}>Experience</h2>
      <div className={Styles.content}>
        <div className={Styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={Styles.skill}>
                <div className={Styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={Styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={Styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={historyItem.title}
                />
                <div className={Styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                  <h4>{`${historyItem.organisation}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id} >{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
