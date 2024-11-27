import React from 'react'
import Image from 'next/image'

const Top = () => {
  return (
    <div className='pr-40 text-sm hidden md:block bg-[#F7F7F7] '>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-screen-lg mx-auto py-3 px-4'>  
         <div className="flex flex-col md:flex-row md:space-x-8 gap-4 md:gap-4">
           <div>
             <span>Phone Number:</span>
             <a href="Phone Number: 956 742 455 678"> 956 742 455 678</a> 
           </div>
            <div>
             <span>Email</span>
             <a href="Email: info@ddsgnr.com">info@ddsgnr.com</a>
           </div>
           <div className='flex md:justify-center items-center gap-4 '>
                <Image src={"/images/facebook.png"} alt='facebook' width={24} height={24} className='w-3 h-4 text-[#000000]'/>
                <Image src={"/images/instagram.png"} alt='instagram' width={24} height={24} className='w-4 h-4 text-[#000000]'/>
                <Image src={"/images/twitter.png"} alt='twitter' width={24} height={24} className='w-4 h-4 text-[#000000]'/>
                <Image src={"/images/linkedln.png"} alt='linkedln' width={24} height={24} className='w-4 h-4 text-[#000000]'/>
           </div>
         </div>
      </div>
    </div>
  )
}
export default Top
