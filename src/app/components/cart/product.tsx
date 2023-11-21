"use client"
import { Product } from '@/app/types';
import { getproductById } from '@/app/utils'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
export default  function product({id}:{id:number}) {
  let [item,setItem]=useState<Product>()
 useEffect(()=>{
   getproductById(id)
   .then(res=>res.json())
   .then(res=>setItem(res))
 
},[])
  return (
    <div className='flex items-center justify-between p-2 bg-white rounded-sm overflow-hidden '>
      <div className="flex gap-2">
        <div className=" w-12 h-12 relative rounded-sm">
          <Image src={item?.image||""} fill alt={`${item?.title}`} quality={100}/>
        </div>  
        <div className="">
          <h4 className='text-gray-300 whitespace-nowrap overflow-x-clip  text-ellipsis'>{item?.title}</h4> 
           <h6 className=' text-Primary'>${item?.price}</h6>
        </div>     
      </div>
      <div className="flex items-center gap-1">
         <span className=' rounded-full bg-gray-300 p-1 text-white text-lg font-medium cursor-pointer select-none'><AiOutlineMinus/></span>
         <h3 className=' text-lg font-medium'>2</h3>
         <span className=' rounded-full bg-gray-300 p-1 text-white text-lg font-medium cursor-pointer select-none'><AiOutlinePlus/></span>
      </div>
    </div>
  )
}
