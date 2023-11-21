import {BsArrowRight} from "react-icons/bs"

export default function Cartfooter() {
  return (
    <div className="w-full flex justify-between px-4 py-3 bg-gray-50 ">
        <div className="">
            <h3 className=" font-medium text-gray-500">total</h3>
            <h6 className=" font-bold">$1.453</h6>
        </div>
        <button className="flex gap-1 items-center rounded-full px-2 py-1 bg-teal-500  font-bold ">check All<BsArrowRight/></button>
    </div>
  )
}
