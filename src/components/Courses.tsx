import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
       <div>
         <h1 data-aos="zoom-in-up" className='font-bold text-[56px] leading-[67.2px] text-center'>Courses</h1>
         <p data-aos="zoom-in-up" className='font-normal text-lg leading-[27px] text-center pt-10'>Your Ultimate Guide to learning</p>
          <div className='flex space-x-8 justify-center text-center pt-10'>
            <button data-aos="zoom-in-up" className='font-normal underline'>
              Popular
            </button>
            <button data-aos="zoom-in-up" className='font-normal'>
              Recommended
            </button>
            <button data-aos="zoom-in-up" className='font-normal'>
              Best Price
            </button>
          </div>
          <div data-aos="zoom-in-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-6 pt-4 m-8'>  
            <Image src={"/images/Card-1.png"} alt='card 1' width={416} height={534}/>
            <Image src={"/images/Card-2.png"} alt='card 2' width={416} height={534}/>
            <Image src={"/images/Card-3.png"} alt='card 3' width={416} height={534}/>
            <Image src={"/images/Card-4.png"} alt='card 4' width={416} height={534}/>
            <Image src={"/images/Card-5.png"} alt='card 5' width={416} height={534}/>
            <Image src={"/images/Card-6.png"} alt='card 6' width={416} height={534}/>
          </div>
          <div className='flex justify-center text-center m-20'>
            <button data-aos="zoom-in-up" className='pt-2 pr-4 pb-2 pl-4 gap-2 border border-[#000000] rounded-[6px] '>
              View All Courses
            </button>
         </div>
       </div>
  )
}

export default Courses


