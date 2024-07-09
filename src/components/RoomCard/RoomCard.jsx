import React from "react";
import styled from "styled-components";
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import maximize from "./maximize.png";
import user from "./user.png";
import bed from "./bed.png";
import room from "./room.jpg";


const Div = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  max-width: 407px;
  flex-direction: column;
  font-size: 12px;
  color: #000;
  font-weight: 400;
  padding: 20px 34px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

`;

const Img = styled.img`
  aspect-ratio: 1.2;
  object-fit: auto;
  object-position: center;
  width: 100%;
`;

const Div2 = styled.div`
  text-align: center;
  align-self: center;
  margin-top: 25px;
  font: 24px Marcellus, serif;
`;

const Div3 = styled.div`
  display: flex;
  margin-top: 23px;
  gap: 20px;
`;

const Div4 = styled.div`
  background: linear-gradient(0deg, #fff 0%, #fff 100%),
    linear-gradient(0deg, #fff 0%, #fff 100%),
    linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
  display: flex;
  gap: 7px;
  white-space: nowrap;
  flex: 1;
  padding: 10px 0;
`;

const Img2 = styled.img`
  aspect-ratio: 1.1;
  object-fit: auto;
  object-position: center;
  width: 23px;
`;

const Div5 = styled.div`
  font-family: Marcellus, serif;
`;

const Div6 = styled.div`
  background: linear-gradient(0deg, #fff 0%, #fff 100%),
    linear-gradient(0deg, #fff 0%, #fff 100%),
    linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
  display: flex;
  gap: 6px;
  flex: 1;
  padding: 10px 0;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 21px;
`;

const Div7 = styled.div`
  font-family: Marcellus, sans-serif;
  margin: auto 0;
`;

const Div8 = styled.div`
  background: linear-gradient(0deg, #fff 0%, #fff 100%),
    linear-gradient(0deg, #fff 0%, #fff 100%),
    linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
  display: flex;
  gap: 4px;
  flex: 1;
  padding: 8px 4px;
`;

const Img4 = styled.img`
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 28px;
  align-self: start;
`;

const Div9 = styled.div`
  font-family: Marcellus, serif;
`;

const Div10 = styled.div`
  margin-top: 41px;
  font: 14px Marcellus, serif;
`;

const Div11 = styled.div`
  font-family: Marcellus, serif;
  text-decoration-line: underline;
  margin-top: 31px;
`;

function MyComponent() {
  return (
    <Div>
      <Img src={room} alt="Room Image" />
      <Div2>Standard Room</Div2>
      <Div3>
        <Div4>
          <Img2 src={maximize} alt={"Area icon"} />
          <Div5>80m2</Div5>
        </Div4>
        <Div6>
          {/* <PeopleAltOutlinedIcon/> */}
          <Img2 src={user} alt={"Guests icon"} />
          <Div7>2 Guests</Div7>
        </Div6>
        <Div8>
          {/* <KingBedOutlinedIcon/> */}
          <Img2 src={bed} alt={"Bed icon"} />
          <Div9>1 King Bed</Div9>
        </Div8>
      </Div3>
      <Div10>
        Experience ultimate comfort and relaxation in our Standard Room,
        featuring a breathtaking beach view. Perfect for unwinding after a
        sun-soaked day, this room provides everything you need for a delightful
        beachfront getaway.
      </Div10>
      <Div11>
        <span style={{ textDecoration: "underline" }}>Discover More</span> &gt;
      </Div11>
    </Div>
  );
}

export default MyComponent;
