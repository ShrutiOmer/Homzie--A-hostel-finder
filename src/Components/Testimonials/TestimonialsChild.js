import React, { Component } from 'react'
import styles from '../Testimonials/Testimonials.module.css'
import { RiStarSFill } from 'react-icons/ri'

import people1 from '../../Assets/testimonial/people1.jpg'


export default class TestimonialsContent extends Component {
    render() {
        const stars = []            //used to get requierd numbers of stars from the data
        for(let i=0;i<this.props.stars;i++){
            stars.push(i);
        }
        return (
            <div className={styles.container}>
                <div className={styles.section1}>
                    <div className={styles.stars}>
                        <ul className={styles.starsList}>
                            {stars.map((star) => {
                                return(
                                    <li><RiStarSFill /></li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div className={styles.content}>
                        <p>
                            {this.props.content}
                        </p>
                    </div>
                    <div className={styles.author}>
                        <h4>{this.props.author}</h4>
                        <h6>{this.props.post}</h6>
                    </div>
                </div>
                <div className={styles.section2}>
                    {/* <img src={this.props.src} alt="testimonials" /> */}
                    {/* <img src={`../../Assets/testimonials/${this.props.imgName.toLowerCase()}.jpg`} alt="testimonial"/> */}
                    <img src={this.props.imgName} alt="testimonial"/>
                    {/* <img src={people1} alt="testimonial"/> */}
                </div>
            </div>
        )
    }
}
