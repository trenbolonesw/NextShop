import Class from './image-picker.module.css'
import { useEffect,useRef } from 'react';
export default function ImagePicker({prev,setPrev,image,setImage}){
    
     useEffect(() => {
  if(!image){
    return;
  }
  const fileReader = new FileReader()

   fileReader.onload = () => {
    setPrev(fileReader.result)
   }

   fileReader.readAsDataURL(image)
 },[image])

 function handleimage(){
   imageRef.current.click()
 }

 function SelectedHandler(event){
        let pickedImage;

        if(event.target.files && event.target.files.length === 1){

            pickedImage = event.target.files[0]

            setImage(pickedImage)
        }
        
 }
 const imageRef = useRef()


 return(
    <>
    <input
         className={Class.imageinput} 
         type="file"
         ref={imageRef}
         onChange={SelectedHandler}
         accept=".jpeg,.jpg,.png,.webp"
         />
    {!prev && <img className={Class.blogimage} height={200} width={250}/>}
         {prev &&  <img className={Class.blogimage} src={prev} height={200} width={250} />}
         <button onClick={handleimage} type='button' className={Class.imagebutton}>Select an image</button>
    </>
 )
}