import React from 'react'
import Image from 'next/image'
import { FaLinkedin,} from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaDribbble } from "react-icons/fa6";

const Team = () => {
  const Team = [
    {
      Image: "/images/james.png",
      name: "James Nduku",
      content: "Marketing Coordinator",
      icon: <FaLinkedin />,
      icon1: <IoLogoTwitter />,
      icon2: <FaDribbble />,
    },
    {
      Image: "/images/joshep.png",
      name: "Joseph Munyambu",
      content: "Nursing Assistant",
      icon: <FaLinkedin />,
      icon1: <IoLogoTwitter />,
      icon2: <FaDribbble />,
    },
    {
      Image: "/images/joshep2.png",
      name: "Joseph Ngumbau",
      content: "Medical Assistant",
      icon: <FaLinkedin />,
      icon1: <IoLogoTwitter />,
      icon2: <FaDribbble />,
    },
    {
      Image: "/images/eric.png",
      name: "Erick Kipkemboi",
      content: "Web Designer",
      icon: <FaLinkedin />,
      icon1: <IoLogoTwitter />,
      icon2: <FaDribbble />,
    },
    {
      Image: "/images/stephen.png",
      name: "Stephen Kerubo",
      content: "President of Sales",
      icon: <FaLinkedin />,
      icon1: <IoLogoTwitter />,
      icon2: <FaDribbble />,
    },
    {
      Image: "/images/john.png",
      name: "John Leboo",
      content: "Dog Trainer",
      icon: <FaLinkedin />,
      icon1: <IoLogoTwitter />,
      icon2: <FaDribbble />,
    },
  ]
  return (
     <div> 
       <h2 data-aos="zoom-in-up" className='font-bold text-5xl leading-[57.6px] text-center'>Our team</h2>
        <p data-aos="zoom-in-up" className='font-normal text-lg leading-[27px] text-center pt-6'>
           Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. 
        </p>
        <div data-aos="zoom-in-up" className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 py-28'>
          {Team.map((items, index) => (
            <div key={index} className='pt-14'>
              <Image src={items.Image} alt='image' width={100} height={100} className='mx-28'/>
              <p className='text-center font-semibold text-xl pt-6'>{items.name}</p>
              <p className='text-center font-medium text-lg'>{items.content}</p>
            <div className='flex justify-center items-center gap-[14px] pt-6'>{items.icon} 
              {items.icon1}
              {items.icon2}</div>     
            </div>   
          ))}
        </div>
     </div>
  )
}

export default Team
