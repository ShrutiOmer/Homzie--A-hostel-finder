import React from 'react'
import styles from './Footer.module.css'
import img from '../../Assets/images/contactUs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faInstagram,
    faFacebook,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id="contact" className={styles.footerContainer}>
            <div className={styles.upper}>
                <div className={styles.image1}><img src={img} alt="contactUs" /></div>
                <div className={styles.contactUs}>
                    <div className={styles.heading}>
                        <h1>Contact Us</h1>
                        <p>Plan and book your perfect room with us .For any query,e-mail us</p>
                    </div>
                    <div >
                        <form action="/" >
                            <div className={styles.form}>
                                <div className={styles.form1}>
                                    <input className={styles.box} type="text" id="fname" name="fname" placeholder='Your name' required />
                                    <input className={styles.box} type="email" id="email" name="email" placeholder='Your email' required />
                                </div>
                                <div>
                                    <textarea style={{height:'85%'}}className={styles.box} type="text" id="message" name="meassage" placeholder='Your message' />
                                </div>
                            </div>
                            <button className={styles.btn} type="submit" >Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.name}>Homzie</div>
                <div className={styles.copyright}>©2021 Homzie. All rights reserved</div>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faTwitter}  size="lg" className={styles.icon}/>
                    <FontAwesomeIcon icon={faFacebook} size="lg" className={styles.icon}/>
                    <FontAwesomeIcon icon={faInstagram} size="lg" className={styles.icon} />
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className={styles.icon}/>
                    <FontAwesomeIcon icon={faYoutube} size="lg" className={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export default Footer
