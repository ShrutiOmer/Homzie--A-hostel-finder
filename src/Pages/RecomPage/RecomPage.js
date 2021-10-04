import React from 'react'
import styles from './RecomPage.module.css'
import img from '../../Assets/images/img.jpeg'
import host2 from '../../Assets/images/host2.jpeg'
import host3 from '../../Assets/images/host3.jpeg'
import host4 from '../../Assets/images/host3.jpeg'
const Recommended = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardone}>
                <div className={styles.image1}> <img src={img} alt="contactus" /> </div>
                <div className={styles.Cardcontent}>
                    <span>loremipsum  loremipsumvv  vvloremipsum  loremipsumlorem  ipsumloremipsumlorem  ipsumloremipsum  loremipsumlorem loremipsumlorem  ipsumloremipsumlorem  ipsumloremipsum  loremipsumlorem loremipsumlorem  ipsumloremipsumlorem  ipsumloremipsum  loremipsumlorem  ipsumloremipsum</span>
                </div>
                <div className={styles.stepsBtn}>
                    <a href="" className={styles.btn}>
                        Price-20rs
                    </a>
                    <a href="" className={styles.button}>
                        Learn More
                    </a>
                </div>
            </div>
        
         </div>
    )
}
export default Recommended