import React, { useState, useEffect } from "react";

import Peignoir from "../assets/shop-peignoir.jpeg";
import Mug from "../assets/shop-mug.png";
import Tshirt from "../assets/shop-t-shirt.jpg";
import Bol from "../assets/shop-bol.png";

import "../styles/Shop.css";

function Shop() {
  const [valeurPeignoir, setValeurPeignoir] = useState(0, true);
  const [prixTotalArticlesPeignoir, setPrixTotalArticlesPeignoir] = useState(0);
  const incrementerPeignoir = () => {
    setValeurPeignoir(valeurPeignoir + 1);
    setPrixTotalArticlesPeignoir(10 * (valeurPeignoir + 1));
  };
  const decrementerPeignoir = () => {
    if (valeurPeignoir > 0) {
      setValeurPeignoir(valeurPeignoir - 1);
      setPrixTotalArticlesPeignoir(10.0 * (valeurPeignoir - 1));
    }
  };
  const [valeurMug, setValeurMug] = useState(0);
  const [prixTotalArticlesMug, setPrixTotalArticlesMug] = useState(0, true);
  const incrementerMug = () => {
    setValeurMug(valeurMug + 1);
    setPrixTotalArticlesMug(5 * (valeurMug + 1));
  };
  const decrementerMug = () => {
    if (valeurMug > 0) {
      setValeurMug(valeurMug - 1);
      setPrixTotalArticlesMug(5 * (valeurMug - 1));
    }
  };
  const [valeurTshirt, setValeurTshirt] = useState(0, true);
  const [prixTotalArticlesTshirt, setPrixTotalArticlesTshirt] = useState(0);

  const incrementerTshirt = () => {
    setValeurTshirt(valeurTshirt + 1);
    setPrixTotalArticlesTshirt(7 * (valeurTshirt + 1));
  };
  const decrementerTshirt = () => {
    if (valeurTshirt > 0) {
      setValeurTshirt(valeurTshirt - 1);
      setPrixTotalArticlesTshirt(7 * (valeurTshirt - 1));
    }
  };

  const [valeurBol, setValeurBol] = useState(0, true);
  const [prixTotalArticlesBol, setPrixTotalArticlesBol] = useState(0);
  const incrementerBol = () => {
    setValeurBol(valeurBol + 1);
    setPrixTotalArticlesBol(5 * (valeurBol + 1));
  };
  const decrementerBol = () => {
    if (valeurBol > 0) {
      setValeurBol(valeurBol - 1);
      setPrixTotalArticlesBol(5 * (valeurBol - 1));
    }
  };
  const [totalPrix, setTotalPrix] = useState(0);
  useEffect(() => {
    // Calculer le total du panier à partir des valeurs actuelles des articles
    const nouveauTotalPrix =
      prixTotalArticlesPeignoir +
      prixTotalArticlesMug +
      prixTotalArticlesTshirt +
      prixTotalArticlesBol;

    setTotalPrix(nouveauTotalPrix);
  }, [
    prixTotalArticlesPeignoir,
    prixTotalArticlesMug,
    prixTotalArticlesTshirt,
    prixTotalArticlesBol,
  ]);
  const resetTotalPanier = () => {
    setTotalPrix(0);
  };

  const handleButtonClick = () => {
    // eslint-disable-next-line no-alert
    alert(
      "Merci pour votre commande. Elle sera traitée dans les meilleurs délais!"
    );
    setValeurPeignoir(0);
    setValeurMug(0);
    setValeurTshirt(0);
    setValeurBol(0);
    setPrixTotalArticlesPeignoir(0);
    setPrixTotalArticlesMug(0);
    setPrixTotalArticlesTshirt(0);
    setPrixTotalArticlesBol(0);
    resetTotalPanier();
  };

  return (
    <div className="container-shop">
      <div className="containerArticles">
        <div className="articleShop">
          <img className="shopImg" src={Peignoir} alt="peignoir" />
          <div className="container-descriptif">
            <h2 className="title-article">Peignoir</h2>
            <p className="description-article">
              Peignoir "PopFlixCorn", où le confort et l'élégance se rencontrent
              harmonieusement.
            </p>
            <div className="tarif-bouton">
              <p className="tarif">10€</p>
              <div className="bouton-quantité">
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={decrementerPeignoir}
                >
                  -
                </button>
                <p className="quantité" value={valeurPeignoir}>
                  {valeurPeignoir}
                </p>
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={incrementerPeignoir}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="articleShop">
          <img className="shopMug" src={Mug} alt="mug" />
          <div className="container-descriptif">
            <h2 className="title-article">Mug</h2>
            <p className="description-article">
              Plongez vos soirées avec le Mug "PopFlixCorn" - 34 cl
            </p>
            <div className="tarif-bouton">
              <p className="tarif">5€</p>
              <div className="bouton-quantité">
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={decrementerMug}
                >
                  -
                </button>
                <p className="quantité" value={valeurMug}>
                  {valeurMug}
                </p>
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={incrementerMug}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="articleShop">
          <img className="shopImg" src={Tshirt} alt="t-shirt" />
          <div className="container-descriptif">
            <h2 className="title-article">T-shirt</h2>
            <p className="description-article">
              Plongez dans l'expérience cinématographique ultime avec le T-shirt
              “PopFlixCorn”
            </p>
            <div className="tarif-bouton">
              <p className="tarif">7€</p>
              <div className="bouton-quantité">
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={decrementerTshirt}
                >
                  -
                </button>
                <p className="quantité" value={valeurTshirt}>
                  {valeurTshirt}
                </p>
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={incrementerTshirt}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="articleShop">
          <img className="shopImg" src={Bol} alt="bol" />
          <div className="container-descriptif">
            <h2 className="title-article">Bol</h2>
            <p className="description-article">
              Bol à pop-corn "PopFlixCorn en aluminium - 20 cm
            </p>
            <div className="tarif-bouton">
              <p className="tarif">5€</p>
              <div className="bouton-quantité">
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={decrementerBol}
                >
                  -
                </button>
                <p className="quantité" value={valeurBol}>
                  {valeurBol}
                </p>
                <button
                  className="buttonI-D"
                  type="button"
                  onClick={incrementerBol}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerPanier">
        <h1 className="titlePanier">Panier</h1>
        <div className="contenuPanier">
          <div className="displayGrid">
            <div className="one">Description:</div>
            <div className="two">Quantité:</div>
            <div className="three">Prix unité:</div>
            <div className="four">Prix total articles:</div>
            <div className="five">Peignoir</div>
            <div className="six">{valeurPeignoir}</div>
            <div className="seven">10€</div>
            <div className="eight">{prixTotalArticlesPeignoir}€</div>
            <div className="night">Mug</div>
            <div className="ten">{valeurMug}</div>
            <div className="eleven">5€</div>
            <div className="twelve">{prixTotalArticlesMug}€</div>
            <div className="thirteen">T-shirt</div>
            <div className="fourteen">{valeurTshirt}</div>
            <div className="fifteen">7€</div>
            <div className="sixteen">{prixTotalArticlesTshirt}€</div>
            <div className="seventeen">Bol</div>
            <div className="eighteen">{valeurBol}</div>
            <div className="nineteen">5€</div>
            <div className="twenty">{prixTotalArticlesBol}€</div>
          </div>
          <div className="containerValidation">
            <div className="totalShop">
              <p>Total panier :</p>
              <p> {totalPrix}€</p>
            </div>
            <button
              onClick={handleButtonClick}
              className="buttonValid"
              type="button"
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
