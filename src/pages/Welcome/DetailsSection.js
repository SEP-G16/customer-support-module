import * as React from "react";
import styled from "styled-components";
import Door from "./Images/door.jpg";
import Table from "./Images/table.jpg";

function DetailSection() {
  return (
    <SectionContainer>
      {/* First Row - Left Section */}
      <ImageDescriptionRow>
        <Row>
          <ImgContainer>
            <Img src={Door} alt="Left" />
          </ImgContainer>
          <Description>
            <Title>We Ensure Your Comfort and Safety</Title>
            <Text>
            At Ceylon Resort, we prioritize your well-being with our dedicated safe room service. Our commitment to cleanliness and hygiene ensures that every room is thoroughly sanitized and prepared for your stay. Relax and enjoy your experience knowing that we uphold the highest standards of safety and cleanliness throughout your visit.
            </Text>
          </Description>
        </Row>
      </ImageDescriptionRow>

      {/* Second Row - Right Section */}
      <ImageDescriptionRow>
        <Row>
          <Description>
            <Title>We provide Fast and Fabulous Dining Delights</Title>
            <Text>
            At Ceylon Resort, indulge in a dining experience that's both swift and sensational. Our fast and fabulous service ensures you savor every moment without compromising on comfort or flavor. Whether you're dashing in for a bite or settling in for a relaxed meal, our inviting atmosphere and efficient service guarantee a memorable culinary journey.
            </Text>
          </Description>
          <ImgContainer>
            <Img src={Table} alt="Right" />
          </ImgContainer>
        </Row>
      </ImageDescriptionRow>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  background-color: #f3f3f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 60px;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const ImageDescriptionRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  max-width: 1150px;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  position: relative; /* Ensure relative positioning for absolute elements */
  width: 100%;
  max-width: 320px;
  padding: 20px;
  height: auto;
  overflow: hidden; /* Hide overflowing elements */
  border: 2px solid transparent; /* Initial transparent border */
  transition: border-color 0.3s ease; /* Smooth transition for border color */

  &:hover {
    border-color: rgba(185, 157, 117, 1); /* Gold border on hover */
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease; /* Smooth transition for image transform */

  ${ImgContainer}:hover & {
    transform: scale(1.1); /* Scale up on hover */
  }
`;

const Description = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-family: Marcellus, serif;
  font-size: 35px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Text = styled.p`
  font-family: Marcellus, serif;
  font-size: 18px;
  line-height: 1.6;
  margin-left: 20px;
`;

export default DetailSection;
