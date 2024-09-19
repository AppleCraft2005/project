import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {

  if(movies.length == 0) {
    return <p>No Movies Found</p>
  }
  else {
    return (
      <div className='flex flex-wrap justify-center gap-5 '>
        {movies.map((movie) => (
              
          <div key={movie.id} className='border rounded-md shadow-lg	 sm:bg-red-300 md:bg-blue-300 lg:bg-green-300 w-[200px]'>
            <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}   alt="" />   
            <div className='h-auto p-2 '>
              <h3 className='font-bold line-clamp-2'>{movie.title}</h3>
              <p className='italic line-clamp-2 '>{movie.overview}</p>
              <p className='font-bold'>Release Date: {movie.release_date}</p>
              <p>Popularity: {movie.popularity}</p>
              <p>Rating: {movie.vote_average + "/10"}</p>
              <button></button>
            </div>           
          </div>
           ))}
      </div>
    );
  }
};

export default MovieList;
