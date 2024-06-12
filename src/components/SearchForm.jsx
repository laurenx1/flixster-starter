import React, {useState} from "react";
import ReactDOM from "react-dom";
import './SearchForm.css'

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState([]);
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    return (
      <div className="searchform">
        <form className="search-bar" onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input id="search" type="search" pattern=".*\S.*" required value={query} onChange={(e) => setQuery(e.target.value)}/>
          <span className="caret"></span>
        </form>
      </div>
    );
  }
  export default SearchForm;