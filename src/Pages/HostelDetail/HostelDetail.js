import React from 'react'
import styles from './HostelDetail.module.css'
const HostelDetail = ({ data: {  detail,imgName, hostelName,price,link } }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardone}>
                <div className={styles.image1}> <img src={imgName} alt="contactus" /> </div>
                <div>
                <div className={styles.Cardcontent}>
                    <h1>{hostelName}</h1>
                    <p>{detail}</p>
                </div>
                <div className={styles.stepsBtn}>
                    <a href="" className={styles.btn}>
                        Price: {price}
                    </a>
                    <a href='./hostelpage' className={styles.button}>
                        Learn More
                    </a>
                </div>
                </div>
            </div>
        
         </div>
    )
}
export default HostelDetail