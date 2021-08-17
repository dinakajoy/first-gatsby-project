import React from "react";
import * as styles from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <div className={styles.contact_wrapper}>
        <div className={styles.form_data}>
          <h1>Feel Reach Out To Us At Any Time</h1>
          <p>We reply within 3 hours</p>
        </div>
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Nigeria</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            rows="10"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
