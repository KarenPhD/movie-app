import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Favourites from "./components/pages/Favourites";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </Router>
  );
}
export default App;
