import Hero from "./components/Hero";
import ProductsSection from "./components/ProductSection";

export default function Home() {
  return (
    <main className="w-full max-w-5xl px-2">
       <Hero/>
       <ProductsSection/>
   </main>
  )
}
