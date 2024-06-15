import React, {useState} from "react";
import ReactDOM from "react-dom";
import SearchForm from './SearchForm';
import DropDown from './DropDown';
import Filter from './Filter';
import './Header.css';


const Header = (props) => {
    return (
        <div className="header">
            <h1>Flixter 🎬</h1>
            <div className="header-options">
                <SearchForm query={props.query} setQuery={props.setQuery}></SearchForm>
                <DropDown sort={props.sort} setSort={props.setSort}></DropDown>
                <Filter filter={props.filter} setFilter={props.setFilter}></Filter>
            </div>
        </div>
        
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };

export default Header; 