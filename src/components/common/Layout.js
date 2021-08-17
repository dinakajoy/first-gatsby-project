import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../styles/global.css";
import "@fontsource/roboto";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
