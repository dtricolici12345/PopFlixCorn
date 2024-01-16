import React from "react";

import Menu from "../components/Menu/Menu";
import Logo from "../components/Logo/Logo";
import Peignoir from "../assets/shop-peignoir.jpeg";
import Mug from "../assets/shop-mug.png";
import Tshirt from "../assets/shop-t-shirt.jpg";
import Bol from "../assets/shop-bol.png";

import "../styles/Shop.css";
import "../components/Logo/Logo.css";

function Shop() {
  return (
    <div>
      <Logo />
      <Menu />
      <div>
        <li className="listeArticle">
          <img className="shopPeignoir" src={Peignoir} alt="peignoir" />
          <img className="shopMug" src={Mug} alt="mug" />
          <img className="shopTShirt" src={Tshirt} alt="t-shirt" />
          <img className="shopBol" src={Bol} alt="bol" />
        </li>
      </div>
    </div>
  );
}

export default Shop;
