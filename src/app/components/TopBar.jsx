import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return (
    <div className='w-full p-2 hidden md:flex justify-around  bg-emerald-50 border-2 border-solid border-b-teal-400 '>
        <div className="flex gap-2">
          <p>0 (11)-456-8456 </p> 
          <p>our location</p>
        </div>
       <p>super value deals-save more with coupons</p>
       <div className="flex ">
         <Link href={"/"}>
           login
         </Link>
          / 
         <Link href={"/"}>
           sginUp
         </Link>
       </div>
    </div>
  )
}
