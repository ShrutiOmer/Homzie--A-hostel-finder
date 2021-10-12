import React from 'react'
import { Link } from 'react-router-dom'
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
                    <div className={styles.btn}>
                        Price: {price}
                    </div>
                    <Link to={link} className={styles.button}>
                        Learn More
                    </Link>
                </div>
                </div>
            </div>
        
         </div>
    )
}
export default HostelDetail