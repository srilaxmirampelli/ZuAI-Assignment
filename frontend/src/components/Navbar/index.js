import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <h1 className="logo">.blog</h1>
      </Link>

      <Link to="/upload">
        <button className="upload-button">Upload Blog</button>
      </Link>
    </div>
  );
};

export default Navbar;
