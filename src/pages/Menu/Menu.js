import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Stack,Typography } from '@mui/material';
import Header from '../../components/Header';
import ImageBox from '../../components/ImageBox/ImageBox';
import MenuCard from '../../components/MenuCard';
import Footer from '../../components/Footer';
import Dining from './dining.jpg';
import MealCard from "../../components/MealCard/MealCard";
import pizza from './ChickenPizza.jpg';
import pepperonipizza from './pepperoniPizza.jpg';
import veggiepizza from './veggiepizza.jpg';
import steak from './steak.jpg';
import spaghetti from './spaghetti.jpg';
import alfredo from './alfredo.jpg';
import chococake from './chococake.jpg';
import cheesecake from './cheesecake.jpg';
import icecream from './icecream.jpg';
import coffee from './coffee.jpg';
import Tea from './Tea.jpeg';
import juice from './juice.jpg';
import ceasar from './ceasar.jpg';
import tomato from './tomato.jpeg';
import greek from './greek.jpeg';
import caprese from './caprese.jpg';
import chickennoodle from './chickennoodle.jpg';
import minestrone from './minestrone.jpeg';

const CustomTextContent = () => {
  return (
      <Stack spacing={2}>
        <Typography variant="h1" fontFamily="Marcellus, serif" style={{ color: 'white', padding: '0px', marginBottom: '0px', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",}}>
        Ultimate Dining Experience
        </Typography>
       </Stack>
  );
};

const MenuPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 800 });


  return (
    <Container>
      <Header />
      <ImageBox
        imageSrc={Dining}
        TextContentComponent={<CustomTextContent />}
      />
      <MenuContainer direction={isDesktop ? 'row' : 'column'}>
        <MenuCard title="Appetizers">
          <MealCard foodName="Chicken Pizza" imageSrc={pizza} price={12} description="Delicious chicken pizza with a crispy crust." />
          <MealCard foodName="Pepperoni Pizza" imageSrc={pepperonipizza} price={14} description="Classic pepperoni pizza with a tangy sauce." />
          <MealCard foodName="Veggie Pizza" imageSrc={veggiepizza} price={10} description="Healthy veggie pizza loaded with fresh vegetables." />
        </MenuCard>
        <MenuCard title="Main Courses">
          <MealCard foodName="Grilled Steak" imageSrc={steak} price={20} description="Juicy grilled steak with a side of vegetables." />
          <MealCard foodName="Spaghetti Bolognese" imageSrc={spaghetti} price={15} description="Traditional spaghetti with rich bolognese sauce." />
          <MealCard foodName="Chicken Alfredo" imageSrc={alfredo} price={18} description="Creamy chicken alfredo pasta." />
        </MenuCard>
      </MenuContainer>


      <MenuContainer direction={isDesktop ? 'row' : 'column'}>
        <MenuCard title="Desserts">
          <MealCard foodName="Chocolate Cake" imageSrc={chococake} price={8} description="Rich chocolate cake with a molten center." />
          <MealCard foodName="Cheesecake" imageSrc={cheesecake} price={7} description="Creamy cheesecake with a graham cracker crust." />
          <MealCard foodName="Ice Cream Sundae" imageSrc={icecream} price={6} description="Classic ice cream sundae with toppings." />
        </MenuCard>
        <MenuCard title="Beverages">
          <MealCard foodName="Coffee" imageSrc={coffee} price={3} description="Freshly brewed coffee." />
          <MealCard foodName="Tea" imageSrc={Tea} price={2} description="A selection of herbal teas." />
          <MealCard foodName="Orange Juice" imageSrc={juice} price={4} description="Freshly squeezed orange juice." />
        </MenuCard>
      </MenuContainer>

      <MenuContainer direction={isDesktop ? 'row' : 'column'}>
        <MenuCard title="Salads">
          <MealCard foodName="Caesar Salad" imageSrc={ceasar} price={8} description="Crisp romaine lettuce with Caesar dressing." />
          <MealCard foodName="Greek Salad" imageSrc={greek} price={9} description="Fresh vegetables with feta cheese." />
          <MealCard foodName="Caprese Salad" imageSrc={caprese} price={10} description="Tomatoes, mozzarella, and basil." />
        </MenuCard>
        <MenuCard title="Soups">
          <MealCard foodName="Tomato Soup" imageSrc={tomato} price={5} description="Rich and creamy tomato soup." />
          <MealCard foodName="Chicken Noodle Soup" imageSrc={chickennoodle} price={6} description="Classic chicken noodle soup." />
          <MealCard foodName="Minestrone Soup" imageSrc={minestrone} price={7} description="Hearty Italian vegetable soup." />
        </MenuCard>
      </MenuContainer>



      
  
     
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const MenuContainer = styled(Stack)`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  gap: 20px; /* Adjust the gap between MenuCards */
  width: 100%;
  max-width: 1400px;
  margin-top: 20px;
  border: 1px solid green;
  overflow-x: hidden;

  @media (max-width: 800px) {
    flex-direction: column; /* Display items in a column on smaller screens */
  }
`;

const Img = styled.img`
  aspect-ratio: 1.1;
  object-fit: auto;
  object-position: center;
  width: 75px;
`;

export default MenuPage;