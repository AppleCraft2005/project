import Button from "./Button"
import earth from '../../assets/save-planet-concept-with-people-taking-care-earth.png'
import challenge from '../../assets/12084806_20943960_1.svg'
import leadboard from '../../assets/11668578_20943649.svg'
import reedem from '../../assets/12083346_Wavy_Bus-17_Single-09.svg'

const Main = () => {
    return (
        <main >
            <div className='bg-[#F5F7FA] '>
                <div className="flex md:flex-nowrap flex-wrap xl:mx-40 lg:mx-20 md:mx-10 mx-5 md:pt-20  ">
                    <div className="md:basis-1/2">
                        <h1 className="md:text-[64px] text-4xl font-semibold md:leading-[76px] leading-snug">Bersama Jaga Bumi: <span className="text-ijotua ">Tantangan Hijau untuk Masa Depan</span></h1>
                        <p className="text-[#717171] md:my-8 my-4  ">Ambil langkah kecil untuk perubahan besar ikuti tantangan ramah lingkungan dan buat perbedaan hari ini!</p>
                        <Button>Ikut Tantangannya !</Button>
                    </div>
                    <div className="md:basis-1/2 xl:flex xl:justify-end">
                        <img src={earth} className="w-[30rem]" alt="" />
                    </div>
                </div>
            </div>

            <div className="xl:mx-40 lg:mx-20 md:mx-10 mx-5 py-10">
                <div className="text-center font-semibold text-3xl mb-10">
                    <h1 >Apa itu GreenTI </h1>
                </div>
                <div className="md:flex">
                    <div className="basis-1/2 flex justify-center">
                        <img src={challenge} className="w-64" alt="" />
                    </div>
                    <div className="basis-1/2">
                        <h2 className="font-semibold text-3xl md:mb-4 my-4 text-ijotua">Bersama Wujudkan Masa Depan yang Lebih Hijau</h2>
                        <p className="text-[#717171]">Bergabunglah dengan GreenTI dan ambil bagian dalam tantangan ramah lingkungan yang akan membuat perbedaan nyata. Setiap langkah kecil, mulai dari mengurangi penggunaan plastik hingga menghemat energi, akan membawa kita lebih dekat ke bumi yang lebih sehat dan berkelanjutan.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center font-semibold text-3xl mb-10">
                    <h1>Apa yang kami lakukan</h1>
                </div>
                <div className="flex flex-wrap gap-y-8 justify-evenly mb-10">
                    <div className="border shadow-lg rounded-lg w-[300px] p-4 relative">
                        <div>
                            <img src={challenge} className="w-auto" alt="" />
                        </div>
                        <div className=" text-center">
                            <h2 className="font-bold text-2xl text-ijotua pb-2">Tantangan</h2>
                            <p className="text-sm leading-6">Setiap tantangan ramah lingkungan yang Anda ikuti di GreenTI memberikan poin sebagai penghargaan atas usaha Anda.</p>
                        </div>
                        <div className="text-center sm:absolute bottom-4 left-1/4">
                            <Button>Ikut Tantangan</Button>
                        </div>
                    </div>
                    <div className=" border shadow-lg rounded-lg w-[300px] p-4  ">
                        <div>
                            <img src={reedem} className="w-auto" alt="" />
                        </div>
                        <div className="pb-4 text-center">
                            <h2 className="font-bold text-2xl text-ijotua pb-2">Penukaran Poin</h2>
                            <p className="text-sm leading-6" >Poin yang terkumpul bisa ditukarkan dengan berbagai hadiah menarik atau sertifikat penghargaan sebagai bukti kontribusi Anda dalam menjaga lingkungan.</p>
                        </div>
                        <div className="text-center">
                            <Button>Tukarkan Poin</Button>
                        </div>
                    </div>
                    <div className="border shadow-lg rounded-lg w-[300px] p-4 ">
                        <div >
                            <img src={leadboard} className="w-auto" alt="" />
                        </div>
                        <div className="pb-4 text-center">
                            <h2 className="font-bold text-2xl text-ijotua pb-2">Papan Peringkat</h2>
                            <p className="text-sm leading-6" >Tingkatkan motivasi Anda dengan bersaing di papan peringkat! Lihat posisi Anda dibandingkan dengan teman atau komunitas lainnya berdasarkan poin yang Anda kumpulkan.</p>
                        </div>
                        <div className=" text-center">
                            <Button >Lihat Peringkat</Button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
    
}

export default Main