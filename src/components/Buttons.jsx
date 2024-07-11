import React from 'react';
import styled from 'styled-components';

const Buttons = () => {
  return (
    <Div>
      <Div2>Booking</Div2>
      <Div2>Dining</Div2>
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

const Div2 = styled.div`
  font-family: Marcellus, serif;
  border-color: rgba(185, 157, 117, 1);
  border-style: solid;
  border-width: 3px;
  background-color: #53624e;
  padding: 10px 50px 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Buttons;
