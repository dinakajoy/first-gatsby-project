import React from "react";
import { Link } from "gatsby";
import * as styles from "../../styles/home.module.css";

const Banner = () => {
  return (
    <section className={styles.heroimage} id="home">
      <div className={styles.herotext}>
        <h1>ACME Global</h1>
        <p>We offer the best of services</p>
        <Link to="#contact" className={styles.herobtn}>Reach Out</Link>
      </div>
    </section>
  );
};

export default Banner;
