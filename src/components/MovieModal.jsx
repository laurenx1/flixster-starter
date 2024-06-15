import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './MovieModal.css'
import ReactPlayer from "react-player";

// note that clickedMov is a movieID, can use thsi to make the video call 

function MovieModal(props) {
    // const testURL = props.selectedDetailsAndVid.trailerURL;
    // console.log(testURL);
    // console.log(props.selectedDetailsAndVid.trailerURL);

    // handles closing of MovieModal
    const handleCloseModal = (event) => {
        // NOTE: print statement shows that the movieDetails are being correctly grabbed, 
        // ^ means dot notation can be used to get videoURL and other details
        console.log(props.selectedDetailsAndVid);
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
                {/* <iframe width={727} 
                height={409} 
                src={props.selectedDetailsAndVid.trailerURL} 
                title="YouTube video player" 
                frameBorder={0} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />; */}
                <ReactPlayer
                    className="video"
                    url={props.selectedDetailsAndVid.trailerURL}
                    playing={true}
                    width={727}
                    height={409}
                />
                    <button className="modal-close-button" onClick={handleCloseModal}>&times;</button>
                    <p className="modal-text">Runtime: {props.selectedDetailsAndVid.runtime}</p>
                    <p className="modal-overview">{props.selectedDetailsAndVid.overview.split('').map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
          ))}</p>
                </div>
            </div>
            {!props.show && <Modal show={false} onHide={() => {}} />}
        </>
    );
}


export default MovieModal;

