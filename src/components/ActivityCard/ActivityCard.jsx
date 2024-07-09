import * as React from "react";
import styled from "styled-components";
import pool from "./pool.jpg";

function ActivityCard() {
  return (
    <Container>
      <Card>
        <Img src={pool} alt={"pool activities"} />
        <Title>Dive into Luxury With Our Infinity Pool</Title>
        <Description>
          Immerse yourself in crystal-clear waters with breathtaking views that
          stretch to the horizon. Relax poolside with a refreshing cocktail and
          let the tranquil ambiance whisk you away to paradise.
        </Description>
      </Card>
      <Overlay />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0px 40px 0px 40px;
  max-width: 300px; /* Adjust as needed */
  
  @media (max-width: 768px) {
    max-width: 200px; /* Adjust for smaller screens */
  }
  
  @media (max-width: 480px) {
    max-width: 150px; /* Adjust for extra small screens */
  }
`;

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #000;
  font-weight: 400;
  text-align: center;
  padding: 35px 13px;
  z-index: 1; /* Ensure card content is on top */
  
  @media (max-width: 768px) {
    padding: 25px 10px; /* Adjust padding for smaller screens */
  }
  
  @media (max-width: 480px) {
    padding: 20px 8px; /* Adjust padding for extra small screens */
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5px; /* Example border radius */
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 24px; /* Adjust font size */
  font-family: Marcellus, serif;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust font size for smaller screens */
    margin-top: 15px; /* Adjust margin for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 18px; /* Adjust font size for extra small screens */
    margin-top: 12px; /* Adjust margin for extra small screens */
  }
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 14px; /* Adjust font size */
  font-family: Marcellus, serif;

  @media (max-width: 768px) {
    font-size: 12px; /* Adjust font size for smaller screens */
    margin-top: 8px; /* Adjust margin for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* Adjust font size for extra small screens */
    margin-top: 6px; /* Adjust margin for extra small screens */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 90%;
  height: 63%;
  border: 2px solid rgba(185, 157, 117, 1); /* Gold border */
  z-index: 0; /* Ensure the overlay is behind the card content */

  @media (max-width: 768px) {
    top: 15px; /* Adjust top for smaller screens */
    height: 42%; /* Adjust height for smaller screens */
    width: 85%; /* Adjust width for smaller screens */
  }

`;

export default ActivityCard;
