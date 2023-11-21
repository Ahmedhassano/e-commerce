"use client"
import { useEffect } from "react"
import {AiOutlineShoppingCart } from "react-icons/ai"
export default function AddCartBtn() {
  
  return (
    <>
      <AiOutlineShoppingCart 
          className={"w-fit h-fit bg-gray-100 p-1 shadow-xl rounded-md text-xl cursor-pointer select-none"}/>
    </>
  )
}
