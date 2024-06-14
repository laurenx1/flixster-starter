import React from "react";
import {useState} from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import './MovieCard.css'


const MovieCard = (props) => {
    const apiKey = import.meta.env.VIT_API_KEY; 
    const videosURL = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${apiKey}`;
    const detailsURL = `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apiKey}`;


    const handleSetShow = async () => {
        props.setShow(true);
        console.log('show modal!'); 
        console.log(props.id);
        props.setClickedMov(props.id);

        try {
            const detailsResponse = await fetch(detailsURL)
            const details = await detailsResponse.json()
            if (!detailsResponse.ok) {
              throw new Error(`HTTP error! Status: ${detailsResponse.status}`)
            }
      
            const videosResponse = await fetch(videosURL)
            const videos = await videosResponse.json()
            if (!videosResponse.ok) {
              throw new Error(`HTTP error! Status: ${videosResponse.status}`)
            }
      
            const trailer = videos.results.find(video => video.site === "YouTube" && video.type === "Trailer")
            const trailerURL = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null
      
            props.setSelectedDetailsAndVid({...details, trailerURL})


        } catch (error) {
            console.error("Error fetching movie details or trailers:", error)
          }
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
