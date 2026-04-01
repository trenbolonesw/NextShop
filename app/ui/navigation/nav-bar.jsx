import Link from "next/link"
export default function NavBar({children,styles}){
    return(
      <>
      <nav className={styles.Nav}>
     <Link className={styles.icon} href="/"><h1>icon</h1></Link> 
      {children}
      </nav>
      </>
    )
}