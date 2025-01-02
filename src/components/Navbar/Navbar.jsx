import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(null); // Tracks which dropdown is open

  const links = [
    { name: "Home", to: "/" },
    { name: "Accommodation", to: "/accommodation", dropdown: ["Option 1", "Option 2", "Option 3"] },
    { name: "Destination", to: "/destination", dropdown: ["Option A", "Option B"] },
    { name: "Wedding", to: "/wedding" },
    { name: "Facilities", to: "/facilities", dropdown: ["Facility_1", "Facility_2"] },
    { name: "Food & Dining", to: "/food-dining" },
    { name: "Travel & Tourism", to: "/travel-tourism", dropdown: ["Travel Tips", "Destinations"] },
    { name: "Activities", to: "/activities", dropdown: ["Outdoor", "Indoor"] },
    { name: "Event", to: "/event" },
    { name: "Contact Us", to: "/contact" },
  ];

  const leftLinks = links.slice(0, 5);
  const rightLinks = links.slice(5);

  return (
    <nav
    className="bg-transparent absolute z-20 w-full py-7 max-w-[120em] mx-auto"
    style={{
      background: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 0%, 
        rgba(0, 0, 0, 0.25) 40%,
        rgba(0, 0, 0, 0.1) 70%,
        transparent 100%
      )`
    }}
  >
      <div className="flex items-center justify-between lg:justify-center px-4 lg:px-1 py-4 md:py-0 xl:px-16 2xl:px-48">
        {/* Left Links */}
        <ul className="hidden ps-80 lg:flex items-center  uppercase font-medium text-sm md:text-base">
          {leftLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link to={link.to} className="hover:text-black text-white lg:text-[0.7em] xl:text-[0.8em] py-2 px-2 xl:px-3">
                {link.name}
              </Link>
              {/* Dropdown for links with dropdown data */}
              {link.dropdown && (
                <div className="hidden group-hover:block absolute  rounded-lg backdrop-blur-lg bg-black/50  mt-2">
                  {link.dropdown.map((item, i) => (
                    <div key={i} className="py-2 px-4">
                      <p className="text-xs text-gray-200 hover:text-primary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Logo Section */}
        {/* Use flexbox to center the logo on larger screens */}
        <div className="flex flex-grow items-center  justify-start lg:justify-center">
          <img src={Logo} alt="Logo" className="h-10 cursor-pointer" />
        </div>

        {/* Right Links */}
        <ul className="hidden lg:flex items-center  uppercase font-medium text-sm md:text-base">
          {rightLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link to={link.to} className="hover:text-black text-white lg:text-[0.7em] xl:text-[0.8em] px-2 xl:px-3">
                {link.name}
              </Link>
              {/* Dropdown for links with dropdown data */}
              {link.dropdown && (
                <div className="hidden group-hover:block absolute bg-black/50 rounded-lg backdrop-blur-lg   mt-2">
                  {link.dropdown.map((item, i) => (
                    <div key={i} className="py-2 px-4">
                      <p className="text-xs text-gray-200 hover:text-primary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="backdrop-blur-lg bg-black/75 text-white absolute w-full shadow-md lg
        :hidden">
          <ul className="flex flex-col p-4">
            {links.map((link, index) => (
              <li key={index}>
                <button
                  className="w-full text-left py-2 px-4 uppercase hover:text-gray-200"
                  onClick={() =>
                    setDropdownOpen((prev) =>
                      prev === index ? null : index
                    )
                  }
                >
                  {link.name}
                  {link.dropdown && (
                    <span className="float-right">
                      <ion-icon
                        name={`${
                          dropdownOpen === index
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  )}
                </button>
                {link.dropdown && dropdownOpen === index && (
                  <div className="ml-6 text-sm text-gray-200">
                    {link.dropdown.map((item, i) => (
                      <p key={i} className="py-1">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
