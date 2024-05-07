import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Tristan</h1>
            <p className={styles.description}>I'm a computer science and mathematics student at Purdue University. I am always on the search to explore new opportunities and experiment with new technologies. Feel free to reach out if you'd like to learn more!</p>
            <a href="tsze@purdue.edu" className={styles.contact}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/gradcropsize.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
    </section>
    );
}