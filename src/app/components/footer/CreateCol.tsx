import Link from "next/link";

export default function CreateCol({title,links}:{title:string,links:{href:string,title:string}[]}) {
  return (
    <div className="">
       <h1 className="font-bold">{title}</h1>
       <ul className=" list-none">
         {links.map(el=>
           <li className=" whitespace-nowrap hover:text-Primary">
             <Link href={el.href}>{el.title}</Link>
           </li>)}
       </ul>
    </div>
  )
}
