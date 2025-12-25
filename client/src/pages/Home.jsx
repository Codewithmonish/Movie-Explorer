// src/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY =
  import.meta.env.VITE_TMDB_API_KEY || "5d5cf59c60cb22c29b1c1eacbf023276";
const BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [activeTab, setActiveTab] = useState("top-rated");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [cast, setCast] = useState([]);

  const fetchGenres = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: { api_key: API_KEY },
      });
      setGenres(res.data.genres || []);
    } catch (err) {
      console.log("Genre error:", err);
    }
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      let params = {
        api_key: API_KEY,
        include_adult: false,
      };

      if (selectedGenre) params.with_genres = selectedGenre;

      if (activeTab === "top-rated") params.sort_by = "vote_average.desc";
      if (activeTab === "latest") params.sort_by = "release_date.desc";
      if (activeTab === "popular") params.sort_by = "popularity.desc";
      if (activeTab === "most-watched") params.sort_by = "revenue.desc";

      const res = await axios.get(`${BASE_URL}/discover/movie`, { params });
      setMovies(res.data.results || []);
    } catch (err) {
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, [activeTab, selectedGenre]);

  const openMovieModal = async (movie) => {
    setSelectedMovie(movie);

    try {
      const res = await axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
        params: { api_key: API_KEY },
      });

      const youtubeTrailer = res.data.results.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );

      setTrailerKey(youtubeTrailer ? youtubeTrailer.key : null);
    } catch {
      setTrailerKey(null);
    }

    try {
      const res2 = await axios.get(`${BASE_URL}/movie/${movie.id}/credits`, {
        params: { api_key: API_KEY },
      });
      setCast(res2.data.cast.slice(0, 8));
    } catch {
      setCast([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return fetchMovies();

    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query: searchTerm },
      });
      setMovies(res.data.results || []);
    } catch {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedGenre("");
    setActiveTab("top-rated");
    fetchMovies();
  };

  return (
    <div className="app">
      {/* 🔍 Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {/* ⭐ Top Tabs */}
      <div className="sort-center">
        {[
          { id: "top-rated", label: "⭐ Top IMDb" },
          { id: "latest", label: "🕒 Latest" },
          { id: "popular", label: "🔥 Popular" },
          { id: "most-watched", label: "💰 Most Watched" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`page-btn ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 🎭 Filter Section */}
      <div className="filters-section">
        <div className="filter-group">
          <label>Genre:</label>
          <select
            className="filter-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        <button className="clear-filter-btn" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {/* 🎬 Movie List */}
      {loading ? (
        <div className="movie-grid">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="movie-card skeleton"></div>
            ))}
        </div>
      ) : movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => openMovieModal(movie)}
            >
              <div className="movie-poster-container">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  className="movie-poster"
                  alt={movie.title}
                />
                <div className="imdb-rating">
                  ⭐ {movie.vote_average?.toFixed(1)}
                </div>
              </div>

              <div className="movie-overlay">
                <h3>{movie.title}</h3>
                <p>⭐ IMDb: {movie.vote_average?.toFixed(1)}</p>
                <p>📅 {movie.release_date}</p>
                <p className="overview">
                  {movie.overview?.slice(0, 100) || "No description"}...
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">No movies found.</div>
      )}

      {/* 🎥 Modal */}
      {selectedMovie && (
        <div
          className="modal-overlay blur-bg"
          onClick={() => setSelectedMovie(null)}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedMovie(null)}
            >
              ✖
            </button>

            <img
              src={
                selectedMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              className="modal-poster"
            />

            <h2>{selectedMovie.title}</h2>
            <p>⭐ {selectedMovie.vote_average?.toFixed(1)}</p>
            <p>📅 {selectedMovie.release_date}</p>
            <p>{selectedMovie.overview}</p>

            {trailerKey ? (
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                allowFullScreen
                className="trailer-box"
              />
            ) : (
              <p>No Trailer Available</p>
            )}

            <h3>Cast</h3>
            <div className="cast-grid">
              {cast.map((actor) => (
                <div key={actor.id} className="cast-card">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    className="cast-img"
                  />
                  <p>{actor.name}</p>
                  <small>as {actor.character}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

