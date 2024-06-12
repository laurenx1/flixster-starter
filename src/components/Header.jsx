import React, {useState} from "react";
import ReactDOM from "react-dom";
import SearchForm from './SearchForm';
import DropDown from './DropDown'
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <h1>Flixter 🎬</h1>
            <div className="header-options">
                <SearchForm></SearchForm>
                <DropDown></DropDown>
                <div className="now-playing">
                    <button className="now-playing-button" ></button>
                </div>
            </div>
        </div>
        
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };

export default Header; 