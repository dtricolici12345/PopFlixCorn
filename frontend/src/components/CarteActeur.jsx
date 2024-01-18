import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CarteActeur.css";
import PropTypes from "prop-types";

function CarteActeur({ movieId }) {
  CarteActeur.propTypes = {
    movieId: PropTypes.number.isRequired,
  };
  const [acteursInfos, setActeursInfos] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((data) => setActeursInfos(data.cast.slice(0, 15)));
  }, []);

  return (
    <div className="container_banner">
      <h2 className="title_acteurs">Acteurs :</h2>

      <div className="container_card">
        {console.info("je suis dans le return", acteursInfos)}
        {acteursInfos.map((acteurInfo) => (
          <div key={acteurInfo.id}>
            <li className="card">
              <Link key={acteurInfo.id} to={`/acteur/${acteurInfo.id}`}>
                <img
                  className="profile_path"
                  src={`https://image.tmdb.org/t/p/w500/${acteurInfo.profile_path}`}
                  alt="Picture_acteur"
                />
              </Link>
              <p className="original_name">{acteurInfo.original_name}</p>
              <p className="character">{acteurInfo.character}</p>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarteActeur;
