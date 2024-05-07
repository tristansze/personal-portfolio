import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
                <div className={styles.content}>
                    <img src={getImageUrl("about/computer.png")} alt="Grad photo" className={styles.aboutImage}/>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                            <div className={styles.aboutItemText}>
                            <h3>Computer Vision Engineer</h3>
                            <p>Experience with development and deployment of sentiment analysis models to accurately observe and collect user emotions and eye contact.</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                            <div className={styles.aboutItemText}>
                            <h3>Web/App Development</h3>
                            <p>Expertise in creating responsive and robust user-friendly applications and interfaces.</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/uilcon.png")} alt="uil icon"/>
                            <div className={styles.aboutItemText}>
                            <h3>Undergraduate Researcher</h3>
                            <p>Familiarity with model development and tuning for use in analysis and collection of global forestry data.</p>
                            </div>
                        </li>
                    </ul>
                </div>
        </section>
    );
};