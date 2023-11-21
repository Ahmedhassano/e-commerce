import Link from "next/link"
import NavBar from "./NavBar"
import {AiOutlineShoppingCart,AiOutlineHeart } from "react-icons/ai"
export default function Header() {
  return (
    <header className='w-full max-w-5xl flex justify-between '>
       <NavBar/>
       <div className="flex gap-2 items-center text-xl ">
         <Link href={"/"}>
           <AiOutlineHeart className=" hover:text-Primary cursor-pointer select-none"/>
         </Link>
         <Link href={"/cart"}>
           <AiOutlineShoppingCart className="hover:text-Primary cursor-pointer select-none"/>
         </Link>
       </div>
    </header>
  )
}
