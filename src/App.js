import React from 'react';
import logo from './logo.svg'; // Remove if not used
import './App.css';
import RoomCard from "./components/RoomCard/RoomCard"; // Ensure the component name starts with a capital letter
import Footer from  "./components/Footer"; // Ensure the component name starts with a capital letter
import Header from "./components/Header"; // Ensure the component name starts with a capital letter
import ActivityCard from "./components/ActivityCard/ActivityCard"; // Ensure the component name starts with a capital letter
import MealCard from "./components/MealCard/MealCard"; // Ensure the component name starts with a capital letter
import MenuCard from "./components/MenuCard"; // Ensure the component name starts with a capital letter
import ReviewCard from "./components/ReviewCard/ReviewCard"; // Ensure the component name starts with a capital letter
import Review from "./components/Reviews"; // Ensure the component name starts with a capital letter
import ImageBox from './components/ImageBox/ImageBox';
import Menu from './pages/Menu/Menu';
import AvailabilityBar from './components/AvailabilityBar';
import CheckAvailability from './pages/Booking/CheckAvailability';
import Home from './pages/Welcome/Home';
//import ReviewPage from './pages/Review/Review';
import MenuPage from './pages/Menu/Menu';

const Spacer = ({ height }) => <div style={{ height: `${height}px` }} />;

function App() {
   return (
    <div className="centered-div">
      <MenuPage/>
    </div>


  );
}

export default App;
