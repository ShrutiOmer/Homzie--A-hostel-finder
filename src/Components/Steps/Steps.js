import React from 'react'
import styles from './Steps.module.css'
import book from '../../assets/images/img1.jpeg'
import destination from '../../assets/images/desti.jpeg'
import reviews from '../../assets/images/reviews.jpeg'
import booking from '../../assets/images/book.jpeg'

const Steps = () => {
    return (
        <div className={styles.steps}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.row}>
                        <div className={styles.col - 6}>

                            <div className={styles.image}>

                                <h3>Book your next hostel in 3 easy steps</h3>
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
                                <div className={styles.Steps_btn}>
                                    <a href="" className={styles.btn}>
                                        Login
                                    </a>
                                </div>

                            </div>


                        </div>


                        <div className={styles.col - 6}>
                            <div className={styles.img}>
                                <img src={book} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Steps
