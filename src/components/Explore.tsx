import React from 'react'
import Image from 'next/image'

const Explore = () => { 

    return (
    <section className='flex flex-col md:flex-row items-center'>
        <div className='container mx-auto pt-28 pr-16 pb-28 pl-16 gap-20'>
            <div className='pl-36 space-x-6'>
                <h2 className='font-bold text-5xl leading-[57.6px]'>Explore Courses By Category</h2>
            </div>
            <div>    
                <p className='pl-36 font-normal text-lg leading-[27px] pt-6'>
                  Discover a wide range of courses 
                  covering a variety of subjects, 
                  taught by expert instructors.
                </p>
            </div>
            <div className='flex space-x-6 pt-8 flex-col md:flex-row items-center'>
                <Image src={"/images/box-1.png"} alt='box1' width={410.67} height={132}/>
                <Image src={"/images/box-2.png"} alt='box2' width={410.67} height={132}/>
                <Image src={"/images/box-3.png"} alt='box3' width={410.67} height={132}/>
            </div>
            <div className='flex space-x-6 pt-8 flex-col md:flex-row items-center'>
                <Image src={"/images/box-4.png"} alt='box4' width={410.67} height={132}/>
                <Image src={"/images/box-5.png"} alt='box5' width={410.67} height={132}/>
                <Image src={"/images/box-6.png"} alt='box6' width={410.67} height={132}/>
            </div>
            <div className='flex space-x-6 pt-8 flex-col md:flex-row items-center'>
                <Image src={"/images/box-7.png"} alt='box7' width={410.67} height={132}/>
                <Image src={"/images/box-8.png"} alt='box8' width={410.67} height={132}/>
                <Image src={"/images/box-9.png"} alt='box9' width={410.67} height={132}/>
            </div>
            <div className='flex justify-center items-center pt-12'>
                <button className='font-normal text-base leading-6 text-[#000000] border rounded-md pt-3 pr-6 pb-6 pl-6 gap-2'>
                  View All Courses
                </button>
            </div>
        </div>
    </section>
  )
}

export default Explore
