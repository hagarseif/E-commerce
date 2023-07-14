import styles from './Fashon.module.scss'
import f1 from '../../images/f1.png'
import f2 from '../../images/f2.png'
import f3 from '../../images/f3.png'

export default function Fashon() {
  return (
    <div className={styles.fashon}>
        <div className={styles.card}>
            <img src={f1} alt="" />
            <h4>استمتعي بأجواء مبهره فى الخروجات</h4>
            <span>مع باقه من اجمل الملابس الكاجوال البناتي المودرن</span>
        </div>
        <div className={styles.card}>
            <h4> اشتري اللي يخليك شيك</h4>
            <span>مع احدث واجمل ملابش الشباب الحديثه </span>
            <img src={f2} alt="" />
        </div>
        <div className={styles.card}>
            <img src={f3} alt="" />
            <h4>مع اجمل صيحات الموضه والفاشون</h4>
            <span> اطلاله فريده مع افضل تشكيله ملابس شبابي</span>
        </div>
    </div>
  )
}
