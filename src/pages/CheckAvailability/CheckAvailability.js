import React from "react";
import { Typography, Stack } from "@mui/material";
import Booking from "./assets/images/Booking.jpg"; // Assuming Booking is the correct path to your image
import AvailabilityBar from "../../components/AvailabilityBar/AvailabilityBar";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import MyComponent from "../../components/RoomCard/RoomCard"; // Import MyComponent
import ImageBox from "../../components/ImageBox/ImageBox";
import LotusIcon from "./assets/images/lotus.png"; // Assuming the correct path to your icon
import ResortIcon from "./assets/images/hotel.png"; // Assuming the correct path to your icon
import room from "./assets/images/room.jpg";
import luxury from "./assets/images/luxury.jpg";
import suite from "./assets/images/suite.jpg";
import pool from "./assets/images/pool.jpg";
import spa from "./assets/images/spa.jpg";
import gym from "./assets/images/gym.jpg";
import './assets/styles/CheckAvailability.css';

const CustomTextContent = () => {
  return (
    <Stack>
      <Stack
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img src={ResortIcon} alt="Resort icon" />
        <Typography
          variant="h6"
          fontFamily="Marcellus, serif"
          sx={{
            color: "white",
            padding: "2px",
            marginBottom: "50px",
            "@media (max-width: 768px)": {
              fontSize: "1rem", // Reduce font size for smaller screens
            },
          }}
        >
          WELCOME TO CEYLON RESORT
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography
          variant="h2"
          fontFamily="Marcellus, serif"
          sx={{
            color: "white",
            padding: "0px",
            marginBottom: "0px",
            "@media (max-width: 768px)": {
              fontSize: "1.75rem", // Adjust font size on smaller screens
            },
          }}
        >
          In the heart of the Indian Ocean
        </Typography>
        <Typography
          variant="h2"
          fontFamily="Marcellus, serif"
          sx={{
            color: "white",
            padding: "0px",
            marginBottom: "30px",
            "@media (max-width: 768px)": {
              fontSize: "1.5rem", // Adjust font size on smaller screens
            },
          }}
        >
          Outstanding Views
        </Typography>
        <Typography
          variant="h6"
          fontFamily="Marcellus, serif"
          sx={{
            color: "white",
            padding: "0px",
            "@media (max-width: 768px)": {
              fontSize: "0.875rem", // Adjust body text font size
            },
          }}
        >
          Nestled in the heart of the Pacific Islands resort, on the edge of a
          tranquil and beautiful Garden Island, Ceylon is a haven of warmth,
          tranquility and rejuvenation. Bathed in brilliant sunshine and clear
          skies, it offers stunning views of palm-lined beaches and gorgeous
          coral reefs.
        </Typography>
      </Stack>
    </Stack>
  );
};


const CheckAvailability = () => {
  return (
    <div className="container" style={{ width: '100vw', padding: '0', margin: '0' }}>
    <ImageBox
        imageSrc={Booking}
        TextContentComponent={<CustomTextContent />}
    />
      <div className="availability-bar-wrapper">
        <AvailabilityBar />
      </div>
      <div className="content-container">
        <div className="room-cards">
          <div className="my-component-wrapper">
            <MyComponent
              roomImage={room}
              roomType="Standard Room"
              price="Rs. 10,250 per night"
              roomSize="80m2"
              guests="2 Guests"
              bedType="1 King Bed"
              description="Experience ultimate comfort and relaxation in our Standard Room, featuring a breathtaking beach view. Perfect for unwinding after a sun-soaked day, this room provides everything you need for a delightful beachfront getaway."
            />
          </div>
          <div className="my-component-wrapper">
            <MyComponent
              roomImage={luxury}
              roomType="Deluxe Room"
              price="Rs. 15,780 per night"
              roomSize="100m2"
              guests="3 Guests"
              bedType="2 Queen Beds"
              description="Indulge in luxury with our Deluxe Room, offering spacious accommodations and modern amenities. Ideal for families or couples looking for extra comfort and style during their stay."
            />
          </div>
          <div className="my-component-wrapper">
            <MyComponent
              roomImage={suite}
              roomType="Suite Room"
              price="Rs. 20,200 per night"
              roomSize="120m2"
              guests="4 Guests"
              bedType="2 Twin Beds"
              description="Discover the epitome of luxury in our Suite, featuring expansive living space, stunning ocean views, and premium amenities. Perfect for those seeking a lavish retreat and unparalleled comfort."
            />
          </div>
        </div>
        <div className="text-section">
          <img src={LotusIcon} alt="Lotus icon" style={{ width: "75px", height: "auto", objectFit: "contain" }} />
          <Typography variant="h3" fontFamily="Marcellus, serif" paddingTop={2}>
            Unlock Unmatched Luxury
          </Typography>
          <Typography variant="h3" fontFamily="Marcellus, serif" paddingTop={2}>
            Dive, Rejuvenate, and Energize with Us
          </Typography>
        </div>
        <div className="activity-cards-wrapper">
          <div className="activity-cards">
            <ActivityCard
              img={pool}
              title="Dive into Luxury With Our Infinity Pool"
              description="Immerse yourself in crystal-clear waters with breathtaking views that stretch to the horizon. Relax poolside with a refreshing cocktail and let the tranquil ambiance whisk you away to paradise."
            />
            <ActivityCard
              img={spa}
              title="Rejuvenate at Our Luxurious Spa"
              description="Indulge in soothing treatments and therapies that pamper your senses and rejuvenate your spirit. Escape into tranquility, leaving you refreshed, renewed, and completely restored. Discover the perfect sanctuary for your well-being."
            />
            <ActivityCard
              img={gym}
              title="Energize at Our Modern Fitness Center"
              description="Stay fit with top-notch equipment and inspiring views. Maintain your routine or start anew in our state-of-the-art gym. Our fitness facility also offers personalized training sessions to help you achieve your goals and stay motivated."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
