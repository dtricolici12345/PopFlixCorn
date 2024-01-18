import React, { useState, useEffect } from "react";

function WatchList() {
  // State pour stocker la liste des films à regarder
  const [watchList, setWatchList] = useState([]);

  // Effet pour récupérer la liste des films à regarder depuis le local storage
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem("toWatchList"));
    if (storedWatchList) {
      setWatchList(storedWatchList);
    }
  }, []);

  return (
    <div className="watchlist-container">
      <h2>A voir</h2>
      <ul>
        {watchList.map((movieId) => (
          <li key={movieId}>
            <p>Film ID: {movieId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchList;
