import styles from './Breadcrum.module.scss'
import Banar from '../../../images/bnar.png'
import { Link, useLocation } from 'react-router-dom'
export default function Breadcrums() {
    const location=useLocation()
    let currentLink=''
    const crumb=location.pathname.split('/')
    .filter(c=>c!=='').map(c=>{
        currentLink += `/${c}`
        return(
            <div className={styles.crumb} key={c}>
                <Link to='/'>الرئيسية</Link>
                <Link to={currentLink}>المنتجات</Link>
            </div>
        )
        
    })
  return (
    <div className={styles.breadcrums}>
        <div className={styles.bnr}>
            <img src={Banar} alt="" />
            <div className={styles.txt}>
            <h2>تسوق احدث المنتجات العصرية</h2>
            {crumb}

            </div>

        </div>
    </div>
  )
}
