
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import footer from '../../assets/footer.jpg'
const Footer = () => {
  return (
   <div 
      className="flex flex-col items-center justify-center py-10 px-4 max-w-[120em] mx-auto h-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${footer})` }} 
    >  
      <h1 className="text-3xl font-light mb-2 text-center">Stay in Touch</h1>
      <p className="text-lg mb-6 text-center">
        Subscribe to our Newsletter to receive best deals and offers
      </p>
      <div className="flex flex-col sm:flex-row items-center mb-10 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your Email Id..."
          className="border border-gray-400 p-2 w-full sm:w-auto flex-grow mb-2 sm:mb-0 sm:mr-2"
        />
        <button className="bg-black text-white p-2 w-full sm:w-auto">
          SUBSCRIBE
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        <div>
          <h2 className="font-semibold mb-2">Our Story</h2>
          <p>
            The underlying theme and vision for all the ventures pursued by
            Mahindra Hotel & Residences India Limited.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Locate Us</h2>
          <p>
            Tree House Resort Jaipur Nature farms, NH11c, Opp. Amity University,
            Kalwad Kalan and Khurd, Rajasthan 303002, India
          </p>
          <p>Landline: 0141-7144777</p>
          <p>resv.rmbj@mahindraholidays.com</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul>
            <li>Bespoke Events</li>
            <li>Amenities</li>
            <li>Experiences</li>
            <li>Living Spaces</li>
            <li>Our Story</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-semibold mb-2">Important Links</h2>
          <ul>
            <li>
              <a href="#" className="">
                Download E-brochure
              </a>
            </li>
            <li>
              <a href="#" className="">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="">
                Term Conditions
              </a>
            </li>
            <li>
              <a href="#" className="">
                Privacy Policy
              </a>
            </li>
         
          </ul>
        </div>
        <div className="md:mt-40 md:mb-20 md:col-start-4">
          <h2 className="font-semibold mb-4">Follow us</h2>
          
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-black">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black">
              <FaInstagram />
            </a>
            <a href="#" className="text-black">
              <FaYoutube />
            </a>
          </div>
          <div className="text-gray-100">
            <h2 className="font-semibold mb-4">Jaipur</h2>
            <p>3:56 pm,</p>
            <p className="text-2xl">26°C</p>
            <p>Wind Gust: 0 mph</p>
            <p>31%</p>
          </div>
        </div>
      </div>
      <footer className="mt-10 w-full text-center text-gray-100">
        <p>© Copyright 2024
        Tree House Resort.
        All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
