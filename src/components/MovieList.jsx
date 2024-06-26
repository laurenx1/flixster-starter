import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import MovieCard from './MovieCard';
import './MovieList.css'
import MovieModal from './MovieModal';
import { useCallback } from "react";


const MovieList = (props) => {
    const [show, setShow] = useState(false);
    const [clickedMov, setClickedMov] = useState('');
    const [clickCoords, setClickCoords] = useState(null);
    const [selectedDetailsAndVid, setSelectedDetailsAndVid] = useState(null);

    // TODO: fix this
    const handleCoords = useCallback((e) => {
        setClickCoords({ x: e.clientX, y: e.clientY });
      }, []);


    // TODO: fix this
    const modalStyle = {
        display: 'inline-block',
        position: 'fixed',
        overflow: 'auto',
        top: `${clickCoords?.y ?? 0}px`,
        left: `${clickCoords?.x ?? 0}px`,
    };



    return (
        <div className="movie-list">
            {
                props.movies.map(movie => (
                    
                    <MovieCard 
                    key={movie.id} 
                    id={movie.id} 
                    imgPath={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} 
                    title={movie.title} rating={movie.vote_average} 
                    release_date={movie.release_date} 
                    setShow={setShow} 
                    setClickedMov={setClickedMov}
                    setSelectedDetailsAndVid={setSelectedDetailsAndVid}
                    selectedDetailsAndVid={selectedDetailsAndVid}
                    />
  
                ))
            }
            <button className="load-more" onClick={props.loadMore}>Load More</button>
            {show && <MovieModal 
            clickedMov={clickedMov} 
            modalStyle={modalStyle} 
            setShow={setShow} 
            selectedDetailsAndVid={selectedDetailsAndVid}></MovieModal>}
        </div>
    );
}


export default MovieList; 