import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SimpleSlider = () => {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For medium screens (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="custom-slider text-[#6F7783]">
      <div className="px-4"> {/* Add padding here */}
        <img
          src="https://picsum.photos/seed/picsum/800/400"
          alt="Elaborate Mughal Gardens"
          className="w-full h-auto"
        />
        <p className="mt-4 text-lg  ">ELABORATE MUGHAL GARDENS</p>
      </div>
      <div className="px-4"> {/* Add padding here */}
        <img
          src="https://picsum.photos/800/400?random=2"
          alt="Exclusive Royal Butlers"
          className="w-full h-auto"
        />
        <p className="mt-4 text-lg  ">EXCLUSIVE ROYAL BUTLERS</p>
      </div>
      <div className="px-4"> {/* Add padding here */}
        <img
          src="https://picsum.photos/800/400?random=3"
          alt="Suvarna Mahal's 18th Century Décor"
          className="w-full h-auto"
        />
        <p className="mt-4 text-lg ">SUVARNA MAHAL'S 18TH CENTURY DÉCOR</p>
      </div>
    </Slider>
  );
};

const Highlights = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="text-center md:text-left items-center flex-col md:flex-row md:gap-10 flex mt-12">
        <h1 className="text-4xl font-bold">HIGHLIGHTS</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Rambagh Palace, Jaipur has a stately elegance that has long made it a much cherished destination. Celebrated restaurants and iconic grounds bestow the 'Jewel of Jaipur' with an added measure of grandeur.
        </p>
      </div>
      <div className="mt-12">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Highlights;
