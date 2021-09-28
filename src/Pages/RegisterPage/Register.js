import React from 'react'
import Background from '../../Components/Background/Background'
import styles from './Register.module.css'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
const Register = () => {
    return (
        <div className={styles.container}>
           <Background /> 
           <div className={styles.form}>
               <h1 className={styles.heading}>Register</h1>
               <Input type='text' name='FullName' placeholder='FULL NAME' icon={faUser} />
               <Input type='text' name='Email' placeholder='ENTER EMAIL' icon={faEnvelope} />
               <Input type='password' name='pwd' placeholder='SET PASSWORD' icon={faLock} />
               <Input type='password' name='pwd' placeholder='CONFIRM PASSWORD' icon={faLock} />
               <button className={styles.btn}>REGISTER</button>
               
               <h3 className={styles.member}>Already a Member?<Link to='/login' style={{textDecoration:'none',color:'#2148C0',fontWeight:'bold'}}>Log In</Link></h3>
               
           </div>
        </div>
    )
}

export default Register