"use client"
import {useState} from "react"  
export default function MiddleSection({description}:{description:string,id?:number}) {
  let [showDescription,setshow]=useState<boolean>(true)
  return (
    <section className=" space-y-3">
       <div className="w-full flex gap-2 justify-center">
         <span 
           onClick={()=>setshow(true)} 
           className={`${showDescription?" text-rose-700 font-bold ":" text-gray-400 font-medium"} cursor-pointer text-lg`}>Description</span>
         <span
              onClick={()=>setshow(false)}
              className={`${!showDescription?" text-rose-700 font-bold ":" text-gray-400 font-medium"} cursor-pointer  text-lg`}>Overview(5)</span>
       </div>
       {showDescription&& <p className=" text-gray-500">{description}</p> } 
    </section>
  )
}
