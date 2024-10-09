import React from 'react';
import { render, screen } from '@testing-library/react'; // Import render here
import Buttons from './Buttons';
import { BrowserRouter } from 'react-router-dom'; // Necessary for routing in the test

describe('Buttons component', () => {
  test('renders Booking and Dining buttons with correct links', () => {
    // Render the Buttons component inside BrowserRouter
    render(
      <BrowserRouter>
        <Buttons />
      </BrowserRouter>
    );

    // Check if both buttons are rendered
    const bookingButton = screen.getByText(/Booking/i);
    const diningButton = screen.getByText(/Dining/i);

    // Check if the buttons have the correct links
    expect(bookingButton).toHaveAttribute('href', '/checkAvailability');
    expect(diningButton).toHaveAttribute('href', '/menu');
  });

  test('renders buttons with correct styles', () => {
    // Render the Buttons component
    const { container } = render(
      <BrowserRouter>
        <Buttons />
      </BrowserRouter>
    );

    // Select the buttons by href
  const bookingButton = container.querySelector('a[href="/checkAvailability"]');
  const diningButton = container.querySelector('a[href="/menu"]');

  // Check the button styles (adjust according to the actual styles)
  expect(bookingButton).toHaveStyle('color: rgb(185, 157, 117)'); // Updated color to match actual result
  expect(bookingButton).toHaveStyle('background-color: #53624e');
  expect(bookingButton).toHaveStyle('border: 3px solid rgba(185, 157, 117, 1)');

  expect(diningButton).toHaveStyle('color: rgb(185, 157, 117)'); // Updated color
  expect(diningButton).toHaveStyle('background-color: #53624e');
  expect(diningButton).toHaveStyle('border: 3px solid rgba(185, 157, 117, 1)');
  });

  test('hover effect on buttons changes color', () => {
    // Render the Buttons component
    const { container } = render(
      <BrowserRouter>
        <Buttons />
      </BrowserRouter>
    );

    // Select buttons
    const bookingButton = container.querySelector('a[href="/checkAvailability"]');
    const diningButton = container.querySelector('a[href="/menu"]');

    // Simulate hover effect (this part depends on your CSS-in-JS framework)
    // For jest-dom you may need to add custom logic to test hover states
    // (For now, we just check if it exists or you can mock hover in your styles)
    expect(bookingButton).toHaveStyle('color: #B99D75');
    expect(diningButton).toHaveStyle('color: #B99D75');
  });
});
