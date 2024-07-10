import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Stack, TextField, Button, Box } from '@mui/material';
import Booking from './woman.jpg'; // Assuming Booking is the correct path to your image
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoomCard from '../../components/RoomCard/RoomCard';
import ImageBox from '../../components/ImageBox/ImageBox';
import RoomDetails from '../../components/RoomCard/RoomCard';

const CustomTextContent = () => {
  return (
      <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
      </Stack>
    
  );
};

const BookingPage = () => {
    // State for form inputs
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [phone, setPhone] = useState('123-456-7890');
    const [checkIn, setCheckIn] = useState('2024-07-10');
    const [checkOut, setCheckOut] = useState('2024-07-15');
    const [numRooms, setNumRooms] = useState(2);
    const [numAdults, setNumAdults] = useState(2);
    const [numChildren, setNumChildren] = useState(1);
  
    // Calculate total cost based on selected options
    const calculateTotalCost = () => {
      // Replace with your calculation logic based on room details and dates
      // Example calculation:
      const baseCostPerNight = 150; // Example base cost per room per night
      const totalCost = baseCostPerNight * numRooms;
      return totalCost;
    };
  
    // Handle form submission
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here, like sending data to backend
      console.log(name, email, phone, checkIn, checkOut, numRooms, numAdults, numChildren);
    };

  return (
    <Container>
      
      <ImageBox
        imageSrc={Booking}
        TextContentComponent={<CustomTextContent />}
      />
      <Content>
        <LeftSection>
        <Typography variant='h4' fontFamily="Marcellus, serif" style={{paddingLeft:'150px', paddingTop:'0px', paddingBottom:'30px'}}>
          Your Room
          </Typography>
          {/* Display room details here */}
          <RoomDetails/>
        </LeftSection>
        <RightSection>
          {/* Reservation form */}
          <Typography variant='h4' fontFamily="Marcellus, serif" style={{paddingLeft:'130px', paddingTop:'30px', paddingBottom:'30px'}}>
          Book Your Stay
          </Typography>
          
          <Form onSubmit={handleFormSubmit}>
            <TextField
            fontFamily="Marcellus, serif"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            <TextField
            fontFamily="Marcellus, serif"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            <TextField
            fontFamily="Marcellus, serif"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            <TextField
            fontFamily="Marcellus, serif"
              label="Check-in Date"
              type="date"
              variant="outlined"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            <TextField
            fontFamily="Marcellus, serif"
              label="Check-out Date"
              type="date"
              variant="outlined"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            <TextField
            fontFamily="Marcellus, serif"
              label="Number of Rooms"
              type="number"
              variant="outlined"
              value={numRooms}
              onChange={(e) => setNumRooms(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            <Box>
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
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
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
              sx={{ marginBottom: 2, borderRadius: '0px', width: '487px',
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
                  }, }}}
            />
            </Box>
            <Typography variant="h4" fontFamily="Marcellus, serif">Total Cost: {calculateTotalCost()} USD</Typography>
            <Button variant="contained" type="submit" sx={{ mt: 2, backgroundColor: 'black', borderRadius: '0px', padding: '10px', marginLeft: '180px', marginTop:'50px',marginBottom:'30px',fontSize: '1.4rem', // Adjust font size
     // Change font family // Adjust font size
    fontFamily: 'Marcellus, serif',}}>

              Book Your Stay
            </Button>
          </Form>
        </RightSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  /* Your container styles here */
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
