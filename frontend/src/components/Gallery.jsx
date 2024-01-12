import React, { useState, useEffect } from "react";
import CreateGallery from "./CreateGallery";

function Gallery() {
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTJhZGFmMTkyNDExODRhZGFhMWI1MzZhZWIwMGRiOCIsInN1YiI6IjY1OTY2OWNkNjBjNTFkM2U5ODk3ODQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvj9pVHbgf2EV009bseL1_lV-oBEY2fUQqzOUqNXaXs",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=fight&include_adult=false&language=fr-FR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((err) => console.error(err));
  }, []);

  const researchListGallery = searchResults.slice(0, 8);

  return (
    <div className="A4cards">
      {researchListGallery.map((item, index) => (
        <CreateGallery
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          title={item.name}
          imageUrl={item.poster_path}
          details={item.overview}
        />
      ))}
    </div>
  );
}

export default Gallery;
