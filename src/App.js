import React from "react";
import { Main } from "./Components/Main.js"
import { Routes, Route } from "react-router-dom";

import { Marvel } from "./Components/Marvel.js"
function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:id" element={<Marvel/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
