import React from 'react';

const Page1 = () => {
    return (
        <div className="relative w-[100%] max-w-[120em] h-[40em] z-0 group">
            <video
                className="w-full h-full object-cover "
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center gap-5 text-white px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                    Welcome to <span className="italic">India's</span> first luxury<br /> heritage polo resort
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    125 luxurious rooms amid a 20-acre private estate ideal for milestone celebrations and a unique<br /> curated experience.
                </p>
            </div>
        </div>
    );
};

export default Page1;
