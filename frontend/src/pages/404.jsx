import { Link } from "react-router-dom";
import "../styles/404.css";

function Error404() {
  return (
    <div className="Error404">
      <div className="header404">
        <h1>Vous êtes perdus ?</h1>
        <p>Désolé mais cette page n'est pas disponible</p>
      </div>
      <div className="Buttons">
        <a href="https://youtu.be/I7IlnxgRgnM?si=Q7hTmTPIHPUnV7gb">
          <button type="button" className="Pig">
            🐷
          </button>
        </a>
        <Link to="/">
          <button type="button">Aller à l'accueil</button>
        </Link>
      </div>
    </div>
  );
}
export default Error404;
