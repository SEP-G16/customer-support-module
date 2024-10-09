import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from './Reviews'; // Adjust the path to your component
import ReviewCard from '../ReviewCard/ReviewCard'; // Import the mock for ReviewCard

// Mock the ReviewCard component to avoid rendering its actual implementation
jest.mock('../ReviewCard/ReviewCard', () => () => <div data-testid="mock-review-card"></div>);

describe('Reviews Component', () => {
  test('renders the review header and black line correctly', () => {
    render(<Reviews />);

    // Check if the header text "Reviews" is rendered
    expect(screen.getByText('Reviews')).toBeInTheDocument();

    // Check if the black line is rendered (using its background color to identify it)
    const blackLine = screen.getByTestId('black-line');
    expect(blackLine).toHaveStyle('background-color: black');
  });

  test('renders three ReviewCard components', () => {
    render(<Reviews />);

    // Check if three ReviewCard components are rendered
    const reviewCards = screen.getAllByTestId('mock-review-card');
    expect(reviewCards).toHaveLength(3);
  });
});
