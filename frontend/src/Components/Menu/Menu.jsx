import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    document.getElementById("menuclose").classList.toggle("active");
  };

  return (
    <div className={`menu ${isMenuOpen ? "open" : ""}`}>
      <input
        type="checkbox"
        id="toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label id="show-menu" htmlFor="toggle">
       <div 
         className={`btn ${isMenuOpen ? "active" : ""}`}
          id="menuclose"
          onClick={handleMenuClick}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <NavLink to="/filter" className="btn">
          <img
            src="src\assets\filter.png"
            className="material-icons "
            alt="Filter"
          />
        </NavLink>
        <NavLink to="/checklist" className="btn">
          <img
            src="src\assets\checklist.png"
            alt="CheckList"
            className="material-icons "
          />
        </NavLink>
        <NavLink to="/game" className="btn">
          <img
            src="src\assets\game.png"
            alt="Game"
            className="material-icons"
          />
        </NavLink>
        <NavLink to="/shope" className="btn">
          <img
            src="src\assets\shope.png"
            alt="Shope"
            className="material-icons"
          />
        </NavLink>
        <NavLink to="/aboutus" className="btn">
          <img
            src="src\assets\aboutus.png"
            alt="AboutUs"
            className="material-icons "
          />
        </NavLink>
      </label>
    </div>
  );
}

export default Menu;
