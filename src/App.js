import './Style-Sheets/App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import SearchFetch from "./Components/SearchFetch.js"
import Footer from "./Components/Footer.js"
import { MarvelContext } from "./Context/ApiContext.js";


function App() {

  const [charactersData, setCharactersData] = useState([]);

  const fetchCharacters = () => {
    axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1b9f950ed4ef333d8d97fcf02794a9a4&hash=d5bb3e3e0c02051f20672039949fff9a")
      .then(response => {
        const fetchedData = response.data.data.results;
        console.log(fetchedData)
        localStorage.setItem("charactersData", JSON.stringify(fetchedData));
        setCharactersData(fetchedData) ;
      })
      .catch(error => {
        console.error("Error al obtener los personajes:", error);
      });
  };
  fetchCharacters();
  useEffect(() => {
    const storedData = localStorage.getItem("charactersData");
    if (storedData) {
      setCharactersData(JSON.parse(storedData));
     
    } else {
      fetchCharacters();
    }
  }, []);
  
  return (
    <div className="App">
      <MarvelContext.Provider value={charactersData}>
        <Header/>
        <Hero/>
        <SearchFetch/>
        <Footer/>
      </MarvelContext.Provider>
    </div>
  );
}

export default App;
