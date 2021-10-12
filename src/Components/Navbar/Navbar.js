import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../Assets/images/logo.png';
import Button from '../Button/Button';
 import { Link as Link1} from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (

        <>
            <nav className={styles.nav}>
                {/*Logo of the page*/}
                <div className={styles.logo}>
                    <Link1 to='/'><img src={logo} /></Link1>
                </div>
                {/*Menu-links*/}
               
                <ul className={styles.links}>
                    <li>
                    <Link className={styles.linkcontent} smooth={true} duration={100} to="home"><a>Home</a></Link>
                    </li>

                    <li>
                    <Link className={styles.linkcontent} smooth={true} duration={150} to="about"> <a >About</a></Link>
                    </li>

                    <li>
                    <Link className={styles.linkcontent} smooth={true} duration={200} to="hostels"> <a>Hostels</a></Link>
                    </li>

                    <li>
                    <Link className={styles.linkcontent} smooth={true} duration={250} to="testimonial"> <a>Testimonials</a></Link>
                    </li>

                    <li className={styles.contact}>
                    <Link className={styles.linkcontent} smooth={true} duration={300} to="contact"> <a>Contact Us</a></Link>
                    </li>

                </ul>
                <div className={styles.btns}>
                    <Button name="Login" link='/login' className={styles.btn}></Button>
                    <Button name="Register" link='/register' className={styles.btn}></Button>
                </div>
                
            </nav>

            
        </>
    )
}

export default Navbar;
