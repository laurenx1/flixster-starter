import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import MovieCard from './MovieCard';
import './MovieList.css'


const MovieList = (props) => {

    return (
        <div className="movie-list">
            {
                props.movies.map(movie => (
                    
                    <MovieCard key={movie.id} imgPath={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} title={movie.title} rating={movie.vote_average} release_date={movie.release_date}/>
  
                ))
            }
            <button id="load-more" onClick={props.loadMore}>Load More</button>
        </div>
    );
}


export default MovieList; 