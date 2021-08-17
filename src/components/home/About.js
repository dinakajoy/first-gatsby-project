import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import * as styles from "../../styles/about.module.css";

const About = () => {
  const data = useStaticQuery(graphql`
    query Teams {
      teamone: file(relativePath: { eq: "about/teamone.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teamtwo: file(relativePath: { eq: "about/teamtwo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teamthree: file(relativePath: { eq: "about/teamthree.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className={styles.about} id="about">
      <div className={styles.about_section}>
        <div className={styles.about_details}>
          <div className="container">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ducimus quo harum maiores ipsa! Repellat animi nostrum adipisci.
              Lorem officia necessitatibus ipsum dolor sit amet consectetur
              adipisicing elit. Culpa ducimus quo harum maiores ipsa! Repellat
              animi nostrum adipisci officia necessitatibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Culpa ducimus quo harum
              maiores ipsa! Repellat
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className={styles.about_title}>Our Team</h2>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <Img fluid={data.teamone.childImageSharp.fluid} alt="Team One" />
            <div className={styles.card_details}>
              <h2>Maxwell Doe</h2>
              <p className={styles.title}>CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>maxwell@example.com</p>
              <button className={styles.button}>Contact</button>
            </div>
          </div>

          <div className={styles.card}>
            <Img fluid={data.teamtwo.childImageSharp.fluid} alt="Team Two" />
            <div className={styles.card_details}>
              <h2>Jane Doclings</h2>
              <p className={styles.title}>Managing Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <button className={styles.button}>Contact</button>
            </div>
          </div>

          <div className={styles.card}>
            <Img
              fluid={data.teamthree.childImageSharp.fluid}
              alt="Team Three"
            />
            <div className={styles.card_details}>
              <h2>Mike Regnis</h2>
              <p className={styles.title}>Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <button className={styles.button}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
