import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ensure correct import path
import Footer from './components/Footer'; // Ensure correct import path
import Home from './pages/Welcome/Home';
import ReviewPage from './pages/Review/Review';
import Menu from './pages/Menu/Menu';
import CheckAvailability from './pages/Booking/CheckAvailability';
import Booking from './pages/Booking/Booking';
import About from './pages/About/about'; // Adjusted import path for 'about.jsx'
import ContactUs from './pages/ContactUs/ContactUs'; // Adjusted import path for 'ContactUs.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <div className="centered-div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkAvailability" element={<CheckAvailability />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/about-us" element={<About />} /> 
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
