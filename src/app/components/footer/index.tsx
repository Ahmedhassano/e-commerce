import React from 'react'
import { Footer } from '@/app/constants'
import Logo from '../Header/logo'
import CreateCol from './CreateCol'
import Image from 'next/image'
export default function footer() {
  return (
    <footer className=' w-full max-w-5xl px-3 pt-5 pb-7 flex gap-3 flex-wrap'>
      <div className='flex-1'>
          <Logo/>
          <h6 className=' text-gray-500'>contact</h6>
          <span className='flex text-gray-700'>
            <h5 className=' font-medium text-gray-700 '>Adress: </h5>
            <p className=' text-gray-500 whitespace-nowrap'> 562 wellington road,street 32 san francisco</p>
          </span>
          <span className='flex text-gray-700'>
            <h5 className=' font-medium text-gray-700 '>Phone: </h5>
            <p className=' text-gray-500  whitespace-nowrap'> +012222 365/[+91]01 23456789</p>
          </span>
          <span className='flex text-gray-700'>
            <h5 className=' font-medium text-gray-700 '>Hours: </h5>
            <p className=' text-gray-500  whitespace-nowrap'> 10:00-18:00 man-sat</p>
          </span>
      </div> 
      {Footer.map(el=>
         <div className=" flex-1">
           <CreateCol title={el.title} links={el.links} /> 
          </div> 
          )}
      <div className="">
        <h5 className='font-medium'>secured payment gateway</h5>
        <div className="flex gap-2">
          <div className="relative w-10 h-5"><Image src={'/visa-logo.png'} fill  alt='visa-logo.png' /></div>
          <div className="relative w-10 h-5"><Image src={'/mastro.png'} fill  alt='visa-logo.png' /></div>
          <div className="relative w-10 h-5"><Image src={'/mastro.png'} fill  alt='visa-logo.png' /></div>
        </div>
      </div>    
    </footer>
  )
}
