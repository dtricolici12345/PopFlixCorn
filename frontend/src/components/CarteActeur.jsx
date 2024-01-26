import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CarteActeur.css";
import PropTypes from "prop-types";

import NoPopCorn from "../assets/NoPopCorn.png";

function CarteActeur({ id, mediaType }) {
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
      `https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        // console.info("Acteurs Infos films", data.cast);
        setActeursInfos(data?.cast?.slice(0, 15));
      });
  }, [id, mediaType]);

  return (
    <div className="container_banner">
      <h2 className="title_acteurs">Acteurs</h2>
      <div className="container_card_acteur">
        {/* {console.info("je suis dans le return", acteursInfos)} */}
        {acteursInfos?.map((acteurInfo) => (
          <div key={acteurInfo.id}>
            <li className="card">
              <Link key={acteurInfo.id} to={`/acteur/${acteurInfo.id}`}>
                <div>
                  {acteurInfo.profile_path ? (
                    <img
                      className="profile_path"
                      src={`https://image.tmdb.org/t/p/w500/${acteurInfo.profile_path}`}
                      alt="Picture_acteur"
                    />
                  ) : (
                    <img
                      className="profile_path"
                      src={NoPopCorn}
                      alt="No_Picture"
                    />
                  )}
                </div>
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
CarteActeur.propTypes = {
  id: PropTypes.number.isRequired,
  mediaType: PropTypes.string.isRequired,
};

export default CarteActeur;
