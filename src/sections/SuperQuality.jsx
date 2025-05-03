import React from 'react';
import Button from '../components/Button';
import images from "../assets/images/index.js";

const SuperQuality = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-auto md:h-[80vh] px-4 md:px-8'>
      
      {/* Text Section */}
      <div className='flex-1 flex flex-col gap-6 justify-center'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl'>
          We Provide You <span className='text-coral-red'>Super<br /> Quality</span> shoes
        </h1>
        <p className='font-montserrat'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.
        </p>
        <p className='font-montserrat'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <Button label="View Details" />
      </div>

      {/* Image Section */}
      <div className='flex-1 flex items-center justify-center mt-10 md:mt-0'>
        <img 
          src={images.shoe8} 
          alt="Shoe" 
          className='object-contain w-[90%] h-[90%]' 
        />
      </div>
    </div>
  );
};

export default SuperQuality;
