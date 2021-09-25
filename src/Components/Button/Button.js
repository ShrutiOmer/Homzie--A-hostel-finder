import React from 'react';
import { Link } from "react-router-dom";
import "./Button.css";
function Button() {
    return(
        <Link to="Login">
            <button className="btn">Login</button>
            <button className="btn">Register</button>
        </Link>
    );
};

export default Button;