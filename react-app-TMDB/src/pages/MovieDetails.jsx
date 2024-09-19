import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '55459cf8dec27b4442e97f5d79b2e662';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(movieResponse.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchGenres = async () => {
      try {
        const genresResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        setGenres(genresResponse.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchMovieDetails();
    fetchGenres();
    setLoading(false);
  }, [id]);

  const getGenreNames = (genreIds) => {
    if (!genreIds || genres.length === 0) return [];

    return genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : '';
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const genreNames = getGenreNames(movie.genres.map((genre) => genre.id));

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Genres: {genreNames.join(', ')}</p> {/* Display the genres */}
    </div>
  );
};

export default MovieDetails;
