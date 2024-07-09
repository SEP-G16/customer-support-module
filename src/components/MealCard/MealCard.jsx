import * as React from "react";
import styled from "styled-components";


function MealCard({ foodName, imageSrc, price, description }) {
  return (
    <Div>
      <Div2>
        <Column>
          <Img src={imageSrc} alt={foodName} />
        </Column>
        <Column2>
          <Div3>
            <Div4>
              <span style={{ letterSpacing: '1px', fontFamily: 'Marcellus, serif', fontSize: 20 }}>
                {foodName}..............................................${price}
              </span>
            </Div4>
            <Div5>{description}</Div5>
          </Div3>
        </Column2>
      </Div2>
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  max-width: 650px;
  min-height: 110px;
  margin: 10px auto; /* Adjusted margin */
  display: flex;
  justify-content: center;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  flex: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  flex: 1;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-weight: 400;
  font-family: 'Marcellus, serif';
  margin-top: 35px;
  margin-bottom: 10px;
  padding: 0 20px;
`;

const Div4 = styled.div`
  color: #000;
`;

const Div5 = styled.div`
  color: #565656;
  margin-top: 14px;
  font: 14px 'Marcellus', serif;
`;

export default MealCard;