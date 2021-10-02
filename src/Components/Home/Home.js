import React from 'react'
import styles from './Home.module.css';
import finder from '../../Assets/images/finder.png';
import line from '../../Assets/images/line.png';
import Dropdown from './Dropdown'
const Home = () => {
    return (
        <div id='home' className={styles.home}>
            <div className={styles.content}>
                <div className={styles.find}>
                    <h1>Find Your New Home With Us</h1>

                </div>
                <div className={styles.search}>
                    <h4>Hostel Finder</h4>
                    <img src={line}></img>
                </div>
                <Dropdown />
            </div>
            <div className={styles.fimage}>
                <img src={finder}></img>
            </div>
        </div>
    )
}

export default Home
