import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

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
    <div className='bg-[#FAF9F6]'>
      <Link to="../"><Header /></Link>
      <div className='px-4 pb-4 flex justify-center  '>
        <div className='sm:w-3/4 bg-[#F8F8FF] border rounded-md p-3 shadow-lg'>
          <h2 className='font-bold text-3xl mb-3 text-green-500 text-center'>{movie.title}</h2>
          <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} className='mb-3 mx-auto' alt={movie.title} />
          <p className='text-justify mb-3 text-gray-500'>{movie.overview}</p>
          <p><span className='font-bold text-green-500'>Genres:</span> {genreNames.join(', ')}</p> {/* Display the genres */}
          <p><span className='font-bold text-green-500'>Release Date:</span> {movie.release_date}</p>
          <p><span className='font-bold text-green-500'>Original Language:</span> {movie.original_language}</p>
          <p><span className='font-bold text-green-500'>Popularity:</span> {movie.popularity}</p>
          <p><span className='font-bold text-green-500'>Rating:</span> {movie.vote_average} /10</p>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default MovieDetails;
