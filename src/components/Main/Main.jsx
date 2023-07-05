import React from 'react'
import styles from "./Main.module.scss"
import Elpis1 from "../../images/Ellipse1.png"
import Elpis2 from "../../images/Ellipse2.png"
import Elpis3 from "../../images/Ellipse3.png"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Pagination ,Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';


function Main() {
  return (
    <Swiper spaceBetween={50} 
    slidesPerView={1} 
    autoplay  navigation={true} 
    pagination={{clickable: true}} modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className={styles.main}>
                <div className={styles.text}>
                    <p> براندات نسائى عالمية </p>
                    <h2>احدث ادوات الجمال</h2>
                    <p> براندات نسائى عالمية </p>
                    <button>اكتشف الان</button>
                </div>
                <div className={styles.imgs}>
                    <img src={Elpis3} className={styles.ellip1} alt="pic" />
                    <img src={Elpis2} className={styles.ellip2} alt="pic" />
                    <img src={Elpis1} className={styles.ellip3} alt="pic" />
                </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className={styles.main}>
                <div className={styles.text}>
                    <p> براندات نسائى عالمية </p>
                    <h2>احدث ادوات الجمال</h2>
                    <p> براندات نسائى عالمية </p>
                    <button>اكتشف الان</button>
                </div>
                <div className={styles.imgs}>
                    <img src={Elpis3} className={styles.ellip1} alt="pic" />
                    <img src={Elpis2} className={styles.ellip2} alt="pic" />
                    <img src={Elpis1} className={styles.ellip3} alt="pic" />
                </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className={styles.main}>
                <div className={styles.text}>
                    <p> براندات نسائى عالمية </p>
                    <h2>احدث ادوات الجمال</h2>
                    <p> براندات نسائى عالمية </p>
                    <button>اكتشف الان</button>
                </div>
                <div className={styles.imgs}>
                    <img src={Elpis3} className={styles.ellip1} alt="pic" />
                    <img src={Elpis2} className={styles.ellip2} alt="pic" />
                    <img src={Elpis1} className={styles.ellip3} alt="pic" />
                </div>
            </div>
    </SwiperSlide>
    </Swiper>
  )
}

export default Main