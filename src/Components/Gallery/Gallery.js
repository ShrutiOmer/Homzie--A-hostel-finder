import React from 'react'
import Header from '../../Components/Header/Header'
import styles from './Gallery.module.css';

import img1 from '../../Assets/gallery/img1.png';
import img2 from '../../Assets/gallery/img2.png';
import img3 from '../../Assets/gallery/img3.png';
import img4 from '../../Assets/gallery/img4.png';
import img5 from '../../Assets/gallery/img5.png';
import img6 from '../../Assets/gallery/img6.png';
import img7 from '../../Assets/gallery/img7.png';
import img8 from '../../Assets/gallery/img8.png';

function Gallery() {
    return (
        <div className={styles.gallery}>
            <Header name='Binod Hostel' />
            <div className={styles.galleryContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <div className={styles.topLeft}>
                            <div className={styles.block}>
                                <img src={img7} alt="hostel"/>
                            </div>
                            <div className={styles.block}>
                                <img src={img4} alt="hostel"/>
                            </div>
                        </div>
                        <div className={styles.topright}>
                            <div className={styles.block}>
                                <img src={img1} alt="hostel"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.block}>
                            <img src={img5} alt="hostel"/>
                        </div>
                        <div className={styles.block}>
                            <img src={img6} alt="hostel"/>
                        </div>
                        <div className={styles.block}>
                            <img src={img2} alt="hostel"/>
                        </div>
                        <div className={styles.block}>
                            <img src={img3} alt="hostel"/>
                        </div>
                        <div className={styles.block}>
                            <img src={img8} alt="hostel"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
