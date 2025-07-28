import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import productList from "../assets/Data/Data.json"
import { motion } from "framer-motion";

const ProductCard = () => {
    return (

        <div>
            <div>
                <p className=" text-4xl uppercase text-center items-center mt-20">Best Seller Product</p>
                <p className=" uppercase text-gray-500 text-center items-center pt-2">Man's Outfit</p>
                <motion.div
                    className="w-24 border bg-slate-200 mx-auto mt-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />
            </div>
            <div className=" flex gap-5 w-[90%] flex-wrap items-center justify-center mx-auto mt-10">

                {
                    productList.map((product) => (
                        <div className="max-w-sm relative shadow-xl group overflow-hidden">
                            <div className="w-fit">
                                <img className=" " src={product.image} alt="" />
                            </div>
                            {/* car logo section */}
                            <div className="flex justify-around h-15 text-2xl font-bold items-center text-center absolute bottom-0 left-0 right-0 bg-slate-100 lg:translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out py-3">
                                <CiShoppingCart className=" cursor-pointer" />
                                <CiHeart className=" cursor-pointer" />
                                <CiSearch className=" cursor-pointer" />

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default ProductCard;