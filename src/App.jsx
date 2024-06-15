import { useState, useEffect } from 'react'
import './App.css'
import './components/MovieList'
import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage]  = useState(1);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('')




  useEffect(() => {
      const getMovies = async () => {

      let apiKey = import.meta.env.VIT_API_KEY; 
      
      let url;
      if (query === "") {
        url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
      } else {
        url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`
      }
      if ((sort === 'popular') || (sort === 'top_rated') || (sort === 'release_date')) {
        url = `https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=${page}}`
      }
      else if (sort === '' && query === '') {
        url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
      }

      if (filter !== '') {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${filter}}`
      }
      else if (sort === '' && query === ''){
        url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
      }
    





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

  }, [query, page, sort, filter]); 

  const loadMore = () => {
      setPage(page+1)
  }


  return (
    <div className="App">
      <Header setQuery={setQuery} query={query} sort={sort} setSort={setSort} filter={filter} setFilter={setFilter}/>
      <MovieList movies={movies} loadMore={loadMore} />
      <Footer/>
    </div>
  );
}

export default App
