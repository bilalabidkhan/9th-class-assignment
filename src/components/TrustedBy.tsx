import React from 'react'
import Image from 'next/image'

const TrustedBy = () => {
  return (
      <div className='flex flex-col sm:flex-row items-center pt-20 pr-16 p-20 pl-16 gap-10 bg-[#F7F7F7]'>     
          <h5 data-aos="zoom-in-up" className='w-80 h-[68px] font-bold text-2xl leading-8 text-center'>Trusted by 2000+ companies worldwide.</h5>
        <div data-aos="zoom-in-up" className='md:flex'>
           <Image src={"/images/logo-1.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-2.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-3.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-4.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-5.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-6.png"} alt='logo' width={123.8} height={38.52}/> 
        </div>
       </div>
  )
}
export default TrustedBy
