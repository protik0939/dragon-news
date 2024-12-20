import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='w-60 mx-auto' src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhflTI9ZN4EgtY5ri2B5sxSqXqNGcNTvf1ED7DyRNn1qpY-DRtxgClguYV44bod0A06zTx4x4CZk6EL8whyphenhyphenqOMHwAoYlX-OopiRNZ_G1GL8Ha51hihcb2jOR8NXlNT8l2xB9aCTW5dloCA1uQCE0uXzx2Z3EyDQerWYkHBWTTcVRwqOdaCyN_MHj2A1B0s/s1600/gnl.webp`} alt="" />
            <p>Binodon Shimahin</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;