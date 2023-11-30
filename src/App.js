import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import Store from './pages/Store';
import Cave from './pages/Cave';
import Forest from './pages/Forest';

function App() {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Store' element={<Store />} />
    <Route path='/Cave' element={<Cave />} />
    <Route path='/Forest' element={<Forest />} />
  </Routes>
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


// return (
//   <>
//     <div className="App">
//       <header className="App-header">
//         <LoginForm />
        
//         <FetchWizClass />

//         <Icon name = "Rogue" sprite = {Sprite}/>
//         <Icon name = "Wizard" sprite = {Sprite2}/>
//         <Icon name = "Cleric" sprite = {Sprite3}/>

//         <p>
//           Quest Gang, see us in the forest you better run.
//         </p>
//       </header>
//     </div>
//   </>
// );