import Navigation from "./ui/navigation/Navigation"
import {home} from './page.module.css'


export const metadata = {
  title:'NextShop',
  description:'Your new favorite online ecommerce site',
  openGraph:{
 title:'NextShop',
  description:'Your new favorite online ecommerce site',
  url:"https://next-shop-rouge-alpha.vercel.app",
 images:[
  {
    url:'https://next-shop-rouge-alpha.vercel.app/opengraph-image.png',
     width: 1200,
        height: 630,
        alt: 'NextShop preview image',
  }
 ],
 type:'website'
}
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