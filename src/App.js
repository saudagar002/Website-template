


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Map from './Components/Map';
// import Blog from './Components/Blog';
import Safety from './Components/Safety';
import Nearyou from './Components/Nearyou';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/contract" element={<Map />} />
          <Route path="/Blog" element={<Nearyou/>} />
          <Route path="/Safety" element={<Safety />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
