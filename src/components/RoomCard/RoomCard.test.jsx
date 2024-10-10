// RoomCard.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomCard from './RoomCard';

// Mocking images used in RoomCard
jest.mock('./assets/images/maximize.png', () => 'maximize.png');
jest.mock('./assets/images/user.png', () => 'user.png');
jest.mock('./assets/images/bed.png', () => 'bed.png');

describe('RoomCard Component', () => {
  const mockProps = {
    roomImage: 'https://example.com/room.jpg',
    roomType: 'Deluxe Room',
    roomSize: '40 m²',
    guests: '2 Guests',
    bedType: 'King Bed',
    description: 'A luxurious room with all modern amenities.',
  };

  test('renders the room card with correct information', () => {
    render(<RoomCard {...mockProps} />);

    // Check if the room image is rendered
    const roomImage = screen.getByAltText('Room Image');
    expect(roomImage).toHaveAttribute('src', mockProps.roomImage);

    // Check if the room type is rendered
    const roomType = screen.getByText(mockProps.roomType);
    expect(roomType).toBeInTheDocument();

    // Check if room size is rendered
    const roomSize = screen.getByText(mockProps.roomSize);
    expect(roomSize).toBeInTheDocument();

    // Check if guests information is rendered
    const guests = screen.getByText(mockProps.guests);
    expect(guests).toBeInTheDocument();

    // Check if bed type is rendered
    const bedType = screen.getByText(mockProps.bedType);
    expect(bedType).toBeInTheDocument();

    // Check if the description is rendered
    const description = screen.getByText(mockProps.description);
    expect(description).toBeInTheDocument();
  });

  test('renders icons with correct alt texts', () => {
    render(<RoomCard {...mockProps} />);

    // Check if the area, guests, and bed icons are rendered
    const areaIcon = screen.getByAltText('Area icon');
    expect(areaIcon).toHaveAttribute('src', 'maximize.png');

    const guestsIcon = screen.getByAltText('Guests icon');
    expect(guestsIcon).toHaveAttribute('src', 'user.png');

    const bedIcon = screen.getByAltText('Bed icon');
    expect(bedIcon).toHaveAttribute('src', 'bed.png');
  });
});
