import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './views/Home';
import AddPokemon from './views/AddPokemon';
import Type from './views/Type';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
