import React, { useState } from "react";
import "./Modal.css";
export default function Modal(props) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
  };

  return (
    <div>
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img src={props.image} alt={props.title} />
            <div className="modalText">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
              <p className="technology">{props.technology}</p>
              <a href={props.url}>Live Website</a>
              <a href={props.github}>Github</a>
            </div>
            <button className="exit" onClick={() => toggleModalState()}>
              Close
            </button>
          </div>
        </div>
      </div>
      <button id="modal-btn" onClick={() => toggleModalState()}>
        See details
      </button>
    </div>
  );
}
