import React, {useState} from "react";
import ReactDOM from "react-dom";
import './DropDown.css'


const DropDown = (props) => {
    const onChange = (e) => {
        // console.log('hi')
        console.log(e.target.value);
        props.setSort(e.target.value);
    }
    // const check = () => {
    //     console.log('hello'); 
    // }

    // sort by release date not working yet, could not find API
    return (
      <div className="dropdown">
        <select onChange={onChange}>
          <option required value="x">Sort by</option>
          <option required value="">Back to Now Playing</option>
          <option required value="popular"  onClick={onChange}>Popularity Descending</option>
        
          <option required value="release-date"  onSelect={onChange}>Release Date Descending</option> 
          <option required value="top_rated"  onSelect={onChange}>Rating Descending</option>
          
        </select>
      </div>
    );
  };
  export default DropDown;