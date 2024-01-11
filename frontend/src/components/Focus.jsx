import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Focus.css";
import logo from "../assets/watch.png";

function Focus({ video }) {
  Focus.propTypes = {
    video: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    media_type: PropTypes.string.isRequired,
  };

  const [movieDetail, setMovieDetail] = useState([]);
  const [movieCertification, setMovieCertification] = useState([]);
  const [tvDetail, setTvDetail] = useState([]);
  const [tvCertification, setTvCertification] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${video.id}?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
      .catch((err) => console.info(err));
    fetch(
      `https://api.themoviedb.org/3/movie/${video.id}/release_dates?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setMovieCertification(data.results))
      .catch((err) => console.info(err));
    fetch(
      `https://api.themoviedb.org/3/tv/${video.id}?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setTvDetail(data))
      .catch((err) => console.info(err));
    fetch(
      `https://api.themoviedb.org/3/tv/${video.id}/content_ratings?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setTvCertification(data.results))
      .catch((err) => console.info(err));
  }, [video.id]);

  // console.info(movieDetail);
  // console.info(movieCertification);
  // console.info(tvDetail);
  // console.info(tvCertification);

  const getBorderColor = () => {
    const note =
      video.media_type === "movie"
        ? Math.round(movieDetail.vote_average * 10)
        : Math.round(tvDetail.vote_average * 10);
    if (note < 50) return "border-red";
    if (note < 70) return "border-orange";
    return "border-green";
  };

  const toDaysHoursAndMinutes = (totalMinutes) => {
    const days = Math.floor(totalMinutes / 1440);
    const remainingMinutes = totalMinutes - days * 1440;
    const hours = Math.floor(remainingMinutes / 60);
    const minutes = Math.floor(remainingMinutes - hours * 60);
    if (days >= 1) return `${days}j ${hours}h ${minutes}min`;
    return `${hours}h ${minutes}min`;
  };

  console.info(toDaysHoursAndMinutes(112));

  return (
    <div className="mfocus-card">
      <div className="mfocus-card-bloc-image">
        <img
          src={
            video.media_type === "movie"
              ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
              : `https://image.tmdb.org/t/p/w500${tvDetail.poster_path}`
          }
          alt={video.media_type === "movie" ? movieDetail.title : tvDetail.name}
        />
        <div className={`mfocus-note ${getBorderColor()}`}>
          {video.media_type === "movie"
            ? Math.round(movieDetail.vote_average * 10)
            : Math.round(tvDetail.vote_average * 10)}
          %
        </div>
      </div>
      <div className="mfocus-card-text">
        <div className="mfocus-firstline">
          <span className="mfocus-title">
            {video.media_type === "movie" ? movieDetail.title : tvDetail.name}
          </span>
          <span className="mfocus-year">
            (
            {video.media_type === "movie"
              ? movieDetail.release_date?.slice(0, 4)
              : tvDetail.first_air_date?.slice(0, 4)}
            {video.media_type === "tv" &&
              ` - ${tvDetail.number_of_seasons} saisons`}
            )
          </span>
        </div>
        <div className="mfocus-secondline">
          <span className="mfocus-certification">
            {video.media_type === "movie"
              ? movieCertification.find(
                  (certification) => certification.iso_3166_1 === "FR"
                )?.release_dates[0]?.certification
              : tvCertification.find((rating) => rating.iso_3166_1 === "FR")
                  ?.rating}
          </span>
          <span className="mfocus-genre">
            {video.media_type === "movie"
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
          <img src={logo} alt="time" />
          <span className="mfocus-time">
            {video.media_type === "movie"
              ? toDaysHoursAndMinutes(movieDetail.runtime)
              : toDaysHoursAndMinutes(
                  tvDetail.number_of_episodes * tvDetail.episode_run_time
                )}
          </span>
        </div>
        <div className="mfocus-tagline">
          {video.media_type === "movie"
            ? movieDetail.tagline
            : tvDetail.tagline}
        </div>
        <div className="mfocus-overview">
          {video.media_type === "movie"
            ? movieDetail.overview
            : tvDetail.overview}
        </div>
        <div>
          <button type="button" className="mfocus-button">
            A voir
          </button>
          <button type="button" className="mfocus-button">
            Vu
          </button>
        </div>
      </div>
    </div>
  );
}
export default Focus;
