import React from 'react'
import styles from "./Services.module.scss"
import {ReactComponent as Delivery} from "../../images/delivry.svg"
import {ReactComponent as Money} from "../../images/wallet _remove.svg"
import {ReactComponent as Phone} from "../../images/mobile.svg"
import {ReactComponent as Gift} from "../../images/Gift.svg"
function Services() {
  return (
    <div className={styles.services}>
        <div className={styles.service}>
            <Delivery/>
            <div className={styles.text}>
                <span>توصيل مجانى</span>
                <p>للطلبات أعلى من 200جنيه</p>
            </div>
        </div>
        <div className={styles.service}>
            <Phone/>
            <div className={styles.text}>
                <span> دعم فنى</span>
                <p>  دعم على مدار الساعة </p>
            </div>
        </div>
        <div className={styles.service}>
            <Money/>
            <div className={styles.text}>
                <span> استرجاع الأموال</span>
                <p>استرداد آمن لأموالك او الاستبدال </p>
            </div>
            
        </div>
        <div className={styles.service}>
            <Gift/>
            <div className={styles.text}>
                <span>عروض حصرية</span>
                <p>خصومات كبية على منتجاتنا</p>
            </div>
          
        </div>

    </div>
  )
}

export default Services