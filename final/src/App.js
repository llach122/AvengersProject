import './Style-Sheets/App.css';
import Header from "./Components/Header.js"
import Hero from "./Components/Hero.js"

function App() {
  return (
    <div className="App">
      <Header
      lore="Lore"
      organizations="Organizations"
      knowAbout="Know About"
      enemies="Enemies"/>
      <Hero/>
      
    </div>
  );
}

export default App;
