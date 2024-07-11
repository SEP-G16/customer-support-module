import React from 'react';
import styled from 'styled-components';
import { Typography, Stack } from '@mui/material';
import Welcome from './Welcome.jpg';
import ImageBox from '../../components/ImageBox/ImageBox';
import Buttons from '../../components/Buttons';
import ImageTextSection from './ImageSection';
import DetailSection from './DetailsSection';
import ChatBot from './Chatbot';

const CustomTextContent = () => {
  return (
    <Stack spacing={2}>
        <Typography variant="h1" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '0px', marginBottom: '15px', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}>
          WELCOME TO CEYLON RESORT
        </Typography>
    </Stack>
  );
};

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

const Container = styled.div`
  background-color: white;
  overflow: hidden;
  align-items: center;
`;

export default Home;
