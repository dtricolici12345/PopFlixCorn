import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/home" className="Home">
        <img src="src\assets\Logo.png" alt="Logo" />
        <h2 className="title">
          <span className="word-pop">POP</span>
          <span className="word-flix">FLIX</span>
          <span className="word-corn">CORN</span>
        </h2>
      </NavLink>
    </div>
);
}

export default Logo;
