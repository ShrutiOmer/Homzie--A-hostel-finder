import React, { Component } from 'react'
import styles from '../Testimonials/Testimonials.module.css'
import './Testimonial.css'
import TestimonialsChild from './TestimonialsChild'

import Data from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Testimonials extends Component {
    render() {
        const settings = {
            infinite: true,
            slickPlay: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className : 'slides'
        };
        return (
            <div id="testimonial" className={styles.testimonialWrapper}>
                <div className={styles.heading}>
                    <h2>What People think about Homzie</h2>
                </div>
                <Slider {...settings}>
                    {Data.map((data) => {
                        return(
                        <TestimonialsChild
                            stars = {data.stars}
                            content = {data.content}
                            author = {data.name} 
                            imgName = {data.imgName}
                            post = {data.position}
                        />
                    )
                    })
                    }
                </Slider>
            </div>
        )
    }
}

