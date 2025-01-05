import React from 'react';

const Grid2 = () => {
    return (
        <div className="flex justify-center items-center min-h-full p-2 md:p-10 w-full lg:p-20 bg-blue-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 p-3 md:p-6 lg:p-12 bg-white rounded-2xl shadow-lg">
                {[
                    {
                        src: "https://picsum.photos/300/200?random=1",
                        alt: "A cozy hotel room with a neatly made bed and sunlight streaming through the window",
                        title: "Rooms",
                    },
                    {
                        src: "https://picsum.photos/300/200?random=2",
                        alt: "A dining table with a gourmet meal and glasses of wine",
                        title: "Dining",
                    },
                    {
                        src: "https://picsum.photos/300/200?random=3",
                        alt: "A conference room with modern lighting and seating arrangements",
                        title: "Conferences & Meetings",
                    },
                    {
                        src: "https://picsum.photos/300/200?random=4",
                        alt: "A gym with various workout equipment and people exercising",
                        title: "Service & Facilities",
                    },
                    {
                        src: "https://picsum.photos/300/200?random=5",
                        alt: "A group of people celebrating with drinks in a tropical setting",
                        title: "Wedding Package",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`relative group ${index === 0 ? 'row-span-2' : ''}`}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-20 text-center w-full text-white text-lg sm:text-3xl font-bold">
                            {item.title}
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                        {/* Overlay with smooth transition */}
                        <div className="absolute bottom-0 left-0 w-full h-[5%] bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 rounded-b-lg"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grid2;
