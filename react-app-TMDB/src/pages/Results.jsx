import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header"
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'


const API_KEY = '55459cf8dec27b4442e97f5d79b2e662';

const Results = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        setMovies(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div className=' bg-[#FAF9F6] '>
      <Link to="../"><Header /></Link>
      <SearchBar />
      <h2 className='font-bold text-center text-xl '>Search Results for "{query}"</h2>
      <div className='p-4'>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      </div>
      <Footer />
    </div>
  );
};

export default Results;
