import Cartfooter from "../components/cart/footer";
import Product from "../components/cart/product";
export default async function page() {
    
  return (
    <section className="max-w-5xl w-full min-h-[60vh] flex flex-col justify-between gap-2  bg-gray-100">
       <div className="p-3">
        {[1,2,3].map((el)=>  <Product id={el}/> )}
       </div>
      <Cartfooter/>
    </section>
  )
}
