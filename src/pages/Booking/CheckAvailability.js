import React from 'react';
import styled from 'styled-components';
import { Typography, Stack } from '@mui/material';
import Booking from './Booking.jpg'; // Assuming Booking is the correct path to your image
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AvailabilityBar from '../../components/AvailabilityBar';
import RoomCard from '../../components/RoomCard/RoomCard';
import ActivityCard from '../../components/ActivityCard/ActivityCard'; // Assuming ActivityCard component is defined
import ImageBox from '../../components/ImageBox/ImageBox';
import LotusIcon from './lotus.png'; // Assuming the correct path to your icon
import ResortIcon from './hotel.png'; // Assuming the correct path to your icon

const CustomTextContent = () => {
  return (
    <Stack>
      <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Img src={ResortIcon} alt="Resort icon" />
        <Typography variant="h8" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '2px', marginBottom: '50px' }}>
          WELCOME TO CEYLON RESORT
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h2" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '0px', marginBottom: '0px' }}>
          In the heart of the Indian Ocean 
        </Typography>
        <Typography variant="h2" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '0px', marginBottom: '30px' }}>
          Outstanding Views
        </Typography>
        <Typography variant="h6" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '0px' }}>
          Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, Ceylon is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it offers stunning views of palm-lined beaches and gorgeous coral reefs.
        </Typography>
      </Stack>
    </Stack>
  );
};

const CheckAvailability = () => {
  return (
    <Container>
      <ImageBox
        imageSrc={Booking}
        TextContentComponent={<CustomTextContent />}
      />
      <AvailabilityBarWrapper>
        <AvailabilityBar />
      </AvailabilityBarWrapper>
      <ContentContainer>
        <RoomCards>
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </RoomCards>
        <TextSection>
          <Img src={LotusIcon} alt="Lotus icon" />
          <Typography variant="h3" fontFamily="Marcellus, serif" paddingTop={2} paddingBottom={-100}>
            Unlock Unmatched Luxury 
          </Typography>
          <Typography variant="h3" fontFamily="Marcellus, serif" paddingTop={2} paddingBottom={5}>
            Dive, Rejuvenate, and Energize with Us
          </Typography>
        </TextSection>
        <ActivityCardsWrapper>
          <ActivityCards>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </ActivityCards>
        </ActivityCardsWrapper>
      </ContentContainer>
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
  align-items: center;
`;

const RoomCards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  gap: 50px;
`;

const TextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.1;
  object-fit: auto;
  object-position: center;
  width: 75px;
`;

const ActivityCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px;
  margin-top: 0px;
`;

const ActivityCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  marginLeft: 20px;
  marginRight: 20px;
  gap: 30px;
  margin-bottom: 40px;
  display: flex;

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
  }
`;

const AvailabilityBarWrapper = styled.div`
  position: relative;
  top: -70px; /* Adjust as needed to overlap with ImageBox */
  display: flex;
  z-index: 4; /* Ensure the bar is above the ImageBox */
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

export default CheckAvailability;