import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Random from "../components/Random";
// import Menu from "../components/Menu/Menu";
// import Logo from "../components/Logo/Logo";
import "../styles/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTJhZGFmMTkyNDExODRhZGFhMWI1MzZhZWIwMGRiOCIsInN1YiI6IjY1OTY2OWNkNjBjNTFkM2U5ODk3ODQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvj9pVHbgf2EV009bseL1_lV-oBEY2fUQqzOUqNXaXs",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=fr-FR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results) {
          setSearchResults(response.results.slice(0, 8));
          console.info("Search Results:", response.results.slice(0, 8));
        } else {
          setSearchResults([]);
          console.error("No results found.");
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleSearch();
    }, 100);

    return () => clearTimeout(delaySearch);
  }, [searchQuery]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      window.location.href = `/gallery/${searchQuery}`;
    }
  };
  return (
    <div
      className="Home"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "0px",
      }}
    >
      <main>
        <div className="search">
          {/* <Logo /> */}
          <div className="searchbar-container">
            <input
              type="text"
              id="searchBar"
              placeholder="Tapez votre recherche"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
              onKeyPress={handleKeyPress}
            />
            <span className="line" />
            <Random className="dice" />
          </div>
          <div className="suggests">
            {searchResults ? (
              searchResults.map((result) => (
                <div className="suggest" key={result.id}>
                  <Link to={`/gallery/${result.title || result.name}`}>
                    <p>{result.title || result.name}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p className="errorcode">
                {searchResults.length === 0 && searchQuery !== ""
                  ? "Aucun résultat"
                  : ""}
              </p>
            )}
          </div>
        </div>
        <div className="color" />
        {/* <Menu /> */}
      </main>
    </div>
  );
}

export default Home;
