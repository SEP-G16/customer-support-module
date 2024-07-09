import * as React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

function AvailabilityBar() {
  return (
    <Container>
      <GridContainer>
        <GridItem>Check In 2024-07-02</GridItem>
        <GridItem>Check Out 2024-07-02</GridItem>
        <GridItem>Room 1 Room</GridItem>
        <GridItem>Guests 1 Adult, 0 Child</GridItem>
        <ButtonWrapper>
          <StyledButton>Check Availability</StyledButton>
        </ButtonWrapper>
      </GridContainer>
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
  grid-template-columns: repeat(5, 1fr) auto; /* All items in one row on large screens */
  gap: 20px;
  color: #fff;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust to 2 items per row on smaller screens */
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  font: 14px Marcellus, serif;
  border: 2px solid rgba(185, 157, 117, 1);
  background-color: rgba(217, 217, 217, 0);
  justify-content: center;
  padding: 16px 16px;
  min-width: 120px;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  @media (max-width: 991px) {
    grid-column: span 2; /* Ensure the button spans two columns */
    justify-content: center;
  }
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
    @media (max-width: 991px) {
      padding: 10px 20px;
    }

    &:hover {
      background-color: #a38863;
    }
  }
`;

export default AvailabilityBar;
