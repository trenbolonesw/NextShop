import Image from 'next/image'
import styles from './Item.module.css'
import Link from 'next/link'
export default function ItemCard(props){



    return(
        <>
       
        <div className={styles.itemCard} key={props.Key}>
            <Link href={props.Id}>
            <div className={styles.ImageWrapper}>
           <Image className={styles.Image} src={props.src} alt='dynamic images' width={200} height={200}/> 
           </div>
            <h4>{props.Title}</h4>
            <h3>price</h3>
            </Link>
        </div>
        
        </>
    )
}