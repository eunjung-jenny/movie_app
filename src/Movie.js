import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img
        src={poster}
        alt={title}
        title={title}
        width="120px"
      />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {summary.length > 400
            ? `${summary.slice(0, 400)}...`
            : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
