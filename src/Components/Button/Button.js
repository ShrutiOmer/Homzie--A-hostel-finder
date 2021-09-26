import React from 'react';
import { Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
    return(
        <div>
        <Link to="/"><button className="btn">{props.name}</button></Link>
        </div>
    );
};

export default Button;