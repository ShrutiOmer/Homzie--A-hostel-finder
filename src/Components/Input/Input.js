import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faUser} from '@fortawesome/free-regular-svg-icons'
// import {faLock} from '@fortawesome/free-solid-svg-icons'

import styles from './Input.module.css'
const Input = (props) => {
    return (
        <div className={styles.input}>
          <FontAwesomeIcon className={styles.icon} icon={props.icon} color='white'></FontAwesomeIcon>  
          <input type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input
