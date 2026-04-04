

import Image from "next/image";
import AddToCart from "@/app/ui/Store/AddtoCart";


export default async function SingleItem({params}){



 const {id} =  await params
 

 if (!id) {
    return <div>Missing ID</div>;
  }


const IdUrl = 'https://next-shop-rouge-alpha.vercel.app'

//use absolute urls inside server components

   const res = await fetch(`https://next-shop-rouge-alpha.vercel.app/api/item/${id}`,{
    cache:'no-store'
   })
    
  const data = await res.json()

  if (!data.success) {
    return <div>Not found</div>;
  }
  

  console.log("IMAGE URL:", data.data.image)
    return(
        <>
        <h2>item</h2>
        {data.data.name}
        {data.data.image ? <Image src={data.data.image} height={100} width={100} alt="cool image"/> : <p> image not avaiable</p>}
        <h3>Item Amount:{data.data.quantity}</h3>
         <AddToCart item={data}/>
        </>
    )
}