'use client'

import { useRouter } from "next/navigation"
import { useState,useEffect } from "react"
import { useHttpClient } from "../hooks/http-hook.js"
import { useForm } from "../hooks/form-hook.js"

import { VALIDATOR_REQUIRE } from "../util/validators.js"
import { VALIDATOR_MINLENGTH } from "../util/validators.js"
import ImagePicker from '../ui/shared/Image-Handlers/image-picker.jsx'
import Input from "../ui/shared/Form-Elements/input"
import Button from "../ui/shared/Form-Elements/button"
import CrudPage from "../ui/crud-layout/crud"
export default function CreateItem(){

 const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

 const {sendRequest} = useHttpClient()
 
 const [formState,inputHandler] = useForm({
     name:{
        value:'',
        isValid:false
     },
     description:{
        value:'',
        isValid:false
     },
     image:{
        value:null,
        isValid:false
     }
 },false)

const {push} = useRouter()

 const ItemSubmitHandler = async event => {
    event.preventDefault()

    const formData = new FormData()
   
      formData.append('name',formState.inputs.name.value)
      formData.append('description',formState.inputs.description.value)
      formData.append('quantity',formState.inputs.quantity.value)
       formData.append('image',formState.inputs.image.value)

       await sendRequest(
         '/api/item',
         'POST',
         formData
       );
       push('/Shop')
 }
 if (!isClient) {
    return <div className="loading-placeholder">Loading Form...</div>; // Or just return null
  }

    return(
          <>
          <CrudPage name="Create Item">
            <form onSubmit={ItemSubmitHandler} suppressHydrationWarning>
           <Input
             id='name'
             element="input"
             type='text'
             label="name"
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Please enter a valid title."
             onInput={inputHandler}
           />
           <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
        id="quantity"
        element="input"
        type="text"
        label='quantity'
        validators={[VALIDATOR_REQUIRE()]}
         errorText="enter valid number"
        onInput={inputHandler}
        />
        <ImagePicker
        onInput={inputHandler}
        id="image"
        errorText="please select an image"
        />
        <Button type="submit">Add Item</Button>
        </form>
          </CrudPage>
          </>
    )
}