import React from 'react';
import styled from 'styled-components';
import { Stack, Typography, Rating } from '@mui/material';

import Footer from '../../components/Footer';
import ImageBox from '../../components/ImageBox/ImageBox';
import lobby from './resort.jpg';

const CustomTextContent = () => {
  return (
    <Stack spacing={2} style={{ marginTop: '-200px' }}> {/* Adjust the marginTop value as needed */}
      <Typography
        variant="h1"
        fontFamily="Marcellus, serif"
        style={{
          color: 'white',
          padding: '0px',
          marginBottom: '0px',
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        About Us
      </Typography>
    </Stack>
  );
};

function AboutUs() {
  return (
    <div>
      <ImageBox
        imageSrc={lobby}
        TextContentComponent={<CustomTextContent />}
      />
      <MainContainer>
        <ContentContainer>
          <Typography variant="h4" gutterBottom>
            Welcome to Our Hotel
          </Typography>
          <Typography variant="body1" paragraph>
            Our hotel is located in the heart of the city, offering the best amenities and services to make your stay memorable. Enjoy our luxurious rooms, top-notch dining experiences, and unparalleled hospitality.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you are here for business or leisure, our hotel provides a range of facilities including a spa, gym, and conference rooms. We are committed to ensuring that your stay is comfortable and enjoyable.
          </Typography>
          <RatingSection>
            <Typography variant="h6">Customer Rating</Typography>
            <Rating name="read-only" value={4.5} readOnly />
          </RatingSection>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const RatingSection = styled.div`
  margin-top: 20px;
`;

export default AboutUs;
