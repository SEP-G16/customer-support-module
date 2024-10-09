import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

jest.mock('../../components/ImageBox/ImageBox', () => ({ imageSrc, TextContentComponent, ButtonComponent }) => (
  <div>
    <img src={imageSrc} alt="Welcome" />
    {TextContentComponent}
    {ButtonComponent}
  </div>
));

jest.mock('../../components/Buttons/Buttons', () => () => <button>Explore</button>);
jest.mock('./ImageSection', () => () => <div>ImageTextSection content</div>);
jest.mock('./DetailsSection', () => () => <div>DetailSection content</div>);
jest.mock('./Chatbot', () => () => <div>ChatBot component</div>);

test('renders Home component correctly', () => {
  render(<Home />);

  // Check if the welcome text is rendered
  const welcomeText = screen.getByText(/WELCOME TO CEYLON RESORT/i);
  expect(welcomeText).toBeInTheDocument();
  expect(welcomeText).toHaveStyle('color: white');

  // Check if the image is rendered
  const image = screen.getByAltText(/Welcome/i);
  expect(image).toBeInTheDocument();

  // Check if the button is rendered
  const exploreButton = screen.getByText(/Explore/i);
  expect(exploreButton).toBeInTheDocument();

  // Check if the ImageTextSection content is rendered
  const imageTextSection = screen.getByText(/ImageTextSection content/i);
  expect(imageTextSection).toBeInTheDocument();

  // Check if the DetailSection content is rendered
  const detailSection = screen.getByText(/DetailSection content/i);
  expect(detailSection).toBeInTheDocument();

  // Check if the ChatBot component is rendered
  const chatBotComponent = screen.getByText(/ChatBot component/i);
  expect(chatBotComponent).toBeInTheDocument();
});
