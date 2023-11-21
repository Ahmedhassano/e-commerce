"use client"
import { getproductByCategory } from "@/app/utils"
import { Product } from "@/app/types"
import { useState,useEffect } from "react"
import ProductCard from "./productCard"
type propsProductsContainer={
    type?:string|any,
}
export default function ProductsContainer({type}:propsProductsContainer){
    let [products,setProducts]=useState<Product[]>()
    useEffect(()=>{
       try{
        getproductByCategory(type).then(res=>res.json()).then(res=>setProducts(res))
       }catch(error){
        console.log(error);
       }
    },[])
    useEffect(()=>{
      try{
       getproductByCategory(type).then(res=>res.json()).then(res=>setProducts(res))
      }catch(error){
       console.log(error);
      }
   },[type])
    return (
    <section className='w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
       {products?.map(el=><ProductCard info={el} />)}
    </section>
  )
}
