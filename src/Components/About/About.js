import React from 'react'
import img from '../../Assets/about/illustration.png'
import styles from '../About/About.module.css'

function About() {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutImg}>
                <img src={img} alt="about" />
            </div>
            <div className={styles.aboutContentWrapper}>
                <h2 className={styles.aboutHeading}>About Us</h2>
                <div className={styles.aboutContent}>
                    <h3 className={styles.aboutQuote}>A new way to find Hostel</h3>
                    <p className={styles.aboutPara}>
                        For decades travellers have reached for Lonely Planet books when looking to plan and
                        execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way.
                    </p>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About
