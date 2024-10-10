import React, { useState } from 'react';
import Button from './ui/Button';

const ChallengeList = ({ onChallengeComplete }) => {
    const [challenges] = useState([
        { id: 1, title: 'Kurangi Penggunaan Plastik', points: 10 },
        { id: 2, title: 'Hemat Listrik Sehari', points: 15 },
        { id: 3, title: 'Bersih-bersih Lingkungan', points: 20 },
        { id: 4, title: 'Berangkat dengan moda transportasi ramah lingkungan', points: 25 },
        { id: 5, title: 'Membuat konten mengajak orang lain untuk peduli lingkungan', points: 30 },
    ]);

    return (
        <div className='bg-[#F5F7FA]'>
            <div className='xl:mx-40 lg:mx-20 md:mx-10 mx-5 py-10 mb-10 '>
                <h2 className='text-center font-semibold text-3xl mb-10'>Tantangan Ramah Lingkungan</h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {challenges.map((challenge) => (
                        <li key={challenge.id} className='bg-white p-6 rounded-lg shadow-md flex justify-between items-center'>
                            {challenge.title} - {challenge.points} poin
                            <button onClick={() => onChallengeComplete(challenge)} className="py-2 px-5 bg-ijotua text-white rounded-md hover:bg-[#3d8e40] duration-300">Selesaikan</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChallengeList;