import React from "react";
import { Link } from "gatsby";
import Layout from "../components/common/Layout";
import * as styles from "../styles/about.module.css";

const ServiceSingle = ({ pageContext: { service } }) => {
  console.log("service", service);
  return (
    <Layout>
      <section className={styles.service}>
        <div className={styles.about_section}>
          <div className={styles.about_details}>
            <div className="container">
              <h1>{service.name}</h1>
              <p>
                <Link to="/">Home</Link> | {service.name}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.service_section}>
        <div className="container">
          <h1>{service.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: service.details }} />
        </div>
      </section>
    </Layout>
  );
};

export default ServiceSingle;
