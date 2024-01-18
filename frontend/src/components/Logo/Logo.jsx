import React from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import LogoIcon from "../../assets/Logo.png";
import "./Logo.css";

function Logo() {
  // Logo.propTypes = {
  //   isFocus: PropTypes.bool.isRequired,
  // };

  return (
    // <div className={`logo ${isFocus ? "mfocus-logo" : " "}`}>
    <div className="logo">
      <NavLink
        to="/"
        className="Home"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img src={LogoIcon} alt="Logo" />
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
