import React from 'react'
import styles from './Background.module.css'
const Login = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.upperCircle}>
                <div className={styles.r1}>
                    <div style={{width:'50px', height:'50px'}} className={styles.r1c}></div>
                    <div style={{width:'70px', height:'70px'}} className={styles.r1c}></div>
                    <div className={styles.c1}>
                    <div style={{width:'100px', height:'100px'}}></div>
                    <div style={{width:'70px', height:'70px'}}></div> 
                    <div style={{width:'50px', height:'50px'}}></div>
                    </div>
                </div>
            </div>
            <div className={styles.quarterCircle}></div>
        </div>
    )
}

export default Login
