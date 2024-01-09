import React, { useState } from "react";
import "../styles/Home.css";

function Home() {
  // Valeur de searchQuery par défaut est vide
  const [searchQuery, setSearchQuery] = useState("");

  // Function pour la recherche
  const handleSearch = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDA5OWZiMmIwZjMxNGY5YmIzMjJjNzY2MGExMWVmNSIsInN1YiI6IjY1OTg0OTc3MWQxYmY0MDFhOGU0YmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Qtip1eiVi7XgfcZBaGDsa5LzjXMd4Ym3Ems_tmCiTQ",
      },
    };
    // Fetch de l'api
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=fr-FR&page=1`,
      options
    )
      // Si il y a une reponse
      .then((response) => response.json())
      .then((response) => {
        // Si il y'a des résultats
        if (response.results) {
          // Slice pour en avoir que 8 + Map des résultats pour montrer chaque résultats
          response.results.slice(0, 8).map((result) => {
            // console.log(result);
            console.info("Nom:", result.name || result.title);
            console.info("ID:", result.id);
            console.info("Poster:", result.poster_path);
            console.info("Synopsis:", result.overview);
            console.info("---------------------");
            return null;
          });
          // Si ça ne trouve pas
        } else {
          console.error("Aucun résultat trouvé.");
        }
      })
      // Log l'erreur si y'a une erreur
      .catch((err) => console.error(err));
  };
  // Si la touche "Entrée" est pressé => function handleKeyPress
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="Home">
      <main>
        {/* Logo à mettre */}
        <div className="search">
          <input
            type="text"
            id="searchBar"
            placeholder="Tapez votre recherche"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <span className="line" />
          {/* dé à mettre */}
          {/* Sugestion à mettre  */}
        </div>
        {/* Navbar à mettre */}
        <div className="color" />
      </main>
    </div>
  );
}

export default Home;
