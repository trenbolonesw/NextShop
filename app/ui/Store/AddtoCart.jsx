'use client'
import { useHttpClient } from "@/app/hooks/http-hook"
import Button from "@/app/ui/shared/Form-Elements/button"
import { useState } from "react"

export default function AddToCart({item}){
 const [error,setError] = useState(false)
 const [quantity,setQuantity] = useState(1)
const {sendRequest} = useHttpClient()




 function addToCart(itemCount){
   console.log('added',itemCount)
 }






 return(
    <>
    {error && <p>error</p>}
<select value={quantity} onChange={(e) => setQuantity(e.target.value) }>
  {[...Array(item.data.quantity)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))}
</select>
<Button type="button" onclick={() => addToCart(quantity)}>Add to Cart</Button>
</>
 )
}