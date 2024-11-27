import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pb-16 '>
      <div className='container mx-auto'> 
         <div className='flex space-x-6 pt-20'>
            <div>
              <h1 className='font-semibold text-lg w-[500px] h-[27px] pl-14'>
                Subscribe to our newsletter
              </h1>
              <p className='font-normal text-base leading-6 pl-14 w-[500px] h-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className='container mx-auto felx-1 flex-col md:flex-row items-center grid grid-col-2 pl-96  pr-10 gap-2'>
               <input type="email" placeholder='Enter your email' className='p-3 border rounded-md border-black'/>
               <button className='font-normal text-base pt-3 pr-6 pb-3 pl-6 border rounded-md border-black'>
                Subscribe
               </button>
                <p className='flex-row-reverse'>By subscribing you agree to with our Privacy Policy</p>
            </div>
             
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
           <div className='pt-10 pl-14'>
            <Image src={"/images/logo-image.png"} alt='logo-image' width={130.6} height={40}/>
           </div>
              
            <div className='pt-11 flex flex-col md:flex-row items-center'>
                <h2 className='font-semibold'>Courses</h2>
              <ul className='mt-4 space-y-2'>
                <li><Link href="#">Business</Link></li>
                <li><Link href="#">Development</Link></li>
                <li><Link href="#">Technology</Link></li>
                <li><Link href="#">Design</Link></li>
                <li><Link href="#">Programming</Link></li>
              </ul>
            </div>
            <div className='pt-11 flex flex-col md:flex-row items-center'>
                <h2 className='font-semibold'>Resources</h2>
              <ul className='mt-4 space-y-2'>
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">Resume</Link></li>
                <li><Link href="#">Learning</Link></li>
                <li><Link href="#">Interveiw Preparation</Link></li>
                <li><Link href="#">Jobs</Link></li>
              </ul>
            </div>
            <div className='pt-11 flex flex-col md:flex-row items-center'>
                <h2 className='font-semibold'>About US</h2>
              <ul className='mt-4 space-y-2'>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Help/Support</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Terms and Conditions</Link></li>
                <li><Link href="#">Partners</Link></li>
              </ul> 
            </div>
          </div>
             <div className='flex space-x-6 pt-28 pl-14 flex-col md:flex-row items-center'>
               <p>2023 Ddsgnr. All right reserved.</p>
               <div className='space-x-6'>
                 <Link href="#">Privacy Policy</Link>
                 <Link href="#">Terms of Service</Link>
                 <Link href="#">Cookies Settings</Link>            
               </div>
                   <div className='flex space-x-6 pl-96'>
                     <Image src={"/images/facebook.png"} alt='facebook' width={24} height={24} className='w-[10px] h-[18px]'/>
                     <Image src={"/images/instagram.png"} alt='instagram' width={24} height={24} className='w-[10px] h-[18px]'/>
                     <Image src={"/images/twitter.png"} alt='twitter' width={24} height={24} className='w-[10px] h-[18px]'/>
                     <Image src={"/images/linkedln.png"} alt='linkedln' width={24} height={24} className='w-[10px] h-[18px]'/>
                   </div>
             </div>
          </div>
     
    </footer>
  )
}

export default Footer
