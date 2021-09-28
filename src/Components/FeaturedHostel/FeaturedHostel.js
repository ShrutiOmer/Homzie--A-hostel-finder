import React from 'react'
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import HostelData from '../../Utils/HostelData.json';
import HostelCard from '../HostelCard/HostelCard'
import styles from './FeaturedHostel.module.css'
import './FeaturedHostel.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 1},
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
];

const FeaturedHostel = () => {
    return (
        <section id="hostels" className={styles.hostelContainer}>
            <div className={styles.header}>
                <h1 className={styles.heading}>Featured Hostels</h1>
                <Link to='/' className={styles.link}>View All &nbsp; &nbsp; &gt;</Link>
            </div>
            <div className={styles.cardContainer}>
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000}>
                    {HostelData.map((data) => (
                        <HostelCard key={data.id} cardData={data} />
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default FeaturedHostel;
