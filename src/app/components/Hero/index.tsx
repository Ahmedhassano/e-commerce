import Image from "next/image";
import TextContent from "./TextContent";
import Slider from "../Slider";
import { categories } from "@/app/constants";
export default function Hero() {
  return (
    <section className="w-full  space-y-3  ">
      <div className="w-full  p-2 grid gap-2 grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[auto_1fr] justify-center content-center">
        <TextContent/>
        <div className="relative  aspect-video -order-1 md:order-2 ">
          <Image src="/home-img.png" fill alt="hero img" className=" object-contain" />
        </div>
      </div>

     <div className=" space-y-4">
      <h3 className=" text-Primary font-medium text-2xl">populor categories</h3>
      <Slider >
       {categories.map(el=>
         <div  className=" rounded-md bg-white p-1 cursor-pointer border-2 border-gray-300 ">
            <div className=" relative h-36  bg-gray-500 rounded-md ">
              <Image src={`/${el.img}`} fill alt={el.title+"img"}/> 
            </div>
             <h3 className=" text-center">{el.title}</h3>
         </div> 
       )}
      </Slider> 
      </div>
    </section>
  )
}
