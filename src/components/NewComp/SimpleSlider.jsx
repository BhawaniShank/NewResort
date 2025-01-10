import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RoomCard = ({ imageSrc, title, description }) => (
  <div className="p-4">
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="min-h-[13em] flex flex-col justify-between">
      <div className="p-4 flex flex-col min-h-[5em] justify-between">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="p-4 flex text-sm justify-between gap-2">
        <button className="flex-grow bg-yellow-600 text-white font-bold py-1 px-2  rounded hover:bg-yellow-500 transition">
          VIEW RATES
        </button>
        <button className="flex-grow bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500 transition">
          GALLERY
        </button>
        <button className="flex-grow bg-transparent text-yellow-600 font-bold py-2 px-4 rounded hover:bg-yellow-100 transition">
          MORE
        </button>
      </div>
    </div>
  </div>
  </div>
);

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute md:h-full top-1/2   md:w-[5em] lg:w-[10em] transform -translate-y-1/2 z-10 bg-white/75 p-3 md:pl-14 lg:pl-32 shadow-lg cursor-pointer hover:bg-gray-100/75 transition"
    onClick={onClick}
  >
    <FaArrowLeft size={20} className="flex flex-col h-full text-2xl text-gray-700" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute md:h-full  top-1/2 right-0  lg:w-[10em] transform -translate-y-1/2 z-10 bg-white/75 p-3 md:w-[5em]  shadow-lg cursor-pointer hover:bg-gray-100/75 transition"
    onClick={onClick}
  >
    <FaArrowRight size={20} className="flex flex-col h-full  text-2xl text-gray-700" />
  </div>
);

export default function SimpleSlider() {
  const rooms = [
    {
      imageSrc: "https://picsum.photos/600/400?random=1",
      title: "LUXURY ROOM",
      description: "The serene sanctuary of our expansive, windowless hotel rooms in Mumbai....",
    },
    {
      imageSrc: "https://picsum.photos/600/400?random=2",
      title: "LUXURY GRANDE ROOM CITY VIEW KING BED",
      description: "Classic elegance permeates these Taj Mahal Palace rooms, located on the....",
    },
    {
      imageSrc: "https://picsum.photos/600/400?random=3",
      title: "DELUXE ROOM",
      description: "Experience the ultimate in luxury and comfort in our deluxe rooms....",
    },
    {
      imageSrc: "https://picsum.photos/600/400?random=1",
      title: "LUXURY ROOM",
      description: "The serene sanctuary of our expansive, windowless hotel rooms in Mumbai....",
    },
    {
      imageSrc: "https://picsum.photos/600/400?random=2",
      title: "LUXURY GRANDE ROOM CITY VIEW KING BED",
      description: "Classic elegance permeates these Taj Mahal Palace rooms, located on the....",
    },
    {
      imageSrc: "https://picsum.photos/600/400?random=3",
      title: "DELUXE ROOM",
      description: "Experience the ultimate in luxury and comfort in our deluxe rooms....",
    },
  ];

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0.5,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0.5,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[100em] mx-auto px-4 sm:px-8">
      <Slider {...settings}>
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            imageSrc={room.imageSrc}
            title={room.title}
            description={room.description}
          />
        ))}
      </Slider>
    </div>
  );
}
