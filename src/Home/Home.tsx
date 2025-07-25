
import { motion } from 'framer-motion'
import image1 from '../assets/Landing_Page_Image/image1.png'
import image2 from '../assets/Landing_Page_Image/image2.png'
import GridLayout from '../Components/GridLayout';


const Home = () => {

    return (
        <div className="w-full items-center justify-center ">
            <div className='w-full h-screen  flex items-center justify-center relative'>

                <div className=' '>
                    <motion.img
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 100 }}
                        transition={{ duration: 0.4 }}
                        src={image1}
                        alt="Model Back"
                        className="absolute left-0 -bottom-4 w-[40%] md:w-[30%] lg:w-[30%] object-contain"
                    />
                </div>


                <div className=' '>
                    <motion.img
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: -100, opacity: 100 }}
                        transition={{ duration: 0.4 }}
                        src={image2}
                        alt="Model Front"
                        className="absolute right-0 top-8 w-[40%] md:w-[30%] lg:w-[30%] object-contain  transform rotate-180 "
                    />
                </div>


                <div className=" text-center z-0">
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



            </div >

            {/* <div className=' border-1 border-gray-500 w-40 justify-center items-center flex mx-auto'></div> */}
            <motion.div
                className="w-24 border bg-slate-200 mx-auto mt-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            />


            <div className=' w-full flex-wrap mt-10'>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }} className=' text-5xl text-center items-center mx-auto'>New collection <br />

                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className=' text-xl text-gray-400 text-center items-center mx-auto pt-5'>Simplicity . Freedom . Comfort</motion.p>
            </div>
            <div className=' relative flex items-center justify-center mt-10'>
                <GridLayout />
            </div>
        </div >
    );
};

export default Home;

