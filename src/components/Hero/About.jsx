import React, { useEffect, useState, useRef } from 'react';

const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isIntersecting;
};

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) {
            let start = 0;
            const increment = end / (duration / 100);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(timer);
                    start = end;
                }
                setCount(Math.ceil(start));
            }, 100);
        }
    }, [onScreen, end, duration]);

    return <h2 ref={ref} className="text-4xl font-bold">{count}</h2>;
};

const About = () => {
    return (
        <div className="container mx-auto max-w-[120em] p-6 md:p-20 ">
            <div className='flex justify-between w-full h-full flex-col lg:flex-row gap-10 items-center'>
            {/* About Us Section */}
            <section className=" lg:w-[55%] md:mb-12">
                <h2 className="text-blue-600 text-sm font-semibold relative mb-8">ABOUT US <div className="border-t-2 absolute top-2 left-20 border-blue-600 w-16  "></div></h2>
                
                <h1 className="text-4xl font-bold mb-8">
                    Welcome to <span className="text-blue-600">Hotel Paradise</span>
                </h1>
                <p className="text-gray-700 text-justify mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda incidunt id cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, assumenda. Dicta facilis maxime beatae possimus eaque. Nemo aspernatur tempore, aliquam dignissimos inventore numquam perferendis quas illo laboriosam, quaerat necessitatibus animi!
                </p>
                <p className="text-gray-700 text-justify mb-8">
                    Fugiat repellat cumque delectus, at ipsum ad iure explicabo perferendis voluptatem vero quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nostrum accusantium magnam provident possimus nam commodi, facere hic voluptas nobis expedita eaque maxime neque aliquam cupiditate veritatis quo dolores modi.
                </p>
                <button className="bg-white text-blue-600 border border-blue-600 py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                    Discover More
                </button>
            </section>

            {/* Grid Section */}
            <section className="grid grid-cols-2   gap-6 mb-12">
                <img
                    src="https://picsum.photos/300/300?random=1"
                    alt="Breakfast served on a tray with coffee and fruits"
                    className="rounded-lg shadow-lg w-full h-full lg:w-[20em] lg:h-[16em] object-cover"
                />
                <img
                    src="https://picsum.photos/300/300?random=2"
                    alt="Luxury hotel with a pool"
                    className="rounded-lg shadow-lg w-full h-full lg:w-[20em] lg:h-[16em] object-cover"
                />
                <img
                    src="https://picsum.photos/300/300?random=3"
                    alt="Resort with a pool and trees"
                    className="rounded-lg shadow-lg w-full h-full lg:w-[20em] lg:h-[16em] object-cover"
                />
                <img
                    src="https://picsum.photos/300/300?random=4"
                    alt="Hotel room with a bed and a view"
                    className="rounded-lg shadow-lg w-full h-full lg:w-[20em] lg:h-[16em] object-cover"
                />
            </section>
            </div>
            {/* Counter Section */}
            <section className="flex flex-wrap md;mt-20 justify-around text-center">
                <div className="w-1/2 md:w-1/4 mb-6">
                    <Counter end={8} duration={2000} />
                    <p className="text-gray-600">Years of Service</p>
                </div>
                <div className="w-1/2 md:w-1/4 mb-6">
                    <Counter end={459} duration={2000} />
                    <p className="text-gray-600">Sq. Meter Area</p>
                </div>
                <div className="w-1/2 md:w-1/4 mb-6">
                    <Counter end={50} duration={2000} />
                    <p className="text-gray-600">Nice Rooms</p>
                </div>
                <div className="w-1/2 md:w-1/4 mb-6">
                    <Counter end={3786} duration={2000} />
                    <p className="text-gray-600">Happy Visitors</p>
                </div>
            </section>
        </div>
    );
};

export default About;
