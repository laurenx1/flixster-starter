import React from "react";
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
            </div>
        </div>
        
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };

export default Header; 