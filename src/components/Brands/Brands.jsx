import styles from './Brands.module.scss'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brandlogo2.png'
import brand3 from '../../images/brandlogo3.png'
import brand4 from '../../images/brandlogo4.png'
import brand5 from '../../images/brandlogo5.png'
import brand6 from '../../images/brandlogo6.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

export default function Brands() {
  return (
    <div className={styles.brands}>
        <h4> البراندات</h4>
        <Swiper spaceBetween={0} 
        slidesPerView={"auto"} 
        autoplay
        className="mySwiperr">
        <SwiperSlide>
        <div className={styles.brand}>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand6} alt="" />
            <img src={brand5} alt="" />
            <img src={brand4} alt="" />
            <img src={brand2} alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.brand}>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand6} alt="" />
            <img src={brand5} alt="" />
            <img src={brand4} alt="" />
            <img src={brand2} alt="" />
        </div>
        </SwiperSlide>
        
        </Swiper>
    </div>
  )
}
