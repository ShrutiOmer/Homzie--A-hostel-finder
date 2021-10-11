import React from 'react'
import styles from './HostelPage.module.css'
import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Availability from "../../Components/Availability/avail"
const HostelPage = () => {
    return (
        <>
        <Navbar />
        <div className={styles.hostelContainer}>
        <Header name='Facility'/>

         <Header name='Availabilty'/>
          <Availability/>
        </div>
        <Footer/>
        </>
    )
}

export default HostelPage
