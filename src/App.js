import React, { useState } from 'react';
import './App.css';
import Icon from './Icon.js';
import Sprite from './sprite1.png';
import Sprite2 from './sprite2.png';
import Sprite3 from './sprite3.png';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import FetchWizClass from './API/classes';
import HomePage from './Components/HomePage/HomePage'; // Import HomePage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Function to update login status
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <HomePage />
        ) : (
          <LoginSignup onLogin={handleLogin} />
        )}

        {isLoggedIn && <FetchWizClass />}
        {isLoggedIn && <Icon name="Rogue" sprite={Sprite} />}
        {isLoggedIn && <Icon name="Wizard" sprite={Sprite2} />}
        {isLoggedIn && <Icon name="Cleric" sprite={Sprite3} />}
        
        {isLoggedIn && (
          <p>
            Quest Gang, see us in the forest you better run.
            

          </p>
        )}
      </header>
    </div>
  );
}

export default App;
