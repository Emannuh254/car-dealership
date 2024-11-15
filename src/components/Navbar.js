import React from "react";
import { Link } from "react-router-dom"; //Link component for client-side navigation
// navbar will route components
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/*<Link> allows seamless navigation without refreshing*/}
        <li>
          <Link to="/" className="navbar-link">
            {/* homepage  is universly understood as landing page so no need of naming it*/}
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
