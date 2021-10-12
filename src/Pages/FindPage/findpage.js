import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import hostel from '../../Assets/images/hostel.jpg';
import styles from './findpage.module.css';
import Drop2down from './Drop2down';
import HostelDetail from "../../Components/HostelDetail/HostelDetail";
import details from '../../Components/HostelDetail/Detail'
const findpage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.find}>
                <div className={styles.ihostel}>
                    <img src={hostel}></img>
                </div>
                <div className={styles.hoSearch}>
                    <div className={styles.book}>
                        <h1 className={styles.heading}>SELECT HOSTEL</h1>
                    </div>
                    <Drop2down />
                </div>
                <div className={styles.hostelCard}>
                    {
                        details.map((detail)=>{
                            return(
                                <HostelDetail data={detail} />
                            )
                        })
                    }
                </div>

            </div>
            <Footer />
        </>
    )
}

export default findpage;