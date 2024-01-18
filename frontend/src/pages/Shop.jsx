import React, { useState } from "react";

// import Menu from "../components/Menu/Menu";
import Peignoir from "../assets/shop-peignoir.jpeg";
import Mug from "../assets/shop-mug.png";
import Tshirt from "../assets/shop-t-shirt.jpg";
import Bol from "../assets/shop-bol.png";

import "../styles/Shop.css";

function Shop() {
  const [valeurPeignoir, setValeurPeignoir] = useState(0);
  const incrementerPeignoir = () => {
    setValeurPeignoir(valeurPeignoir + 1);
  };
  const decrementerPeignoir = () => {
    if (valeurPeignoir > 0) {
      setValeurPeignoir(valeurPeignoir - 1);
    }
  };

  const [valeurMug, setValeurMug] = useState(0);
  const incrementerMug = () => {
    setValeurMug(valeurMug + 1);
  };
  const decrementerMug = () => {
    if (valeurMug > 0) {
      setValeurMug(valeurMug - 1);
    }
  };

  const [valeurTshirt, setValeurTshirt] = useState(0);
  const incrementerTshirt = () => {
    setValeurTshirt(valeurTshirt + 1);
  };
  const decrementerTshirt = () => {
    if (valeurTshirt > 0) {
      setValeurTshirt(valeurTshirt - 1);
    }
  };

  const [valeurBol, setValeurBol] = useState(0);
  const incrementerBol = () => {
    setValeurBol(valeurBol + 1);
  };
  const decrementerBol = () => {
    if (valeurBol > 0) {
      setValeurBol(valeurBol - 1);
    }
  };

  return (
    <div>
      {/* <Menu /> */}
      <div className="listeArticle">
        <div className="container-article-shop">
          <img className="shopPeignoir" src={Peignoir} alt="peignoir" />
          <div className="container-descriptif">
            <h2 className="title-article">Peignoir</h2>
            <p className="description-article">
              Dans cette composition intitulée "Éclats de Douceur", le peignoir
              devient le protagoniste d'une scène où le confort et l'élégance se
              rencontrent harmonieusement.
            </p>
            <div className="tarif-bouton">
              <p className="tarif">10€</p>
              <div className="bouton-quantité">
                <button type="button" onClick={decrementerPeignoir}>
                  -
                </button>
                <p className="quantité" value={valeurPeignoir}>
                  {valeurPeignoir}
                </p>
                <button type="button" onClick={incrementerPeignoir}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-article-shop">
          <img className="shopMug" src={Mug} alt="mug" />
          <div className="container-descriptif">
            <h2 className="title-article">Mug</h2>
            <p className="description-article">
              Plongez vos soirées avec le Mug "PopFlixCorn" - 34 cl
            </p>
            <div className="tarif-bouton">
              <p className="tarif">5€</p>
              <div className="bouton-quantité">
                <button type="button" onClick={decrementerMug}>
                  -
                </button>
                <p className="quantité" value={valeurMug}>
                  {valeurMug}
                </p>
                <button type="button" onClick={incrementerMug}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-article-shop">
          <img className="shopTShirt" src={Tshirt} alt="t-shirt" />
          <div className="container-descriptif">
            <h2 className="title-article">T-shirt</h2>
            <p className="description-article">
              Plongez dans l'expérience cinématographique ultime avec le T-shirt
              “PopFlixCorn”
            </p>
            <div className="tarif-bouton">
              <p className="tarif">7€</p>
              <div className="bouton-quantité">
                <button type="button" onClick={decrementerTshirt}>
                  -
                </button>
                <p className="quantité" value={valeurTshirt}>
                  {valeurTshirt}
                </p>
                <button type="button" onClick={incrementerTshirt}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-article-shop">
          <img className="shopBol" src={Bol} alt="bol" />
          <div className="container-descriptif">
            <h2 className="title-article">Bol</h2>
            <p className="description-article">
              Bol à pop-corn"PopFlixCorn en aluminium - 20 cm
            </p>
            <div className="tarif-bouton">
              <p className="tarif">5€</p>
              <div className="bouton-quantité">
                <button type="button" onClick={decrementerBol}>
                  -
                </button>
                <p className="quantité" value={valeurBol}>
                  {valeurBol}
                </p>
                <button type="button" onClick={incrementerBol}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
