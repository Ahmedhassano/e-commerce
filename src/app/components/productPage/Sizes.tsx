"use client"
import { useState } from "react"
export default function Sizes({SizesList}:{SizesList:string[]}) {
  let[activeSize,setsize]=useState("")
  return (
    <div className='flex gap-2 mt-2'>
        {SizesList.map(el=> 
            <span
             onClick={()=>setsize(el)}   
             className={`
                  ${el==activeSize&&" border-2 border-solid border-blue-300 "} 
                   w-10 h-10 grid place-content-center rounded-full cursor-pointer select-none uppercase font-medium`}>
                {el}
            </span>
       )}
    </div>
  )
}
