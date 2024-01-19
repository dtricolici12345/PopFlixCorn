import React from "react";
import { Link } from "react-router-dom";
import "./GameHello.css";

function GameHello() {
  return (
    <div className="game-page">
      <h1>Quiz, pleeeeeease!!!</h1>
      <div className="game-options">
        <div className="game-container">
          <Link to="/game/romantique" className="quiz-option">
            Films d'amour
          </Link>
          <Link to="/game/horreur" className="quiz-option">
            Horreur
          </Link>
          <Link to="/game/anime" className="quiz-option">
            Animé
          </Link>
          <Link to="/game/serial" className="quiz-option">
            Série
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameHello;
