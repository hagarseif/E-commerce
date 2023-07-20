import styles from './Filter.module.scss'
import FilterPrice from './filterPrice/filterPrice';
import FilterSize from './FilterSize/FilterSize';
import FilterColor from './FilterColor/FilterColor';
import FilterBrand from './FilterBrand/FilterBrand';
import SpecialProduct from './specialProducts/specialProduct';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Filters() {
    const [toggleListacc,setToggleListacc]=useState(true)
    const [toggleListcloth,setToggleListcloth]=useState(true)
    const [toggleListelc,setToggleListelc]=useState(true)
    const [toggleListfur,setToggleListfur]=useState(true)
    const [toggleListshoe,setToggleListshoe]=useState(true)
    const [toggleListjul,setToggleListjul]=useState(true)
    const [toggleListother,setToggleListother]=useState(true)

  return (
    <div className={styles.filter}>
        <div className={styles.cat_filter}>
            <div className={styles.toggleList}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black"/>
                </svg>
                <h4>الفئات</h4>
            </div>
            <ul className={styles.mainList}>
                <li onClick={()=>setToggleListacc(!toggleListacc)}> <span>الاكسسوارات</span>
                    <span>+</span>
                </li>
                <ul className={toggleListacc === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- سلاسل</Link> </li>
                    <li><Link to="/">- خواتم</Link></li>
                    <li><Link to="/">- اساور</Link></li>
                    <li><Link to="/">- بيرسنج</Link></li>
                </ul>
                <li onClick={()=>setToggleListcloth(!toggleListcloth)}> <span>ملابس</span>
                    <span>+</span>
                </li>
                <ul className={toggleListcloth === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- رجالي</Link></li>
                    <li><Link to="/">- حريمي</Link></li>
                    <li><Link to="/">- اطفال</Link></li>
                </ul>
                <li onClick={()=>setToggleListelc(!toggleListelc)}>
                    <span>الالكترونيات</span> 
                    <span>+</span>
                </li>
                <ul className={toggleListelc === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- لابتوب</Link></li>
                    <li><Link to="/">- هواتف</Link></li>
                    <li><Link to="/">- شاشات</Link></li>
                    <li><Link to="/">- اجهزة منزلية</Link></li>
                </ul>
                <li onClick={()=>setToggleListfur(!toggleListfur)}>
                    <span>الاثاث</span> 
                    <span>+</span>
                </li>
                <ul className={toggleListfur === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- مكاتب</Link></li>
                    <li><Link to="/">- كراسي</Link></li>
                    <li><Link to="/">- طاولات</Link></li>
                    <li><Link to="/">- غرف نوم</Link></li>
                </ul>
                <li onClick={()=>setToggleListshoe(!toggleListshoe)}>
                    <span>الاحذية</span> 
                    <span>+</span>
                </li>
                <ul className={toggleListshoe === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- نايكي</Link></li>
                    <li><Link to="/">- اديداس</Link></li>
                    <li><Link to="/">- جوتشي</Link></li>
                    <li><Link to="/">- نايكي</Link></li>
                </ul>
                <li onClick={()=>setToggleListjul(!toggleListjul)}>
                    <span>المجوهرات</span>
                    <span>+</span>
                </li>
                <ul className={toggleListjul === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- خواتم</Link></li>
                    <li><Link to="/">- سلاسل</Link></li>
                    <li><Link to="/">- اساور</Link></li>
                </ul>
                <li onClick={()=>setToggleListother(!toggleListother)}>
                    <span>اخرى</span>
                    <span>+</span>
                </li>
                <ul className={toggleListother === false ? styles.showList : styles.hideList}>
                    <li><Link to="/">- اغذية</Link></li>
                    <li><Link to="/">- ادوات تنظيف</Link></li>
                    <li><Link to="/">- العاب اطفال</Link></li>
                </ul>
            </ul>
        </div>
    <FilterPrice/>
    <FilterSize/>
    <FilterColor/>
    <FilterBrand/>
    <SpecialProduct/>
    </div>
  )
}
