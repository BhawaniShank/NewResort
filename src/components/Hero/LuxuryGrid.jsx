import React from "react";

const LuxuryGrid = () => {
    return (
        <div
            className="flex flex-col items-center justify-center md:min-h-[40em] min-h-[50em] w-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
        >
            <div className="bg-[#787664] bg-opacity-50  w-full h-full py-10 px-5 md:py-28 lg:py-40 xl:py-32 rounded-lg shadow-lg text-center  mx-auto">
                <h1 className="text-4xl md:text-6xl  text-white font-bold mb-2">Luxurious Rooms</h1>
                <hr className="lg:w-60 w-40 my-5 mx-auto bg-white h-2" /> 
                <p className="text-white mb-8">All rooms are designed for your comfort</p>
                <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
                    {[{
                        image: "https://picsum.photos/400/300?random=1",
                        availability: "2 Rooms available",
                        description: "Television set, Extra sheets and Breakfast",
                    }, {
                        image: "https://picsum.photos/400/300?random=2",
                        availability: "4 Rooms available",
                        description: "Television set, Extra sheets, Breakfast, and fireplace",
                    }, {
                        image: "https://picsum.photos/400/300?random=3",
                        availability: "8 Rooms available",
                        description: "Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest",
                    }].map((room, index) => (
                        <div key={index} className="bg-white p-6 md:p-2 lg:p-6 relative rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={room.image}
                                alt={room.description}
                                className="w-full  object-cover"
                            />
                            <div className="pt-4">
                                <div className="bg-[#7c6a46] absolute top-10 right-10 text-white text-xs font-bold px-2 py-1 rounded-sm inline-block mb-2">
                                    {room.availability}
                                </div>
                                <p className="text-gray-800">{room.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LuxuryGrid;
