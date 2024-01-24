import React from "react";
import { Link } from "react-router-dom";
import "./GameHello.css";

function GameHello() {
  return (
    <div className="game-page">
      <h4 className="titlegame">Quiz, pleeeeeease!!!</h4>
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
          <Link to="/game/seria" className="quiz-option">
            Série
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameHello;
