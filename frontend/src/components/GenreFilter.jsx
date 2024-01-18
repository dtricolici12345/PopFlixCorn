import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/GenreFilter.css";

function GenreFilter({ filmType, onGenresChange }) {
  const getGenres = () => {
    const movieGenres = [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Aventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comédie",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentaire",
      },
      {
        id: 18,
        name: "Drame",
      },
      {
        id: 10751,
        name: "Famille",
      },
      {
        id: 14,
        name: "Fantaisie",
      },
      {
        id: 36,
        name: "Histoire",
      },
      {
        id: 27,
        name: "Horreur",
      },
      {
        id: 10402,
        name: "Musique",
      },
      {
        id: 9648,
        name: "Mystère",
      },
      {
        id: 10749,
        name: "Romance",
      },
      {
        id: 878,
        name: "Science-Fiction",
      },
      {
        id: 10770,
        name: "Téléfilm",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 10752,
        name: "Guerre",
      },
      {
        id: 37,
        name: "Western",
      },
    ];

    // Genres statiques pour les séries
    const tvGenres = [
      {
        id: 10759,
        name: "Action",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comédie",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentaire",
      },
      {
        id: 18,
        name: "Drame",
      },
      {
        id: 10751,
        name: "Familial",
      },
      {
        id: 10762,
        name: "Enfants",
      },
      {
        id: 9648,
        name: "Mystère",
      },
      {
        id: 10763,
        name: "Actualités",
      },
      {
        id: 10764,
        name: "Téléréalité",
      },
      {
        id: 10765,
        name: "Science-Fiction ",
      },
      {
        id: 10766,
        name: "Soap",
      },
      {
        id: 10767,
        name: "Talk-show",
      },
      {
        id: 10768,
        name: "Guerre ",
      },
      {
        id: 37,
        name: "Western",
      },
    ];

    // Retourner les genres en fonction du type de contenu (film ou série)
    return filmType === "movie" ? movieGenres : tvGenres;
  };
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genres = getGenres(filmType);

  const handleGenreChange = (genre) => {
    const updatedGenres = [...selectedGenres];

    const genreIndex = updatedGenres.indexOf(genre.id);
    if (genreIndex !== -1) {
      updatedGenres.splice(genreIndex, 1);
    } else {
      updatedGenres.push(genre.id);
    }

    setSelectedGenres(updatedGenres);
    onGenresChange(updatedGenres);
  };

  return (
    <div className="GenreFilter">
      <h2>Sélectionnez les genres</h2>
      <div className="Buttons">
        {genres.map((genre) => (
          <label
            key={genre.id}
            className={
              selectedGenres.includes(genre.id) ? "SelectedGenreLabel" : ""
            }
          >
            <input
              type="radio"
              value={genre.id}
              checked={selectedGenres.includes(genre.id)}
              onChange={() => handleGenreChange(genre)}
              className="GenreButton"
            />
            {genre.name}
          </label>
        ))}
      </div>
    </div>
  );
}
GenreFilter.propTypes = {
  filmType: PropTypes.oneOf(["movie", "tv"]).isRequired,
  onGenresChange: PropTypes.func.isRequired,
};

export default GenreFilter;
