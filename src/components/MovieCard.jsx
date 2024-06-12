import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import './MovieCard.css'

const MovieCard = (props) => {
    console.log(props.imgPath);
    return (
        <div className="movie-card">
            <div className="poster-overlay">
                <img className="poster" src={props.imgPath}/>
            </div>
            <p className="release-date">{props.release_date}</p>
            <h2 className="title">{props.title}</h2>
            <p className="rating">{props.rating}</p>
        </div>
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };

export default MovieCard; 