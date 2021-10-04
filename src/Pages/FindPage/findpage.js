import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import hostel from '../../Assets/images/hostel.jpg';
import styles from './findpage.module.css';
import Drop2down from './Drop2down';
import Footer from '../../Components/Footer/Footer'
const findpage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.find}>
                <div className={styles.ihostel}>
                    <img src={hostel}></img>
                </div>
                <div className={styles.hoSearch}>
                    <div className={styles.book}>
                        <h1 className={styles.heading}>SELECT HOSTEL</h1>
                    </div>

                    <Drop2down />
                </div>

            <Footer />
            </div>
        </>
    )
}

export default findpage;