import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../Assets/images/logo.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (

        <>
            <nav className={styles.nav}>
                {/*Logo of the page*/}
                <div className={styles.logo}>
                    <img src={logo}></img>
                </div>
                {/*Menu-links*/}
               
                <ul className={styles.links}>
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">About</a>
                    </li>

                    <li>
                        <a href="#">Hostels</a>
                    </li>

                    <li>
                        <a href="#">Testimonials</a>
                    </li>

                    <li className={styles.contact}>
                        <a href="#">Contact Us</a>
                    </li>

                </ul>
                <div className={styles.btns}>
                    <Button name="Login" link='/login'></Button>
                    <Button name="Register"></Button>
                </div>
                
            </nav>

            
        </>
    )
}

export default Navbar;
