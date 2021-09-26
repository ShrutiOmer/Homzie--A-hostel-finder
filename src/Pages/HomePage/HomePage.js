import React from 'react'
import Home from '../../Components/Home/Home'
import FeaturedHostel from '../../Components/FeaturedHostel/FeaturedHostel';
import styles from './HomePage.module.css'
const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <Home />
            <FeaturedHostel/>
        </div>
    )
}

export default HomePage;
