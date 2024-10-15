import * as React from "react";
import styled from "styled-components";

function ActivityCard({ img, title, description }) {
  return (
    <Container>
      <Card>
        <ImgContainer>
        <Img src={img} alt={title} />
        </ImgContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
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
  overflow: hidden;
  
  @media (max-width: 768px) {
    max-width: 200px; /* Adjust for smaller screens */
  }
  
  @media (max-width: 480px) {
    max-width: 300px; /* Adjust for extra small screens */
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

const Overlay = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 90%;
  height: 62%;
  border: 2px solid rgba(185, 157, 117, 1); /* Gold border */
  z-index: 0; /* Ensure the overlay is behind the card content */

  @media (max-width: 768px) {
    top: 10px; /* Adjust top for smaller screens */
    height: 420px; /* Adjust height for smaller screens */
    width: 93%; /* Adjust width for smaller screens */
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 0px; /* Example border radius */
  object-fit: cover;

`;

const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 0px; /* Example border radius */
   transition: transform 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }
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

export default ActivityCard;
