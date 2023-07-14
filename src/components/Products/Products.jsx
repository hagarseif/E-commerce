import styles from './Products.module.scss'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Rate from 'rc-rate';
import P1 from '../../images/1.png'
import P2 from '../../images/2.png'
import P3 from '../../images/3.png'
import P4 from '../../images/4.png'
import P5 from '../../images/5.png'
import P6 from '../../images/6.png'
import P7 from '../../images/7.png'
import P8 from '../../images/8.png'


export default function Products() {
    const [product,setproduct]=useState([]);
    const images=[P1,P2,P3,P4,P5,P6,P7,P8];

    useEffect(()=>{
        axios.get(" http://localhost:3031/product")
        .then(res => setproduct(res.data))
        .catch(err=>console.log(err))
    },[])

  return (
    <div className={styles.contain_pro}>
        <h4>أﺣﺪث المنتجات</h4>
        <div className={styles.products}>
            {
                product.map((p,i)=>{
                    return  <div className={styles.product} key={p.id}>
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
                })
            }
           

        </div>
    </div>
  )
}
