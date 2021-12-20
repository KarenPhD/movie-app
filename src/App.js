import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Favourites from "./components/pages/Favourites";
import Home from "./components/pages/Home";
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/description" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
