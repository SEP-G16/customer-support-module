import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Review from './Review';
import { AxiosInstance } from '../../axios.config';
import '@testing-library/jest-dom';

// Mocking AxiosInstance for API calls
jest.mock('../../axios.config', () => ({
  AxiosInstance: {
    post: jest.fn(),
    get: jest.fn(),
  },
}));

// Mocking the ReviewCard component
jest.mock('../../components/ReviewCard/ReviewCard', () => () => (
  <div data-testid="review-card">Review Card</div>
));

describe('Review Component', () => {
    test('renders reviews correctly', async () => {
        // Mocking the Axios GET request to return dummy reviews data
        AxiosInstance.get.mockResolvedValueOnce({
          data: [
            { name: 'John Doe', months: 3, feedback: 'Great service!' },
            { name: 'Jane Smith', months: 1, feedback: 'Very comfortable stay!' }
          ]
        });
      
        render(<Review />);
      
        // Check if the reviews section is rendered
        console.log('Waiting for reviews to render...');
      
        // Wait for the element to be rendered asynchronously
        await waitFor(() => {
          // Check if the "Reviews" section and the feedbacks are rendered correctly
          return (
            expect(screen.getByRole('heading', { name: 'Guest Reviews' })).toBeInTheDocument() &&
            expect(screen.getByText(/John Doe/i)).toBeInTheDocument() &&
            expect(screen.getByText(/Great service!/i)).toBeInTheDocument() &&
            expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument() &&
            expect(screen.getByText(/Very comfortable stay!/i)).toBeInTheDocument()
          );
        });
      
        console.log('Reviews section rendered successfully!');
      });
      
  test('submits the form and sends the data', async () => {
    render(<Review />);

    // Simulate filling out the form
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Your Feedback/i), { target: { value: 'Great service!' } });

    // Mock Axios POST request response
    AxiosInstance.post.mockResolvedValueOnce({ status: 200 });

    // Simulate form submission
    fireEvent.click(screen.getByText(/Submit Your Feedback/i));

    // Check if the POST request was made with the correct data
    await waitFor(() => {
      expect(AxiosInstance.post).toHaveBeenCalledWith(
        '/api/review/temp/add',
        expect.objectContaining({
          name: 'John Doe',
          feedback: 'Great service!',
        })
      );
    });
  });

  test('displays fetched reviews', async () => {
    // Mocking Axios GET response
    AxiosInstance.get.mockResolvedValueOnce({
      data: [
        { name: 'John Doe', date: '2024-10-01', feedback: 'Great stay!' },
        { name: 'Jane Doe', date: '2024-10-02', feedback: 'Loved it!' },
      ],
    });

    render(<Review />);

    // Wait for the reviews to be fetched and displayed
    await waitFor(() => {
      expect(screen.getAllByTestId('review-card').length).toBeGreaterThan(0);
    });
  });

  test('shows error when submitting empty form fields', async () => {
    render(<Review />);
  
    // Try submitting an empty form
    fireEvent.click(screen.getByText(/Submit Your Feedback/i));
  
    // Check for required validation errors
    await waitFor(() => {
      const nameInput = screen.getByRole('textbox', { name: 'Your Name' });
      const feedbackInput = screen.getByRole('textbox', { name: 'Your Feedback' });
  
      const nameError = nameInput.closest('.MuiFormControl-root').querySelector('.MuiFormHelperText-root');
      const feedbackError = feedbackInput.closest('.MuiFormControl-root').querySelector('.MuiFormHelperText-root');
  
      expect(nameError).toHaveClass('Mui-error');
      expect(feedbackError).toHaveClass('Mui-error');
    });
  });

//   test('handles API errors when fetching reviews', async () => {
//     // Mocking Axios GET error response
//     AxiosInstance.get.mockRejectedValueOnce(new Error('Failed to fetch reviews'));

//     render(<Review />);

//     // Check if reviews loading is handled gracefully (e.g., showing an empty state or error message)
//     await waitFor(() => {
//       expect(screen.queryByTestId('review-card')).toBeNull();
//       expect(screen.getByText(/Failed to load reviews/i)).toBeInTheDocument();
//     });
//   });

//   test('handles API errors when submitting a review', async () => {
//     render(<Review />);
  
//     // Simulate filling out the form
//     fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText(/Your Feedback/i), { target: { value: 'Great service!' } });
  
//     // Mock Axios POST error response
//     AxiosInstance.post.mockRejectedValueOnce(new Error('Failed to submit review'));
  
//     // Simulate form submission
//     fireEvent.click(screen.getByText(/Submit Your Feedback/i));
  
//     // Check if an error message is displayed
//     await waitFor(() => {
//       screen.debug(); // Debugging line
//       expect(screen.getByText(/Failed to submit your feedback/i)).toBeInTheDocument();
//     });
//   });
  
});
