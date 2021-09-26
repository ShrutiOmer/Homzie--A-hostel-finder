import React from 'react'
import styles from './Steps.module.css'
import book from '../../Assets/images/img1.jpeg'
import destination from '../../Assets/images/desti.jpeg'
import reviews from '../../Assets/images/reviews.jpeg'
import booking from '../../Assets/images/book.jpeg'

const Steps = () => {
    return (
        <div className={styles.steps}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heading}>Book your next hostel in 3 easy steps</div>
                    <div className={styles.styling}>
                        <img src={destination} className={styles.destination} />
                        <p className={styles.des}>Choose Destination</p>
                    </div>
                    <div className={styles.styling}>
                        <img src={reviews} />
                        <p>Read the reviews</p>
                    </div>
                    <div className={styles.styling}>
                        <img src={booking} />
                        <p>Book your room</p>
                    </div>
                    <div className={styles.stepsBtn}>
                        <a href="" className={styles.btn}>
                            Login
                        </a>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.img}>
                        <img src={book} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Steps
