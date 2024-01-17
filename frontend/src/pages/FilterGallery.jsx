import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FilterGallery() {
  const { filmType, selectedGenres } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const baseURL = "https://api.themoviedb.org/3";
      const language = "fr-FR";

      const authToken =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDA5OWZiMmIwZjMxNGY5YmIzMjJjNzY2MGExMWVmNSIsInN1YiI6IjY1OTg0OTc3MWQxYmY0MDFhOGU0YmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Qtip1eiVi7XgfcZBaGDsa5LzjXMd4Ym3Ems_tmCiTQ";

      let url; // Declare url here

      try {
        url = `${baseURL}/discover/${
          filmType === "movie" ? "movie" : "tv"
        }?include_adult=false&include_video=false&language=${language}&page=1&sort_by=popularity.desc&with_genres=${selectedGenres}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: authToken,
          },
        });

        const data = await response.json();
        setSearchResults(data.results);
        setLoading(false);
        console.info(url);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [filmType, selectedGenres]);

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div key={result.id} style={{ margin: "10px", width: "200px" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt={result.title || result.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <p>{result.title || result.name}</p>
              </div>
            ))
          ) : (
            <p>Aucun résultat trouvé.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FilterGallery;
