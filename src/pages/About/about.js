import React from 'react';
import { Stack, Typography, Rating } from '@mui/material';
import './assets/styles/about.css';
import ImageBox from '../../components/ImageBox/ImageBox';
import lobby from './assets/images/resort.jpg';

const CustomTextContent = () => {
  return (
    <Stack spacing={2} style={{ marginTop: '-200px' }}> 
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
      <div className="MainContainer">  
        <div className="ContentContainer">  
          <Typography variant="h4" gutterBottom>
            Welcome to Our Hotel
          </Typography>
          <Typography variant="body1" paragraph>
            Our hotel is located in the heart of the city, offering the best amenities and services to make your stay memorable. Enjoy our luxurious rooms, top-notch dining experiences, and unparalleled hospitality.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you are here for business or leisure, our hotel provides a range of facilities including a spa, gym, and conference rooms. We are committed to ensuring that your stay is comfortable and enjoyable.
          </Typography>
          <div className="RatingSection"> 
            <Typography variant="h6">Customer Rating</Typography>
            <Rating name="read-only" value={4.5} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
