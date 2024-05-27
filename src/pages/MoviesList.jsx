// components/MoviesList.js
import { useEffect, useState } from 'react';
import { fetchMovies, deleteMovie } from '../api.js';
import StarRating from '../components/StarRating.jsx';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    loadMovies();
  }, []);

  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card h-100">
              <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
              <div className="text-center"><StarRating rating={movie.rating} /></div>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-muted small">
                  {new Date(movie.release_date).toLocaleDateString()}
                  <br />
                  {movie.genre}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-info btn-sm" onClick={() => setSelectedMovie(movie)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
