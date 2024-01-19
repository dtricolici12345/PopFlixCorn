import React, { useState, useEffect } from "react";
import "../styles/Watchlist.css";
// import NoPopCorn from "../assets/NoPopCorn.png";

function WatchList() {
  const [toWatchList, setToWatchList] = useState(() => {
    return JSON.parse(localStorage.getItem("toWatchList")) || [];
  });
  const [watchedList, setWatchedList] = useState(() => {
    return JSON.parse(localStorage.getItem("watchedList")) || [];
  });

  // Functions needed to mark movie as watched and to remove from watchlist
  const handleToWatched = (selectedVideo) => {
    if (!watchedList.includes(selectedVideo)) {
      setWatchedList([selectedVideo, ...watchedList]);
    }
    if (toWatchList.includes(selectedVideo)) {
      setToWatchList(toWatchList.filter((item) => item !== selectedVideo));
    }
  };

  const handleBackToWatch = (selectedVideo) => {
    if (watchedList.includes(selectedVideo)) {
      setWatchedList(watchedList.filter((video) => video !== selectedVideo));
    }
    if (!toWatchList.includes(selectedVideo)) {
      setToWatchList([selectedVideo, ...toWatchList]);
    }
  };

  const handleDelete = (selectedVideo) => {
    if (toWatchList.includes(selectedVideo)) {
      setToWatchList(toWatchList.filter((video) => video !== selectedVideo));
    }
    if (watchedList.includes(selectedVideo)) {
      setWatchedList(watchedList.filter((video) => video !== selectedVideo));
    }
  };

  // UseEffects handling the storing of new elements in local storage
  useEffect(() => {
    localStorage.setItem("toWatchList", JSON.stringify(toWatchList));
    console.info(toWatchList);
  }, [toWatchList]);

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
    console.info(watchedList);
  }, [watchedList]);

  return (
    <div className="watchlist-container">
      <h1>A voir</h1>
      {toWatchList.map((id) => (
        <div key={id}>
          <span>{id}</span>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${video.poster}`}
            alt={video.titel}
          />
          <div>{video.note}</div>
          <h2>{video.title}</h2>
          <p>{video.id}</p> */}
          <button type="button" onClick={() => handleToWatched(id)}>
            Marquer comme vu
          </button>
          <button type="button" onClick={() => handleDelete(id)}>
            Poubelle
          </button>
        </div>
      ))}
      <h1>Vu</h1>
      {watchedList.map((id) => (
        <div key={id}>
          <span>{id}</span>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${video.poster}`}
            alt={video.title}
          />
          <div>{video.note}</div>
          <h2>{video.title}</h2>
          <p>{video.id}</p> */}
          <button type="button" onClick={() => handleBackToWatch(id)}>
            Marquer comme A voir
          </button>
          <button type="button" onClick={() => handleDelete(id)}>
            Poubelle
          </button>
        </div>
      ))}
    </div>
  );
}

export default WatchList;
