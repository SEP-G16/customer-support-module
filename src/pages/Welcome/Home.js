import React from 'react';
import styled from 'styled-components';
import { Typography, Stack } from '@mui/material';
import Welcome from './assets/images/2.jpeg';
import ImageBox from '../../components/ImageBox/ImageBox';
import Buttons from '../../components/Buttons/Buttons';
import ImageTextSection from './ImageSection';
import DetailSection from './DetailsSection';
import ChatBot from './Chatbot';

// Custom text content component
const CustomTextContent = () => {
  return (
    <Stack spacing={2}>
      <Typography
        variant="h1"
        fontFamily="Marcellus, serif"
        style={{
          color: 'white',
          padding: '0px',
          marginBottom: '15px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)', // Text shadow effect
        }}
      >
        WELCOME TO CEYLON RESORT
      </Typography>
    </Stack>
  );
};

// Main home component
const Home = () => {
  return (
    <Container>
        <ImageBox
          imageSrc={Welcome}
          TextContentComponent={<CustomTextContent />}
          ButtonComponent={<Buttons />}
        />
      <ImageTextSection />
      <DetailSection />
      <ChatBot />
    </Container>
  );
};

// Styled container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
  padding: 0px; /* Padding to avoid content touching the edges */
  box-sizing: border-box;
`;


export default Home;
