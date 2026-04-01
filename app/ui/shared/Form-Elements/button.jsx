

//add css later whatever
export default function Button({children,type}){
 return(
    <button suppressHydrationWarning type={type}>{children}</button>
 )
}