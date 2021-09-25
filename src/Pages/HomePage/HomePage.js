import React from 'react'
import styles from './HomePage.module.css';
import finder from '../../assets/images/finder.png';
import line from '../../assets/images/line.png';
const HomePage = () => {
    return (
        <div>
            <div className={styles.find}>
                <h1>Find Your New Home With Us</h1>

            </div>

            <div className={styles.fimage}>
                <img src={finder}></img>
            </div>

            <div className={styles.search}>
                <h4>Hostel Finder</h4>
                <img src={line}></img>
            </div> 
        </div>
    )
}

export default HomePage;
