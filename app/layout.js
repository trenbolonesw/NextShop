import Navigation from "./ui/navigation/Navigation"
import {home} from './page.module.css'


export const metadata = {
  title:'NextShop',
  description:'Your new favorite online ecommerce site',

}



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