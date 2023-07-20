import styles from "./specialProduct.module.scss";
import Pro1 from "../../../../images/pic1.png";
import Pro2 from "../../../../images/pic2.png";
import Pro3 from "../../../../images/pic3.png";

export default function specialProduct() {
  return (
    <div className={styles.specialProduct}>
      <div className={styles.toggleList}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z"
            fill="black"
          />
        </svg>
        <h4>السعر </h4>
      </div>
      <div className={styles.products}>
        <div className={styles.card}>
          <img src={Pro1} alt="" />
          <div className={styles.txt}>
            <span>فستان ازرق عصرى <br/>للسيدات</span>
            <h4>800 ج.م</h4>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Pro2} alt="" />
          <div className={styles.txt}>
            <span>فستان اسود عصرى<br/> للسيدات</span>
            <h4>950 ج.م</h4>
          </div>
          </div>
          <div className={styles.card}>
          <img src={Pro3} alt="" />
          <div className={styles.txt}>
            <span>فستان ابيض عصرى<br/> للسيدات</span>
            <h4>1200 ج.م</h4>
          </div>
          </div>
      </div>
    </div>
  );
}
