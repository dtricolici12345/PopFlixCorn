import React from "react";
import PropTypes from "prop-types";
import TypeFilter from "../components/TypeFilter";
import "../styles/TypePage.css";

function TypePage({ onFilmTypeChange }) {
  return (
    <div className="TypePage">
      <TypeFilter onFilmTypeChange={onFilmTypeChange} />
    </div>
  );
}

TypePage.propTypes = {
  onFilmTypeChange: PropTypes.func.isRequired,
};

export default TypePage;
