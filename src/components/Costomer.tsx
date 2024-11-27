import React from 'react'
import Image from 'next/image'

const Costomer = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center'>
       <div className='bg-[#F7F7F7]'>
         <h2 className='font-bold text-5xl leading-[57.6px] text-[#000000] pl-10'>Customer testimonials</h2>
         <p className='font-normal text-lg leading-[27px] text-[#000000] pl-10 pt-4'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
         </p>
         <div className='flex justify-center items-center pt-14'>
            <Image src={"/images/Card.png"} alt='Card' width={1152} height={417.89}/> 
         </div>
       </div>
    </div>
  )
}

export default Costomer
