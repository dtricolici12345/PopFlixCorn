import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Logo from "../components/Logo/Logo";
// import Menu from "../components/Menu/Menu";
import CarteActeur from "../components/CarteActeur";

import "../components/Logo/Logo.css";
import "../styles/Focus.css";
import watch from "../assets/watch.png";

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
  const [toWatchList, setToWatchList] = useState([]);

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

  // Functions handling the click on "To watch" and "Watched" buttons, updating the local storage
  const handleToWatchClick = () => {
    const newToWatchItem = movieDetail.id || tvDetail.id;
    if (!toWatchList.includes(newToWatchItem)) {
      setToWatchList([newToWatchItem, ...toWatchList]);
    }
  };

  useEffect(() => {
    const storedToWatchList = JSON.parse(localStorage.getItem("toWatchList"));
    if (storedToWatchList) {
      setToWatchList(storedToWatchList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toWatchList", JSON.stringify(toWatchList));
    console.info(toWatchList);
  }, [toWatchList]);

  return (
    <div className="mfocus">
      {/* <Logo isFocus /> */}
      <div className="mfocus-card">
        <div className="mfocus-card-bloc-image">
          <img
            src={
              mediaType === "movie"
                ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
                : `https://image.tmdb.org/t/p/w500${tvDetail.poster_path}`
            }
            alt={mediaType === "movie" ? movieDetail.title : tvDetail.name}
          />
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
              // onClick={handleWatchedClick}
            >
              Vu
            </button>
          </div>
        </div>
      </div>
      <CarteActeur movieId={id} />
      {/* <Menu /> */}
      <div />
    </div>
  );
}
export default Focus;
