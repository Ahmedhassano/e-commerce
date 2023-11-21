"use client"
import Filter from "./Filter"
import ProductsContainer from "./ProductsContainer"
import { useState } from "react"
export default function ProductsSection() {
  let [activeFilter,setActiveFilter]=useState<string>(" ")
  return (
    <section className='w-full p-2'>
       <Filter active={activeFilter} handleClick={setActiveFilter}/>  
       <ProductsContainer type={activeFilter}/>       
    </section>
  )
}
