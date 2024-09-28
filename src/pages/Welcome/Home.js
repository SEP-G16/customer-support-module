import React from 'react';
import styled from 'styled-components';
import { Typography, Stack } from '@mui/material';
import Welcome from './Welcome.jpg';
import ImageBox from '../../components/ImageBox/ImageBox';
import Buttons from '../../components/Buttons';
import ImageTextSection from './ImageSection';
import DetailSection from './DetailsSection';
import ChatBot from './Chatbot';
import './Home.css'; // Import the CSS file

const CustomTextContent = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h1" fontFamily="Marcellus, serif" className="custom-text">
        WELCOME TO CEYLON RESORT
      </Typography>
    </Stack>
  );
};

const Home = () => {
  return (
    <Container className="container">
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

const Container = styled.div``; // Keep the styled component definition empty as it's not needed

export default Home;
