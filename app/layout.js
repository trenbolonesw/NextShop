import Navigation from "./ui/navigation/Navigation"
import {home} from './page.module.css'
  
export default function ShopLayout({children}){
    return(
        <>
        <html lang="en">
      <body>
        <Navigation/>

        <main className={home}>{children}</main>
      </body>
    </html>
        </>
    )
}