import React from 'react';
import bannerImg from "/images/banner.jpeg";
import { FaShoppingBag } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
      <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>

        {/* img */}
        <div className='md:w-1/2 ml-8 rounded-s'>
          <img src={bannerImg} alt="" />
        </div>

        <div className='md:w-1/2'>
          <h1 className='text-5xl font-light mb-5'>Find Your Collection  your Unique style </h1>
          <p>Explore and buy exclusive fashion collections from various brands in our virtual store.</p>
          <button className='bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'><FaShoppingBag className='inline-flex'/>BUY NOW</button>
        </div>

      </div>
    </div>
  )
}

export default Banner