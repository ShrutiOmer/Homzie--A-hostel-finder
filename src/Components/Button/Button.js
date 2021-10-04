import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
function Button(props) {
    return(
        <div>
        <Link to={props.link}><button className={props.className}>{props.name}</button></Link>
        </div>
    );
};

export default Button;