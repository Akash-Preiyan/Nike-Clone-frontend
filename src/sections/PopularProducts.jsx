import React from 'react';
import products from "../constants/index.js";
import PopularProductCard from "../components/PopularProductCard.jsx";

const PopularProducts = () => {
  return (
<section className='w-full max-w-[1200px] mx-auto px-6 py-10'>
  {/* Header Section */}
    <div className='mb-10'>
      <h1 className='text-4xl mb-4 sm:text-5xl'>
        Our <span className='text-coral-red'>Popular</span> Products
      </h1>
      <p className='font-montserrat text-slate-500 text-base sm:text-sm md:text-lg'>
        Experience top-notch quality and style with our sought after selections. <br />
        Discover a world of comfort, design and value.
      </p>
    </div>

    {/* Product Cards Container */}
    <div className='flex flex-col items-center sm:flex-col md:flex-col lg:flex-row lg:justify-start lg:items-center gap-8'>
      {products.map((product) => (
        <PopularProductCard
          key={product.id}
          showImg={product.imgURL}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
</section>

  );
};

export default PopularProducts;
