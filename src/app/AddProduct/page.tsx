"use client"
import AddColors from "../components/inputs/AddColors"
import AddSize from "../components/inputs/AddSize"
export default function page() {
    let Submit=()=>null
    return (
    <section className='w-full max-w-5xl px-3'>
        <h1 className=" text-3xl font-bold">Add product </h1>
        <form onSubmit={Submit} className='w-full grid gap-2 grid-cols-1 md:grid-cols-2'>
           <div className=" space-y-2 ">
                <label className="custom-label ">title</label> 
                <input className="custom-input" type="text" placeholder="" />
           </div>
           <div className="space-y-2 ">
                <label className="custom-label ">category</label> 
                <input className="custom-input" type="text" placeholder="" />
           </div>
           <div className="space-y-2 ">
                <label className="custom-label ">style</label> 
                <input className="custom-input" type="text" placeholder="" />
           </div>
           <div className="space-y-2 ">
                <label className="custom-label ">store</label> 
                <input className="custom-input" type="text" placeholder="" />
           </div>
           <AddSize/>
           <div className=" space-y-2">
                <label className="custom-label ">inventory</label> 
                <input className="custom-input" type="text" placeholder=""  />
           </div>
           <AddColors/>
           <div className=" space-y-2">
                <label className="custom-label ">price</label> 
                <input className="custom-input" type="text" placeholder="enter price"  />
           </div>
           <textarea placeholder="enter here your text..." className=" col-span-2 custom-input" rows={2} >
              
           </textarea>
           <div className=" space-y-2">
            
          </div>
        </form>
       

    </section>
  )
}
