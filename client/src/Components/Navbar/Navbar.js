import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <span>L</span>AB <span>E</span>XAM
      </Link>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">Doctor</Link>
        </li>
        <li className="nav-item">
          <Link to="/patient">Patient</Link>
        </li>
        <li className="nav-item">
          <Link to="/doctordata">Doctordata</Link>
        </li>
        <li className="nav-item">
          <Link to="/patientdata">Patientdata</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
