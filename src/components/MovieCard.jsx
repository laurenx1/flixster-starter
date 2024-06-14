import React from "react";
import {useState} from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import './MovieCard.css'


const MovieCard = (props) => {

    const handleSetShow = () => {
        props.setShow(true);
        console.log('show modal!'); 
        console.log(props.id);
        props.setClickedMov(props.id);
    }


    return (
        <div className="movie-card" onClick={handleSetShow}>
            <div className="poster-overlay">
                <img className="poster" src={props.imgPath}/>
            </div>
            <p className="release-date">{props.release_date}</p>
            <h2 className="title">{props.title}</h2>
            <p className="rating">{props.rating}</p>
        </div>
    );
}
export default MovieCard;
