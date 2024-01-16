import React, { useState, useEffect } from "react";
import "../styles/Filmographie.css";

function Filmographie() {
  const [acteurfilm, setActeurfilm] = useState([]);

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
      "https://api.themoviedb.org/3/person/31/tagged_images?page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setActeurfilm(data.results.slice(0, 10)));
  }, []);

  return (
    <div className="film">
      <h2 className="title_film">Filmographie :</h2>
      <div className="card">
        {console.info("je suis dans le return", acteurfilm)}
        {acteurfilm.map((filmPlayActeur) => (
          <div key={filmPlayActeur.id}>
            <div className="filmPoster">
              <img
                className="poster_path"
                src={`https://image.tmdb.org/t/p/w500/${filmPlayActeur.media.poster_path}`}
                alt="Poster_film"
              />
              <div className="card2">
                <p className="title">{filmPlayActeur.media.original_title}</p>
                <p className="overview">{filmPlayActeur.media.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filmographie;
