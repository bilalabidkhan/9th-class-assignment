import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='container mx-auto  bg-[#F7F7F7] pt-32 flex flex-col md:flex-row item center'>
       <div className=''>
          <h2 className='font-bold text-5xl leading-[57.6px] text-center'>Our team</h2>
          <p className='font-normal text-lg leading-[27px] text-center pt-6'>
           Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. 
          </p>
        <div className='flex space-x-6 gap-16 m-12 flex-col md:flex-row item center'>
            <Image src={"/images/james.png"} alt='james' width={397.67} height={273}/>
            <Image src={"/images/joseph.png"} alt='joseph' width={397.67} height={273}/>
            <Image src={"/images/joseph-2.png"} alt='joseph' width={397.67} height={273}/>
        </div>
        <div className='flex space-x-6 gap-16 m-12 flex-col md:flex-row items-center'>
            <Image src={"/images/eric.png"} alt='eric' width={397.67} height={273}/>
            <Image src={"/images/stephen.png"} alt='stephen' width={397.67} height={273}/>
            <Image src={"/images/john.png"} alt='john' width={397.67} height={273}/> 
        </div>
      </div>
    </div>
  )
}

export default Team
