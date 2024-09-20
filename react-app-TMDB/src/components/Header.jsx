const Header = () => {
    return (
        <>
            <div className="flex mx-3 pt-3 justify-between mb-3">
                <div className="flex items-center gap-x-3">
                    <img src="../../public/schLogo.png" alt=""className="w-12"/>
                    <h1 className="font-bold font-mono">Schematic Movie Database</h1>
                </div>
                <div className="flex gap-x-4">
                    <button className="border rounded-md px-3  bg-green-400 text-white hover:bg-green-700 duration-200">Login</button>
                    <button className="border rounded-md px-3   hover:bg-green-700 hover:text-white duration-200">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Header