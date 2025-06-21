// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';

// const Header = () => {
//    const [isMenuOpen, setisMenuOpen] = useState(false);
//    const taggleMenu = () => {
//      setisMenuOpen(!isMenuOpen);
//    }
//   return (
//       <header>
//         <div className='Container flex justify-between items-center px-2 py-0 border border-[#676767] rounded-s-none bg-[#F7F7F7]'>
//                 <div className='flex items-center'>  
//                       <Image  
//                       src={"/images/logo-image.png"}
//                       alt='logo'
//                       width={130.6}
//                       height={41}
//                       className='ml-16 pt-[29px] pb-[29px] gap-[10.5px]'/>
//                 </div>
//                 <button className='' onClick={taggleMenu}>
//                    <Image src={"/images/Vector.png"} alt='vector' width={18} height={12}/>
//                 </button>
//                      <nav className={`${isMenuOpen ? "flex" : "hidden"}
//                 md:flex flex-col md:flex-row items-center md:space-x-6 absolute md:static top-16 md:top-0 left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none z-10`}>
//                      <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0'> 
//                         <div>
//                             <ul className='flex space-x-6'>
//                                 <li><a href="home" className='font-normal hover:underline text-[#000000]'>Home</a></li>
//                                 <li><a href="courses" className='font-normal text-[#000000]'>Courses</a></li>
//                                 <li><a href="services" className='font-normal text-[#000000]'>Services</a></li>
//                                 <li><a href="achievement" className='font-normal text-[#000000]'>Achievement</a></li>
//                                 <li><a href="about Us" className='font-normal text-[#000000]'>About Us</a></li>
//                                 <li><a href="testimonial" className='font-normal text-[#000000]'>Testimonial</a></li>
//                                 <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 '>
//                                 <button className='pt-2 pr-5 pb-2 pl-5 border border-[#000000] rounded-lg text-[#000000] bg '>Login</button>
//                                 <button className='pt-2 pr-5 pb-2 pl-5 borde bg-[#000000] rounded-lg text-[#FFFFFF]'>Sign Up</button>
//                                 </div>
//                             </ul>
//                         </div>
//                      </div>
                 
//                      </nav>
//               </div>
//            </header>
        
    
//   )
// }

// export default Header
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#F7F7F7] border border-[#676767]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo-image.png"
            alt="Logo"
            width={130}
            height={41}
            className="pt-2 pb-2"
          />
        </div>

        {/* Menu Button (Mobile) */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <Image src="/images/Vector.png" alt="Menu Icon" width={18} height={12} />
        </button>

        {/* Navigation Links */}
        <nav
          className={`
            ${isMenuOpen ? 'block' : 'hidden'}
            md:flex flex-col md:flex-row items-center absolute md:static top-[20%] left-0 w-full md:w-auto bg-white md:bg-transparent z-20 shadow-md md:shadow-none md:space-x-6
          `}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto items-center space-y-4 md:space-y-0 md:space-x-6 px-4 py-4 md:py-0">
            <li><Link href="/home" className="text-[#000000] hover:underline">Home</Link></li>
            <li><Link href="/courses" className="text-[#000000]">Courses</Link></li>
            <li><Link href="/services" className="text-[#000000]">Services</Link></li>
            <li><Link href="/achievement" className="text-[#000000]">Achievement</Link></li>
            <li><Link href="/about-us" className="text-[#000000]">About Us</Link></li>
            <li><Link href="/testimonial" className="text-[#000000]">Testimonial</Link></li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-4 pb-4 md:pb-0">
            <button className="px-5 py-2 border border-[#000000] rounded-lg text-[#000000]">
              Login
            </button>
            <button className="px-5 py-2 bg-[#000000] text-white rounded-lg">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;