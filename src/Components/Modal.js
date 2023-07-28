import React from "react";
import "../Style-Sheets/Modal.css";


function Modal({ selectedCharacter, closeModal, setCharacterId }) {
 

  return (
    <div className={`modal ${selectedCharacter ? "" : "hidden"}`}>
      {selectedCharacter && (
        <div id="modal">
          <div className="overlay">
          <div className="modal-content">
               <h2>{selectedCharacter.name}</h2>
               <div className="content-container">
              <img src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`} className ="modal-img"></img>
              <p className="description">{selectedCharacter.description}</p>
              </div>
              
              <div className="buttons-container">
                <button className="close-modal" onClick={closeModal}>
                  Cerrar
                </button>
                
                
                  <button className="to-comics">
                    View Comics
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
