import React, {useState} from "react";
import ReactDOM from "react-dom";


const DropDown = () => {
    const [sortOrder, setSortOrder] = useState("");
    const handleSortChange = (e) => {
      setSortOrder(e.target.value);
      console.log(e.target.value);
    };
    return (
      <div className="dropdown">
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="popularity">Popularity Descending</option>
          <option value="release-date">Release Date Descending</option>
          <option value="rating">Rating Descending</option>
        </select>
      </div>
    );
  };
  export default DropDown;