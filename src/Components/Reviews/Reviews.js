
import React from 'react'
import styles from './Reviews.module.css'
import Header from '../../Components/Header/Header'

const Reviews = () => {
    return (
        <>
        
        <div className={styles.hostelContainer}>
        <div className={styles.name}>
        <Header name='Reviews'/>
        </div>
        <div className={styles.rate}>
            <h4>9.0</h4>
        </div>
        <div className={styles.rating}>
        <p>Superb </p>
        {/* <span>24 Reviews</span> */}
        </div>
        <div className={styles.comment}>
            <p>24 Reviews</p>
        </div>
        </div>
        </>
    )
}

export default Reviews