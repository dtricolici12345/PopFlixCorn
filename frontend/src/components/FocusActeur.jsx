import React from "react";
import PropTypes from "prop-types";
import "../styles/FocusActeur.css";

function FocusActeur({ user }) {
  if (!user) {
    return null;
  }
  return (
    user && (
      <div className="FocusActeur">
        <img
          className="imgActeur"
          src={`https://image.tmdb.org/t/p/w500/${user.profile_path}`}
          alt={user.name}
        />
        <div className="partie">
          <div className="partie1">
            <h1>{user.name}</h1>
            <p className="age">({user.birthday})</p>
          </div>
          <br />
          <h2>Biographie</h2>
          <br />
          <p className="biography">{user.biography}</p>
        </div>
        <div className="partie film" />
      </div>
    )
  );
}

FocusActeur.propTypes = {
  user: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    birthday: PropTypes.string,
    biography: PropTypes.string,
  }),
};

FocusActeur.defaultProps = {
  user: null,
};

export default FocusActeur;
