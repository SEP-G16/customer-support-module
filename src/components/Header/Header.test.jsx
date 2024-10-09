import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Header from './Header'; // Adjust the path if necessary

describe('Header Component', () => {
  test('renders all navigation links with correct text and href attributes', () => {
    render(<Header />);

    // Check if all links are rendered and have the correct hrefs
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutUsLink = screen.getByRole('link', { name: /about us/i });
    const contactUsLink = screen.getByRole('link', { name: /contact us/i });
    const bookingLink = screen.getByRole('link', { name: /booking/i });
    const diningLink = screen.getByRole('link', { name: /dining/i });
    const reviewsLink = screen.getByRole('link', { name: /reviews/i });

    // Assert that all the links are present
    expect(homeLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
    expect(diningLink).toBeInTheDocument();
    expect(reviewsLink).toBeInTheDocument();

    // Assert href values
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutUsLink).toHaveAttribute('href', '/about-us');
    expect(contactUsLink).toHaveAttribute('href', '/contact');
    expect(bookingLink).toHaveAttribute('href', '/checkAvailability');
    expect(diningLink).toHaveAttribute('href', '/menu');
    expect(reviewsLink).toHaveAttribute('href', '/review');
  });

  test('renders the header title "Ceylon Resort"', () => {
    render(<Header />);
    
    const headerTitle = screen.getByText(/ceylon resort/i);
    
    // Check that the title is present
    expect(headerTitle).toBeInTheDocument();
  });

});
