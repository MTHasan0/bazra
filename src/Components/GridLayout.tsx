
const GridLayout = () => {

    return (
        <div className="w-full flex items-center justify-center p-6 bg-white">
            <div className="grid grid-cols-3 grid-rows-4 gap-4 w-[90%]">
                {[
                    { row: 1, col: 1, rowSpan: 2, image: 'https://i.postimg.cc/XYCJNHJb/temp-Image7-Ig-WCq.avif' },
                    { row: 3, col: 1, rowSpan: 2, image: 'https://i.postimg.cc/nc5rJbn2/temp-Imagea-G5gv-T.avif' },
                    { row: 1, col: 2, content: 'Sale . Simplicity' },
                    { row: 2, col: 2, rowSpan: 2, image: 'https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif' },
                    { row: 4, col: 2, content: 'Sale' },
                    { row: 1, col: 3, rowSpan: 2, image: 'https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif' },
                    { row: 3, col: 3, rowSpan: 2, image: 'https://i.postimg.cc/zB7h8tfj/temp-Image-Rhd-SLA.avif' },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className={`
          relative overflow-hidden rounded-xl shadow-lg group 
          ${item.rowSpan ? `row-span-${item.rowSpan}` : ''}
          ${item.row ? `row-start-${item.row}` : ''}
          ${item.col ? `col-start-${item.col}` : ''}
          ${item.content ? 'border border-gray-300 flex items-center justify-center text-center ' : ''}
        `}
                    >
                        {item.content ? (
                            <p className="text-lg font-medium text-gray-700">{item.content}</p>
                        ) : (
                            <>
                                <img
                                    src={item.image}
                                    alt=""
                                    className=" w-48 h-48 object-cover transition-transform duration-300 items-center justify-center mx-auto hover:scale-105 "
                                />
                                <div className="absolute inset-0 bg-gray-400 flex flex-col items-center justify-center opacity-0 hover:opacity-80 hover:duration-300 hover:transition-opacity">
                                    <button className="mt-2 px-4 py-2 bg-white text-black rounded-full text-sm shadow cursor-pointer">
                                        Explore
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default GridLayout;