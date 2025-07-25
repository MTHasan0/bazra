// import { GiCrossMark } from "react-icons/gi";

// const GridLayout = () => {


//     return (
//         <div className=" w-[98%] flex items-center justify-center p-2 bg-white">
//             <div className=" grid grid-cols-3 grid-rows-6 gap-4 w-full relative">
//                 <div className=" row-span-2 shadow-xl rounded-xl "> <img className=" p-2" src="https://i.postimg.cc/XYCJNHJb/temp-Image7-Ig-WCq.avif" alt="" /></div>
//                 <div className=" shadow-xl flex text-center items-center justify-center rounded-2xl text-gray-400 text-2xl uppercase "> <p> <GiCrossMark className=" flex text-center items-center justify-center mx-auto text-4xl shadow-2xl"></GiCrossMark></p></div>
//                 <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif" alt="" /></div>
//                 <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/B6mjdjh7/temp-Image7bp-Xm-W.avif" alt="" /></div>
//                 <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif" alt="" /></div>
//                 <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif" alt="" /></div>
//                 <div className=" flex shadow-xl text-center items-center justify-center text-gray-400"><GiCrossMark className=" flex text-center items-center justify-center mx-auto text-4xl shadow-2xl"></GiCrossMark></div>

//             </div>

//             <div className="absolute  inset-0 bg-gray-400 flex flex-col items-center justify-center opacity-0 hover:opacity-80 hover:duration-300 hover:transition-opacity">
//                 <button className="mt-2 px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
//                     Explore
//                 </button>
//             </div>


//         </div>

//     );
// };

// export default GridLayout;

import { GiCrossMark } from "react-icons/gi";

const GridLayout = () => {
    return (
        <div className="hidden w-[98%] lg:flex md:flex items-center justify-center p-2 bg-white">
            <div className="grid grid-cols-3 grid-rows-6 gap-4 w-full relative">

                <div className="relative row-span-2 shadow-xl rounded-xl group overflow-hidden">
                    <img
                        className="p-2 w-full h-full object-cover rounded-xl"
                        src="https://i.postimg.cc/XYCJNHJb/temp-Image7-Ig-WCq.avif"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
                        <button className="px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>


                <div className="shadow-xl flex text-center items-center justify-center rounded-2xl text-gray-400 text-2xl uppercase">
                    <GiCrossMark className="text-4xl shadow-2xl" />
                </div>


                <div className="relative row-span-2 shadow-xl rounded-xl group overflow-hidden">
                    <img
                        className="p-2 w-full h-full object-cover rounded-xl"
                        src="https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
                        <button className="px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>


                <div className="relative row-span-2 shadow-xl rounded-xl group overflow-hidden">
                    <img
                        className="p-2 w-full h-full object-cover rounded-xl"
                        src="https://i.postimg.cc/B6mjdjh7/temp-Image7bp-Xm-W.avif"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
                        <button className="px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>


                <div className="relative row-span-2 shadow-xl rounded-xl group overflow-hidden">
                    <img
                        className="p-2 w-full h-full object-cover rounded-xl"
                        src="https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
                        <button className="px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>


                <div className="relative row-span-2 shadow-xl rounded-xl group overflow-hidden">
                    <img
                        className="p-2 w-full h-full object-cover rounded-xl"
                        src="https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
                        <button className="px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>


                <div className="flex shadow-xl text-center items-center justify-center text-gray-400">
                    <GiCrossMark className="text-4xl shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default GridLayout;


