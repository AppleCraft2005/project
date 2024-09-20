const Button = (teks) => {
    const {children} = teks;
    <button className='border mt-3 py-1 px-2 rounded-md hover:bg-green-500 hover:text-white duration-200 font-mono bg-green-300'>{children}</button>
};

export default Button;