import React from 'react'
import About from '../../Components/About/About'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Home from '../../Components/Home/Home'
import FeaturedHostel from '../../Components/FeaturedHostel/FeaturedHostel';
import Steps from '../../Components/Steps/Steps'
// import Hostelpage from '../Hostelpage/Hostelpage';
import Navbar from "../../Components/Navbar/Navbar";
import Recommended from "../../Components/Recommended/Recommended"
import Footer from "../../Components/Footer/Footer";
import styles from "./HomePage.module.css"
const HomePage = () => {
    return (
        <>
        <Navbar />
        <div className={styles.homeContainer}>
             {/* <Home /> */}
             {/* <Hostelpage /> */}
              {/* <About />   */}
             {/* <FeaturedHostel/>  */}
             {/* <Steps />  */}
             { <Recommended  />}
             { <Recommended  />}
             { <Recommended  />}
             { <Recommended  />}
             {/* { <Testimonials />  } */}
             
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default HomePage;
