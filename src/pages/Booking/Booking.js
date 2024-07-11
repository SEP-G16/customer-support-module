import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Typography, TextField, Button, Box, Stack } from '@mui/material';
import ImageBox from '../../components/ImageBox/ImageBox';
import RoomDetails from '../../components/RoomCard/RoomCard';
import Booking from './woman.jpg';
import Room from './room.jpg';

// const CustomTextContent = () => {
//   return (
//     <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <Typography variant="h2" align="center" sx={{ color: 'white', maxWidth: '80%' }}>
//         Stay with us to indulge in luxury and relaxation.
//       </Typography>
//     </Stack>
//   );
// };

const BookingPage = () => {
  const location = useLocation();
  const initialFormData = location.state?.formData || {
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    numRooms: 1,
    numAdults: 1,
    numChildren: 0,
    room: '' // Default room type
  };

  const [formData, setFormData] = useState(initialFormData);
  const [numAdults, setNumAdults] = useState(initialFormData.numAdults);
  const [numChildren, setNumChildren] = useState(initialFormData.numChildren);

  useEffect(() => {
    // Update state variables with formData from location state
    setFormData(location.state?.formData || initialFormData);
    setNumAdults(location.state?.formData?.adults || initialFormData.numAdults);
    setNumChildren(location.state?.formData?.children || initialFormData.numChildren);
  }, [location.state?.formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotalCost = () => {
    const baseCostPerNight = 150; // Example base cost per night
    const totalCost = baseCostPerNight * formData.numRooms;
    return totalCost;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., send formData to backend
    console.log(formData);
  };

  return (
    <Container>
      <ImageBoxWrapper>
        <ImageBox
          imageSrc={Booking}
          //TextContentComponent={<CustomTextContent />}
        />
      </ImageBoxWrapper>
      <Content>
        <LeftSection>
          <Typography variant='h4' fontFamily="Marcellus, serif" style={{ paddingTop: '0px', paddingBottom: '30px' }}>
            Your Room
          </Typography>
          <RoomDetails
            roomImage={formData.roomImage}
            roomType={formData.room}
            roomSize={formData.roomSize}
            guests={formData.guest}
            bedType={formData.bedType}
            description={formData.roomDescription}
          />
        </LeftSection>
        <RightSection>
          {/* Reservation form */}
          <Typography variant='h4' fontFamily="Marcellus, serif" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            Book Your Stay
          </Typography>
          <Form onSubmit={handleFormSubmit}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
            />
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
            />
            <TextField
              name="checkIn"
              label="Check-in Date"
              type="date"
              variant="outlined"
              value={formData.checkIn}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
            />
            <TextField
              name="checkOut"
              label="Check-out Date"
              type="date"
              variant="outlined"
              value={formData.checkOut}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
            />
            <TextField
              name="numRooms"
              label="Number of Rooms"
              type="number"
              variant="outlined"
              value={formData.numRooms}
              onChange={handleInputChange}
              fullWidth
              required
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
            />
            <TextField
              fontFamily="Marcellus, serif"
              label="Number of Adults"
              type="number"
              variant="outlined"
              value={numAdults}
              onChange={(e) => setNumAdults(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 1 } }}
              sx={{
                marginBottom: 2, borderRadius: '0px', width: '487px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0px', // Square borders
                  '& fieldset': {
                    borderColor: 'black', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                }
              }}
            />
            <TextField
              fontFamily="Marcellus, serif"
              label="Number of Children"
              type="number"
              variant="outlined"
              value={numChildren}
              onChange={(e) => setNumChildren(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 0 } }}
              sx={{
                marginBottom: 2, borderRadius: '0px', width: '487px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0px', // Square borders
                  '& fieldset': {
                    borderColor: 'black', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                }
              }}
            />
            <Typography variant="h4" fontFamily="Marcellus, serif">Total Cost: {calculateTotalCost()} USD</Typography>
            <Button variant="contained" type="submit" sx={{
              mt: 2, backgroundColor: 'black', borderRadius: '0px', padding: '10px', marginTop: '50px', marginBottom: '30px', fontSize: '1.4rem', // Adjust font size
              fontFamily: 'Marcellus, serif',
            }}>
              Book Your Stay
            </Button>
          </Form>
        </RightSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Marcellus', serif;
  overflow-x: hidden;
`;

const ImageBoxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1; /* Ensure the overlay is above the image */
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;  // Centers content on smaller screens
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 50px 0;  // Adjusted padding for better centering
  margin-right: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 50px;  // Adjusted padding for better centering
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;  // Ensures form takes full width of its container
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default BookingPage;
