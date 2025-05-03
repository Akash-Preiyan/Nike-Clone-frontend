import React from 'react'

const Service = ({img, head, text}) => {
  return (
    <div className='shadow-2xl rounded-2xl flex flex-col gap-5 m-3 px-3 py-3 lg:w-[25%] lg:h-[90%] md:w-[85%] md:h-[90%] sm:w-[85%] sm:h-[90%]'>
      <div className='flex justify-center items-center bg-coral-red w-16 h-16 rounded-full'>
      <img width={30} height={30} src={img} alt="image" />
      </div>
      <p className='text-coral-red font-semibold'>{head}</p>
      <p className='font-montserrat'>{text}</p>
    </div>
  )
}

export default Service