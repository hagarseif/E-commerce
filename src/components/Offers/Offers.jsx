import React from 'react'
import styles from './Offers.module.scss'
import Offer1 from '../../images/offer1.png' 
import Offer2 from '../../images/offer2.png' 
import { Link } from 'react-router-dom'

export default function Offers() {

  return (
    <div className={styles.offers}>
            <div className={`${styles.offer} ${styles.offer1}`}>
                 <img src={Offer2} alt="offer" />
                <div className={styles.text}>
                    <h4>ملابس الأطفال</h4>
                    <span className={styles.txt1}>خصم 50%</span>
                    <Link to="/product" className={styles.txt2}>تسوق الان</Link>
                    </div>
            </div>
                <div className={`${styles.offer} ${styles.offer2}`}>
                    <img src={Offer1} alt="offer" />
                    <div className={styles.text}>
                        <span className={styles.txt1}> خصم كبير</span>
                        <h4>فساتين بناتي</h4>
                        <Link to="/product" className={styles.txt2}>تسوق الان</Link>
                    </div>
                </div>
    </div>
  )
}
