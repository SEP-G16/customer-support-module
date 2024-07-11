import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Img0 from "./Images/carousel-img-0.jpg";
import Img1 from "./Images/carousel-img-1.jpg";
import Img2 from "./Images/carousel-img-2.jpg";
import Img3 from "./Images/carousel-img-3.jpg";

const SectionContainer = styled.div`
  padding: 50px;
  width: 100%;
  height: 800px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 70px;
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  paddingTop: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 267px;
  height: 450px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTextSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <Typography variant="h2" sx={{ fontFamily: 'Marcellus, serif', marginBottom: '30px' }}>
          Embrace the Elegance
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'Marcellus, serif' }}>
          "The perfect blend of luxury and comfort, where every moment is crafted to indulge your senses and elevate your stay to new heights"
        </Typography>
      </TextContainer>
      <ImagesRow>
        <ImageWrapper>
          <img src={Img0} alt="Image0" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={Img1} alt="Image1" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={Img2} alt="Image2" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={Img3} alt="Image3" />
        </ImageWrapper>
      </ImagesRow>
    </SectionContainer>
  );
};

export default ImageTextSection;
