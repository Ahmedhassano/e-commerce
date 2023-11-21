"use client"
import {FilterItems } from '@/app/constants'
import { useState } from 'react'
type FilterProps={
  handleClick:(url:string)=> void,
  active:string
}
export default function Filter({handleClick,active}:FilterProps) {

  return (
    <ul className="flex  py-3 overflow-x-auto">
        {FilterItems.map(el=> 
        <li
          onClick={()=>handleClick(el.url)}
          className={`${active==el.url&&" text-white bg-Primary rounded-md"}
           ml-2 p-1 rounded-sm duration-150 cursor-pointer customShadow`}>
          {el.title}
        </li>)}  
    </ul>     
  )
}
