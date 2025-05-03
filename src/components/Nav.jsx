import React from 'react'
import images from "../assets/images/index.js"
const {headerLogo} = images;
import {navLinks} from '../constants/index.js'
import assets from '../assets/icons/index.js'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-50 w-full '>
        <nav className='flex w-full relative justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} 
                alt="Logo" 
                width={130}
                height={30}
                />
            </a>

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

            <div className='hidden max-lg:block'>
              <img src={assets.hamburger}
              alt="hamburger" 
              width = {25}
              height = {25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav