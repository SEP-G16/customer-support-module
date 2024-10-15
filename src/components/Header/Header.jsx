import React, { useState } from "react";
import { Stack, Typography, Link, IconButton, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu'; // For the hamburger icon

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6); /* Slightly more opaque for better visibility on background */
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    /* Don't change to column layout, keep flex-row */
  }
`;

const MobileMenuButton = styled.div`
  display: flex;
  justify-content: flex-start; /* Keep the button left-aligned */
  @media (min-width: 768px) {
    display: none; /* Hide the hamburger menu on larger screens */
  }
`;



const OptionsContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none; /* Hide normal links on smaller screens */
  }
`;

// const MobileMenuButton = styled.div`
//   @media (min-width: 768px) {
//     justify-content: flex-start; /* Align menu button to the left */
//   }
// `;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      {/* Left side links */}
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <OptionsContainer>
          <Link
            href="/"
            color="inherit"
            sx={{
              fontFamily: 'Marcellus, serif',
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem' }, // Smaller font on mobile
              textDecoration: 'none',
              '&:hover': {
                color: '#b99d75',
              },
            }}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            color="inherit"
            sx={{
              fontFamily: 'Marcellus, serif',
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem' },
              textDecoration: 'none',
              '&:hover': {
                color: '#b99d75',
              },
            }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            color="inherit"
            sx={{
              fontFamily: 'Marcellus, serif',
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem' },
              textDecoration: 'none',
              '&:hover': {
                color: '#b99d75',
              },
            }}
          >
            Contact Us
          </Link>
        </OptionsContainer>

        {/* Mobile dropdown */}
        <MobileMenuButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/" color="inherit" sx={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/checkAvailability" color="inherit" sx={{ textDecoration: 'none', color: 'white' }}>Booking</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/menu" color="inherit" sx={{ textDecoration: 'none', color: 'white' }}>Dining</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/about-us" color="inherit" sx={{ textDecoration: 'none', color: 'white' }}>About Us</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/review" color="inherit" sx={{ textDecoration: 'none', color: 'white' }}>Reviews</Link>
            </MenuItem>
          </Menu>
        </MobileMenuButton>
      </Stack>

      {/* Centered logo/title */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          fontFamily: 'Marcellus, serif',
          color: "white",
          fontSize: { xs: '1.5rem', md: '2rem' }, // Smaller title font size on mobile
        }}
      >
        Ceylon Resort
      </Typography>

      {/* Right side links */}
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', marginRight: { xs: '10px', md: '40px' } }}>
        <OptionsContainer>
          <Link
            href="/checkAvailability"
            color="inherit"
            sx={{
              fontFamily: 'Marcellus, serif',
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem'},
              textDecoration: 'none',
              '&:hover': {
                color: '#b99d75',
              },
            }}
          >
            Booking
          </Link>
          <Link
            href="/menu"
            color="inherit"
            sx={{
              fontFamily: 'Marcellus, serif',
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem'},
              textDecoration: 'none',
              '&:hover': {
                color: '#b99d75',
              },
            }}
          >
            Dining
          </Link>
          <Link
            href="/review"
            color="inherit"
            sx={{
              fontFamily: 'Marcellus, serif',
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem'},
              textDecoration: 'none',
              '&:hover': {
                color: '#b99d75',
              },
            }}
          >
            Reviews
          </Link>
        </OptionsContainer>
      </Stack>
    </HeaderContainer>
  );
};

export default Header;
