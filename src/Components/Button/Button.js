import React from 'react';
import { Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
    return(
        <div>
        <Link to={props.link}><button className="btn">{props.name}</button></Link>
        <Link to="/src/Pages/ResetPage"></Link>
        </div>
    );
};

export default Button;