import React from "react";
import ReactDOM from "react-dom";


const DropDown = ({ open, trigger, menu }) => {
    return (
      <select className="dropdown-menu">
        <option value="">Sort by</option>
        <option value="popularity">Popularity Descending</option>
        <option value="release-date">Release Date Descending</option>
        <option value="release-date">Rating Descending</option>
      </select>
    );
  };
  
  export default DropDown;