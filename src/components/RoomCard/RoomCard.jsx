import React from 'react';
import styled from 'styled-components';
import maximize from './assets/images/maximize.png';
import user from './assets/images/user.png';
import bed from './assets/images/bed.png';

// Styled components for the room card
const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  width: 350px;  /* Fixed width */
  height: 500px; /* Fixed height */
  font-size: 12px;
  color: #000;
  font-weight: 400;
  padding: 10% 10%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  // border: 2px solid #53624e; /* Add a green border */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for scale and shadow */

  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4); /* Enhance shadow on hover */
  }
`;



const RoomImage = styled.img`
  width: 100%;
  height: 200px; /* Fixed height */
  object-fit: cover; /* Ensure the image covers the container */
`;

const RoomType = styled.div`
  text-align: center;
  margin-top: 25px;
  font-size: 24px;
  font-family: Marcellus, serif;
`;

const Price = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 17px;
  color: #53624e; /* A nice green color for price */
  font-family: Marcellus, serif;
  font-weight: bold;
`;


const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconImage = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
`;

const InfoText = styled.div`
  font-family: Marcellus, serif;
`;

const Description = styled.div`
  margin-top: 20px;
  font-family: Marcellus, serif;
`;


function RoomCard({
  roomImage,
  roomType,
  price,
  roomSize,
  guests,
  bedType,
  description,
}) {
  return (
    <CardContainer>
      {/* Room Image */}
      <RoomImage src={roomImage} alt="Room Image" />

      {/* Room Type */}
      <RoomType>{roomType}</RoomType>

      {/* Price */}
      <Price>{price}</Price>  {/* Display the price */}

      {/* Information Section */}
      <InfoSection>
        {/* Area */}
        <InfoBox>
          <IconImage src={maximize} alt="Area icon" />
          <InfoText>{roomSize}</InfoText>
        </InfoBox>

        {/* Guests */}
        <InfoBox>
          <IconImage src={user} alt="Guests icon" />
          <InfoText>{guests}</InfoText>
        </InfoBox>

        {/* Bed Type */}
        <InfoBox>
          <IconImage src={bed} alt="Bed icon" />
          <InfoText>{bedType}</InfoText>
        </InfoBox>
      </InfoSection>

      {/* Description */}
      <Description>{description}</Description>

    </CardContainer>
  );
}

export default RoomCard;
