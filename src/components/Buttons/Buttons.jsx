import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const Buttons = () => {
  return (
    <Div>
      <StyledLink to="/checkAvailability">Booking</StyledLink>
      <StyledLink to="/menu">Dining</StyledLink>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  max-width: 500px;
  font-family: Marcellus, serif;
  gap: 200px;
  font-size: 23px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  z-index: 4;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
  }
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

export default Buttons;
