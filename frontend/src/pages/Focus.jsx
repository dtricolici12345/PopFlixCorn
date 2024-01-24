import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarteActeur from "../components/CarteActeur";
import "../components/Logo/Logo.css";
import "../styles/Focus.css";
import watch from "../assets/watch.png";
import NoPopCorn from "../assets/NoPopCorn.png";
import ChecklistIcon from "../assets/checklist.png";

function Focus() {
  const { id, mediaType } = useParams();
  // console.info("ID:", id);
  // console.info("mediaType:", mediaType);

  // States needed to display required informations on videos
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieCertification, setMovieCertification] = useState([]);
  const [tvDetail, setTvDetail] = useState([]);
  const [tvCertification, setTvCertification] = useState([]);

  // States needed to store data in local Storage, needed for the watchlist component
  const [toWatchList, setToWatchList] = useState(() => {
    return JSON.parse(localStorage.getItem("toWatchList")) || [];
  });
  const [watchedList, setWatchedList] = useState(() => {
    return JSON.parse(localStorage.getItem("watchedList")) || [];
  });

  // State needed to display popup
  const [isPopupClosed, setIsPopupClosed] = useState(true);

  // Function needed to define the border color around the note of the video
  const getBorderColor = () => {
    const note =
      mediaType === "movie"
        ? Math.round(movieDetail.vote_average * 10)
        : Math.round(tvDetail.vote_average * 10);
    if (note < 50) return "border-red";
    if (note < 70) return "border-orange";
    return "border-green";
  };

  // Function needed to display videos' runtimes in a days/hours/minutes format
  const toDaysHoursAndMinutes = (totalMinutes) => {
    const days = Math.floor(totalMinutes / 1440);
    const remainingMinutes = totalMinutes - days * 1440;
    const hours = Math.floor(remainingMinutes / 60);
    const minutes = Math.floor(remainingMinutes - hours * 60);
    if (days >= 1) return `${days}j ${hours}h ${minutes}min`;
    return `${hours}h ${minutes}min`;
  };

  // Fetching data from TMDB API
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
      .catch((err) => console.info(err));
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setMovieCertification(data.results))
      .catch((err) => console.info(err));
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setTvDetail(data))
      .catch((err) => console.info(err));
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setTvCertification(data.results))
      .catch((err) => console.info(err));
  }, [id, mediaType]);

  // console.info(movieDetail);
  // console.info(movieCertification);
  // console.info(tvDetail);
  // console.info(tvCertification);

  // Function to check if two selected videos are the same
  const isEqual = (obj1, obj2) => {
    return obj1.id === obj2.id && obj1.media === obj2.media;
  };

  // Function handling the click on "To watch" and "Watched" buttons, adding the video to the watchlist, and opening the popup
  const handleToWatchClick = () => {
    const newItem = {
      media: mediaType,
      id: mediaType === "movie" ? movieDetail.id : tvDetail.id,
      title: mediaType === "movie" ? movieDetail.title : tvDetail.name,
      poster:
        mediaType === "movie" ? movieDetail.poster_path : tvDetail.poster_path,
      note:
        mediaType === "movie"
          ? movieDetail.vote_average
          : tvDetail.vote_average,
      key:
        mediaType === "movie"
          ? mediaType + movieDetail.id
          : mediaType + tvDetail.id,
    };
    const checktoWatchList = toWatchList.map((item) => isEqual(newItem, item));
    if (!checktoWatchList.includes(true)) {
      setToWatchList([newItem, ...toWatchList]);
    }
    const checkWatchedList = watchedList.map((item) => isEqual(newItem, item));
    if (checkWatchedList.includes(true)) {
      setWatchedList(
        watchedList.filter(
          (item) => !(item.id === newItem.id && item.media === newItem.media)
        )
      );
    }
    setIsPopupClosed(false);
    document.body.classList.add("popup-open");
  };

  const handleWatchedClick = () => {
    const newItem = {
      media: mediaType,
      id: movieDetail.id || tvDetail.id,
      title: mediaType === "movie" ? movieDetail.title : tvDetail.name,
      poster:
        mediaType === "movie" ? movieDetail.poster_path : tvDetail.poster_path,
      note:
        mediaType === "movie"
          ? movieDetail.vote_average
          : tvDetail.vote_average,
      key:
        mediaType === "movie"
          ? mediaType + movieDetail.id
          : mediaType + tvDetail.id,
    };
    const checkWatchedList = watchedList.map((item) => isEqual(newItem, item));
    if (!checkWatchedList.includes(true)) {
      setWatchedList([newItem, ...watchedList]);
    }
    const checktoWatchList = toWatchList.map((item) => isEqual(newItem, item));
    if (checktoWatchList.includes(true)) {
      setToWatchList(
        toWatchList.filter(
          (item) => !(item.id === newItem.id && item.media === newItem.media)
        )
      );
    }
    setIsPopupClosed(false);
    document.body.classList.add("popup-open");
  };

  const handleClosePopup = () => {
    setIsPopupClosed(true);
    document.body.classList.remove("popup-open");
  };

  // UseEffects handling the storing of new elements in local storage
  useEffect(() => {
    localStorage.setItem("toWatchList", JSON.stringify(toWatchList));
  }, [toWatchList]);

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList]);

  return (
    <div className="mfocus">
      <div
        className={`mfocus-overlay ${isPopupClosed ? "popup-closed" : ""}`}
      />
      <div className={`mfocus-popup ${isPopupClosed ? "popup-closed" : ""}`}>
        <div>Titre ajouté ! </div>
        <div className="mfocus-popup-iconline">
          <span> Retrouvez votre sélection dans l'onglet</span>
          <img src={ChecklistIcon} alt="icone checklist" />
        </div>
        <button type="button" onClick={handleClosePopup}>
          OK
        </button>
      </div>
      <div className="mfocus-card">
        <div className="mfocus-card-bloc-image">
          {movieDetail.poster_path || tvDetail.poster_path ? (
            <img
              src={
                mediaType === "movie"
                  ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
                  : `https://image.tmdb.org/t/p/w500${tvDetail.poster_path}`
              }
              alt={mediaType === "movie" ? movieDetail.title : tvDetail.name}
            />
          ) : (
            <img src={NoPopCorn} alt="No poster" />
          )}
          <div className={`mfocus-note ${getBorderColor()}`}>
            {mediaType === "movie"
              ? Math.round(movieDetail.vote_average * 10)
              : Math.round(tvDetail.vote_average * 10)}
            %
          </div>
        </div>
        <div className="mfocus-card-text">
          <div className="mfocus-firstline">
            <span className="mfocus-title">
              {mediaType === "movie" ? movieDetail.title : tvDetail.name}
            </span>
            <span className="mfocus-year">
              (
              {mediaType === "movie"
                ? movieDetail.release_date?.slice(0, 4)
                : tvDetail.first_air_date?.slice(0, 4)}
              {mediaType === "tv" && ` - ${tvDetail.number_of_seasons} saisons`}
              )
            </span>
          </div>
          <div className="mfocus-secondline">
            {(mediaType === "movie" &&
              movieCertification?.length > 0 &&
              movieCertification.some(
                (certification) =>
                  certification.iso_3166_1 === "FR" &&
                  certification.release_dates.length > 0 &&
                  certification.release_dates.some(
                    (date) => date.certification !== ""
                  )
              )) ||
            (mediaType === "tv" &&
              tvCertification?.length > 0 &&
              tvCertification.some((rating) => rating.iso_3166_1 === "FR")) ? (
              <span className="mfocus-certification">
                {mediaType === "movie" &&
                  movieCertification
                    .find((certification) => certification.iso_3166_1 === "FR")
                    .release_dates.find((date) => date.certification !== "")
                    ?.certification}

                {mediaType === "tv" &&
                  tvCertification.find((rating) => rating.iso_3166_1 === "FR")
                    ?.rating}
              </span>
            ) : null}
            <span className="mfocus-genre">
              {mediaType === "movie"
                ? movieDetail.genres?.map((genre, index) =>
                    index === movieDetail.genres.length - 1
                      ? `${genre.name}`
                      : `${genre.name}, `
                  )
                : tvDetail.genres?.map((genre, index) =>
                    index === tvDetail.genres.length - 1
                      ? `${genre.name}`
                      : `${genre.name}, `
                  )}
            </span>
            <img src={watch} alt="time" />
            <span className="mfocus-time">
              {mediaType === "movie"
                ? toDaysHoursAndMinutes(movieDetail.runtime)
                : toDaysHoursAndMinutes(
                    tvDetail.number_of_episodes * tvDetail.episode_run_time
                  )}
            </span>
          </div>
          <div className="mfocus-tagline">
            {mediaType === "movie" ? movieDetail.tagline : tvDetail.tagline}
          </div>
          <div className="mfocus-overview">
            {mediaType === "movie" ? movieDetail.overview : tvDetail.overview}
          </div>
          <div className="mfocus-wrap-btn">
            <button
              type="button"
              className="mfocus-button"
              onClick={handleToWatchClick}
            >
              A voir
            </button>
            <button
              type="button"
              className="mfocus-button"
              onClick={handleWatchedClick}
            >
              Vu
            </button>
          </div>
        </div>
      </div>
      <CarteActeur id={id} mediaType={mediaType} />
      <div />
    </div>
  );
}
export default Focus;
