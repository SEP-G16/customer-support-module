import React, { useState } from "react";
import styled from "styled-components";
import { Button as MuiButton, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, ButtonBase, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import room from "./room.jpg";
import suite from "./suite.jpg";
import deluxe from "./luxury.jpg";

// Define a mapping of room types to image paths
const roomImages = {
  "Standard rooms": room,
  "Deluxe rooms": deluxe,
  "Suite rooms": suite,
};

function AvailabilityBar() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    room: '1',
    adults: '1',
    children: '0',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [available, setAvailable] = useState(true);
  const [roomAvailability, setRoomAvailability] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setAvailable(true); // Simulated availability check

    // Simulate room availability data
    const availabilityData = {
      "Standard rooms": 4,
      "Deluxe rooms": 2, 
      "Suite rooms": 3
    };
    setRoomAvailability(availabilityData);

    if (available) {
      setShowPopup(true);
    } else {
      alert("Rooms are not available for the selected dates.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRoomClick = (roomType) => {
    // Destructure formData to get room, adults, and children
    const { room, adults, children } = formData;
    // Navigate to booking page and pass form data including room, adults, and children
    navigate("/book", { state: { formData: { ...formData, room: roomType, adults, children } } });
  };

  return (
    <Container>
      <GridContainer>
        <GridItem>
          <ItemLabel>Check In</ItemLabel>
          <StyledTextField
            fullWidth
            label=""
            name="checkIn"
            type="date"
            value={formData.checkIn}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
              style: { color: "white" },
            }}
            required
            InputProps={{
              disableUnderline: true,
            }}
            variant="outlined"
          />
        </GridItem>
        <GridItem>
          <ItemLabel>Check Out</ItemLabel>
          <StyledTextField
            fullWidth
            label=""
            name="checkOut"
            type="date"
            value={formData.checkOut}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
              style: { color: "white" },
            }}
            required
            InputProps={{
              disableUnderline: true,
            }}
            variant="outlined"
          />
        </GridItem>
        <GridItem>
          <ItemLabel>Rooms</ItemLabel>
          <StyledTextField
            select
            fullWidth
            label=""
            name="room"
            value={formData.room}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            variant="outlined"
          >
            {[...Array(5).keys()].map((num) => (
              <MenuItem key={num + 1} value={`${num + 1}`}>
                {`${num + 1}`}
              </MenuItem>
            ))}
          </StyledTextField>
        </GridItem>
        <GridItem>
          <ItemLabel>Adults</ItemLabel>
          <StyledTextField
            select
            fullWidth
            label=""
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            variant="outlined"
          >
            {[...Array(5).keys()].map((num) => (
              <MenuItem key={num + 1} value={`${num + 1}`}>
                {`${num + 1}`}
              </MenuItem>
            ))}
          </StyledTextField>
        </GridItem>
        <GridItem>
          <ItemLabel>Children</ItemLabel>
          <StyledTextField
            select
            fullWidth
            label=""
            name="children"
            value={formData.children}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            variant="outlined"
          >
            {[...Array(5).keys()].map((num) => (
              <MenuItem key={num} value={`${num}`}>
                {`${num}`}
              </MenuItem>
            ))}
          </StyledTextField>
        </GridItem>
        <ButtonGridItem>
          <ButtonWrapper>
            <StyledButton type="button" onClick={handleSubmit}>
              Check Availability
            </StyledButton>
          </ButtonWrapper>
        </ButtonGridItem>
      </GridContainer>

      <Dialog open={showPopup} onClose={handleClosePopup} maxWidth="sm" fullWidth>
  <DialogTitle>Room Availability</DialogTitle>
  <DialogContent>
    <DialogContentWrapper>
      {available ? (
        <RoomContainer>
          {Object.entries(roomAvailability).map(([roomType, count]) => (
            <RoomBox key={roomType} onClick={() => handleRoomClick(roomType)}>
              <RoomImage src={roomImages[roomType]} alt={roomType} />
              <RoomContent>
                <Typography variant="h6">{roomType}</Typography>
                <Typography variant="body2">{`${count} rooms available`}</Typography>
              </RoomContent>
            </RoomBox>
          ))}
        </RoomContainer>
      ) : (
        <Typography variant="body1">Rooms are not available for the selected dates.</Typography>
      )}
    </DialogContentWrapper>
  </DialogContent>
  <DialogActions>
    <MuiButton onClick={handleClosePopup} color="primary">
      Close
    </MuiButton>
  </DialogActions>
</Dialog>



    </Container>
  );
}

const Container = styled.div`
  background-color: #53624e;
  padding: 10px 47px;
  width: 75%;
  border: 1px solid #b99d75;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  @media (max-width: 991px) {
    padding: 20px;
    width: 90%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) auto;
  gap: 20px;
  color: #fff;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const ButtonGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column: span 1;
`;

const ItemLabel = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(MuiButton)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b99d75;
    color: #fff;
    font: 16px Marcellus, serif;
    padding: 16px 34px;
    min-width: 120px;
    border: none;
    @media (max-width: 991px) {
      padding: 10px 20px;
    }

    &:hover {
      background-color: #a38863;
    }
  }
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    width: 120px;
    & .MuiOutlinedInput-root {
      border-radius: 0px;
      & fieldset {
        border-color: #b99d75;
      }
      &:hover fieldset {
        border-color: #b99d75;
      }
      &.Mui-focused fieldset {
        border-color: #b99d75;
      }
    }
    & .MuiInputBase-input {
      color: white;
      padding: 8px;
      font-size: 14px;
    }
    & .MuiInputLabel-root {
      color: white;
    }
  }
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end; /* Aligns all content to the right */
`;


const DialogContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;


const RoomBox = styled(ButtonBase)`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #b99d75;
  border-radius: 5px;
  overflow: hidden;
  text-align: left;
  transition: background-color 0.3s;
  padding: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const RoomImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 200px; /* Adds a gap between image and content */
`;

const RoomContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;
  text-align: right; /* Aligns the content to the right */
`;


export default AvailabilityBar;
