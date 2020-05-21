import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const {
        year,
        title,
        summary,
        poster,
        genres,
      } = location.state;
      return (
        <div className="movie-detail">
          <img src={poster} />
          <div className="detail__data">
            <h2>{title}</h2>
            <p>
              {year} |
              {genres.map((genre, idx) =>
                idx === genres.length - 1 ? (
                  <span> {genre}</span>
                ) : (
                  <span> {genre} ∙</span>
                )
              )}
            </p>
            <p>{summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
