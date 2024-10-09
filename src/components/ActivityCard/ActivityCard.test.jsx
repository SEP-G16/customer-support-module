import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matchers like "toBeInTheDocument"
import ActivityCard from './ActivityCard';

// Define mock props
const mockProps = {
  img: 'test-image.jpg',
  title: 'Test Activity',
  description: 'This is a test description for the activity.',
};

test('renders ActivityCard with correct content', () => {
  // Render the ActivityCard component with the mock props
  render(<ActivityCard {...mockProps} />);

  // Check if the image is rendered with the correct src and alt text
  const imgElement = screen.getByAltText(mockProps.title);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', mockProps.img);

  // Check if the title is rendered correctly
  const titleElement = screen.getByText(mockProps.title);
  expect(titleElement).toBeInTheDocument();

  // Check if the description is rendered correctly
  const descriptionElement = screen.getByText(mockProps.description);
  expect(descriptionElement).toBeInTheDocument();

});

