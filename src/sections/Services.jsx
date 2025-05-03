import React from 'react'
import {services} from "../constants/index.js"
import Service from "../components/Service.jsx"
const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 
    lg:flex-row lg:h-[40vh] 
    md:flex-col md:h-[130vh] 
    sm:flex-col sm:h-[140vh]"
>
      {services.map((ser) => (
        <Service
          key = {ser.id}
          img = {ser.imgURL}
          head = {ser.label}
          text = {ser.subtext}
        />
      ))}
    </section>
  )
}

export default Services