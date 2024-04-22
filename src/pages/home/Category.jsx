import React from 'react'
import { Link } from 'react-router-dom'

const companyLogo = [
  { id: 1, img: "/images/company/brand1.png" },
  { id: 2, img: "/images/company/brand2.png" },
  { id: 3, img: "/images/company/brand3.png" },
  { id: 4, img: "/images/company/brand4.png" },
  {id: 5, img: "/images/company/brand5.png"},
]

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      {/* brand logo */}
     
      {/* category grid */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'> 
        <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 rounded-sm inline-flex'>Explore the latest style news</p>
        <div>
          <Link to="/"><img src='/images/category/image1.jpeg' alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
        </div>
        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-2'>
            <Link to="/"><img src="/images/category/image2.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/images/category/image5.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/images/category/image2.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/images/category/image5.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category