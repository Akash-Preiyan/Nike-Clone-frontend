import React from 'react'
import Button from "../components/Button.jsx"

const Subscribe = () => {
  return (
    <div className='flex flex-col justify-between gap-8 w-full h-[25vh]
    lg:flex-row 
    md:flex-col md:gap-12  
    sm:flex-col sm:gap-12'>
      <div className='w-full 
      lg:w-1/2
      md:w-full 
      sm:w-full'>
        <h1 className='text-3xl'>Sign Up for <span className='text-coral-red'>Updates </span> & Newsletter</h1>
      </div>
      <div className='w-[95%] h-[12vh] flex justify-between items-center border border-slate-gray rounded-full px-5
        lg:w-1/2
        md:w-full 
        sm:w-full
      '>
        <input type="text" placeholder='Subscribe@nike.com' />
        <Button
          label={"Sign Up"}
        />
      </div>
    </div>
  )
}

export default Subscribe