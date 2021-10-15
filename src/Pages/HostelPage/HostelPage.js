import React from 'react'
import styles from './HostelPage.module.css'
import Facility from '../../Components/Facility/Facility'
import Pricing from '../../Components/Pricing/Pricing'
import Navbar from "../../Components/Navbar/Navbar";
import Reviews from "../../Components/Reviews/Reviews";
import Nearby from "../../Components/Nearby/Nearby";
import Footer from "../../Components/Footer/Footer";
import Gallery from '../../Components/Gallery/Gallery';
import Availability from "../../Components/Availability/avail"
const HostelPage = () => {
    return (
        <>
        <Navbar />
        <div className={styles.hostelContainer}>
        <Gallery />
        <Facility/>
        <Availability/>
        <Pricing />
        <Reviews />
        <Nearby />
        </div>
        <Footer/>
        </>
    )
}

export default HostelPage
