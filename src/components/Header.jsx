import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: { xs: '100%', md: '20%' }, alignItems: 'center', justifyContent: 'center' }}
      >
        <OptionsContainer>
          <Link href="#" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Contact Us
          </Link>
        </OptionsContainer>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: '100%', md: '65%' } }}
      >
        <Typography variant="h4" component="div" sx={{ textAlign: "center", fontFamily: 'Marcellus, serif', color: "white", fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Ceylon Resort
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: { xs: '100%', md: '20%' }, alignItems: 'center', justifyContent: 'center' }}
      >
        <OptionsContainer>
          <Link href="#booking" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Booking
          </Link>
          <Link href="#menu" color="inherit" underline="hover" sx={{ fontFamily: 'Marcellus, serif', color: 'white' }}>
            Menu
          </Link>
        </OptionsContainer>
      </Stack>
    </HeaderContainer>
  );
}

export default Header;
