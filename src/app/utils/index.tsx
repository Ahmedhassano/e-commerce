export let BaseUrl="https://fakestoreapi.com"

export let getproductByCategory=(category:string)=>{
      return fetch(`${BaseUrl}/products${category}`)
}

export let getproductById=(id:number)=>{
      return fetch(`${BaseUrl}/products/${id}`)
}
           
export let AddToCart=(id:number)=>{
    return fetch("")
}

