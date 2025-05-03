import React from 'react'
import assets from "../assets/icons/index.js"

const PopularProductCard = ({showImg,name,price}) => {
  return (
    <div>
        <img className='py-4'  src={showImg} alt={name} />
        <div className='flex justify-start gap-2 m-2'>
          <img src={assets.star} alt="Star" />
          <p>(4.5)</p>
        </div>

        <p className='font-montserrat m-2'>{name}</p>
        <p className='text-coral-red text-lg m-2 text-pretty'>{price}</p>
    </div>
  )
}

export default PopularProductCard;