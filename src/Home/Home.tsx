
import { motion } from 'framer-motion'
import image1 from '../assets/Landing_Page_Image/image1.png'
import image2 from '../assets/Landing_Page_Image/image2.png'


const Home = () => {
    return (
        <div className="w-full h-screen  flex items-center justify-center relative overflow-hidden ">
            {/* Left Model */}
            <div className=' '>
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.4 }}
                    src={image1} // Replace with your actual image
                    alt="Model Back"
                    className="absolute left-0 bottom-0 w-[30%] object-contain z-10 rounded-tr-4xl"
                />
            </div>

            {/* Right Model (Upside Down) */}
            <div className=' '>
                <motion.img
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: -100, opacity: 100 }}
                    transition={{ duration: 0.4 }}
                    src={image2} // Replace with your actual image
                    alt="Model Front"
                    className="absolute right-0 top-0 w-[30%] object-contain transform rotate-180 "
                />
            </div>

            {/* Center Text Content */}
            <div className="z-20 text-center">
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-gray-500 tracking-widest uppercase text-sm mb-2">Man's Outfit </motion.p>
                <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-4xl md:text-6xl font-bold mb-6">Summer collection 2025</motion.h1>
                <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white ">
                    SHOP NOW
                </motion.button>
            </div>

            {/* Pagination + Arrows */}
            <div className="absolute right-10 bottom-10 flex flex-col items-center text-black">
                <span className="text-xl font-semibold mb-4">01</span>
                <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200 transition">
                        &lt;
                    </button>
                    <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200 transition">
                        &gt;
                    </button>
                </div>
            </div>

            {/* Carousel dots */}
            <div className="absolute bottom-10 left-10 flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-white border border-gray-400 rounded-full" />
            </div>
        </div >
    );
};

export default Home;