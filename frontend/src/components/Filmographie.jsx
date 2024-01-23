import React, { useState, useEffect } from "react";
import "../styles/Filmographie.css";
import "../styles/FocusActeur.css";
import { useParams } from "react-router-dom";

function Filmographie() {
  const { acteurId } = useParams();
  const [acteurfilm, setActeurfilm] = useState([]);
  const [acteurserie, setActeurserie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTJhZGFmMTkyNDExODRhZGFhMWI1MzZhZWIwMGRiOCIsInN1YiI6IjY1OTY2OWNkNjBjNTFkM2U5ODk3ODQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvj9pVHbgf2EV009bseL1_lV-oBEY2fUQqzOUqNXaXs",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/person/${acteurId}/movie_credits?language=fr-FR&region=FR`,
      options
    )
      .then((response) => response.json())
      .then((response) => setActeurfilm(response.cast.slice(0, 10)));

    fetch(
      `https://api.themoviedb.org/3/person/${acteurId}/tv_credits?language=fr-FR&region=FR', options`
    )
      .then((response) => response.json())
      .then((response) => setActeurserie(response.cast.slice(0, 10)));
  }, []);

  const getBorderColor = () => {
    const note = Math.round(acteurId.vote_average * 10);
    if (note < 50) return "border-red";
    if (note < 70) return "border-orange";
    return "border-green";
  };

  console.info("acteur film", acteurfilm);
  return (
    <div className="film">
      <h2 className="title_film">Filmographie :</h2>
      <div className="cards">
        {console.info("je suis dans le return", acteurfilm)}
        {acteurfilm.map((filmPlayActeur) => (
          <div className="BlocCard" key={filmPlayActeur.id}>
            <div className="filmPoster">
              <img
                className="poster_paths"
                src={`https://image.tmdb.org/t/p/w500/${filmPlayActeur.poster_path}`}
                alt="Poster_film"
              />
              <div className={`m-note ${getBorderColor()}`}>
                {Math.round(filmPlayActeur.vote_average * 10)}%
              </div>
              <div className="card2">
                <p className="titles">{filmPlayActeur.title}</p>
                <p className="overview">{filmPlayActeur.overview}</p>
              </div>
            </div>
          </div>
        ))}
        {acteurserie.map((seriePlayActeur) => (
          <div className="BlocCard" key={seriePlayActeur.id}>
            <div className="filmPoster">
              <img
                className="poster_paths"
                src={`https://image.tmdb.org/t/p/w500/${seriePlayActeur.poster_path}`}
                alt="Poster_serie"
              />
              <div className={`m-note ${getBorderColor()}`}>
                {Math.round(seriePlayActeur.vote_average * 10)}%
              </div>
              <div className="card2">
                <p className="titles">{seriePlayActeur.name}</p>
                <p className="overview">{seriePlayActeur.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filmographie;
