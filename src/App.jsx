import { useState, useEffect } from 'react'
import './App.css'
import './components/MovieList'
import MovieList from './components/MovieList';
import Header from './components/Header'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage]  = useState(1);
  const [query, setQuery] = useState('');

  

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

  }, []); 

  const loadMore = () => {
      setPage(page+1)
  }


  return (
    <div className="App">
      <Header/>
      <MovieList movies={movies} loadMore={loadMore}/>
    </div>
  );
}

export default App
