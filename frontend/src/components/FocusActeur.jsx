import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import "../styles/FocusActeur.css";
import "../styles/Filmographie.css";
import { useParams } from "react-router-dom";

function FocusActeur() {
  const { acteurId } = useParams();
  const [acteurDetails, setActeurDetails] = useState([]);

  // FocusActeur.propTypes = {
  //   profile_path: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   birthday: PropTypes.string.isRequired,
  //   biography: PropTypes.string.isRequired,
  // };

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
      `https://api.themoviedb.org/3/person/${acteurId}?language=fr-FR&region=FR`,
      options
    )
      .then((response) => response.json())
      .then((data) => setActeurDetails(data));
  }, []);

  console.info("je suis ds useffect", acteurDetails);

  return (
    <div className="FocusActeur">
      <img
        className="imgActeur"
        src={`https://image.tmdb.org/t/p/w500/${acteurDetails.profile_path}`}
        alt={acteurDetails.name}
      />
      <div className="partie">
        <div className="partie1">
          <h1 className="acteurH1">{acteurDetails.name}</h1>
          <p className="age">({acteurDetails.birthday})</p>
        </div>
        <br />
        <h2 className="bioH2">Biographie</h2>
        <br />
        <p className="biography">{acteurDetails.biography}</p>
      </div>
      {/* <div className="partie film" /> */}
    </div>
  );
}

export default FocusActeur;
