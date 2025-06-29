import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center pt-10 pl-10">
        <div className='flex-1 space-y-6 text-center md:text-left'>
            <h1 data-aos="zoom-in-up" className='text-5xl font-bold leading-tight w-full md:w-[600px]'>
                Learn new skills online with ease
            </h1> 
            <p data-aos="zoom-in-up" className='text-lg leading-relaxed w-full md:w-[600px] 
                text-[#000000]'>
                Discover a wide range of courses covering a variety of
                subjects, taught by expert instructors.
            </p> 
        
           <div data-aos="zoom-in-up" className='flex space-x-4 justify-center md:justify-start'>
             <button className='px-6 py-3 text-white rounded-lg bg-black'>
               Start learning now
             </button>
             <button className='px-6 p-3 text-black rounded-lg border border-black'>
               Explore Courses
             </button>
           </div>
          </div>
            <div data-aos="zoom-in-up" className='flex-1 mt-8 md:mt-0'>
                <Image 
                 src={"/images/figma.png"}
                 alt='figma image'
                 width={700}
                 height={900}
                className="objec mx-auto rounded-lg shadow-lg"/>
            </div>
         
       </section> 
    
  )
}

export default Hero
