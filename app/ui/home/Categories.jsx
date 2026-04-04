import pc from '../../public/pc.png'
import mouse from '../../public/mouse.png'
import speakers from '../../public/speakers.png'
import camera from '../../public/camera.png'
import Image from 'next/image'

import styles from './Category.module.css'

export default function Categories(){
    return(
        <div className={styles.page}>
           <h3 className={styles.header}>Shop By Category</h3> 
           <div className={styles.categorysection}>
            
           <div className={styles.category}>
            <Image  className={styles.categoryicons}  src={pc} alt='gaming'/>
            <h4>PCs</h4>
           </div>
            <div className={styles.category}>
                 <Image  className={styles.categoryicons}  src={mouse} alt='gaming'/>
            <h4>Gaming Accessories</h4>
            </div>
             <div className={styles.category}>
                 <Image  className={styles.categoryicons}  src={speakers} alt='speakers'/>
            <h4>Speakers</h4>
              </div>
              <div className={styles.category}>
                 <Image className={styles.categoryicons} src={camera} alt='cameras'/>
            <h4> Cameras</h4>
               </div>
              </div>
        </div>
    )
}