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
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) {
    height: 80vh; /* Adjust for smaller screens to prevent overlap */
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
  z-index: 1; /* Image below other elements */
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
    200deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0.3) 20%,
    rgba(0, 0, 0, 0.3) 80%,
    rgba(0, 0, 0, 0.85) 100%
  );
  z-index: 2; /* Overlay above image */
`;

const TextContainer = styled.div`
  position: relative;
  max-width: 1000px;
  text-align: center;
  margin-top: 40px; /* Increase the margin to move the content down */
  z-index: 3;
  
  @media (max-width: 768px) {
    margin-top: 60px; /* Move content further down on smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Smaller font size for small screens */
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15%; /* Adjust the position */
  display: flex;
  width: 600px;
  max-width: 100%;
  gap: 10px;
  z-index: 4;

  @media (max-width: 768px) {
    bottom: 15%; /* Adjust for smaller screens */
    font-size: 28px;
    gap: 8px;
  }


  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: normal;
    justify-content: center;
  }

  // @media (max-width: 768px) {
  //   bottom: 30px;
  //   font-size: 28px;
  //   gap: 8px;
  // }

  @media (max-width: 480px) {
    font-size: 22px;
    bottom: 20px;
    flex-direction: column;
    align-items: center;
    width: auto;
    gap: 5px;
  }
`;

export default ImageBox;