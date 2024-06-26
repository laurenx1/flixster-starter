import React from "react";
import {useState} from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import './MovieCard.css'


const MovieCard = (props) => {
    const apiKey = import.meta.env.VITE_API_KEY; 
    const videosURL = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${apiKey}`;
    const detailsURL = `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apiKey}`;


    // handling for opening the MovieModal onClick, grabs all info abt the movie corresponding 
    // ^ to the MovieCard that is clicked s.t. the MovieModal can have it
    const handleSetShow = async () => {

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

          console.log(props.selectedDetailsAndVid);
          props.setShow(true);
          console.log('show modal!'); 
          console.log(props.id);
          props.setClickedMov(props.id);
  
    }

    const [rating, setRating] = useState(0);
    const handleStarClick = (index) => {
        setRating(index + 1);
    }

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const changeColor = (event) => {
        event.stopPropagation();
        if (event.target.classList.contains("like")) {
            setLiked(!liked);
            setDisliked(false);
            
        } else if (event.target.classList.contains("dislike")) {
            setDisliked(!disliked);
            setLiked(false);
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
            <button className={`like ${liked ? "active" : ""}`} style={{color: liked ? "green" : "black"}} onClick={changeColor}>•ᴗ•</button>
            <button className={`dislike ${disliked ? "active" : ""}`} style={{color: disliked ? "red" : "black"}} onClick={changeColor}>˙◠˙</button>
        </div>
    );
}


export default MovieCard;
