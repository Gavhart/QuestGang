import logo from './logo.svg';
import background from './qg_forest.jpg';
import './App.css';
import React, { Component } from 'react';
import Icon from './Icon.js';
import Sprite from './sprite1.png';
import Sprite2 from './sprite2.png';
import Sprite3 from './sprite3.png';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import FetchWizClass from './API/classes';

// import classes from './ClassList';
// const WizClass = classes.name;

// console.log(WizClass);


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <LoginSignup />
          
          <FetchWizClass />

          <Icon name = "Rogue" sprite = {Sprite}/>
          <Icon name = "Wizard" sprite = {Sprite2}/>
          <Icon name = "Cleric" sprite = {Sprite3}/>

          <p>
            Quest Gang, see us in the forest you better run.
          </p>
        </header>
      </div>
    </>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" /> */}
{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}