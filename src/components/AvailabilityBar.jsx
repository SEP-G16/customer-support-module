import React, { useState } from "react";
import styled from "styled-components";
import { Button as MuiButton, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";

function AvailabilityBar() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    room: '1',
    adults: '1',
    children: '0',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [available, setAvailable] = useState(true); // Initially set to true for demonstration

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Simulate availability logic (replace with actual logic)
    setAvailable(false); // false - Simulate rooms not available
                         // true - stimulate rooms available

    if (available) {
      setShowPopup(true);
    } else {
      alert("Rooms are not available for the selected dates.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
              style: { padding: "8px", width: "120px", color: "white", borderColor: "#b99d75", fontSize: "14px" },
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
              style: { padding: "8px", width: "120px", color: "white", borderColor: "#b99d75", fontSize: "14px" },
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
              style: { color: "white", borderColor: "#b99d75" },
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
              style: { color: "white", borderColor: "#b99d75" },
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
              style: { color: "white", borderColor: "#b99d75" },
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

      {/* Popup Dialog */}
      <Dialog open={showPopup} onClose={handleClosePopup}>
        <DialogTitle>Availability</DialogTitle>
        <DialogContent>
          {available ? (
            <Typography variant="body1">Rooms are available!</Typography>
          ) : (
            <Typography variant="body1">Rooms are not available for the selected dates.</Typography>
          )}
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
  padding: 36px 47px;
  width: 75%;
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
  border: 2px solid #b99d75;
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
    input {
      font-size: 10px;
    }
  }
`;

export default AvailabilityBar;
