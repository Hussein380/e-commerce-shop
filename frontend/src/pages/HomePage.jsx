import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className='relative min-h-screen text-white overflow-hidden'>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-screen flex flex-col justify-center items-center text-center'>
                <h1 className='text-5xl sm:text-7xl font-serif font-bold text-ze-gold mb-6 tracking-wider'>
                    ZENITH ETHELON
                </h1>
                <p className='text-xl sm:text-2xl text-ze-cream mb-8 font-light tracking-widest uppercase'>
                    Ascend the Ordinary
                </p>
                <p className='text-lg text-gray-300 mb-12 max-w-2xl font-sans'>
                    Experience the pinnacle of modern fashion. Where elegance meets innovation.
                </p>

                <Link
                    to='/shop'
                    className='bg-ze-gold text-ze-dark py-3 px-8 rounded-full font-bold text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105'
                >
                    Enter Shop
                </Link>
            </div>

            {/* Background Image Overlay */}
            <div className='absolute inset-0 z-0'>
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <img
                    src='/zenith_ethelon_hero.png'
                    alt='Zenith Ethelon Hero'
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    );
};
export default HomePage;
