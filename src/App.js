import "./App.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Store from "./pages/Store";
import Cave from "./pages/Cave";
import Forest from "./pages/Forest";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Cave" element={<Cave />} />
      <Route path="/Forest" element={<Forest />} />
    </Routes>
  );
}

export default App;
