"use client"
import {MdDeleteForever} from "react-icons/md"
import { useState } from "react"

export default function AddColors() {
  let [Targetcolor,setTargetcolor]=useState<string>("#000000")
  let [colors,setColors]=useState<string[]>([])
  let removeColor=(clr:string):void=>setColors((oldColors)=>[...oldColors.filter(el=>el!==clr)])
  let addColors=(clr:string):void=>{
    if (!colors.includes(clr))
       setColors((oldColors)=>[...oldColors,Targetcolor])
    }
  return (
    <div className="flex flex-col space-y-2">
      <label className="custom-label ">color</label> 
      <input className="custom-input" type="text" placeholder="enter color" value={colors.join(",")} />
      <div className="flex justify-between"> 
        <input onChange={(e)=>setTargetcolor(e.target.value)} type="color" className="appearance-none" id="color"  />
        <div 
           onClick={()=>addColors(Targetcolor)}
          className="bg-gray-100 font-bold select-none cursor-pointer shadow-xl py-1 px-3">ADD +</div>
      </div>
      <div className="w-full flex flex-wrap gap-3">
        {colors.map(el=> 
             <div 
               className="w-full flex justify-between items-center gap-3">
                <div className="flex gap-2 items-center">
                  <span
                    style={{backgroundColor:`${el}`}} 
                    className=" w-7 h-7 relative rounded-full shadow-lg"/>
                  <p className=" bg-gray-100 shadow-xl p-3 rounded-full ">{el}</p>
                </div>
                <div className="">
                  <MdDeleteForever
                      onClick={()=>removeColor(el)}
                     className=" text-2xl select-none cursor-pointer"/>
                </div>
             </div> )}
      </div>
    </div>
  )
}
