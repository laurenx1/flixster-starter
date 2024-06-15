import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './MovieModal.css'

// note that clickedMov is a movieID, can use thsi to make the video call 

function MovieModal(props) {
    // const testURL = props.selectedDetailsAndVid.trailerURL;
    // console.log(testURL);
    // console.log(props.selectedDetailsAndVid.trailerURL);

    // handles closing of MovieModal
    const handleCloseModal = (event) => {
        // NOTE: print statement shows that the movieDetails are being correctly grabbed, 
        // ^ means dot notation can be used to get videoURL and other details
        console.log(props.selectedDetailsAndVid.trailerURL);
        props.setShow(false);
        // console.log(props);
        event.stopPropagation();
    };


    // closes modal when click outside modal happens
    const handleClickOutside = (event) => {
        if (event.target.classList.contains("modal") && !event.target.classList.contains("modal-close-button")) {
            props.setShow(false);
        }
    };


    // NOTE: handles clicking outside, slightly different logic
    document.addEventListener('mousedown', handleClickOutside);




    return (
        <>
            <div className="modal" style={props.modalStyle}>
                <div className="modal-content">
                <iframe width={727} 
                height={409} 
                src={props.selectedDetailsAndVid.trailerURL} 
                title="YouTube video player" 
                frameBorder={0} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
                    <button className="modal-close-button" onClick={handleCloseModal}>&times;</button>
                    <p className="modal-text">{props.clickedMov}</p>
                </div>
            </div>
            {!props.show && <Modal show={false} onHide={() => {}} />}
        </>
    );
}


export default MovieModal;

