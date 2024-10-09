import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; // Import for extended matchers like toBeInTheDocument

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // This will check if the element is present
});
