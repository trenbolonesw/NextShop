import Image from "next/image";
import Link from "next/link";
import icon from '../../public/cart.png'
import {carticon} from './Navigation.module.css'
export default function NavLink({name,href,style}){

 if(name === 'icon'){
    return(
        <Link href={href}>
        <Image src={icon} height={30} width={30} alt="cart image" className={carticon}/>
        </Link>
    )
 } else {
    return(
   <>
        <Link href={href} className={style}>{name}</Link>
        </>
    )
 }

}