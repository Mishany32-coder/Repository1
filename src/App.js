import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import React from "react";
import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";
import To_Do from "./To_Do";

function App() {
    return (
        <div className="App">
      <header className="App-header">
         <To_Do />

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
          Learn React ANDREY PIDOR
        </a>
      </header>
    </div>
  );
}

export default App;
