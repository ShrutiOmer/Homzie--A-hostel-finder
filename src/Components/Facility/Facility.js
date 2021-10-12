import React from 'react'
import styles from './Facility.module.css'
import Header from '../Header/Header'
import wifi from '../../Assets/images/wifi.png'
import ac from '../../Assets/images/ac.png'
import aid from '../../Assets/images/aid.png'
import food from '../../Assets/images/food.png'
import pool from '../../Assets/images/pool.png'

const Facility = () => {
    const img=[
        { id: 1, image: wifi},
        { id: 1, image: ac },
        { id: 1, image: pool },
        { id: 1, image: food },
        { id: 1, image: aid }
    ]
    return (
        <div className={styles.container}>
            <Header name='Facilities'/>
            <div className={styles.content}>
               {
                   img.map((image)=>{
                       return(
                           <img src={image.image} alt='img'/>
                       )
                       })
               }
            </div>
        </div>
    )
}

export default Facility
