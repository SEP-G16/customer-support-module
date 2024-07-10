import * as React from "react";
import styled from "styled-components";
import MealCard from "./MealCard/MealCard"; // Import the MealCard component


function MenuCard({title, children}) {
  return (
    <MenuContainer>
      <MenuHeader>
        <GoldLine />
        <HeaderText>{title}</HeaderText>
        <GoldLine />
      </MenuHeader>
      <MealCardsContainer>
        {children}
      </MealCardsContainer>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const GoldLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: gold;
`;

const HeaderText = styled.span`
  margin: 10px 0;
  color: #000;
  font-family: 'Marcellus, serif';
  font-size: 24px;
`;

const MealCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; /* Adjusted gap between MealCards */
`;

export default MenuCard;