import { motion } from "framer-motion";
import Page1 from './Page1'
import BookingForm from './BookingForm'
import pricetag from '../../assets/Hero/pricetagg.png'
import Page2 from "./Page2";
import CuratedExperience from "./CuratedExperience";
import Footer from "./Footer";
import Grid from "./Grid";
const Hero = () => {
  return (
    
    <div className=" w-full max-w-[120em] relative mx-auto ">
    <div className='relative'>
         
         {/* <Page1 />  */}
         {/* <BookingForm className="jsx"></BookingForm>  */}
        

    </div>

    {/* <motion.div
  style={{ transformOrigin: "top right" }} // Set the origin to top-left
  className="fixed md:bottom-10 left-[90%] z-20 sm:left-[96%] "
  animate={{
    rotate: [0, -15, 15, 0], // To and fro rotation: initial -> forward -> backward -> back to initial
    
  }}
  transition={{
    duration: 5, // Time for one complete swing
    repeat: Infinity, // Infinite swinging
    repeatType: "loop", // Repeat the swing as a loop
    ease: "easeInOut", // Smooth easing
  }}
>
  <img
    src={pricetag}
    alt=""
    className=" w-10 md:w-20  "
  />
</motion.div>  */}
{/* <Page2/> */}
{/* <Grid/> */}
{/* <CuratedExperience/> */}

{/* <Footer/> */}
    </div>
  )
}

export default Hero