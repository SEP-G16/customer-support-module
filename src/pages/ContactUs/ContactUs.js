import React from 'react';
import styled from 'styled-components';
import { Stack, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Replace '/path/to/background/image.jpg' with your actual image path
import backgroundImage from './room.jpg';

const ContactUsPage = () => {
  return (
    <ContactUsPageContainer>
      <ContactFormSection>
        <Typography variant='h4'>Contact Us</Typography>
        <ContactForm>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </ContactForm>
      </ContactFormSection>
      <ContactInfoSection>
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
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Marcellus, serif', color: 'black', textAlign: 'center', marginTop: '40px' }}>
          FIND US ON
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ marginTop: '20px' }}>
          <SocialMediaLink href="https://www.facebook.com">
            <FacebookIcon style={{ color: "black" }} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.twitter.com">
            <TwitterIcon style={{ color: "black" }} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.instagram.com">
            <InstagramIcon style={{ color: "black" }} />
          </SocialMediaLink>
        </Stack>
      </ContactInfoSection>
    </ContactUsPageContainer>
  );
}

const ContactUsPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${backgroundImage}); /* Set background image */
  background-size: cover;
  padding: 50px;
  height: 100vh; /* Adjust as needed */
`;

const ContactFormSection = styled.div`
  width: 40%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 0px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea,
  button {
    padding: 10px;
    border: 1px solid black;
    border-radius: 0px;
    font-size: 16px;
  }

  button {
    background-color: #b99d75;
    color: white;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ContactInfoSection = styled.div`
  width: 45%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center; /* Center align text content */
`;

const SocialMediaLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.8s ease;

  &:hover {
    color: #0056b3;
  }
`;

export default ContactUsPage;
