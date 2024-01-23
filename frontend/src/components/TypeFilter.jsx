import React from "react";
import PropTypes from "prop-types";
import "../styles/TypeFilter.css";

function TypeFilter({ filmType, onFilmTypeChange }) {
  return (
    <div className="TypeFilter">
      <h2>Sélectionnez le type</h2>
      <div className="Buttons">
        <label>
          <input
            type="radio"
            value="movie"
            checked={filmType === "movie"}
            onChange={() => onFilmTypeChange("movie")}
          />
          Films
        </label>
        <label>
          <input
            type="radio"
            value="tv"
            checked={filmType === "tv"}
            onChange={() => onFilmTypeChange("tv")}
          />
          Séries
        </label>
      </div>
    </div>
  );
}

TypeFilter.propTypes = {
  filmType: PropTypes.oneOf(["movie", "tv"]).isRequired,
  onFilmTypeChange: PropTypes.func.isRequired,
};

export default TypeFilter;
