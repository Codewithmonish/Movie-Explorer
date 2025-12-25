import React, { useState } from "react";
import axios from "axios";
import "./admin.css";  // make sure this file exists!

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    year: "",
    duration: "",
    genre: "",
    rating: "",
    poster: "",
    banner: "",
    cast: "",
    director: "",
  });

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/movies/add", {
        ...movieData,
        cast: movieData.cast.split(","),
      });

      alert("Movie added successfully");
      console.log(response.data);
    } catch (err) {
      alert("Failed to Add Movie");
      console.error(err);
    }
  };

  return (
    <div className="addmovie-container">
      <h2 className="form-title">Add Movie</h2>

      <form className="addmovie-form" onSubmit={handleSubmit}>
        <input className="input-field" name="title" placeholder="Movie Title" onChange={handleChange} />
        <textarea className="input-field" name="description" placeholder="Description" onChange={handleChange} />

        <div className="grid-2">
          <input className="input-field" name="year" placeholder="Year" onChange={handleChange} />
          <input className="input-field" name="duration" placeholder="Duration (minutes)" onChange={handleChange} />
        </div>

        <input className="input-field" name="genre" placeholder="Genre" onChange={handleChange} />
        <input className="input-field" name="rating" placeholder="Rating" onChange={handleChange} />
        <input className="input-field" name="poster" placeholder="Poster URL" onChange={handleChange} />
        <input className="input-field" name="banner" placeholder="Banner URL" onChange={handleChange} />
        <input className="input-field" name="cast" placeholder="Cast (comma separated)" onChange={handleChange} />
        <input className="input-field" name="director" placeholder="Director" onChange={handleChange} />

        <button type="submit" className="netflix-btn">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;




