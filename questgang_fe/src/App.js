import logo from './logo.svg';
import background from './qg_forest.jpg';
import './App.css';
import React, { Component } from 'react';


function backgroundStyle() {
  return {
    backgroundImage: `${background}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Quest Gang, see us in the forest you better run.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
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
