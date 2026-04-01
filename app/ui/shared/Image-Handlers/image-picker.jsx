import Class from './image-picker.module.css'
import { useEffect,useRef,useState } from 'react';
export default function ImagePicker(props){
    
 const [image, setImage] = useState();
  const [prev, setPrev] = useState();



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
       let pickedFile;
   
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setImage(pickedFile);
    
     
    } else {
      
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile);
        
 }
 const imageRef = useRef()


 return(
    <>
    <input
         id={props.id}
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