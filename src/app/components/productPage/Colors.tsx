"use client"
import {BsCheck} from "react-icons/bs"
import { useState } from "react"

export default function Colors({colorsList}:{colorsList:string[]}) {
  let [color,setcolor]=useState("")
  return (
    <div className=" flex gap-2 m-2">
      {colorsList.map(el=> 
          <span
           onClick={()=>setcolor(el)} 
           style={{backgroundColor:`${el}`}} 
           className={`w-7 h-7 rounded-full cursor-pointer grid place-content-center `}>
            {el==color&&<BsCheck className=" text-2xl text-white" />}
         </span> )}
    </div>
  )
}
