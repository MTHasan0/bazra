import { GiCrossMark } from "react-icons/gi";

const GridLayout = () => {
    const data = [
        { row: 1, col: 1, rowSpan: 2, image: 'https://i.postimg.cc/XYCJNHJb/temp-Image7-Ig-WCq.avif' },
        { row: 3, col: 1, rowSpan: 2, image: 'https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif' },
        { row: 1, col: 2, content: 'Sale . Simplicity' },
        { row: 2, col: 2, rowSpan: 2, image: 'https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif' },
        { row: 4, col: 2, content: 'Sale' },
        { row: 1, col: 3, rowSpan: 2, image: 'https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif' },
        { row: 3, col: 3, rowSpan: 2, image: 'https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif' }
    ]

    return (
        <div className="w-[80%] flex items-center justify-center p-6 bg-white">
            <div className=" grid grid-cols-3 grid-rows-6 gap-4 w-full relative">
                <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/XYCJNHJb/temp-Image7-Ig-WCq.avif" alt="" /></div>
                <div className=" shadow-xl flex text-center items-center justify-center rounded-2xl text-gray-400 text-2xl uppercase "> <p> <GiCrossMark className=" flex text-center items-center justify-center mx-auto text-4xl shadow-2xl"></GiCrossMark></p></div>
                <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif" alt="" /></div>
                <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/B6mjdjh7/temp-Image7bp-Xm-W.avif" alt="" /></div>
                <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif" alt="" /></div>
                <div className=" row-span-2 shadow-xl rounded-xl"> <img className=" p-2" src="https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif" alt="" /></div>
                <div className=" flex shadow-xl text-center items-center justify-center text-gray-400"><GiCrossMark className=" flex text-center items-center justify-center mx-auto text-4xl shadow-2xl"></GiCrossMark></div>

            </div>

            {/* <div className="absolute hidden inset-0 bg-gray-400 flex flex-col items-center justify-center opacity-0 hover:opacity-80 hover:duration-300 hover:transition-opacity">
                <button className="mt-2 px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                    Explore
                </button>
            </div> */}


        </div>

    );
};

export default GridLayout;