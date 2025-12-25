import React from "react";
import Slider from "react-slick";
import "./MovieRow.css";

const MovieRow = ({ title, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <div className="row-container">
      <h2 className="row-title">{title}</h2>

      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <p className="movie-name">{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieRow;
