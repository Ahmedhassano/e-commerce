
import { Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import {AiFillStar} from "react-icons/ai"
import AddCartBtn from "../cart/AddCartBtn";
export default function productCard({info}:{info:Product}) {
  return (
    <div  className=" relative p-2 shadow-sm shadow-gray-400 rounded-sm ">
       <Link  href={`/product/${info.id}`} className=" relative ">
        <div className="w-full h-72  md:h-56  bg-gray-400 relative rounded-sm" >
            <Image src={info.image} fill alt={info.title}/> 
          </div>
          <div className="">
            <p className=" text-gray-400">{info.category}</p>
            <h1>{info.title.slice(0,45)}...</h1>
            <p className="flex gap-1 items-center">
              <AiFillStar className=" text-yellow-300" />
              {info.rating.rate}
            </p>
            <div className="flex justify-between">
              <p className=" font-bold text-Primary">${info.price}</p>
            </div>
          </div>
       </Link>
       <div className=" absolute top-2 right-2">
         <AddCartBtn/>
       </div>
    </div>
  )
}
 