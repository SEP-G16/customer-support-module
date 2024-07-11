import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, TextField, Button, Box } from '@mui/material';
import Booking from './woman.jpg'; // Assuming Booking is the correct path to your image
import RoomDetails from '../../components/RoomCard/RoomCard';
import ImageBox from '../../components/ImageBox/ImageBox';
import { useLocation } from 'react-router-dom';

const CustomTextContent = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Customize your text content here */}
      <Typography variant="body1">
        Your custom text content goes here.
      </Typography>
    </Box>
  );
};

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
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Update state variables with formData from location state
    setFormData({
      ...initialFormData,
      name: '',
      email: '',
      phone: '',
    });
  }, [initialFormData]);

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
      <ImageBox
        imageSrc={Booking}
        TextContentComponent={<CustomTextContent />}
      />
      <Content>
        <LeftSection>
          <Typography variant='h4' style={{ paddingLeft: '150px', paddingTop: '0px', paddingBottom: '30px' }}>
            Your Room
          </Typography>
          <RoomDetails />
        </LeftSection>
        <RightSection>
          <Typography variant='h4' style={{ paddingLeft: '130px', paddingTop: '30px', paddingBottom: '30px' }}>
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
            <Box>
              <TextField
                name="numAdults"
                label="Number of Adults"
                type="number"
                variant="outlined"
                value={formData.numAdults}
                onChange={handleInputChange}
                fullWidth
                required
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
              />
              <TextField
                name="numChildren"
                label="Number of Children"
                type="number"
                variant="outlined"
                value={formData.numChildren}
                onChange={handleInputChange}
                fullWidth
                required
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ marginBottom: 2, borderRadius: '0px', width: '487px' }}
              />
            </Box>
            <Typography variant="h4">Total Cost: {calculateTotalCost()} USD</Typography>
            <Button variant="contained" type="submit" sx={{ mt: 2, backgroundColor: 'black', borderRadius: '0px', padding: '10px', marginLeft: '180px', marginTop: '50px', marginBottom: '30px', fontSize: '1.4rem' }}>
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
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-left: 200px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 50px;
`;

const Form = styled.form`
  /* Form styles here */
`;

export default BookingPage;
