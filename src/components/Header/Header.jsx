import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px 30px; /* Adjust padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px 20px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Further adjust padding for smaller screens */
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 30px; /* Adjust gap between options */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px; /* Reduce gap on smaller screens */
    padding-right: 20px; /* Add right padding on smaller screens */
    justify-content: center; /* Center items when they wrap */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <OptionsContainer>
          <Link href="/" color="inherit" sx={{ fontFamily: 'Marcellus, serif', color: 'white',  }}>
            Home
          </Link>
          <Link href="/about-us" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Contact Us
          </Link>
        </OptionsContainer>
      </Stack>
      <Typography variant="h4" component="div" sx={{ textAlign: "center", fontFamily: 'Marcellus, serif', color: "white", fontSize: { xs: '1.5rem', md: '2rem' } }}>
        Ceylon Resort
      </Typography>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', marginRight: { xs: '10px', md: '40px' } }}>
        <OptionsContainer>
          <Link href="/checkAvailability" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Booking
          </Link>
          <Link href="/menu" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Dining
          </Link>
          <Link href="/review" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Reviews
          </Link>
        </OptionsContainer>
      </Stack>
    </HeaderContainer>
  );
}

export default Header;
