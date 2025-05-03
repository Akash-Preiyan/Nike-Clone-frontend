import React from 'react'
import images from "../assets/images"
import icons from "../assets/icons";
const { instagram, twitter, facebook} = icons;
const { footerLogo } = images;
const Footer = () => {
  return (
    <div className='w-full gap-10 h-[220vh] grid grid-rows-4 items-center
    lg:h-[35vh] lg:grid lg:grid-cols-4 lg:gap-15 lg:justify-center lg:mt-8 lg:
    md:h-[120vh] md:grid md:grid-rows-2 md:grid-cols-2 md:gap-10
    sm:h-[200vh] sm:grid sm:grid-rows-4 sm:py-10 sm:gap-20'
>
      <div className='w-[55vw] h-[30vh] gap-5  flex flex-col 
      lg:w-[22vw] lg:h-[30vh] 
      md:w-[25vw] md:h-[30vh] 
      sm:w-[25vw] sm:h-[30vh]'>
        <img width={180} height={180} src={footerLogo} alt="logo" />
        <p className='text-gray-400 font-montserrat'>Get Shoes ready for the new term at your nearest Nike store. Find your perfect Size in Store. Get Rewards.</p>
        <div className='flex flex-row gap-5'>
          <img width={30} height={25} className='bg-white rounded-full' src={instagram} alt="instagram" />
          <img width={35} height={35} className='bg-white rounded-full' src={facebook} alt="facebook" />
          <img width={35} height={35} className='bg-white rounded-full' src={twitter} alt="twitter" />
        </div>
      </div>


      <div className='w-[55vw] h-[40vh] gap-3  flex flex-col'>
        <p className='text-white text-3xl'>Products</p>
        <p className='text-gray-400 font-montserrat'>Air Force 1</p>
        <p className='text-gray-400 font-montserrat'>Air Max 1</p>
        <p className='text-gray-400 font-montserrat'>Air Force 2</p>
        <p className='text-gray-400 font-montserrat'>Nike Waffle Racer</p>
        <p className='text-gray-400 font-montserrat'>Nike Cortez</p>
      </div>


      <div className='w-[55vw] h-[40vh] gap-3  flex flex-col'>
        <p className='text-white text-3xl'>Help</p>
        <p className='text-gray-400 font-montserrat'>About us</p>
        <p className='text-gray-400 font-montserrat'>FAQs</p>
        <p className='text-gray-400 font-montserrat'>How it works</p>
        <p className='text-gray-400 font-montserrat'>Privacy Policy</p>
        <p className='text-gray-400 font-montserrat'>Payment Policy</p>
      </div>

      <div className='w-[55vw] h-[40vh] gap-3  flex flex-col'>
        <p className='text-white text-3xl'>Get in touch</p>
        <p className='text-gray-400 font-montserrat'>customer@nike.com</p>
        <p className='text-gray-400 font-montserrat'>+91-2554862354</p>
      </div>
    </div>
  )
}

export default Footer;