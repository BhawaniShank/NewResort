import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonies = [
    {
      date: "2 Mar. 2023",
      rating: 5,
      text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results.",
      author: "Anthony Bruff",
      authorImage: "https://picsum.photos/50?random=1",
    },
    {
      date: "25 Mar. 2023",
      rating: 5,
      text: "Absolutely loved the ambiance and the staff. Highly recommend this place to anyone looking for a quality experience.",
      author: "Regina Gella",
      authorImage: "https://picsum.photos/50?random=2",
    },
    {
      date: "5 Apr. 2023",
      rating: 4,
      text: "The food was fantastic, but the waiting time could have been better. Overall, a good experience.",
      author: "Jamiyu Aliyu",
      authorImage: "https://picsum.photos/50?random=3",
    },
    {
      date: "10 Apr. 2023",
      rating: 4,
      text: "The conference was great, the venue was lovely, and the food was excellent.",
      author: "John Doe",
      authorImage: "https://picsum.photos/50?random=4",
    },
    {
      date: "15 May 2023",
      rating: 5,
      text: "I was impressed with the level of professionalism. The staff went above and beyond to make our stay comfortable.",
      author: "Sophia Loren",
      authorImage: "https://picsum.photos/50?random=5",
    },
    {
      date: "20 Jun. 2023",
      rating: 3,
      text: "The service was okay, but the location was inconvenient for me. Might not visit again soon.",
      author: "Michael Carter",
      authorImage: "https://picsum.photos/50?random=6",
    },
    {
      date: "10 Jul. 2023",
      rating: 5,
      text: "Wonderful place to stay! The view from my room was breathtaking, and the staff was very friendly.",
      author: "Emma Watson",
      authorImage: "https://picsum.photos/50?random=7",
    },
    {
      date: "5 Aug. 2023",
      rating: 4,
      text: "Good experience overall. Clean rooms and a quiet environment made my trip relaxing.",
      author: "Liam Neeson",
      authorImage: "https://picsum.photos/50?random=8",
    },
    {
      date: "12 Sep. 2023",
      rating: 5,
      text: "This was one of the best experiences of my life. I highly recommend this place for a weekend getaway!",
      author: "Olivia Brown",
      authorImage: "https://picsum.photos/50?random=9",
    },
    {
      date: "1 Oct. 2023",
      rating: 3,
      text: "The room was small for the price, but the customer service made up for it. Decent experience.",
      author: "Noah Williams",
      authorImage: "https://picsum.photos/50?random=10",
    },
    {
      date: "15 Nov. 2023",
      rating: 5,
      text: "From the moment we arrived, everything was perfect. Highly recommend for anyone looking for a luxury experience.",
      author: "Charlotte Johnson",
      authorImage: "https://picsum.photos/50?random=11",
    },
    {
      date: "20 Dec. 2023",
      rating: 4,
      text: "The amenities were top-notch, but the location was a bit far from the main attractions.",
      author: "James Smith",
      authorImage: "https://picsum.photos/50?random=12",
    },
  ];
  

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(rating)].map((_, i) => (
      <FaStar key={i} className="text-yellow-500" />
    ))}
  </div>
);

const TestimonyCard = ({ testimony, fullWidth }) => (
  <div
    className={`bg-[#fafafa] p-6 rounded-lg shadow-md transition-all ${
      fullWidth ? "w-full mx-auto" : "w-full sm:w-1/2 lg:w-1/3"
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-600">{testimony.date}</span>
      <StarRating rating={testimony.rating} />
    </div>
    <p className="text-gray-800 text-lg mb-4">
      <i className="fas fa-quote-left text-yellow-500 mr-2"></i>
      {testimony.text}
      <i className="fas fa-quote-right text-yellow-500 ml-2"></i>
    </p>
    <div className="flex items-center">
      <img
        src={testimony.authorImage}
        alt="Author's profile picture"
        className="w-10 h-10 rounded-full mr-4"
      />
      <span className="text-gray-800">{testimony.author}</span>
    </div>
  </div>
);

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("sm");

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth >= 1024) {
        setBreakpoint("lg");
      } else if (window.innerWidth >= 768) {
        setBreakpoint("md");
      } else {
        setBreakpoint("sm");
      }
    };

    window.addEventListener("resize", updateBreakpoint);
    updateBreakpoint(); // Initial check
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpoint();

  // Determine the number of cards to show based on the breakpoint
  const cardsToShow = breakpoint === "lg" ? 3 : breakpoint === "md" ? 2 : 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - cardsToShow : prevIndex - cardsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= testimonies.length ? 0 : prevIndex + cardsToShow
    );
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-6xl font-bold text-center mb-12">Testimonies</h1>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex w-full gap-5 px-5 md:px-10 transition-all ease-in-out duration-500">
            {/* Adjust the number of visible cards */}
            {testimonies
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((testimony, index) => (
                <TestimonyCard
                  key={index}
                  testimony={testimony}
                  fullWidth={cardsToShow === 1} // Pass fullWidth prop if only 1 card is visible
                />
              ))}
          </div>
        </div>

        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-5xl text-gray-600 cursor-pointer z-10"
          onClick={handlePrev}
        >
          &#8249;
        </div>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-5xl text-gray-600 cursor-pointer z-10"
          onClick={handleNext}
        >
          &#8250;
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
