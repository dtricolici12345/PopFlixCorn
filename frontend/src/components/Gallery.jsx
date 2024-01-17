import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateGallery from "./CreateGallery";
import "../styles/Gallery.css";

function Gallery() {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

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
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=fr-FR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((err) => console.error(err));
  }, []);

  const researchListGallery = searchResults.slice(0, 14);

  return (
    <div className="A4cards">
      {researchListGallery.map((item) => (
        <CreateGallery
          key={item.id}
          id={item.id}
          title={item.name || item.title}
          imageUrl={item.poster_path || item.profile_path}
          details={item.overview}
          mediaType={item.media_type}
        />
      ))}
    </div>
  );
}

export default Gallery;
