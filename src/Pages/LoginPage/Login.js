import React from 'react'
import Background from '../../Components/Background/Background'
import styles from './Login.module.css'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router-dom'
import img from '../../Assets/images/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    return (
        <div className={styles.container}>
           <Background /> 
           <div className={styles.form}>
               <h1 className={styles.heading}>Login</h1>
               <Input type='text' name='username' placeholder='USERNAME' icon={faUser} />
               <Input type='password' name='pwd' placeholder='PASSWORD' icon={faLock} />
               <button className={styles.btn}>LOGIN</button>
               <h3><Link to='/' style={{textDecoration:'none' ,color:'white'}}>Forgot Password?</Link></h3>
               <div className={styles.or} >
                <div className={styles.line}></div><span>OR</span><div className={styles.line}></div>
               </div>
               <button className={styles.btn}>SIGN IN WITH<img style={{height:'22px',marginLeft:'8px'}}src={img} alt='google'/></button>
           </div>
        </div>
    )
}

export default Login
