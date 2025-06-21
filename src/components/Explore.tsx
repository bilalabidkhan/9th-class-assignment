import React from 'react'
import Image from 'next/image'

const Explore = () => { 
    return (
        <div className='m-8'> 
          <div className='space-y-4'>
            <h2 data-aos="zoom-in-up" className='font-bold text-2xl sm:text-5xl text-center gap-4'>Explore Courses By Category</h2>  
             <p data-aos="zoom-in-up" className=' font-normal text-lg text-center leading-[27px]'>
                  Discover a wide range of courses 
                  covering a variety of subjects, 
                  taught by expert instructors.         
             </p>
          </div>
            <div data-aos="zoom-in-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-4 pt-5'>
                <Image src={"/images/box-1.png"} alt='box1' width={410.67} height={132}/>
                <Image src={"/images/box-2.png"} alt='box2' width={410.67} height={132}/>
                <Image src={"/images/box-3.png"} alt='box3' width={410.67} height={132}/>
                <Image src={"/images/box-4.png"} alt='box4' width={410.67} height={132}/>
                <Image src={"/images/box-5.png"} alt='box5' width={410.67} height={132}/>
                <Image src={"/images/box-6.png"} alt='box6' width={410.67} height={132}/>
                <Image src={"/images/box-7.png"} alt='box7' width={410.67} height={132}/>
                <Image src={"/images/box-8.png"} alt='box8' width={410.67} height={132}/>
                <Image src={"/images/box-9.png"} alt='box9' width={410.67} height={132}/>
            </div>
            <div data-aos="zoom-in-up" className='flex justify-center items-center pt-12'>
                <button className='font-normal text-base leading-6 text-[#000000] border rounded-md pt-3 pr-6 pb-6 pl-6 gap-2'>
                  View All Courses
                </button>
            </div>
        </div>
  )
}  
export default Explore
