import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Watchlist.css";
import ViewIcon from "../assets/view.png";
import HideIcon from "../assets/hide.png";
import BinIcon from "../assets/bin.png";
import NoPopCorn from "../assets/NoPopCorn.png";

function WatchList() {
  const [toWatchList, setToWatchList] = useState(() => {
    return JSON.parse(localStorage.getItem("toWatchList")) || [];
  });
  const [watchedList, setWatchedList] = useState(() => {
    return JSON.parse(localStorage.getItem("watchedList")) || [];
  });

  // Function needed to define the border color around the note of the video
  const getBorderColor = (note) => {
    if (note < 50) return "border-red";
    if (note < 70) return "border-orange";
    return "border-green";
  };

  // Function to check if two selected videos are the same
  const isEqual = (obj1, obj2) => {
    return obj1.id === obj2.id && obj1.media === obj2.media;
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
        toWatchList.filter(
          (item) =>
            !(
              item.id === selectedVideo.id && item.media === selectedVideo.media
            )
        )
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
        watchedList.filter(
          (item) =>
            !(
              item.id === selectedVideo.id && item.media === selectedVideo.media
            )
        )
      );
    }
  };

  const handleDelete = (selectedVideo) => {
    console.info(selectedVideo);
    if (toWatchList.includes(selectedVideo)) {
      setToWatchList(
        toWatchList.filter((video) => video.id !== selectedVideo.id)
      );
    }
    if (watchedList.includes(selectedVideo)) {
      setWatchedList(
        watchedList.filter(
          (video) =>
            !(
              video.id === selectedVideo.id &&
              video.media === selectedVideo.media
            )
        )
      );
    }
  };

  // UseEffects handling the storing of new elements in local storage
  useEffect(() => {
    localStorage.setItem("toWatchList", JSON.stringify(toWatchList));
  }, [toWatchList, watchedList]);

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList, toWatchList]);

  return (
    <div className="container-watchlist">
      <h1>A voir</h1>
      <div className="container-watchlistcards">
        {toWatchList.map((video) => (
          <div key={video.key} className="card-watchlist">
            <div className="card-watchlist-img">
              <Link to={`/focus/${video.media}/${video.id}`}>
                {video.poster ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${video.poster}`}
                    alt={video.title}
                  />
                ) : (
                  <img src={NoPopCorn} alt="No poster" />
                )}
              </Link>
              <div
                className={`watchlist-note ${getBorderColor(
                  Math.round(video.note * 10)
                )}`}
              >
                {Math.round(video.note * 10)}%
              </div>
            </div>
            <div className="card-watchlist-box">
              <h2>{video.title}</h2>
              <div className="container-icon-watchlist">
                <img
                  className="icon-watchlist"
                  src={ViewIcon}
                  onClick={() => handleWatchedClick(video)}
                  alt="Vu"
                  title="Marquer comme vu"
                />
                <img
                  className="icon-watchlist"
                  src={BinIcon}
                  onClick={() => handleDelete(video)}
                  alt="Poubelle"
                  title="Supprimer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>Vu</h1>
      <div className="container-watchlistcards">
        {watchedList.map((video) => (
          <div key={video.key} className="card-watchlist watched-appearance">
            <div className="card-watchlist-img">
              <Link to={`/focus/${video.media}/${video.id}`}>
                {video.poster ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${video.poster}`}
                    alt={video.title}
                  />
                ) : (
                  <img src={NoPopCorn} alt="No poster" />
                )}
              </Link>
              <div
                className={`watchlist-note ${getBorderColor(
                  Math.round(video.note * 10)
                )}`}
              >
                {Math.round(video.note * 10)}%
              </div>
            </div>
            <div className="card-watchlist-box">
              <h2>{video.title}</h2>
              <div className="container-icon-watchlist">
                <img
                  className="icon-watchlist"
                  src={HideIcon}
                  onClick={() => handleToWatchClick(video)}
                  alt="A voir"
                  title="Marquer comme A voir"
                />
                <img
                  className="icon-watchlist"
                  src={BinIcon}
                  onClick={() => handleDelete(video)}
                  alt="Poubelle"
                  title="Supprimer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
