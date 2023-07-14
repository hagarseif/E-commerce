import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Twiter } from '../../images/Twitter.svg'
import {ReactComponent as Facebook} from '../../images/Facebook - Original.svg'
import {ReactComponent as Youtube} from '../../images/Youtube.svg'
import {ReactComponent as Whatsapp} from '../../images/Component.svg'
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <ul>
          <li><Link className={styles.link}>الرئيسية</Link></li>
          <li><Link className={styles.link}>المنتجات</Link></li>
          <li><Link className={styles.link}>السلة</Link></li>
          <li><Link className={styles.link}>نبذة عنا</Link></li>
          <li><Link className={styles.link}>الشروط والاحكام</Link></li>
          <li><Link className={styles.link}>اتصل بنا</Link></li>
        </ul>
        <div className={styles.icons}>
            <Twiter className={styles.icon}/>
            <Facebook className={styles.icon}/>
            <Youtube className={styles.icon}/>
            <Whatsapp className={styles.icon}/>
        </div>
        <h4>ابق على تواصل</h4>
        <p>جميع حقوق النشر محفوظه لشركة سمارت كود</p>
    </footer>
  )
}
