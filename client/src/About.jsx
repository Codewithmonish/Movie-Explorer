import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About Movie Explorer</h1>
      <p className="page-text">
        Movie Explorer is a modern web application designed to help movie lovers 
        discover top IMDb films, latest releases, most popular hits, and much more. 
        Our platform uses The Movie Database (TMDB) API to provide real-time data 
        including ratings, genres, release dates, and detailed descriptions.
      </p>

      <p className="page-text">
        You can search movies, filter by genre, and explore different categories 
        such as Top IMDb, Most Watched, Latest Releases, and Popular Movies.
      </p>

      <p className="page-text">
        Our mission is to make movie discovery simple, clean, visually stunning, 
        and user-friendly for everyone.
      </p>
    </div>
  );
};

export default About;
