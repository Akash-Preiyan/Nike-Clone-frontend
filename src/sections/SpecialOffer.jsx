import React from 'react'
import images from '../assets/images'
import Button from "../components/Button.jsx"
const { offer } = images;
const SpecialOffer = () => {
  return (
    <div className='w-full flex flex-col-reverse gap-10
    lg:h-[80vh] lg:flex-row 
    md:h-[120vh] md:flex-col-reverse
    sm:h-[130vh] sm:flex-col-reverse'>
      <div className='lg:w-1/2 h-full flex justify-center items-center 
      md:w-full 
      '>
        <img src={offer} width={600} height={400} alt="Offer Image" />
      </div>
      <div className='lg:w-1/2 flex flex-col justify-center items-start gap-5
       md:w-full
       '>
        <h1 className='font-semibold text-4xl'><span className='text-coral-red'>Special</span> Offer</h1>
        <p className='font-montserrat'>Ensuring on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='font-montserrat'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex flex-row gap-5'>
          <Button label='View Details' />
          <Button label='Learn more' textColor={'text-grey'} borderColor={'bg-black'} backgroundColor={'bg-white'}/>
        </div>  
      </div>

    </div>
  )
}

export default SpecialOffer