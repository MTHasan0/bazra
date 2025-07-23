import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { motion } from 'motion/react';


const Navbar = () => {
    const activeLocation = useLocation();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'T-shirt', path: '/t-shirt' },
        { name: 'Contact', path: '/contact' },


    ]
    return (


        <nav className="bg-white w-full fixed z-10 top-0 start-0 border-b border-gray-200 dark:border-gray-300 mb-1">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}

                className=' w-full flex justify-center mt-5'>
                <Link to={'/'} className="flex items-center w-40 cursor-pointer ">

                    <img className=' rounded-2xl' src={logo} alt="" />
                </Link>


            </motion.div>
            {/* Nav items mapping */}
            <div className='w-full flex justify-center mt-5 mb-2'>
                <ul className=' flex flex-wrap justify-center items-center gap-10 text-2xl '>
                    {
                        links.map((link) => (
                            <Link className={activeLocation.pathname === link.path ? ' text-gray-500' : ''} to={link.path}>{link.name}</Link>
                        ))


                    }
                </ul>
            </div>

        </nav>

    );
};

export default Navbar;