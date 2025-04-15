import React from "react";
import "./Navbar.css";

const RedNoteIcon = "/images/boba_panda.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Top Section: Logo + Contact */}
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={RedNoteIcon} alt="RedNote Logo" className="logo" />
          <span className="brand">RedNote</span>
        </div>

        <div className="navbar-right">
          <button className="contact-button">@ Contact Us</button>
        </div>
      </div>

      {/* Center Navigation Bar */}
      <div className="navbar-center">
        <a href="#boba-builder">BOBA BUILDER</a>
        <a href="#menu">MENU</a>
        <a href="#cart">CART</a>
      </div>
    </nav>
  );
};

export default Navbar;
