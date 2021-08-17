import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../../styles/services.module.css";

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          servicesdata {
            excerpt
            name
            slug
          }
        }
      }
    }
  `);

  let services = data.site.siteMetadata.servicesdata;
  return (
    <section className="container" id="services">
      <h2 className={styles.about_title}>Our Services</h2>
      <div className={styles.services_wrapper}>
        {services.map((service) => (
          <div className={styles.card}>
            <div className={styles.card_details}>
              <Link to={`/services/${service.slug}`}>
                <h3>{`${service.name}`}</h3>
                <p>{`${service.excerpt}`}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
