import React, { useState } from 'react';
import images from "../assets/images/index.js";
const { headerLogo } = images;
import { navLinks } from '../constants/index.js';
import assets from '../assets/icons/index.js';

const Nav = () => {
  // State to toggle the menu visibility
  const [isMenuOn, setIsMenuOn] = useState(false);

  // Handle click to toggle menu
  const handleChange = () => {
    setIsMenuOn(!isMenuOn);
  };

  return (
    <header className='padding-x py-8 absolute z-50 w-full'>
      <nav className='flex w-full relative justify-between items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={30}
          />
        </a>

        {/* Desktop menu */}
        <ul className='flex-1 flex justify-evenly items-center gap-3 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-500'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (visible on mobile) */}
        <div className='hidden max-lg:block' onClick={handleChange}>
          <img
            src={assets.hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOn && (
        <ul className='absolute top-16 left-0 w-full bg-white p-5 flex flex-col items-center gap-3 max-lg:block'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-500'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
