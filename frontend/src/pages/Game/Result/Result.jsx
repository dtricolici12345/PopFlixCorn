/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import "./Result.css";

function Result({ correct, total }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2 className="resultreponse">
        Tu as deviné {correct} réponse(s) sur {total}
      </h2>
      <a href="/game/romantique">
        <button>Essaie à nouveau</button>
      </a>
    </div>
  );
}

export default Result;
