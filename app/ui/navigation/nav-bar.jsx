import Link from "next/link"
import icon from '../../public/nexticon.png'
import Image from "next/image"
export default function NavBar({children,styles}){
    return(
      <>
      <nav className={styles.Nav}>
     <Link className={styles.icon} href="/"><Image height={100} src={icon} alt="icon"/></Link> 
      {children}
      </nav>
      </>
    )
}