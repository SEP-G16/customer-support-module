import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './about'; // Import the AboutUs page component

test('renders AboutUs page with correct content', () => {
    // Render the AboutUs component
    render(<AboutUs />);
  
    // Check if the About Us heading is rendered
    const aboutHeading = screen.getByRole('heading', { name: /about us/i });
    expect(aboutHeading).toBeInTheDocument();
  
    // Check if the "Welcome to Our Hotel" text is rendered
    const welcomeText = screen.getByRole('heading', { name: /welcome to our hotel/i });
    expect(welcomeText).toBeInTheDocument();
  
    // Check if the "Customer Rating" heading is rendered
    const ratingText = screen.getByRole('heading', { name: /customer rating/i });
    expect(ratingText).toBeInTheDocument();
  
    // Check if the rating stars are rendered correctly
    const ratingStars = screen.getByLabelText(/5 stars/i);  // Adjusted to match the actual aria-label
    expect(ratingStars).toBeInTheDocument();
  });
  
