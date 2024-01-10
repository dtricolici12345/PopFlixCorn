import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Focus.css";

function Focus({ movie }) {
  Focus.propTypes = {
    movie: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=1e2adaf19241184adaa1b536aeb00db8&language=fr-FR&region=FR`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
      .catch((err) => console.info(err));
  }, [movie.id]);

  console.info(movieDetail);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = (totalMinutes - hours) % 60;
    return `${hours}h${minutes}m`;
  };

  return (
    <div className="mfocus-card">
      <div className="mfocus-card-bloc-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        <div className="mfocus-note">
          {Math.round(movieDetail.vote_average * 10)}%
        </div>
      </div>
      <div className="mfocus-card-text">
        <div className="mfocus-firstline">
          <span className="mfocus-title">{movieDetail.title} </span>
          <span className="mfocus-year-time">
            ({movieDetail.release_date?.slice(0, 4)} -
            {toHoursAndMinutes(movieDetail.runtime)})
          </span>
        </div>
        <div className="mfocus-secondline">
          <span className="mfocus-certification">age</span>
          <span className="mfocus-genre">
            {movieDetail.genres?.map((genre, index) =>
              index === movieDetail.genres.length - 1
                ? `${genre.name}`
                : `${genre.name}, `
            )}
          </span>
        </div>
        <div className="mfocus-tagline">{movieDetail.tagline}</div>
        <div className="mfocus-overview">{movieDetail.overview}</div>
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
