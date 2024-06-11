import React from "react";
import ReactDOM from "react-dom";

const SearchForm = () => {
    return (
        <div className="searchform">
            <form>
                <input type="text" placeholder="Enter movie"/>
                <button className='search-button'type="submit"> 
                    <span className="front"> Search </span>
                </button>
            </form>
        </div>
    );
}

export default SearchForm;