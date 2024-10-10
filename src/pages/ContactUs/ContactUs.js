import React, { useState, useEffect } from "react";
import { Stack, Typography} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import './assets/styles/ContactUs.css';
import backgroundImage from "./assets/images/room.jpg"; 
import styled from "styled-components";

const ContactUsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsPopupOpen(true); // Show the popup after submission
  };

  useEffect(() => {
    let timer;
    if (isPopupOpen) {
      timer = setTimeout(() => {
        setIsPopupOpen(false); // Hide the popup after 3 seconds
      }, 3000);
    }
    return () => clearTimeout(timer); // Clear timeout if component unmounts or popup is closed
  }, [isPopupOpen]);

  return (
    <div
      className="contact-us-page-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-form-section">
        <Typography variant="h4">Contact Us</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info-section">
        <h2>Contact Information</h2>
        <div>
          <h3>Restaurant Reservations</h3>
          <p>0112 452 361</p>
          <p>0112 568 566</p>
        </div>
        <div>
          <h3>Room Reservations</h3>
          <p>0112 556 333</p>
          <p>0112 556 334</p>
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Marcellus, serif",
            color: "black",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          FIND US ON
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "20px" }}
        >
            <SocialMediaLinks href="https://www.facebook.com">
              <FacebookIcon style={{ color: "black" }} />
            </SocialMediaLinks>
            <SocialMediaLinks href="https://www.twitter.com">
              <TwitterIcon style={{ color: "black" }} />
            </SocialMediaLinks>
            <SocialMediaLinks href="https://www.instagram.com">
              <InstagramIcon style={{ color: "black" }} />
            </SocialMediaLinks>
        </Stack>
      </div>

      {/* Popup Component */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>We received your query. Thank you for contacting us.</p>
          </div>
        </div>
      )}

      {/* Styles for Popup (you can move this to your CSS file) */}
      <style jsx>{`
        .popup {
          position: fixed;
          bottom: 20px; /* Position it at the bottom */
          right: 20px; /* Position it at the right */
          background: green; /* Change background to green */
          color: white; /* Change text color to white for better contrast */
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transform: translateX(100%); /* Start off-screen to the right */
          animation: slideIn 0.5s forwards; /* Slide in animation */
          z-index: 1000; /* Ensure it appears above other content */
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%); /* Start position (off-screen) */
          }
          to {
            transform: translateX(0); /* End position (on-screen) */
          }
        }
      `}</style>
    </div>
  );
};

const SocialMediaLinks = styled.a`
  font-family: "Marcellus", serif;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  text-decoration: none;
  display: inline-block; /* Required for transform to work properly */
  transition: transform 0.3s ease; /* Smooth transition */
  &:hover {
    transform: scale(1.2); /* Zoom in effect */
  }
`;


export default ContactUsPage;
