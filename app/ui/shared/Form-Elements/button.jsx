

//add css later whatever
export default function Button({children,type,onclick}){

   if(onclick == null){
      return (
        <button suppressHydrationWarning type={type}>{children}</button>
      )
   } else {
      return (
           <button suppressHydrationWarning type={type} onClick={onclick}>{children}</button>
      )
   }
}