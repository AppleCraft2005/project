import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#FAF9F6]'>
        <Header />
        <div className='flex items-center justify-center  min-h-screen '>
            <div className=' sm:w-3/4 xl:w-1/2'>
            <div className='flex flex-wrap gap-3 justify-center mb-3'>
                <img src="https://image.tmdb.org/t/p/w200/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg" alt="" className='rounded-lg shadow-lg'/>
                <img src="https://image.tmdb.org/t/p/w200//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="" className='rounded-lg shadow-lg'/>
                <img src="https://image.tmdb.org/t/p/w200//gOiBEEK6C0ZB5r7SXt1zD1YV7rg.jpg" alt="" className='rounded-lg shadow-lg'/>
            </div>
                <h1 className='font-bold text-3xl text-center pb-4'>Schematic Movies Databases</h1>
                <p className=' text-gray-500 italic text-justify pb-4'>Schematic Movie Database adalah platform pencarian film yang memungkinkan pengguna untuk menemukan dan menelusuri informasi mendetail mengenai film-film favorit mereka. Pengguna dapat dengan mudah mencari judul film dan mendapatkan akses ke data seperti sinopsis, genre, tanggal rilis, durasi, hingga rating film. Dengan antarmuka yang intuitif, Schematic Movie Database dirancang untuk memberikan pengalaman terbaik dalam menemukan informasi film yang dicari</p>
                <SearchBar />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Home;
