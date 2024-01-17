import React, { useState } from "react";
import TypePage from "./TypePage";
import GenrePage from "./GenrePage";

function Filter() {
  const [filmType, setFilmType] = useState("");
  const [genre, setGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilmTypeChange = (type) => {
    setFilmType(type);
    setCurrentPage(2); // Passer à la page des genres
  };

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
    // Ici, vous pourriez effectuer d'autres actions avec le genre sélectionné si nécessaire.
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    genre && (
      <div>
        {currentPage === 1 ? (
          <TypePage onFilmTypeChange={handleFilmTypeChange} />
        ) : (
          <GenrePage
            filmType={filmType}
            onGenreChange={handleGenreChange}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    )
  );
}

export default Filter;
