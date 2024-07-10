import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg'; // Remove if not used
import './App.css';
import RoomCard from "./components/RoomCard/RoomCard"; // Ensure the component name starts with a capital letter
import Footer from  "./components/Footer"; // Ensure the component name starts with a capital letter
import Header from "./components/Header"; // Ensure the component name starts with a capital letter
import ActivityCard from "./components/ActivityCard/ActivityCard"; // Ensure the component name starts with a capital letter
import MealCard from "./components/MealCard/MealCard"; // Ensure the component name starts with a capital letter
import MenuCard from "./components/MenuCard"; // Ensure the component name starts with a capital letter
import ReviewCard from "./components/ReviewCard/ReviewCard"; // Ensure the component name starts with a capital letter
import Review from "./components/Reviews"; 
import ImageBox from './components/ImageBox/ImageBox';
import Menu from './pages/Menu/Menu';
import AvailabilityBar from './components/AvailabilityBar';
import CheckAvailability from './pages/Booking/CheckAvailability';
import Home from './pages/Welcome/Home';
import ReviewPage from './pages/Review/Review';
import Booking from './pages/Booking/Booking';
import About from './pages/About/about';

const Spacer = ({ height }) => <div style={{ height: `${height}px` }} />;

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
          <Route path="/book" element={<CheckAvailability />} />
          <Route path="/about-us" element={<About />} />
          
          
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
