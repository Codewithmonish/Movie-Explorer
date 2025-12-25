import "./MovieModal.css";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

        <h2>{movie.title}</h2>
        <p className="rating">⭐ Rating: {movie.vote_average}</p>
        <p className="overview">{movie.overview}</p>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
      

    </div>
  );
}
