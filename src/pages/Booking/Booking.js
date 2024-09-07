import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Typography, TextField, Button, Box } from '@mui/material';
import ImageBox from '../../components/ImageBox/ImageBox';
import RoomDetails from '../../components/RoomCard/RoomCard';
import Booking from './woman.jpg';
import Room from './room.jpg';
import { Link } from 'react-router-dom'; 


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
    room: '', // Default room type
  };

  const [formData, setFormData] = useState(initialFormData);
  const [numAdults, setNumAdults] = useState(initialFormData.numAdults);
  const [numChildren, setNumChildren] = useState(initialFormData.numChildren);
  const [numRooms, setNumRooms] = useState(initialFormData.numRooms);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormDataValid, setIsFormDataValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

useEffect(() => {
  const isValid = Object.values(formData).every((value) => value !== '' && value !== null);
  setIsFormValid(isValid);
}, [formData]); // Run the validation whenever the formData state changes

useEffect(() => {
  const validateFormData = () => {
    const { name, email, phone, checkIn, checkOut, numRooms, numAdults, numChildren, room } = formData;
    const errors = {};

    // Validate phone number
    if (phone && !/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    // Validate number of rooms, adults, and children
    if (numRooms <= 0){errors.numRooms = 'Select at least one room';} 
    if (numAdults <= 0) errors.numAdults = 'Number of adults must be greater than 0';
    if (numChildren <= 0) errors.numChildren = 'Number of children cannot be negative';

    // Validate dates
    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      errors.checkOut = 'Check-out date must be after check-in date';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  setIsFormDataValid(validateFormData());
}, [formData]);


  useEffect(() => {
    // Update state variables with formData from location state
    setFormData(location.state?.formData || initialFormData);
    setNumAdults(location.state?.formData?.adults || initialFormData.numAdults);
    setNumChildren(location.state?.formData?.children || initialFormData.numChildren);
    setNumRooms(location.state?.formData?.rooms || initialFormData.numRooms);
  }, [location.state?.formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotalCost = () => {
    const baseCostPerNight = 150; // Example base cost per night
    const totalCost = baseCostPerNight * numRooms;
    return totalCost;
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check if the form is valid
    if (isFormValid) {
      // Show the success popup
      setShowPopup(true);
      // Automatically hide the popup and redirect after a short delay
      setTimeout(() => {
        setShowPopup(false);
        // Navigate to the home page after 2 seconds
        window.location.href = '/';
      }, 2000);
    } else {
      alert("Please fill all the required fields.");
    }
  };
  

  return (
    <Container>
      {showPopup && (
        <Popup>
          You have successfully booked a room! Our team will confirm your reservation very soon.
        </Popup>
      )}
      <ImageBoxWrapper>
        <ImageBox imageSrc={Booking} />
      </ImageBoxWrapper>
      <Content>
        <LeftSection>
          <Typography variant='h4' fontFamily="Marcellus, serif">
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
          <Typography variant='h4' fontFamily="Marcellus, serif">
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
              sx={{ marginBottom: 2, borderRadius: '0px' }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px' }}
            />
            <TextField
               name="phone"
               label="Phone"
               variant="outlined"
               value={formData.phone}
               onChange={handleInputChange}
               fullWidth
               required
               error={!!errors.phone}
               helperText={errors.phone}
               sx={{ marginBottom: 2, borderRadius: '0px' }} 
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
              inputProps={{ min: new Date().toISOString().split('T')[0] }} 
              sx={{ marginBottom: 2, borderRadius: '0px' }}
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
              error={!!errors.checkOut}
              helperText={errors.checkOut}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: new Date().toISOString().split('T')[0] }} 
              sx={{ marginBottom: 2, borderRadius: '0px' }}
            />
            <TextField
              name="numRooms"
              label="Number of Rooms"
              type="number"
              variant="outlined"
              value={numRooms}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (value > 0) {
                  setNumRooms(value);
                  setFormData({ ...formData, numRooms: value }); // Update form data
                } else {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    numRooms: 'Number of rooms must be greater than 0',
                  }));
                }
              }}
              fullWidth
              required 
              error={!!errors.numRooms}
              helperText={errors.numRooms}
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: '0px' }}
            />
            <TextField
              name="numAdults"
              label="Number of Adults"
              type="number"
              variant="outlined"
              value={numAdults}
              onChange={(e) => setNumAdults(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: '0px' }}
            />
            <TextField
              name="numChildren"
              label="Number of Children"
              type="number"
              variant="outlined"
              value={numChildren}
              onChange={(e) => setNumChildren(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 0 } }}
              sx={{ marginBottom: 2, borderRadius: '0px' }}
            />
            <Typography variant="h4" fontFamily="Marcellus, serif">
              Total Cost: {calculateTotalCost()} USD
            </Typography>
            <Button
              type="submit"
              disabled={!isFormValid}
              sx={{
                  mt: 2,
                  borderRadius: '0px',
                  padding: '10px',
                  marginTop: '50px',
                  marginBottom: '30px',
                  fontSize: '1.4rem', // Adjust font size
                  fontFamily: 'Marcellus, serif',
                  color: '#fff',
                  transition: 'color 0.3s ease', // Smooth transition for color change
                  border: '3px solid rgba(185, 157, 117, 1)', // Example border style
                  backgroundColor: '#53624e', // CamelCase for background-color
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    color: '#B99D75',
                    backgroundColor: '#53624e', // Corrected hover color syntax
                  },
                }}
              >
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
    align-items: center; // Centers content on smaller screens
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 50px 0; // Adjusted padding for better centering
  margin-right: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 50px; // Adjusted padding for better centering
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%; // Ensures form takes full width of its container
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-family: Marcellus, serif;
  text-decoration: none;
  color: #fff;
  padding: 10px 50px 12px;
  transition: color 0.3s ease; /* Smooth transition for color change */
  border: 3px solid rgba(185, 157, 117, 1); /* Example border style */
  background-color: #53624e;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    color: #B99D75; 
  }
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
  font-family: 'Marcellus', serif;
`;


export default BookingPage;