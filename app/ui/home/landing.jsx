'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import ImagePicker from "../shared/Image-Handlers/image-picker"


export default function LandingPage(){

 const {push} = useRouter()
  
const[image,setImage] = useState(null)
 const [prev,setPrev] = useState(null)
 const [name,setName] = useState('')
  const [description,setDescription] = useState('')
 const [err,setErr] = useState(false)
 const [errMessage,seterrMessage] = useState('')
 

 const formData = new FormData()

 formData.append('name',name)
 formData.append('description',description)
 
 if(image){
    formData.append('image',image)
 }
 
 const HandleSubmit = async (e) => {
     e.preventDefault()

     try{
         
       const req = await fetch('/api/item',{
            method:'POST',
            body:formData
        },
    );
      
      
      if(!req.ok){
         setErr(true) 
      } else{
       push('/Shop')
      }
       
        
     }catch(err){
      console.log(err)
      setErr(true)
      seterrMessage(err.message)
     }
 }


    return(
        <>
        <h1>items</h1>
        <form onSubmit={HandleSubmit}>
          <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          />
          <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          />
          <ImagePicker 
          image={image}
          setImage={setImage}
          prev={prev}
          setPrev={setPrev}
          />
          {err?<p>failed</p> :<button type="submit">add item</button>}
          <p>{errMessage}</p>
          
        
        </form>
        </>
    )
}