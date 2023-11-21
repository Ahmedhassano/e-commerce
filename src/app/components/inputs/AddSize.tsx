"use client"
import { useState } from "react"
export default function AddSize() {
  let listSize:string[]=["sm","md","lg","xl","2xl","3xl","4xl"]
  let [sizes,setSizes]=useState<string[]>([" "])  
  let add=(newel:string)=> {
   return sizes.includes(newel)?setSizes((oldArr)=>[...oldArr.filter(el=>el!==newel)]):setSizes((oldArr)=>[...oldArr,newel]) 
  }
    
  return (
    <div className=" space-y-2">
      <label className="custom-label">sizes</label>
      <input className="custom-input" type="text" value={sizes.filter((el=>el!=" ")).join(",")} />
      <ul className="list-none flex gap-2">
        {listSize.map(el=> 
          <li 
            onClick={()=>add(el)}
            className={`${sizes.includes(el)?"bg-slate-700 text-white ":" bg-gray-200 text-black "} 
             py-1 px-3  font-medium cursor-pointer rounded-xl shadow-lg`}>{el}</li> 
        )}
      </ul>
    </div>
  )
}
