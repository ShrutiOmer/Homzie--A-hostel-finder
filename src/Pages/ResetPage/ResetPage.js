import React from 'react'
import Background from '../../Components/Background/Background'
import styles from './ResetPage.module.css'

import Input from '../../Components/Input/Input'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    return (
        <div className={styles.container}>
           <Background /> 
           <div className={styles.form}>
               <h1 className={styles.heading}>Reset</h1>
               <Input type='text' name='username' placeholder='USERNAME' icon={faUser} />
               <Input type='password' name='pwd' placeholder='NEW-PASSWORD' icon={faLock} />
               <button className={styles.btn}>RESET PASSWORD</button>
               </div>
               </div>
    )
    
}

export default Login
