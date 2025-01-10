import React from 'react';

const rooms = [
  {
    title: "BALLROOM",
    description: "Gilded décor, sweeping views of the Gateway of India and a built-in st....",
    image: "https://picsum.photos/600/400?random=1",
    buttonText: "ENQUIRE NOW",
    moreText: "MORE",
  },
  {
    title: "CRYSTAL ROOM",
    description: "A magnificent, pillarless gala space with a vast open area. Sought aft....",
    image: "https://picsum.photos/600/400?random=2",
    buttonText: "ENQUIRE NOW",
    moreText: "MORE",
  },
  {
    title: "EMERALD AND JADE",
    description: "Two adjoining, charmingly appointed meeting rooms in Mumbai for more i....",
    image: "https://picsum.photos/600/400?random=3",
    buttonText: "ENQUIRE NOW",
    moreText: "MORE",
  },
];
const Cards1 = () => {
  return (
    <div className="container mx-auto max-w-[80em] px-4 py-8 font-['Playfair_Display']">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className=" border rounded shadow-lg p-4">
            <img src={room.image} alt={room.title} className="w-full h-auto mb-4 rounded" />
            <div className="flex flex-col justify-between md:min-h-[12em] lg:min-h-[10em]">
              <div>
            <h2 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">{room.title}</h2>

            <p className="text-gray-700 text-sm md:text-base mb-4">{room.description}</p>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-[#b59a4c] text-white py-2 px-2 lg:py-2 md:py-2 md:text-sm lg:text-base md:px-2 lg:px-4 rounded mb-2 hover:bg-[#9f8a3e] transition">
              {room.buttonText}
            </button>
            <p className="text-[#b59a4c] md:text-sm lg:text-base font-medium">{room.moreText}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards1;
