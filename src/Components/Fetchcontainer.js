import React, { useState, useEffect } from "react";
import "../Style-Sheets/Fetchcontainer.css";
import { allCharacters } from "../Functions/Functions.js";
import Modal from "../Components/Modal.js";
import { CharacterComics } from "./CharacterComics";

export function Fetchcontainer() {
  const [characters, setCharacters] = useState([]);
  const [written, setWritten] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterId, setCharacterId] = useState(null); 

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const handleChange = (e) => {
    setWritten(e.target.value.toLowerCase());
  };

  let display = [];
  if (!written) {
    display = characters;
  } else {
    display = characters.filter((character) =>
      character.name.toLowerCase().includes(written)
    );
  }

  useEffect(() => {
    allCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div>
      <h2>Find What You Are Looking For</h2>
      <div className="input-container">
        <label htmlFor="input" className="label">
          Search By
        </label>
        <input
          id="input"
          placeholder="Name or Comic"
          value={written}
          onChange={handleChange}
        />
      </div>
      <div className="card-container">
        {display.length === 0 ? (
          <p>No characters found.</p>
        ) : (
          display.map((character) => (
            <div key={character.id}>
              <div className="card">
                <h3 className="title-cards">{character.name}</h3>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  className="card-img"
                  alt={character.name}
                  onClick={() => openModal(character)}
                />
              </div>
            </div>
          ))
        )}
        <div />
      </div>

      <Modal selectedCharacter={selectedCharacter} closeModal={closeModal} setCharacterId={setCharacterId} /> 
      {selectedCharacter && <CharacterComics characterId={characterId} />} {/* Use characterId as prop for CharacterComics */}
    </div>
  );
}

export default Fetchcontainer;
