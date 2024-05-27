import { useState } from 'react';
import { addMovie, updateMovie } from '../apiClient';

const MovieForm = ({ movie }) => {
  const [title, setTitle] = useState(movie ? movie.title : '');
  const [genre, setGenre] = useState(movie ? movie.genre : '');
  const [releaseDate, setReleaseDate] = useState(movie ? movie.release_date : '');
  const [rating, setRating] = useState(movie ? movie.rating : '');

  const handleSave = async () => {
    const moviesData = await fetchMovies();
    setMovies(moviesData);
    setSelectedMovie(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movieData = { title, genre, release_date: releaseDate, rating };
    if (movie) {
      await updateMovie(movie.id, movieData);
    } else {
      await addMovie(movieData);
    }
    handleSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Release Date</label>
        <input
          type="date"
          className="form-control"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rating</label>
        <input
          type="number"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default MovieForm;
