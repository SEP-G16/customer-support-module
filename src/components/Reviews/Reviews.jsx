import * as React from "react";
import styled from "styled-components";
import ReviewCard from "../ReviewCard/ReviewCard"; // Import the ReviewCard component

function Reviews({Review}) {
  return (
    <ReviewContainer>
      <ReviewHeader>
        <HeaderText>Reviews</HeaderText>
        <BlackLine data-testid="black-line" />
      </ReviewHeader>
      <ReviewCardsContainer>
        <ReviewCard data-testid="mock-review-card" />
        <ReviewCard data-testid="mock-review-card" />
        <ReviewCard data-testid="mock-review-card" />
      </ReviewCardsContainer>
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const BlackLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;

const HeaderText = styled.span`
  margin: 0px 0;
  color: #000;
  font-family: 'Marcellus, serif';
  font-size: 24px;
  text-align: center;
`;

const ReviewCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; /* Adjusted gap between MealCards */
`;

export default Reviews;
