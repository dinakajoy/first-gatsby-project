import * as React from "react";
import Layout from "../components/common/Layout";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";

// markup
const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <Services />
      <About />
      <Contact />
    </Layout>
  )
}

export default HomePage;
