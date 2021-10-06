import React from 'react'
import styles from './Nearby.module.css'

import { propTypes } from 'react-bootstrap/esm/Image'
const Nearby = ( props) => {
    return (
        <>
        
        <div className={styles.hostelContainer}>
        {/* <Header name='Nearby'/> */}
        {/* </div> */}
            <div className={styles.card}>
                <div className={styles.image}> <img src={props.img} alt="contactus"/> </div>
            </div>
            <div className={styles.Cardcontent}>
                    <h1>{props.hostelName}</h1>
                </div>
                </div>
                
                
        </>
    )
}

export default Nearby
