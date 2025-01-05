import React from "react";
import { FaSwimmer, FaWifi, FaCoffee, FaDumbbell, FaGamepad, FaLightbulb, FaSoap, FaParking } from "react-icons/fa";

const FacilityCard = ({ icon: Icon, text }) => (
  <div className="flex flex-col items-center rounded-lg p-10 md:p-16 xl:p-20 bg-gray-100 hover:bg-[#7c6a46] hover:text-white transition-colors duration-300">
    <Icon className="text-4xl mb-2" />
    <p className="text-center">{text}</p>
  </div>
);

const Facility = () => {
  return (
    <div className="flex flex-col w-full md:px-20 items-center p-8 bg-white">
      <h1 className="text-4xl font-bold mb-4 p-2 text-center">Our Facilities</h1>
      <p className="text-md mb-8 text-center">
        We offer modern (5-star) hotel facilities for your comfort.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <FacilityCard icon={FaSwimmer} text="Swimming Pool" />
        <FacilityCard icon={FaWifi} text="Wifi" />
        <FacilityCard icon={FaCoffee} text="Breakfast" />
        <FacilityCard icon={FaDumbbell} text="Gym" />
        <FacilityCard icon={FaGamepad} text="Game Center" />
        <FacilityCard icon={FaLightbulb} text="24/7 Light" />
        <FacilityCard icon={FaSoap} text="Laundry" />
        <FacilityCard icon={FaParking} text="Parking Space" />
      </div>
    </div>
  );
};

export default Facility;
