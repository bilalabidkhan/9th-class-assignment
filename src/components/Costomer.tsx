import React from 'react'
import Image from 'next/image'

const Costomer = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center bg-[#F7F7F7]'>
       <div className='pt-16'>
         <h2 data-aos="zoom-in-up" className='font-bold text-5xl leading-[57.6px] text-[#000000] pl-10'>Customer testimonials</h2>
         <p data-aos="zoom-in-up" className='font-normal text-lg leading-[27px] text-[#000000] pl-10 pt-4'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
         </p>
         <div data-aos="zoom-in-up" className='flex flex-col sm:flex-row items-center gap-6 m-8 pt-6'>
            <Image  src={"/images/software.png"} alt='Card' width={1152} height={417.89}/> 
            <Image  src={"/images/master.png"} alt='Card' width={1152} height={417.89}/> 
            <Image  src={"/images/designer.png"} alt='Card' width={1152} height={417.89}/> 
         </div>
       </div>
    </div>
  )
}

export default Costomer
