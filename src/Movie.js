import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster }) {
  return (
    <div className="movie">
      <img
        src={poster}
        alt={title}
        title={title}
        width="120px"
      />
      <div class="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
