import React from 'react'
import styles from './HostelCard.module.css'

const HostelCard = ({ cardData: { id, img, name,location } }) => {
    return (
        <div className={styles.cardContainer}>
            
            <img src={img} alt="hostel"/>
            
            <div className={styles.detail}>
                <h1>{name}</h1>
                <p>{location}</p>
            </div>
        </div>
    )
}

export default HostelCard
