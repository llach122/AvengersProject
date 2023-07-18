import './Style-Sheets/App.css';
import Header from "./Components/Header.js"
function App() {
  return (
    <div className="App">
      <Header
      lore="Lore"
      organizations="Organizations"
      knowAbout="Know About"
      enemies="Enemies"/>
      
    </div>
  );
}

export default App;
