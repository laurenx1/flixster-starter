import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import MovieCard from './MovieCard';
import './MovieList.css'


const MovieList = ({query, filter}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage]  = useState(1);

    useEffect(() => {
        const getMovies = async () => {

        
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzlmOTY0YzU0MGJjZGQwZDE5OTVjMmY3MDQzNDQxNSIsInN1YiI6IjY2Njc2NGY4MTQ3YTJmOGY4MmQwMTZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-7RjZnl4qCWg7bzST4yNGSqfCLYVysh-GK8qPkAs20M'
            }
        };
    
        const response = await fetch(url, options); 
        const data = await response.json(); 

        if (page > 1) {
            setMovies(prev => [
                ...prev, ...data.results
            ])
        }
        else {
            setMovies(data.results);
        }
    }; 
    
    getMovies(); 

    }, [page, query, filter]); 

    const loadMore = () => {
        setPage(page+1)
    }

    return (
        <div className="movie-list">
            {
                movies.map(movie => (
                    
                    <MovieCard key={movie.id} imgPath={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} title={movie.title} rating={movie.vote_average} release_date={movie.release_date}/>
  
                ))
            }
            <button id="load-more" onClick={loadMore}>Load More</button>
        </div>
    );
}


export default MovieList; 