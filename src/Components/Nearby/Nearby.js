import React from 'react'
import styles from './Nearby.module.css'
import Details from "./Details"
import Header from '../Header/Header'

const Card = (props) => {
    return (
        <>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.image}> <img src={props.img} alt="contactus" /> </div>
                    <div className={styles.Cardcontent}>
                        <h1>{props.hostelName}</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
const Nearby = () => {
    return (
        <div className={styles.container}>
            <Header name='Nearby' />
            <div className={styles.content}>
                {
                    Details.map((Details) => {
                        return (
                            <Card
                                img={Details.imgName}
                                hostelName={Details.hostelName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nearby
