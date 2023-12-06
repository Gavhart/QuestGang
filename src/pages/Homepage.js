import React, { Component } from 'react';
import Icon from '../Icon.js';
import Sprite from '../sprite1.png';
import Sprite2 from '../sprite2.png';
import Sprite3 from '../sprite3.png';
import LoginForm from '../Components/loginForm/LoginForm';
import LoginSignup from '../Components/LoginSignup/LoginSignup.jsx';
import FetchWizClass from '../API/classes';


function Homepage() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <LoginSignup />
          
          <FetchWizClass />

          {/* <Icon name = "Rogue" sprite = {Sprite}/>
          <Icon name = "Wizard" sprite = {Sprite2}/>
          <Icon name = "Cleric" sprite = {Sprite3}/> */}

          <p>
            Quest Gang, see us in the forest you better run.
          </p>
        </header>
      </div>
    </>
  );
}

export default Homepage;