import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Stack,Typography } from '@mui/material';
import Header from '../../components/Header';
import ImageBox from '../../components/ImageBox/ImageBox';
import MenuCard from '../../components/MenuCard';
import Footer from '../../components/Footer';
import Dining from './dining.jpg';

const CustomTextContent = () => {
  return (
      <Stack spacing={2}>
        <Typography variant="h1" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '0px', marginBottom: '0px', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",}}>
        Ultimate Dining Experience
        </Typography>
       </Stack>
  );
};

const MenuPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 800 });

  return (
    <Container>
      <Header />
      <ImageBox
        imageSrc={Dining}
        TextContentComponent={<CustomTextContent />}
      />
      <MenuContainer direction={isDesktop ? 'row' : 'column'}>
        <MenuCard />
        <MenuCard />
      </MenuContainer>
      <MenuContainer direction={isDesktop ? 'row' : 'column'}>
        <MenuCard />
        <MenuCard />
      </MenuContainer>
      <MenuContainer direction={isDesktop ? 'row' : 'column'}>
        <MenuCard />
        <MenuCard />
      </MenuContainer>      
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const MenuContainer = styled(Stack)`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  gap: 20px; /* Adjust the gap between MenuCards */
  width: 100%;
  max-width: 1400px;
  margin-top: 20px;
  border: 1px solid green;
  overflow-x: hidden;

  @media (max-width: 800px) {
    flex-direction: column; /* Display items in a column on smaller screens */
  }
`;

const Img = styled.img`
  aspect-ratio: 1.1;
  object-fit: auto;
  object-position: center;
  width: 75px;
`;

export default MenuPage;
