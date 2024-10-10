import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailSection from './DetailsSection';


jest.mock('./assets/images/door.jpg', () => 'mocked-door-image');
jest.mock('./assets/images/table.jpg', () => 'mocked-table-image');

describe('DetailSection Component', () => {
    
  test('renders the first section with correct image, title, and description', () => {
    render(<DetailSection />);

    // Check if the first image (door) is rendered
    const firstImage = screen.getByAltText('Left');
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', 'mocked-door-image');

    // Check if the first section title is rendered
    const firstTitle = screen.getByText('We Ensure Your Comfort and Safety');
    expect(firstTitle).toBeInTheDocument();

    // Check if the first section description is rendered
    const firstDescription = screen.getByText(
      /At Ceylon Resort, we prioritize your well-being with our dedicated safe room service/i
    );
    expect(firstDescription).toBeInTheDocument();
  });

  test('renders the second section with correct image, title, and description', () => {
    render(<DetailSection />);

    // Check if the second image (table) is rendered
    const secondImage = screen.getByAltText('Right');
    expect(secondImage).toBeInTheDocument();
    expect(secondImage).toHaveAttribute('src', 'mocked-table-image');

    // Check if the second section title is rendered
    const secondTitle = screen.getByText('We provide Fast and Fabulous Dining Delights');
    expect(secondTitle).toBeInTheDocument();

    // Check if the second section description is rendered
    const secondDescription = screen.getByText(
      /At Ceylon Resort, indulge in a dining experience that's both swift and sensational/i
    );
    expect(secondDescription).toBeInTheDocument();
  });
});
