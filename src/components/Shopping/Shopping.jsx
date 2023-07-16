import styles from './shopping.module.scss'

import P1 from '../../images/1.png'
import P2 from '../../images/2.png'
import P3 from '../../images/3.png'
import P4 from '../../images/4.png'
import P5 from '../../images/5.png'
import P6 from '../../images/6.png'
import P7 from '../../images/7.png'
import P8 from '../../images/8.png'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Rate from 'rc-rate';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'

export default function Shopping() {
    const [product,setproduct]=useState([]);
    const images=[P1,P2,P3,P4,P5,P6,P7,P8];

    useEffect(()=>{
        axios.get(" http://localhost:3031/product")
        .then(res => setproduct(res.data))
        .catch(err=>console.log(err))
    },[])

  return (
    <div className={styles.contain_pro}>
        <div className={styles.categories}>
            <ul className={styles.listtt}>
                <li className={styles.li}>تسوق عبر الفئات</li>
                <li><Link className={styles.link} to='/'> رجالى</Link></li>
                <li><Link className={styles.link} to='/'> نسائى </Link></li>
                <li><Link className={styles.link} to='/'> اطفال </Link></li>
                <li><Link className={styles.link} to='/'>اكسسوارات  </Link></li>
                <li><Link className={styles.link} to='/'>العاب</Link></li>
            </ul>
        </div>
    <Swiper spaceBetween={0} 
    slidesPerView={3} 
    autoplay  navigation={true} 
    modules={[ Navigation]} className="mySwiperr">
        {
            product.map((p,i)=>{
           return(
    <SwiperSlide key={p.id}>

            <div className={styles.products} key={p.id}>
            <div className={styles.product} key={p.id}>
                                 <img src={images[i]} alt="product"/>
                                 <div className={styles.txt}>
                                    <div className={styles.icon}>
                                        <Rate  defaultValue={p.stars}
                                            disabled={true}
                                            style={{ fontSize: 40 }}
                                            allowHalf
                                            allowClear={false}/>
                                    </div>
                                    <span className={styles.price}>{p.priceAfterDiscount} ج.م</span>
                                    <span className={styles.p_name}>{p.name}</span>
                                    <span className={`${styles.price} ${styles.old_price}`}>{p.priceBeforeDiscount} ج.م</span>
                                 </div>
                                 <div className={styles.size}>
                                 <span>XS</span>
                                 <span>S</span>
                                 <span>M</span>
                                 <span>L</span>
                                 <span>XL</span>
                                 </div>
                            </div>
                            </div>
        </SwiperSlide>
           )
         })
        }
        
    </Swiper>
    </div>
  )
}
