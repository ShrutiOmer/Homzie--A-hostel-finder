import React from 'react'
import styles from './HostelPage.module.css'
import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Gallery from '../../Components/Gallery/Gallery';

const HostelPage = () => {
    return (
        <>
        <Navbar />
        <div className={styles.hostelContainer}>
        <Gallery />
        <Header name='Facilities'/>
        </div>
        <Footer/>
        </>
    )
}

export default HostelPage
