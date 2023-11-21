import {AiFillStar} from "react-icons/ai"
import { Product } from "@/app/types";
import { getproductById } from "@/app/utils"
import Image from "next/image";
import MiddleSection from "@/app/components/productPage/MiddleSection";
import ProductsContainer from "@/app/components/ProductSection/ProductsContainer";
import Colors from "@/app/components/productPage/Colors";
import Sizes from "@/app/components/productPage/Sizes";
export default async function page({params}:any) {
  let res=await getproductById(+params.id)
  let product:Product =await res.json();
   return (
    <div className="max-w-5xl w-full pt-5 space-y-5 ">
        <section className="w-full grid gap-2 grid-cols-1 md:grid-cols-[40%_1fr] grid-rows-[500px] ">
           <div className="relative  ">
              <Image src={product?.image} fill objectFit="contain" alt={`${product?.title}`}/> 
           </div>
           <div className="p-3">
              <h3 className=" text-xl font-bold">{product.title}</h3>
              <span  className="flex gap-1 items-center">
                <AiFillStar className=" text-yellow-500"/>
                <p className=" text-gray-400 font-medium">{product?.rating?.rate}</p>
               </span>
              <h6 className="text-Primary font-medium text-lg">{product?.price}$</h6>
              <h5 className="font-medium text-lg ">Description</h5>
              <p className="my-3 text-gray-400 border-b-2 border-solid border-b-gray-300 pb-3 ">{product?.description}</p>
              {["women's clothing","men's clothing"].includes(product?.category)&& <div>
                  <Colors colorsList={["#0008ffac","#ff0000ac","#bf00ffac","#00eeffac","#000000ac"]}/>
                  <Sizes SizesList={["md","l","xl","2xl","3xl"]}/>
              </div> }
           </div>
        </section>  
        <MiddleSection description={product.description}/>
          <div className="text-center text-xl font-bold leading-none  select-none">
            <h1 className="">RelatedProducts</h1>
            <p  className=" text-2xl text-transparent underline decoration-rose-600 decoration-wavy ">aaaaa</p>
          </div>
          <ProductsContainer type={`/category/${product.category}`}/>
    </div>
  )
}
