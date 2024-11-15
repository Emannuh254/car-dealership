import React from "react";
import { Link } from "react-router-dom";
// navbar will route components
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/garage" className="navbar-link">
            Garage
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="navbar-link">
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
