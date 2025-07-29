
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import image1 from '../assets/Landing_Page_Image/image1.png';
import image2 from '../assets/Landing_Page_Image/image2.png';
import image3 from '../assets/Landing_Page_Image/image2.png'; // Add a third image if needed
import GridLayout from '../Components/GridLayout';
import ProductCard from '../Components/ProductCard';
import { FaFacebook } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const heroSlides = [
    {
        id: 1,
        title: 'Summer Collection',
        subtitle: "Man's Outfit",
        image1: image1,
        image2: image2,
    },
    {
        id: 2,
        title: 'Urban Streetwear',
        subtitle: 'City Vibes',
        image1: image2,
        image2: image1,
    },
    {
        id: 3,
        title: 'Minimalist Vibes',
        subtitle: 'Clean & Classic',
        image1: image3,
        image2: image2,
    },
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const currentSlide = heroSlides[current];

    return (
        <div className="w-full items-center justify-center">
            <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.img
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                src={currentSlide.image1}
                                alt="Image 1"
                                className="absolute left-0 bottom-0 w-[40%] md:w-[30%] object-contain rounded-3xl"
                            />
                            <motion.img
                                initial={{ y: -200, opacity: 0 }}
                                animate={{ y: -100, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                src={currentSlide.image2}
                                alt="Image 2"
                                className="absolute right-0 top-8 w-[40%] md:w-[30%] object-contain rotate-180"
                            />
                            <div className="text-center z-10 pt-32 lg:pt-0 md:pt-0">
                                <motion.p
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-gray-500 tracking-widest uppercase text-sm mb-2"
                                >
                                    {currentSlide.subtitle}
                                </motion.p>
                                <motion.h1
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-bold mb-6"
                                >
                                    {currentSlide.title}
                                </motion.h1>
                                <motion.button
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white"
                                >
                                    SHOP NOW
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
                className="w-24 border bg-slate-200 mx-auto mt-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            />

            <div className="w-full flex-wrap mt-10">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl text-center"
                >
                    New collection <br />
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xl text-gray-400 text-center pt-5"
                >
                    Simplicity . Freedom . Comfort
                </motion.p>
            </div>

            <div className="relative flex items-center justify-center mt-10">
                <GridLayout />
            </div>
            {/* Product card list */}
            <section>
                <div>
                    <ProductCard></ProductCard>
                </div>
            </section>
            {/* Social Media Section */}
            <div className=' border border-gray-200 w-full mt-16'></div>
            <section className=' w-full px-3'>
                <div className=' flex gap-4 text-center items-center justify-center mt-5'>
                    <h2 className=' text-2xl md:text-4xl lg:text-4xl text-gray-500'>Follow us on <span className=' text-blue-500'>Facebook</span></h2>
                    <Link to={'https://www.facebook.com'}><FaFacebook className=' text-blue-500 text-4xl'></FaFacebook></Link>
                </div>
                <div className=' flex gap-3 md:gap-16 lg:gap-20  items-center justify-around md:justify-center lg:justify-center mt-20'>
                    <div className=' text-center items-center'>
                        <p className=' text-xl lg:text-2xl md:text-2xl'>MONEY BACK</p>
                        <p className=' text-lg lg:text-xl md:text-xl text-gray-500'>100% money back guarantee</p>
                    </div>
                    <div className=' divider divider-horizontal'></div>
                    <div className=' text-center items-center'>
                        <p className=' text-xl lg:text-2xl md:text-2xl'>SHIPPING & RETURN</p>
                        <p className=' text-lg lg:text-xl md:text-xl text-gray-500'>Free</p>
                    </div>
                    <div className=' divider divider-horizontal'></div>
                    <div className=' text-center items-center'>
                        <p className=' text-xl lg:text-2xl md:text-2xl'>SUPPORT</p>
                        <p className=' text-lg lg:text-xl md:text-xl text-gray-500'>24/7</p>
                    </div>
                </div>
            </section>
            <div className=' border border-gray-200 w-full mt-20'></div>
        </div>
    );
};

export default Home;
