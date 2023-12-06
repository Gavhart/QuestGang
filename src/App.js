import "./App.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Store from "./pages/Store";
import Cave from "./pages/Cave";
import Forest from "./pages/Forest";
import Quest from "./pages/quest";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Cave" element={<Cave />} />
      <Route path="/Forest" element={<Forest />} />
      <Route path="/Quest" element={<Quest />} />
    </Routes>
  );
}

export default App;
