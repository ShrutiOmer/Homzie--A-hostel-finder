import React from 'react'
import About from '../../Components/About/About'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Home from '../../Components/Home/Home'
import FeaturedHostel from '../../Components/FeaturedHostel/FeaturedHostel';
import Steps from '../../Components/Steps/Steps'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./HomePage.module.css"
const HomePage = () => {
    return (
        <>
        <Navbar />
        <div className={styles.homeContainer}>
            <Home />
            <About />
            <FeaturedHostel/>
            <Steps />
            <Testimonials />
        </div>
        <Footer/>
        </>
    )
}

export default HomePage;
