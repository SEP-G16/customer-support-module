import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewCard from './ReviewCard'; // Adjust the path to your component

jest.mock('./assets/images/profile.png', () => 'profile.png');

describe('ReviewCard Component', () => {
  const mockData = {
    name: 'John Doe',
    months: 3,
    feedback: 'Great experience, highly recommend!',
  };

  test('renders the user name, months ago, and feedback correctly', () => {
    render(<ReviewCard name={mockData.name} months={mockData.months} feedback={mockData.feedback} />);

    // Check if the user's name is rendered
    expect(screen.getByText(mockData.name)).toBeInTheDocument();

    // Check if the correct "months ago" text is rendered
    expect(screen.getByText(`${mockData.months} months ago`)).toBeInTheDocument();

    // Check if the feedback text is rendered
    expect(screen.getByText(mockData.feedback)).toBeInTheDocument();
  });

  test('renders the profile image correctly', () => {
    render(<ReviewCard name={mockData.name} months={mockData.months} feedback={mockData.feedback} />);

    // Check if the profile image is rendered with the correct alt text
    const profileImage = screen.getByAltText('user');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'profile.png');
  });
});
