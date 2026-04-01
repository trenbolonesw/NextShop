'use client'

import styles from './landing.module.css'
import hero from '../../public/gaming-pc.png'
import Image from 'next/image'
import arrow from '../../public/rightarrow.svg'
import Deals from './Deals'
import Link from 'next/link'
export default function LandingPage(){

 
 

 


    return(
        <>
       <div className={styles.landing}>
       <div className={styles.hero}>
        <div className={styles.right}>
            <h3 className={styles.heroTitle}>Your number One shopping website</h3>
        </div>
          <div className={styles.left}>
            <Image loading='eager' alt='cool hero image' src={hero} className={styles.heroImage}/>
           
            <Link href="#Deals" className={styles.Link}>See Deals</Link>
            <Image className={styles.Arrow} loading='eager' alt='arrow' src={arrow} width={30}/>
            
          </div>
       </div>
       <Deals/>
       </div>
        </>
    )
}