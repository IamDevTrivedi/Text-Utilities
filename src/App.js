import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Workspace from './components/Workspace';
import ContactUsPage from './components/ContactUsPage';
import ServicesPage from './components/ServicePage';
import AboutPage from './components/AboutPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-white'}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Workspace darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/services" element={<ServicesPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/contact" element={<ContactUsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
}

export default App;
