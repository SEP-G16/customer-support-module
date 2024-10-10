import React from 'react';
import { Stack, Typography, Rating } from '@mui/material';
import './assets/styles/about.css';
import ImageBox from '../../components/ImageBox/ImageBox';
import lobby from './assets/images/resort.jpg';

const CustomTextContent = () => {
  return (
    <Stack spacing={2} style={{ marginTop: '-200px', textAlign: 'center' }}>
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
      {/* ImageBox section */}
      <ImageBox
        imageSrc={lobby}
        TextContentComponent={<CustomTextContent />}
      />

      <div className="MainContainer">
        <div className="ContentContainer">
          {/* Title */}
          <Typography variant="h2" gutterBottom align="center" style={{ marginBottom: '40px' }}>
            Welcome to Ceylon Resort
          </Typography>

          {/* Description */}
          <Typography variant="body1" paragraph align="justify" style={{ lineHeight: '1.8' }}>
            Nestled in the vibrant heart of the city, our hotel is more than just a place to stay—it’s a destination in itself. Offering a perfect blend of luxury, comfort, and convenience, we strive to create an exceptional experience for each and every guest. Whether you’re here for business, leisure, or a combination of both, our hotel is designed to meet all your needs, ensuring that your stay with us is nothing short of extraordinary.
          </Typography>

          <Typography variant="body1" paragraph align="justify" style={{ lineHeight: '1.8' }}>
            <strong>Exceptional Accommodations:</strong> Our hotel boasts a collection of elegantly designed rooms and suites that offer both comfort and style. Each room is thoughtfully equipped with world-class amenities to provide a relaxing haven where you can unwind after a day of exploring or working. From plush bedding and modern furnishings to scenic views of the city, every detail is carefully curated to create an inviting and tranquil space.
            Whether you’re looking for a cozy single room, a spacious suite, or a family-friendly option, we have the perfect room to suit your needs. Every room is designed with your comfort in mind, offering a peaceful escape with top-tier features like high-speed Wi-Fi, smart TVs, minibars, and deluxe bath amenities.
          </Typography>

          <Typography variant="body1" paragraph align="justify" style={{ lineHeight: '1.8' }}>
            <strong>Exquisite Dining Experience:</strong> Our hotel is proud to offer a variety of dining options that cater to all tastes. Indulge in a gastronomic journey with our carefully crafted menus, featuring both international cuisine and local delicacies. Our award-winning chefs prepare dishes that are as beautiful to the eye as they are delightful to the palate.

            For a more casual dining experience, enjoy light snacks and drinks at our stylish lounge or outdoor patio, where you can relax while taking in the stunning city views. Whether you’re a food connoisseur or simply in search of a satisfying meal, our culinary offerings are sure to leave a lasting impression.
          </Typography>

          {/* Customer Rating Section */}
          <div className="RatingSection" style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>Customer Rating</Typography>
            <Rating name="read-only" value={4.5} readOnly precision={0.5} style={{ fontSize: '2rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
