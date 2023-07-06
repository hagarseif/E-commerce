import React from 'react'
import styles from './Offers.module.scss'
import Offer1 from '../../images/offer1.png' 
import Offer2 from '../../images/offer2.png' 
import { useState , useEffect } from 'react'
export default function Offers() {

    const [offer,setOffer]=useState([]);
    

  return (
    <div className={styles.offers}>
        <div className={styles.offer}>
            <Offer1/>
            <div className={styles.text}>
                <h4></h4>

            </div>

        </div>
    </div>
  )
}
