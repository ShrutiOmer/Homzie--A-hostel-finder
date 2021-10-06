import React from 'react'
import styles from './HostelPage.module.css'
// import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar";
import Reviews from "../../Components/Reviews/Reviews";
import Nearby from "../../Components/Nearby/Nearby"
import Header from '../../Components/Header/Header'
import Footer from "../../Components/Footer/Footer";
import Details from "../../Components/Nearby/Details"
const HostelPage = () => {
    return (
        <>
        <Navbar />
        {/* <div className={styles.hostelContainer}> */}
        {/* <Header name='Facility'/> */}
        <Reviews />
        {/* <Nearby /> */}
        <Header name= 'What is Nearby'/>
        {/* </div> */}
        <div className={styles.hostelCard}>
                    {
                        Details.map((Details)=>{
                            return(
                                <Nearby 
                                img={Details.imgName}
                                hostelName={Details.hostelName} />
    
                            )
                        })
                    }
                </div>
        <Footer/>
        </>
    )
}

export default HostelPage
