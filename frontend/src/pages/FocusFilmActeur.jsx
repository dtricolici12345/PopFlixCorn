import FocusActeur from "../components/FocusActeur";
import Filmographie from "../components/Filmographie";
import Logo from "../components/Logo/Logo";
import Menu from "../components/Menu/Menu";
import "../components/Logo/Logo.css";
import "../components/Menu/Menu.css";
import "../styles/Focus.css";
import "../styles/FocusFilmActeur.css";

function FocusFilmActeur() {
  return (
    <div className="FocusFilmActeur">
      <Logo isFocusFilmActeur />
      <Menu isMenuFocusFilmActeur />
      <FocusActeur />
      <Filmographie />
    </div>
  );
}

export default FocusFilmActeur;
