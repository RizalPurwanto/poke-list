import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';
import Evolution from './components/Evolution';
import Moves from './components/Moves';
import Stats from './components/Stats';
import About from './components/About';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:pokeId" element={<Details />} >
          {/* <Route path="evolution" element={<Evolution />} /> */}
          <Route path="moves" element={<Moves />} />
          <Route path="stats" element={<Stats />} />
          <Route index  element={<About />} />
          {/* <Route path="*"  element={<Navigate to="about" replace/>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
