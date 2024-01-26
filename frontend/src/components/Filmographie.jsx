import React, { useState, useEffect } from "react";
import "../styles/Filmographie.css";
import "../styles/FocusActeur.css";
import { useParams, Link } from "react-router-dom";
import NoPopCorn from "../assets/NoPopCorn.png";

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
      .then((response) => setActeurfilm(response.cast.slice(0, 30)));

    fetch(
      `https://api.themoviedb.org/3/person/${acteurId}/tv_credits?language=fr-FR&region=FR`,
      options
    )
      .then((response) => response.json())
      .then((response) => setActeurserie(response.cast.slice(0, 30)));
  }, []);

  const getBorderColor = (voteAverage) => {
    const note = Math.round(voteAverage * 10);
    if (note < 50) return "border-red";
    if (note < 70) return "border-orange";
    return "border-green";
  };

  console.info("acteur film", acteurfilm);
  return (
    <div className="film">
      <h2 className="title_film">Filmographie</h2>
      <div className="cards">
        {console.info("je suis dans le return", acteurfilm)}
        {acteurfilm.map((filmPlayActeur) => (
          <div className="BlocCard" key={filmPlayActeur.id}>
            <Link
              to={`/focus/movie/${filmPlayActeur.id}`}
              className="custom-link"
            >
              <div className="headerCard">
                {filmPlayActeur.poster_path ? (
                  <img
                    className="poster_paths"
                    src={`https://image.tmdb.org/t/p/w500/${filmPlayActeur.poster_path}`}
                    alt="Poster_film"
                  />
                ) : (
                  <img
                    className="poster_paths"
                    src={NoPopCorn}
                    alt="No_Poster"
                  />
                )}
                <div
                  className={`m-note ${getBorderColor(
                    filmPlayActeur.vote_average
                  )}`}
                >
                  {Math.round(filmPlayActeur.vote_average * 10)}%
                </div>
              </div>
            </Link>
            <div className="card2">
              <div className="titles">{filmPlayActeur.title}</div>
              <div className="overview">{filmPlayActeur.overview}</div>
            </div>
          </div>
        ))}
        {console.info("je suis dans le return serie", acteurserie)}

        {/* <h2 className="title_film">Series :</h2> */}
        {acteurserie.map((seriePlayActeur) => (
          <div className="BlocCard" key={seriePlayActeur.id}>
            {/* <div className="filmPoster"> */}
            <Link
              to={`/focus/tv/${seriePlayActeur.id}`}
              className="custom-link"
            >
              <div className="headerCard">
                {seriePlayActeur.poster_path ? (
                  <img
                    className="poster_paths"
                    src={`https://image.tmdb.org/t/p/w500/${seriePlayActeur.poster_path}`}
                    alt="Poster_serie"
                  />
                ) : (
                  <img
                    className="poster_paths"
                    src={NoPopCorn}
                    alt="No_Poster"
                  />
                )}
                <div
                  className={`m-note ${getBorderColor(
                    seriePlayActeur.vote_average
                  )}`}
                >
                  {Math.round(seriePlayActeur.vote_average * 10)}%
                </div>
              </div>
            </Link>
            <div className="card2">
              <div className="titles">{seriePlayActeur.original_name}</div>
              <div className="overview">{seriePlayActeur.overview}</div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default Filmographie;
