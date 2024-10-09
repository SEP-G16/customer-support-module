import React from 'react';
import styled from 'styled-components';

const ImageBox = ({ imageSrc, TextContentComponent, ButtonComponent }) => {
  return (
    <Container>
      <Image src={imageSrc} alt="Background" />
      <TextContainer>{TextContentComponent}</TextContainer>
      {ButtonComponent && <ButtonContainer>{ButtonComponent}</ButtonContainer>}
      <GradientOverlay />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Ensuring the container takes full viewport height */
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  overflow: hidden; /* Ensure the gradient overlay doesn't overflow */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  z-index: 1; /* Ensure the image is above the gradient overlay */
`;

const GradientOverlay = styled.div.attrs(() => ({
  'data-testid': 'gradient-overlay',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.85) 100%
  );
  z-index: 2; /* Ensure the gradient overlay is above the image */
`;

const TextContainer = styled.div`
  position: relative;
  max-width: 1000px; /* Example maximum width */
  padding: 0px;
  text-align: center;
  margin-top: 20px; /* Adjust the margin as needed */
  margin-bottom: 10px; /* Adjust the margin as needed */
  z-index: 3; /* Ensure the text is above both the image and gradient overlay */
  @media (max-width: 768px) {
    padding: 50px; /* Adjust padding for smaller screens */
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px; /* Adjust the position as needed */
  display: flex;
  width: 600px;
  max-width: 100%;
  gap: 10px;
  font-size: 32px;
  white-space: nowrap;
  justify-content: space-between;
  margin: 0 28px;
  z-index: 4;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
  }
`;

export default ImageBox;
