import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import './ContactUs.css';

// Import the background image
import backgroundImage from "./room.jpg"; // Ensure this path is correct

const ContactUsPage = () => {
  return (
    <div
      className="contact-us-page-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamically apply background image here
    >
      <div className="contact-form-section">
        <Typography variant="h4">Contact Us</Typography>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info-section">
        <h2>Contact Information</h2>
        <div>
          <h3>Restaurant Reservations</h3>
          <p>123-456-7890</p>
          <p>456-789-0123</p>
        </div>
        <div>
          <h3>Room Reservations</h3>
          <p>789-012-3456</p>
          <p>012-345-6789</p>
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
          <Link href="https://www.facebook.com" className="social-media-link">
            <FacebookIcon style={{ color: "black" }} />
          </Link>
          <Link href="https://www.twitter.com" className="social-media-link">
            <TwitterIcon style={{ color: "black" }} />
          </Link>
          <Link href="https://www.instagram.com" className="social-media-link">
            <InstagramIcon style={{ color: "black" }} />
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default ContactUsPage;
