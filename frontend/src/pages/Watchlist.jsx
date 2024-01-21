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

  // Function to check if two selected videos are the same
  const isEqual = (obj1, obj2) => {
    return obj1.id === obj2.id;
  };

  // Functions needed to mark movie as watched and to remove from watchlist
  const handleWatchedClick = (selectedVideo) => {
    const checkWatchedList = watchedList.map((item) =>
      isEqual(selectedVideo, item)
    );
    if (!checkWatchedList.includes(true)) {
      setWatchedList([selectedVideo, ...watchedList]);
    }
    const checktoWatchList = toWatchList.map((item) =>
      isEqual(selectedVideo, item)
    );
    if (checktoWatchList.includes(true)) {
      setToWatchList(
        toWatchList.filter((item) => item.id !== selectedVideo.id)
      );
    }
  };

  const handleToWatchClick = (selectedVideo) => {
    const checktoWatchList = toWatchList.map((item) =>
      isEqual(selectedVideo, item)
    );
    if (!checktoWatchList.includes(true)) {
      setToWatchList([selectedVideo, ...toWatchList]);
    }
    const checkWatchedList = watchedList.map((item) =>
      isEqual(selectedVideo, item)
    );
    if (checkWatchedList.includes(true)) {
      setWatchedList(
        watchedList.filter((item) => item.id !== selectedVideo.id)
      );
    }
  };

  const handleDelete = (selectedVideo) => {
    if (toWatchList.includes(selectedVideo)) {
      setToWatchList(
        toWatchList.filter((video) => video.id !== selectedVideo.id)
      );
    }
    if (watchedList.includes(selectedVideo)) {
      setWatchedList(
        watchedList.filter((video) => video.id !== selectedVideo.id)
      );
    }
  };

  // UseEffects handling the storing of new elements in local storage
  useEffect(() => {
    localStorage.setItem("toWatchList", JSON.stringify(toWatchList));
  }, [toWatchList]);

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList]);

  return (
    <div className="watchlist-container">
      <h1>A voir</h1>
      {toWatchList.map((video) => (
        <div key={video.id}>
          <span>{video.id}</span>
          <img
            src={`https://image.tmdb.org/t/p/w500${video.poster}`}
            alt={video.title}
          />
          <div>{video.note}</div>
          <h2>{video.title}</h2>
          <p>{video.id}</p>
          <button type="button" onClick={() => handleWatchedClick(video)}>
            Marquer comme vu
          </button>
          <button type="button" onClick={() => handleDelete(video)}>
            Poubelle
          </button>
        </div>
      ))}
      <h1>Vu</h1>
      {watchedList.map((video) => (
        <div key={video.id}>
          <span>{video.id}</span>
          <img
            src={`https://image.tmdb.org/t/p/w500${video.poster}`}
            alt={video.title}
          />
          <div>{video.note}</div>
          <h2>{video.title}</h2>
          <p>{video.id}</p>
          <button type="button" onClick={() => handleToWatchClick(video)}>
            Marquer comme A voir
          </button>
          <button type="button" onClick={() => handleDelete(video)}>
            Poubelle
          </button>
        </div>
      ))}
    </div>
  );
}

export default WatchList;
