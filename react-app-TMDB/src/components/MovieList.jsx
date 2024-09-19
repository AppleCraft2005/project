import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p className='font-bold'>{movie.genre}</p>
              <Link to={`/movie/${movie.id}`} style={{ marginLeft: '10px' }}>
              <button style={{ display: 'flex', alignItems: 'center' }}>
                More Details
                <span style={{ marginLeft: '5px' }}>➡️</span> {/* Arrow Icon */}
              </button>
            </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
