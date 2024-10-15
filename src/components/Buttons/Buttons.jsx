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
  font-family: Marcellus, serif;
  gap: 55%; /* Percentage-based gap between buttons */
  font-size: 23px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  z-index: 4;
  align-items: center;
  flex-wrap: nowrap; /* Prevent buttons from stacking vertically */

  @media (max-width: 900px) {
    gap: 8%; /* Reduce gap slightly on smaller screens */
    justify-content: center; /* Center buttons on smaller screens */
  }

  @media (max-width: 600px) {
    gap: 5%; /* Minimal gap for very small screens */
    padding: 0 10px; /* Add padding around container */
  }
`;

const StyledLink = styled(Link)`
  font-family: Marcellus, serif;
  text-decoration: none;
  color: #fff;
  padding: 15px 60px;
  transition: color 0.3s ease;
  font-size: 26px;
  border: 4px solid rgba(185, 157, 117, 1);
  background-color: #53624e;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #B99D75;
  }

  @media (max-width: 900px) {
    padding: 10px 40px; /* Adjust padding for smaller screens */
    font-size: 22px;
  }

  @media (max-width: 600px) {
    padding: 8px 30px; /* Further reduce padding */
    font-size: 20px;
  }
`;

export default Buttons;
