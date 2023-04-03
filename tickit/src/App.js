import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Events from "./components/Events"


function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path ="/" element={<Main/>}></Route>
      <Route path ="/Events" element={<Events/>}></Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;


