import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer'; // Adjust the import path to where your Footer component is located
import '@testing-library/jest-dom'; // for the 'toBeInTheDocument', 'toHaveStyle' matchers

describe('Footer Component', () => {
  test('renders footer links correctly', () => {
    render(<Footer />);

    // Test Quick Links
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

    // Test Operating Hours
    expect(screen.getByText(/MON - SAT - 8AM TO 6PM/i)).toBeInTheDocument();
    expect(screen.getByText(/SUN - 8AM TO 2PM/i)).toBeInTheDocument();

    // Test Contact Information
    expect(screen.getByText(/Telephone:/i)).toBeInTheDocument();
    expect(screen.getByText(/Reservations:/i)).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
  });

  test('renders social media links with correct icons', () => {
    render(<Footer />);
  
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
  
    // Ensure each social media link is present
    expect(facebookLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  });

  test('hover effect on social media links works correctly', () => {
    render(<Footer />);
  
    const facebookIcon = screen.getByRole('link', { name: /facebook/i });
    const twitterIcon = screen.getByRole('link', { name: /twitter/i });
    const instagramIcon = screen.getByRole('link', { name: /instagram/i });
  
    // Simulate hover
    fireEvent.mouseOver(facebookIcon);
    fireEvent.mouseOver(twitterIcon);
    fireEvent.mouseOver(instagramIcon);
  
    // Check hover effect (scale transform applied)
    expect(facebookIcon).toHaveStyle('transform: scale(1.2)');
    expect(twitterIcon).toHaveStyle('transform: scale(1.2)');
    expect(instagramIcon).toHaveStyle('transform: scale(1.2)');
  });

  test('renders email link correctly with correct hover effect', () => {
    render(<Footer />);

    const emailLink = screen.getByText(/reservations@hotelceylon.com/i);
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:reservations@hotelceylon.com');

    // Check hover effect
    fireEvent.mouseOver(emailLink);
    expect(emailLink).toHaveStyle('color: rgba(183, 153, 91, 1)');
    expect(emailLink).toHaveStyle('text-decoration: underline');
  });

  test('footer has correct background color', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('div');
    expect(footer).toHaveStyle('background-color: #000');
  });
});
