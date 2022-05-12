import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
     
      
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="pokemon/:pokeId" element={<Details />} /> */}
      </Routes>
    </div>
  );
}

export default App;
