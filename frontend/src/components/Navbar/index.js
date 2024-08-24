import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">ZuAI</Link>
      </h1>
      <span>Jhon</span>
      <Link to="/upload">
        <button>Upload Blog</button>
      </Link>
    </div>
  );
};

export default Navbar;
