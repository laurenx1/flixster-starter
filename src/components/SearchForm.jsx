import React, {useState} from "react";
import ReactDOM from "react-dom";
import './SearchForm.css'

const SearchForm = (props) => {

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   onSearch(props.query);
    // };
    const onChange = (e) => {
        props.setQuery(e.target.value);
        console.log(e.target.value)
    }

    return (
      <div className="searchform">
        <form className="search-bar" /*onSubmit={handleSubmit}*/>
          <label htmlFor="search">Search</label>
          <input id="search" type="search" pattern=".*\S.*" required value={props.query} onChange={onChange}/>
          <span className="caret"></span>
        </form>
      </div>
    );
  }
  export default SearchForm;