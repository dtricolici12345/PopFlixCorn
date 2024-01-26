/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";
import FilterIcon from "../../assets/filter.png";
import ChecklistIcon from "../../assets/checklist.png";
import GameIcon from "../../assets/game.png";
import ShopeIcon from "../../assets/shope.png";
import AboutUsIcon from "../../assets/aboutus.png";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHome, setisHome] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      console.info("hello");
      setisHome(true);
    } else {
      setisHome(false);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    document.getElementById("menuclose").classList.toggle("active");
  };

  return (
    <div
      className={`${isHome ? "home-menu" : "menu"} ${isMenuOpen ? "open" : ""}`}
    >
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
          <img src={FilterIcon} className="material-icons " alt="Filter" />
        </NavLink>
        <NavLink to="/watchlist" className="btn">
          <img
            src={ChecklistIcon}
            alt="Watchlist"
            className="material-icons "
          />
        </NavLink>
        <NavLink to="/game" className="btn">
          <img src={GameIcon} alt="Game" className="material-icons" />
        </NavLink>
        <NavLink to="/shop" className="btn">
          <img src={ShopeIcon} alt="Shop" className="material-icons" />
        </NavLink>
        <NavLink to="/about" className="btn">
          <img src={AboutUsIcon} alt="AboutUs" className="material-icons " />
        </NavLink>
      </label>
    </div>
  );
}

export default Menu;
