import K1 from '../../images/k1.png'
import K2 from '../../images/k2.png'
import styles from './kids.module.scss'

export default function Kids() {
  return (
    <div className={styles.kids}>
        <img src={K2} alt="" className={styles.kid_img2} />
        <div className={styles.txt}>
            <span className={styles.off}>اكبر خصم علي الاطلاق</span>
            <h2>احدث ملابس الاطفال</h2>
            <div className={styles.time}>
                <span>00</span>
                <span>00</span>
                <span>00</span>
                <span>00</span>
                <span>يوم</span>
                <span>ساعة</span>
                <span>دقيقة</span>
                <span>ثانية</span>
            </div>
        </div>
        <img className={styles.kid_img} src={K1} alt="" />

    </div>
  )
}
