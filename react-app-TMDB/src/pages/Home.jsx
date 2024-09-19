import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className='flex items-center justify-center  h-screen bg-SchematicLogo bg-no-repeat bg-center'>
        <div className='m-5 sm:w-1/2'>
            <h1 className='font-bold text-3xl text-center pb-2'>Schematic Movie Databases</h1>
            <p className='pb-2 text-gray-500 italic text-justify'>Schematic Movie Database adalah platform pencarian film yang memungkinkan pengguna untuk menemukan dan menelusuri informasi mendetail mengenai film-film favorit mereka. Pengguna dapat dengan mudah mencari judul film dan mendapatkan akses ke data seperti sinopsis, genre, tanggal rilis, durasi, hingga rating film. Dengan antarmuka yang intuitif, Schematic Movie Database dirancang untuk memberikan pengalaman terbaik dalam menemukan informasi film yang dicari</p>
            <SearchBar />
        </div>
    </div>
  );
};

export default Home;
