


import Image from "next/image";

export default async function SingleItem({params}){


 const {id} =  await params
  

 if (!id) {
    return <div>Missing ID</div>;
  }


const IdUrl = process.env.GET_REQ_URL

//use absolute urls inside server components
   const res = await fetch(`https://next-shop-rouge-alpha.vercel.app/api/item/${id}`,{
    cache:'no-store'
   })
    
  const data = await res.json()

  if (!data.success) {
    return <div>Not found</div>;
  }
    return(
        <>
        <h2>item</h2>
        {data.data.name}
        {<Image src={data.data.image} height={100} width={100} alt="cool image"/> && <p> image not avaiable</p>}
        </>
    )
}