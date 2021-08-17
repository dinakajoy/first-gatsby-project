import React, { useRef } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const topNav = useRef(null);
  const menuIcon = useRef(null);

  const toggleMenuIcon = () => {
    if (
      topNav.current.className === "topnav" &&
      menuIcon.current.className === "icon"
    ) {
      menuIcon.current.className += " change";
      topNav.current.className += " responsive";
    } else {
      menuIcon.current.className = "icon";
      topNav.current.className = "topnav";
    }
  };

  return (
    <header className="header">
      <div className="brand">
        <h1>Logo</h1>
      </div>
      <nav className="topnav" id="myTopnav" ref={topNav}>
        <button
          className="icon"
          onClick={toggleMenuIcon}
          ref={menuIcon}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className="menus">
          <Link to="/#home" className="active">
            Home
          </Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#services">Our Services</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
