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
              
          <div key={movie.id} className='border rounded-md shadow-lg  w-[200px] bg-[#F8F8FF] '>
            <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}  alt="" />   
            <div className='h-auto p-2 '>
              <h3 className='font-bold line-clamp-2'>{movie.title}</h3>
              <p className='italic line-clamp-2 '>{movie.overview}</p>
              <p className='font-bold'>Release Date: {movie.release_date}</p>
              <p>Popularity: {movie.popularity}</p>
              <p>Rating: {movie.vote_average + "/10"}</p>
              <Link to={`/movie/${movie.id}`}><button className='border mt-3 py-1 px-2 rounded-md hover:bg-green-500 hover:text-white duration-200 font-mono bg-green-300'>More Detail</button></Link>
              
            </div>           
          </div>
           ))}
      </div>
    );
  }
};

export default MovieList;
