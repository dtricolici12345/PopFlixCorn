import React from "react";
import PropTypes from "prop-types";

function TypeFilter({ filmType, onFilmTypeChange }) {
  return (
    <div>
      <h2>Sélectionnez le type de film</h2>
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
  );
}

TypeFilter.propTypes = {
  filmType: PropTypes.oneOf(["movie", "tv"]).isRequired,
  onFilmTypeChange: PropTypes.func.isRequired,
};

export default TypeFilter;
