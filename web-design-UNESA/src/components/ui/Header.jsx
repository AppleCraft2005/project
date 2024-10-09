import Button from './Button'

const Header = () => {
    return (
        <div className='bg-white'>
            <header className=" flex justify-between items-center py-4 xl:mx-40 lg:mx-20 md:mx-10 mx-5 ">
                <div>
                    <h1 className="font-bold md:text-3xl text-2xl "><span className="text-ijotua">Green</span>TI</h1>
                </div>
                <ul className="flex md:gap-5 gap-3">
                    <li className="hover:text-ijotua duration-300 hover:underline underline-offset-8 "><a href="">Home</a></li>
                    <li className="hover:text-ijotua duration-300 hover:underline underline-offset-8 "><a href="">Challenges</a></li>
                    <li className="hover:text-ijotua duration-300 hover:underline underline-offset-8 "><a href="">Reedem</a></li>
                    <li className="hover:text-ijotua duration-300 hover:underline underline-offset-8 "><a href="">Leaderboard</a></li>
                    <li className="hover:text-ijotua duration-300 hover:underline underline-offset-8 "><a href="#community">Community </a></li>
                </ul>
                <div className="lg:flex md:gap-3 gap-2 hidden">
                    <button className="md:py-2 md:px-5  bg-[#F5F7FA] text-ijotua rounded-md hover:bg-[#dddee0] duration-300 ">Sign Up</button>
                    <Button>Login</Button>
                </div>
            </header>

        </div>


    )
    
}

export default Header;