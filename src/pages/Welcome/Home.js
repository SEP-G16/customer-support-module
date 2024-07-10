import React from 'react';
import { Typography, Stack } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageBox from '../../components/ImageBox/ImageBox';
import Welcome from './Welcome.jpg';
import Chatbot from './Chatbot';

const CustomTextContent = () => {
  return (
    <div>
      <Typography variant='h1' fontFamily="Marcellus, serif" color='white' style={{ paddingLeft: '150px', paddingTop: '0px', paddingBottom: '30px' }}>
        Welcome to Ceylon Resort
      </Typography>
    </div>
  );
};

const Home = () => {
  return (
    <Container>
      <Header />
      <ImageBox imageSrc={Welcome} TextContentComponent={<CustomTextContent />} />
      <ContentContainer>
        <Chatbot />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: right;
`;


export default Home;
