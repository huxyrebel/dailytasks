// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Services" element={<Services/>} />
            <Route path="/Sontact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
