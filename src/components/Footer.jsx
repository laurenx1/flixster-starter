import React from "react"; 
import ReactDOM from "react-dom";
import './Footer.css';
import {Link} from 'react-router-dom';



const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href='https://github.com/laurenx1' target="_blank" rel="noopener noreferrer">
                    <img className="resume" src="/assets/github_logo_1.png"/>
                </a>
            </div>
        </div>
    )
}

export default Footer