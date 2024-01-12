import { useState } from "react";
import dice from "../assets/dice.svg";
import "../styles/Random.css";

function Random() {
  const [randomMovieData, setRandomMovieData] = useState(null);

  const generateRandomMovieId = () => {
    const newRandomNumber = Math.floor(Math.random() * 10000) + 1;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTJhZGFmMTkyNDExODRhZGFhMWI1MzZhZWIwMGRiOCIsInN1YiI6IjY1OTY2OWNkNjBjNTFkM2U5ODk3ODQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvj9pVHbgf2EV009bseL1_lV-oBEY2fUQqzOUqNXaXs",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${newRandomNumber}/external_ids`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const imdbId = data.imdb_id;
        fetch(
          `https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id&language=fr-FR`,
          options
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((movieData) => {
            if (movieData.movie_results && movieData.movie_results.length > 0) {
              const firstMovie = movieData.movie_results[0];
              if (firstMovie.title) {
                console.info(firstMovie.title);
              } else {
                console.warn("No title found for the movie.");
              }

              setRandomMovieData(movieData);
            } else {
              console.warn("No movie results found.");
              generateRandomMovieId();
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleKeyPress = (event) => {
    if (event.key === "*") {
      if (randomMovieData) {
        console.warn("Movie data already exists:", randomMovieData);
      } else {
        generateRandomMovieId();
      }
    }
  };

  return (
    <div>
      <button
        className="DiceButton"
        onClick={generateRandomMovieId}
        onKeyDown={handleKeyPress}
        type="button"
        tabIndex="0"
      >
        <img
          src={dice}
          alt="Dice"
          className="Dice"
          style={{ pointerEvents: "none" }}
        />
      </button>
    </div>
  );
}

export default Random;
