import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className='relative min-h-screen text-white overflow-hidden'>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-screen flex flex-col justify-center items-center text-center'>
                <motion.h1
                    className='text-5xl sm:text-7xl font-medium text-white mb-6 tracking-[0.5em] uppercase whitespace-nowrap drop-shadow-lg'
                    style={{ fontFamily: '"Cormorant Garamond", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    ZENITH ETHELON
                </motion.h1>

                <motion.p
                    className='text-2xl sm:text-4xl text-gray-200 mb-8 tracking-normal drop-shadow-md'
                    style={{ fontFamily: '"Pinyon Script", cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Ascend The Ordinary
                </motion.p>

                <motion.p
                    className='text-lg text-gray-300 mb-12 max-w-2xl font-sans'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Experience the pinnacle of modern fashion. Where elegance meets innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Link
                        to='/shop'
                        className='bg-[#061701] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg'
                    >
                        Enter Shop
                    </Link>
                </motion.div>
            </div>

            {/* Background Image Overlay */}
            <div className='absolute inset-0 z-0 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10'></div>
                <motion.img
                    src='/backgroundimage.jpg'
                    alt='Zenith Ethelon Hero'
                    className='w-full h-full object-cover object-center'
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1.0 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};
export default HomePage;
