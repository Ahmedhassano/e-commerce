export let navLinks:{href:string,title:string}[]=[
    {href:"/",title:"home"},
    {href:"/",title:"shop"},
    {href:"/",title:"my account"},
    {href:"/AddProduct",title:"AddProduct"},
      
   ]

export let categories:{title:string,img:string}[]=[
   {img:"categories-img/category-1.jpg",title:"t-shirt"},
   {img:"categories-img/category-2.jpg",title:"bogs"},
   {img:"categories-img/category-3.jpg",title:"sandol"},
   {img:"categories-img/category-4.jpg",title:"scorf cap"},
   {img:"categories-img/category-5.jpg",title:"shoes"},
   {img:"categories-img/category-6.jpg",title:"pillowcase"},
   {img:"categories-img/category-7.jpg",title:"jumpsuit"},
   {img:"categories-img/category-8.jpg",title:"hots"},
   
]  
export let FilterItems:{title:string,url:string}[]=[
    {title:"All",url:"/"},
    {title:"Electronics",url:"/category/electronics"},
    {title:"Men's clothing",url:"/category/men's clothing"},
    {title:"Women's clothing",url:"/category/women's clothing"}
]
export let Footer:{title:string,links:{href:string,title:string}[]}[]=[
   {
    title:"Address",
    links:[ {href:"/",title:"about"},
            {href:"/",title:"deilvery information"},
            {href:"/",title:"Privacy policy"},
            {href:"/",title:"Terms & conditons"},
            {href:"/",title:"Contact Us"},
            {href:"/",title:"support center"},
            
] 
   },
   {
    title:"My Account",
    links:[ {href:"/",title:"sgin in"},
            {href:"/",title:"view cart"},
            {href:"/",title:"my wishlist"},
            {href:"/",title:"track my order"},
            {href:"/",title:"help"},
            {href:"/",title:"order"},
] 
   }    
]
