import React from 'react'

const Achivements = () => {
  return (
    <div className='bg-[#FFFFFF] py-12'>
        <div className='container mx-auto px-2'>
            <div className='text-center mb-8'>
              <div className='relative mt-4'></div>
            </div>
               <div className='text-center mb-6 gap-4'>
                <h2 className='font-bold text-3xl leading-[57.6px]'>Our Achivements</h2>
                <p className='font-normal text-lg leading-7 max-w-2xl mx-auto'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing
                   elit. Suspendisse varius enim in eros elementum 
                   tristique. Duis cursus, mi quis viverra ornare, eros 
                   dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center'>
              <div className='bg-[#FFFFFF]'>
                 <h3 className='font-bold text-[40px]'>+200</h3>
                 <p className='font-normal text-base'>Courses</p>
              </div>
              <div className='bg-[#FFFFFF]'>
                 <h3 className='font-bold text-[40px]'>50K</h3>
                 <p className='font-normal text-base'>Mentors</p>
              </div>
              <div className='bg-[#FFFFFF]'>
                <h3 className='font-bold text-[40px]'>370k</h3>
                <p className='font-normal text-base'>Students</p>
              </div>
              <div className='bg-[#FFFFFF]'>
                <h3 className='font-bold text-[40px]'>100+</h3>
                <p className='font-normal text-base'>Recognition</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Achivements
