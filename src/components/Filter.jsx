import React, {useState} from "react";
import ReactDOM from "react-dom";
import './Filter.css'


const Filter = (props) => {
    const onChange = (e) => {
        console.log(e.target.value);
        props.setFilter(e.target.value);
    }


    return (
      <div className="filter-dropdown">
        <select onChange={onChange}>
          <option required value="x">Filter by</option>
          <option required value="">Back to Now Playing</option>
          <option required value="28"  onClick={onChange}>Action</option>
          <option required value="12"  onSelect={onChange}>Adventure</option> 
          <option required value="16"  onSelect={onChange}>Animation</option>
          <option required value="35"  onSelect={onChange}>Comedy</option>
          <option required value="80"  onSelect={onChange}>Crime</option>
          <option required value="99"  onSelect={onChange}>Documentary</option>
          <option required value="18"  onSelect={onChange}>Drama</option>
          <option required value="10751"  onSelect={onChange}>Family</option>
          <option required value="14"  onSelect={onChange}>Fantasy</option>
          <option required value="36"  onSelect={onChange}>History</option>
          <option required value="27"  onSelect={onChange}>Horror</option>
          <option required value="10402"  onSelect={onChange}>Music</option>
          <option required value="9648"  onSelect={onChange}>Mystery</option>
          <option required value="10749"  onSelect={onChange}>Romance</option>
          <option required value="878"  onSelect={onChange}>Sci-Fi</option>
          <option required value="10770"  onSelect={onChange}>TV Movie</option>
          <option required value="53"  onSelect={onChange}>Thriller</option>
          <option required value="10752"  onSelect={onChange}>War</option>
          <option required value="37"  onSelect={onChange}>Western</option>
        </select>
      </div>
    );
  };

  
  export default Filter;