import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './MovieModal.css'

function MovieModal(props) {
    const handleCloseModal = (event) => {
        props.setShow(false);
        event.stopPropagation();
    };
    const handleClickOutside = (event) => {
        if (event.target.classList.contains("modal") && !event.target.classList.contains("modal-close-button")) {
            props.setShow(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return (
        <>
            <div className="modal" style={props.modalStyle}>
                <div className="modal-content">
                    <button className="modal-close-button" onClick={handleCloseModal}>&times;</button>
                    <p className="modal-text">{props.clickedMov}</p>
                </div>
            </div>
            {!props.show && <Modal show={false} onHide={() => {}} />}
        </>
    );
}
export default MovieModal;


// <div className="movie-card" onClick={handleSetShow}>
//             <div className="poster-overlay">
//                 <img className="poster" src={props.imgPath}/>
//             </div>
//             <p className="release-date">{props.release_date}</p>
//             <h2 className="title">{props.title}</h2>
//             <p className="rating">{props.rating}</p>
//         </div>