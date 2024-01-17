import React, { useState } from "react";
import TypePage from "./TypePage";
import GenrePage from "./GenrePage";

function Filter() {
  const [filmType, setFilmType] = useState("");
  const [genre, setGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  console.info(genre);

  const handleFilmTypeChange = (type) => {
    setFilmType(type);
    setCurrentPage(2); // Passer à la page des genres
  };

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
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
  );
}

export default Filter;
