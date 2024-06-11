import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <img className="img-path" src={props.imgPath}/>
            <h2 className="title">title: {props.title}</h2>
            <p className="rating">rating: {props.rating}</p>
        </div>
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };

export default MovieCard; 