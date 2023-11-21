"use client"
import { useState } from "react"
import {navLinks} from "../../constants/index"
import Logo from './logo'
import Link from 'next/link'
export default function navBar() {
  let [active,setActive]=useState<string|null>("home")
  return (
    <nav className='grid grid-cols-[auto_1fr] gap-2 items-center'>
       <Logo/>
       <div className='flex gap-2'> 
        {navLinks.map(el=>
        <Link 
          href={el.href} 
          onClick={()=>setActive(el.title)}
          className={`${active==el.title?"text-Primary":"text-black"} font-bold first-letter:uppercase`}>
            {el.title}
        </Link> )}
      </div>  
    </nav>
  )
}
