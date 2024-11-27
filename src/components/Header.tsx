"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
   const [isMenuOpen, setisMenuOpen] = useState(false);
   const taggleMenu = () => {
     setisMenuOpen(!isMenuOpen);
   }
  return (
      <header>
        <div className='Container flex justify-between items-center px-2 py-0 border border-[#676767] rounded-s-none bg-[#F7F7F7]'>
                <div className='flex items-center'>  
                      <Image  
                      src={"/images/logo-image.png"}
                      alt='logo'
                      width={130.6}
                      height={41}
                      className='ml-16 pt-[29px] pb-[29px] gap-[10.5px]'/>
                </div>
                <button className='' onClick={taggleMenu}>
                   <Image src={"/images/Vector.png"} alt='vector' width={18} height={12}/>
                </button>
                     <nav className={`${isMenuOpen ? "flex" : "hidden"}
                md:flex flex-col md:flex-row items-center md:space-x-6 absolute md:static top-16 md:top-0 left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none z-10`}>
                     <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0'> 
                        <div>
                            <ul className='flex space-x-6'>
                                <li><a href="home" className='font-normal hover:underline text-[#000000]'>Home</a></li>
                                <li><a href="courses" className='font-normal text-[#000000]'>Courses</a></li>
                                <li><a href="services" className='font-normal text-[#000000]'>Services</a></li>
                                <li><a href="achievement" className='font-normal text-[#000000]'>Achievement</a></li>
                                <li><a href="about Us" className='font-normal text-[#000000]'>About Us</a></li>
                                <li><a href="testimonial" className='font-normal text-[#000000]'>Testimonial</a></li>
                                <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 '>
                                <button className='pt-2 pr-5 pb-2 pl-5 border border-[#000000] rounded-lg text-[#000000] bg '>Login</button>
                                <button className='pt-2 pr-5 pb-2 pl-5 borde bg-[#000000] rounded-lg text-[#FFFFFF]'>Sign Up</button>
                                </div>
                            </ul>
                        </div>
                     </div>
                 
                     </nav>
              </div>
           </header>
        
    
  )
}

export default Header
