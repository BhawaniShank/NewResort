import React from 'react'

const NewNavbar = () => {
  return (
    <div>
      <div className="navbar fixed z-50 backdrop-blur-2xl text-white  bg-base-100/75">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content backdrop-blur-2xl bg-base-100/75 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>DESTINATIONS</a></li>
          <li><a>HOTELS</a></li>
          <li><a>DINING</a></li>
          <li><a>OFFERS</a></li>



          <li>
            <a>MEMBERSHIPS</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li>
            <a>MORE</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>LOGIN / JOIN</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-md  md:text-xl">DESERT NIGHTS</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>DESTINATIONS</a></li>
        <li><a>HOTELS</a></li>
        <li><a>DINING</a></li>
        <li><a>OFFERS</a></li>
        <li>
          <details>
            <summary>MEMNERSHIPS</summary>
            <ul className="p-2 backdrop-blur-2xl bg-base-100/75 z-30">
              <li><a>Submenu</a></li>
              <li><a>Submenu</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>MORE</summary>
            <ul className="p-1  backdrop-blur-2xl bg-base-100/75 z-30">
              <li><a>Submenu</a></li>
              <li><a>Submenu</a></li>
            </ul> 
          </details>
        </li>

      </ul>
    </div>
    <div className="navbar-end">
      <ul className="flex items-center gap-3 xl:gap-10">
        <li className="hidden text-sm lg:block"><a>LOGIN / JOIN</a></li>
      <a className="btn bg-[#C98A03]/75 border-0 text-sm md:text-md  text-white">BOOK A STAY</a>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default NewNavbar
