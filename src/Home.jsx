
import { motion } from "framer-motion";

import herosection from './assets/Hero/hero.mp4';

import parallex from './assets/Hero/parallex.jpg'

import pricetag from './assets/Hero/pricetagg.png';
// import Button from "./components/Button.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BookingForm from "./components/Hero/BookingForm.jsx";
// import Footer from "./components/Hero/Footer.jsx";
import Page2  from "./components/Hero/Page2.jsx";
import Cards1 from "./components/NewComp/Cards1.jsx"
import Highlights from "./components/NewComp/Highlights.jsx"
import SimpleSlider from "./components/NewComp/SimpleSlider.jsx"

// import CuratedExperience from "./components/Hero/CuratedExperience.jsx";
// import LogoSlider from "./components/LogoSlider/LogoSlider.jsx";
// import Contact from "./components/Contact/Contact.jsx"
// import Experience from "./components/Experience/Experience.jsx"
// import LuxurySuiteCard from "./components/LuxurySuiteCard/LuxurySuiteCard.jsx";

import Grid from "./components/Hero/Grid.jsx";
import TypingAnimation from "./components/Hero/TypingAnimation.jsx";
import AboutGrid from "./components/Hero/AboutGrid.jsx";
import Page4 from "./components/Hero/Page4.jsx";
import Page5 from "./components/Hero/Page5.jsx";
import Grid2 from "./components/Hero/Grid2.jsx";
import Big3 from "./components/Hero/Big3.jsx";
import Facility from "./components/Hero/Facility.jsx";
import LuxuryGrid from "./components/Hero/LuxuryGrid.jsx";
import About from "./components/Hero/About.jsx";
import Testimonial from "./components/Hero/Testimonial.jsx";
import NewNavbar from "./components/Navbar/NewNavbar.jsx"
// import Hero from "./components/Hero/Hero"
const Home = () => {
  return (
    // <section
    //   className="h-screen bg-Hero bg-cover
    //   font-[Poppins] md:bg-top bg-center"
    // >
    //   <Navbar />
    //   <div className="flex flex-col justify-center text-center items-center h-3/4">
    //     {/* <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
    //     <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
    //       Items every woman should have
    //     </h1>
    //     <div className="text-xl">
    //       <Button /> */}
    //     </div>
    //   {/* </div> */}
    // </section>

<div className="relative w-[100%] max-w-[120em] bg-white mx-auto h-full z-0 ">
<NewNavbar />

<div className="relative h-[40em]">
<video
    className="w-full h-full md:h-full object-cover group "
    autoPlay
    loop
    muted
    playsInline
>
    <source src={herosection} type="video/mp4" />

</video>

<TypingAnimation/>





<BookingForm />
</div>
<motion.div
  style={{
    transformOrigin: "top right",

  }}
  className="fixed md:bottom-80 z-20 right-0 w-[100px] h-[100px]"
  animate={{
    rotate: [0, -15, 10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
>
  <img
    src={pricetag}
    alt=""
    className="w-full h-full object-contain"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -rotate-45 -translate-y-1/2 text-white font-bold text-sm">
    BookNow
  </div>
</motion.div>

{/* <Hero/> */}

<Page2/>
<div className=" text-white bg-gradient-to-r from-[#f4c9a9] via-[#fedbbd] to-[#ffecdd] lg:px-20"
    style={{

      height: '100%', // Adjust height as needed
    }}
    >
<h1 className="text-center text-5xl font-semibold py-4 mix-blend-difference">Heading1</h1>
<Grid/>

<AboutGrid/>
</div>
<Page4/>
<Page5/>
<Grid2/>
{/* <CuratedExperience/> */}
{/* <LogoSlider/> */}
{/* <Contact/> */}
{/* <Experience/> */}
{/* <LuxurySuiteCard/> */}
{/* <Footer/> */}
<Big3/>
<Facility/>
<LuxuryGrid/>
<About/>
<Testimonial/>
<Cards1/>
<SimpleSlider/>
<Highlights/>
</div>
  );
};

export default Home;
