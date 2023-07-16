import {ReactComponent as Cart } from '../../images/cart.svg'
import {ReactComponent as Heart} from '../../images/Vector.svg'
import {ReactComponent as User} from '../../images/user.svg'
import {ReactComponent as Search} from '../../images/search.svg'
import {ReactComponent as Logo} from '../../images/logo.svg'
import {ReactComponent as Suser} from '../../images/usersquare.svg'
import {ReactComponent as Buser} from '../../images/usersquareb.svg'
import {ReactComponent as Burger} from '../../images/burgerMenu.svg'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [toggle,setToggle]=useState(false);
    const switchToggleMenu = () => !toggle;
  return (
    <>
    <div className={styles.nav}>
       
            <ul className={`${toggle === false?styles.list:styles.burgerList}`}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <li><NavLink className={styles.link} to="/">الرئيسية</NavLink></li>
                <li><NavLink className={styles.link} to="/product">المنتجات</NavLink></li>
                <li><NavLink className={styles.link} to="/product">الخدمات</NavLink></li>
                <li><NavLink className={styles.link} to="/product">نبذة عنا</NavLink></li>
                <li><NavLink className={styles.link} to="/product">الشروط والاحكام</NavLink></li>
                <li><NavLink className={styles.link} to="/product">المدونة</NavLink></li>
                <li><NavLink  className={styles.link} to="/product">اتصل بنا</NavLink></li>
            </ul>
        <div className={styles.icons}>
            <Search className={styles.icon}/>
            <User className={styles.icon}/>
            <Heart className={styles.icon}/>
            <Cart className={styles.icon}/>       
        </div>
            <Burger className={styles.burger} onClick={()=>setToggle(!toggle)} />
            <div className={toggle === true? styles.contain: styles.none } onClick={()=>setToggle(!toggle)}/>

        </div>
       <div className={styles.toggle_list}>
                <div className={styles.login}>
                    <Suser/>
                    <span>تسجيل الدخول</span>
                </div>
                <div className={styles.login}>
                    <Buser/>
                    <span>تسجيل جديد</span>
                </div>
            </div>
            
    </>
  )
}

export default Navbar