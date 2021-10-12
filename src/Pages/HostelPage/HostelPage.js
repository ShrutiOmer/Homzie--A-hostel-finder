import React from 'react'
import styles from './HostelPage.module.css'
import Facility from '../../Components/Facility/Facility'
import Pricing from '../../Components/Pricing/Pricing'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const HostelPage = () => {
    return (
        <>
        <Navbar />
        <div className={styles.hostelContainer}>
        <Facility />
        <Pricing />
        </div>
        <Footer/>
        </>
    )
}

export default HostelPage
