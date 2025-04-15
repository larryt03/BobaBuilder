import React from "react";
import { Link } from "react-router-dom";
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

      <div className="navbar-center">
  <Link to="/" className="nav-link">BOBA BUILDER</Link>
  <Link to="/menu" className="nav-link">MENU</Link>
  <Link to="/cart" className="nav-link">CART</Link> {/* ✅ links to cart */}
</div>


    </nav>
  );
};

export default Navbar;
