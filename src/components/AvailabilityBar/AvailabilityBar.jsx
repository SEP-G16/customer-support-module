import React, { useState } from "react";
import styled from "styled-components";
import {
  Button as MuiButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  ButtonBase,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import room from "./assets/images/room.jpg";
import suite from "./assets/images/suite.jpg";
import deluxe from "./assets/images/luxury.jpg";
import { AxiosInstance } from "../../axios.config";


const roomImages = {
  "Standard rooms": room,
  "Deluxe rooms": deluxe,
  "Suite rooms": suite,
};

const roomDescriptions = {
  "Standard rooms":
    "Experience ultimate comfort and relaxation in our Standard Room, featuring a breathtaking beach view. Perfect for unwinding after a sun-soaked day, this room provides everything you need for a delightful beachfront getaway.",
  "Deluxe rooms":
    "Indulge in luxury with our Deluxe Room, offering spacious accommodations and modern amenities. Ideal for families or couples looking for extra comfort and style during their stay.",
  "Suite rooms":
    "Discover the epitome of luxury in our Suite, featuring expansive living space, stunning ocean views, and premium amenities. Perfect for those seeking a lavish retreat and unparalleled comfort.",
};
const roomSizes = {
  "Standard rooms": "80m2",
  "Deluxe rooms": "100m2",
  "Suite rooms": "120m2",
};
const guests = {
  "Standard rooms": "2 Guests",
  "Deluxe rooms": "3 Guests",
  "Suite rooms": "4 Guests",
};
const bedTypes = {
  "Standard rooms": "1 King Bed",
  "Deluxe rooms": "2 Queen Beds",
  "Suite rooms": "2 Twin Beds",
};

function AvailabilityBar() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    room: "Standard rooms", // Default room type
    adults: "1",
    children: "0",
    rooms: "1", // Default number of rooms
    roomImage: roomImages["Standard rooms"], // Default room image
    roomDescription: roomDescriptions["Standard rooms"], // Default room description
    roomSize: roomSizes["Standard rooms"], // Default room size
    guest: guests["Standard rooms"], // Default guest information
    bedType: bedTypes["Standard rooms"], // Default bed type
  });

  const [showPopup, setShowPopup] = useState(false);
  const [available, setAvailable] = useState(true);
  const [roomAvailability, setRoomAvailability] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "room" || name === "rooms") {
      setFormData({
        ...formData,
        [name]: value,
        roomImage: roomImages[value], // Update room image based on selected room type
        roomDescription: roomDescriptions[value], // Update room description based on selected room type
        roomSize: roomSizes[value],
        guest: guests[value],
        bedType: bedTypes[value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setAvailable(true); // Simulated availability check
    try {
      let response = await AxiosInstance.get(`/api/room-type/available-count?from=${formData.checkIn}&to=${formData.checkOut}`); 
      let [standardMap, deluxeMap, suiteMap] = response.data;
      const availabilityData = {
        "Standard rooms": {roomTypeId : standardMap.roomTypeId, roomCount: standardMap.roomCount},
        "Deluxe rooms": {roomTypeId : deluxeMap.roomTypeId, roomCount: deluxeMap.roomCount},
        "Suite rooms": {roomTypeId : suiteMap.roomTypeId, roomCount: suiteMap.roomCount},
      };
      // Simulate room availability data
      setRoomAvailability(availabilityData);
      if (available) {
        setShowPopup(true);
      } else {
        alert("Rooms are not available for the selected dates.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRoomClick = (roomType) => {
    const { room, adults, children, rooms, ...rest } = formData;
    navigate("/book", {
      state: {
        formData: {
          ...rest,
          room: roomType,
          roomTypeId: roomAvailability[roomType].roomTypeId,
          adults,
          children,
          rooms,
          roomImage: roomImages[roomType],
          roomDescription: roomDescriptions[roomType],
          roomSize: roomSizes[roomType],
          guest: guests[roomType],
          bedType: bedTypes[roomType],
        },
      },
    });
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
      inputProps: {
        min: new Date().toISOString().split("T")[0], // Set the minimum selectable date to today
      },
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
      inputProps: {
        min: new Date().toISOString().split("T")[0], // This sets the minimum date to today's date
      },
    }}
    variant="outlined"
  />
</GridItem>

        {/* <GridItem>
          <ItemLabel>Rooms</ItemLabel>
          <StyledTextField
            select
            fullWidth
            label=""
            name="rooms"
            value={formData.rooms}
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
        </GridItem> */}
        {/* <GridItem>
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
        </GridItem> */}
        {/* <GridItem>
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
        </GridItem> */}
        <ButtonGridItem>
          <ButtonWrapper>
            <StyledButton type="button" onClick={handleSubmit}>
              Check Availability
            </StyledButton>
          </ButtonWrapper>
        </ButtonGridItem>
      </GridContainer>

      <Dialog
        open={showPopup}
        onClose={handleClosePopup}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Room Availability</DialogTitle>
        <DialogContent>
          <DialogContentWrapper>
            {available ? (
              <RoomContainer>
                {Object.entries(roomAvailability).map(([roomType, map]) => (
                  <RoomBox
                    key={roomType}
                    onClick={() => handleRoomClick(roomType)}
                  >
                    <RoomImage src={roomImages[roomType]} alt={roomType} />
                    <RoomContent>
                      <Typography variant="h6">{roomType}</Typography>
                      <Typography variant="body2">{`${map.roomCount} rooms available`}</Typography>
                    </RoomContent>
                  </RoomBox>
                ))}
              </RoomContainer>
            ) : (
              <Typography variant="body1">
                Rooms are not available for the selected dates.
              </Typography>
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
  width: 35%;
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
