import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './Booking'; // Adjust this path to where BookingPage is located
import AxiosInstance from '../../axios.config'; // Mock Axios

// Mock the AxiosInstance to avoid actual API calls during testing
jest.mock('../../axios.config', () => ({
  post: jest.fn(),
}));

describe('BookingPage Component', () => {
  const mockNavigate = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

  test('renders the form fields correctly', () => {
    renderComponent();
    
    // Check if the input fields are rendered
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Check-in Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Check-out Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Room Count/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Adults/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Children/i)).toBeInTheDocument();
  });


//   test('submits the form and shows success popup', async () => {
//     AxiosInstance.post.mockResolvedValueOnce({ status: 200 });
  
//     renderComponent();
  
//     // Simulate filling out the form
//     fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
//     fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '123456789' } });
//     fireEvent.change(screen.getByLabelText(/Check-in Date/i), { target: { value: '2024-10-10' } });
//     fireEvent.change(screen.getByLabelText(/Check-out Date/i), { target: { value: '2024-10-15' } });
//     fireEvent.change(screen.getByLabelText(/Room Count/i), { target: { value: '1' } });
//     fireEvent.change(screen.getByLabelText(/Number of Adults/i), { target: { value: '2' } });
//     fireEvent.change(screen.getByLabelText(/Number of Children/i), { target: { value: '0' } });
  
//     // Simulate form submission
//     fireEvent.click(screen.getByText(/Book Now/i));
  
//     // Log the Axios call to check parameters
//     console.log(AxiosInstance.post.mock.calls);
  
//     // Wait for the API call and check if the popup appears
//     await waitFor(() => {
//       expect(AxiosInstance.post).toHaveBeenCalledWith('/api/booking/temp/add', expect.any(Object));
//       expect(screen.getByText(/Booking Confirmed/i)).toBeInTheDocument();
//     });
//   });

//   test('displays error for invalid fields', async () => {
//     renderComponent();
  
//     // Simulate form submission without filling any fields
//     const submitButton = screen.getByText(/Book Now/i);
//     fireEvent.click(submitButton);
  
//     const nameInput = screen.getByLabelText(/Name/i);
    
//     // Check if the name input is invalid (HTML5 validation)
//     await waitFor(() => {
//       expect(nameInput).toBeInvalid();
//       expect(nameInput.validationMessage).toBe('Please fill out this field.');
//     });
//   });
  
  
  
});
