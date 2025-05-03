import React from 'react'
import images from '../assets/images'
import icons from '../assets/icons';
const { star } = icons;
const { customer1, customer2 } = images;
const CustomerReviews = () => {
  return (
    <div className='w-full h-[150vh] flex flex-col 
    lg:h-[70vh] lg:flex-col
    md:h-[110vh] md:flex-col 
    sm:h-[130vh] sm:flex-col
    '>
      <div className='w-full h-1/3 flex flex-col  justify-start items-center gap-5 
      lg:flex-col lg:h-1/2
      md:flex-col md:h-1/2
      sm:flex-col sm:h-1/2
      '>
        <h1 className='text-4xl font-palanquin'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
        <div className='w-full flex flex-col justify-start items-center'>
          <p className='font-montserrat'>Hear genuine stories from our satisfied customers about</p>
          <p className='font-montserrat'>their exceptional experiences with us.</p>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-20 
      lg:flex-row 
      md:flex-col 
      sm:flex-col'>
        <div className='w-90 flex flex-col items-center gap-1'>
            <img className='rounded-full' width={130} height={130} src={customer1} alt="customer1" />
            <p className='font-montserrat'>The attention to detail and the quality of</p>
            <p className='font-montserrat'>the product exceeded my expectations.</p>
            <p className='font-montserrat'>Hightly recommended!</p>
            <div className='flex flex-row gap-2'>
              <img src={star} alt="star" />
              <p>(4.5)</p>
            </div>
            <h2 className='text-xl font-semibold'>Morich Brown</h2>
        </div>
        <div className='w-90 flex flex-col items-center gap-1'>
              <img src={customer2} alt="customer1" />
              <p className='font-montserrat'>The product not only met but exceeded</p>
              <p className='font-montserrat'>my expectations. I'll definitely be a</p>
              <p className='font-montserrat'>returning customer!</p>
              <div className='flex flex-row gap-2'>
                <img src={star} alt="star" />
                <p>(4.5)</p>
              </div>
              <h2 className='text-xl font-semibold'>Lota Mongeskar</h2>

        </div>
      </div>
    </div>
  )
}

export default CustomerReviews