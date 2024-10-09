import React from 'react';

function Community() {
  return (
    <div className='xl:mx-40 lg:mx-20 md:mx-10 mx-5 mb-10' id='community'>
        <div className=" mx-auto ">
            <h2 className="text-center font-semibold text-3xl mb-10  text-gray-800 ">Community</h2>
            <p className="text-gray-600 mb-6">Bergabunglah dalam diskusi dan bagikan pengalaman Anda!</p>

            <div className=" p-4 shadow-lg rounded-lg mb-4 bg-[#F5F7FA]">
                <p className="font-semibold text-gray-700">Damarjati:</p>
                <p className="text-gray-600">"Saya sudah mulai menggunakan tas yang dapat digunakan kembali!"</p>
            </div>

            <div className=" p-4 shadow-lg rounded-lg mb-4 bg-[#F5F7FA]">
                <p className="font-semibold text-gray-700">Suryo:</p>
                <p className="text-gray-600">"Saya ikut serta dalam acara bersih-bersih akhir pekan ini."</p>
            </div>

            <div className=" p-4 shadow-lg rounded-lg bg-[#F5F7FA]">
                <p className="font-semibold text-gray-700">Laksono:</p>
                <p className="text-gray-600">"Saya melakukan penghematan energi dengan beralih ke lampu LED!"</p>
            </div>
        </div>    
    </div>

    
  );
}

export default Community;