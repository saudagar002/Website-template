// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img
             src={process.env.PUBLIC_URL + '/a-initial-letter-logo-design-creative-modern-letters-vector-icon-logo-illustration-2B1NXY7.jpg'}
            // src={process.env.PUBLIC_URL + '/canva-red-and-white-minimalist-tooth-illustration-dentist-logo-nWAdaKwBUYo.jpg'}
            alt="Aditi Clinic Logo"
            height="40" 
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Safety">
                Patient Safety
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Book and Appointement
              </Link>
            </li>
            
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
