import React from "react";
import Drop3Adown from "./Drop3Adown";
import styles from './avail.module.css'
import DropRodown from "./DropRodown";
import Header from '../Header/Header'

const avail = () => {
    return(
        <>
         <div className={styles.check}>
         <Header name='Availabilty'/>
         <h2>When would you like to stay?</h2>
         <Drop3Adown/>
         <DropRodown />
         </div>
        </>
    )
}

export default avail