import React from 'react'
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <section className='py-12'>
      <div className=' px-4 flex justify-start items-center pt-20 pr-16 p-20 pl-16 gap-20 bg-[#F7F7F7]'>
        <div className='w-80 h-[68px]'>
          <h5 className='w-80 h-[68px] font-bold text-2xl leading-8'>Trusted by 2000+ companies worldwide.</h5>
        </div>
        <div className='container flex items-center flex-col md:flex-row '>
           <Image src={"/images/logo-1.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-2.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-3.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-4.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-5.png"} alt='logo' width={123.8} height={38.52}/>
           <Image src={"/images/logo-6.png"} alt='logo' width={123.8} height={38.52}/> 
        </div>
       
      </div>
    </section>
  )
}

export default TrustedBy
