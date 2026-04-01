import { useRouter } from "next/navigation"
import { useContext } from "react"
import { useHttpClient } from "../hooks/http-hook"
import { useForm } from "../hooks/form-hook"

import { VALIDATOR_REQUIRE } from "../util/validators"
import { VALIDATOR_MINLENGTH } from "../util/validators"

import ImagePicker from "../ui/shared/Image-Handlers/image-picker"
import Input from "../ui/shared/Form-Elements/input"
import Button from "../ui/shared/Form-Elements/button"
import CrudPage from "../ui/crud-layout/crud"
export default function CreateItem(){

 const {sendRequest,error} = useHttpClient()
 
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
 }

    return(
          <>
          <CrudPage name="Create Item">
           <Input
             id='name'
             element="input"
             type='text'
             label="name"
             validator={[VALIDATOR_REQUIRE()]}
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
        <ImagePicker
        onInput={inputHandler}
        id="image"
        errorText="please select an image"
        />
        <Button type="submit">Add Item</Button>
          </CrudPage>
          </>
    )
}