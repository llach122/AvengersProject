import React, { useState, useEffect } from "react";
import "../Style-Sheets/Hero.css";
import { allCharacters } from "../Functions/Functions.js";

//public 1b9f950ed4ef333d8d97fcf02794a9a4
//private a2df9456af1178ca5eda0c53f2fd795a708c727f
//hash d5bb3e3e0c02051f20672039949fff9a

export function Hero() {
  const [characters, setCharacters] = useState([]);
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await allCharacters();
        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (characters.length > 0) {
      const sortedCharacter = characters[
        Math.floor(Math.random() * characters.length)
      ];
      setShow(sortedCharacter);
    }
  }, [characters]);

  return (
    <div className="hero-container">
      {show && (
        <div key={show.id} className="hero-container">
          <h1>{show.name}</h1>
          <img
            src={`${show.thumbnail.path}.${show.thumbnail.extension}`}
            className="card-img"
            alt={show.name}
          />
        </div>
      )}
    </div>
  );
}


