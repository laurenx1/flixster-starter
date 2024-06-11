import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import MovieCard from './MovieCard';




const MovieList = () => {
    const [movies, setMovie] = useState([]);
    useEffect(() => {
        const getMovies = async () => {

        
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzlmOTY0YzU0MGJjZGQwZDE5OTVjMmY3MDQzNDQxNSIsInN1YiI6IjY2Njc2NGY4MTQ3YTJmOGY4MmQwMTZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-7RjZnl4qCWg7bzST4yNGSqfCLYVysh-GK8qPkAs20M'
            }
        };
    
        const response = await fetch(url, options); 
        const data = await response.json(); 
        setMovie(data);
    }; 
    
    getMovies(); 

    }, []); 

    // console.log(data);

    return (
        <div className="movie-cards">
            {
                movies.results.map(movie => {
                    <MovieCard imgPath={movie.poster_path} title={movie.title} rating={movie.vote_average}/>
                })
            }
        </div>
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };

export default MovieList; 