import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AvailabilityBar from "./AvailabilityBar";
import { BrowserRouter as Router } from "react-router-dom";
import AxiosInstance from "../../axios.config";

// Mock the AxiosInstance properly for API requests
jest.mock("../../axios.config", () => ({
  AxiosInstance: {
    get: jest.fn(),  // Mock the AxiosInstance.get method
  },
}));

test("renders the form correctly", () => {
  render(
    <Router>
      <AvailabilityBar />
    </Router>
  );

  // Check that the required elements are rendered
  expect(screen.getByLabelText(/check-in/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/check-out/i)).toBeInTheDocument();
  expect(screen.getByText(/check availability/i)).toBeInTheDocument();
});

// // Test for successful form submission and showing room availability
// test("submits form and shows room availability", async () => {
//   // Mock the Axios call to return some room availability data
//   AxiosInstance.get.mockResolvedValueOnce({
//     data: [
//       { roomTypeId: 1, roomCount: 2 }, // Standard rooms
//       { roomTypeId: 2, roomCount: 1 }, // Deluxe rooms
//       { roomTypeId: 3, roomCount: 0 }, // Suite rooms (unavailable)
//     ],
//   });

//   render(
//     <Router>
//       <AvailabilityBar />
//     </Router>
//   );

//   // Simulate user input for Check-In and Check-Out dates
//   fireEvent.change(screen.getByLabelText(/check-in/i), {
//     target: { value: "2024-10-10" },
//   });
//   fireEvent.change(screen.getByLabelText(/check-out/i), {
//     target: { value: "2024-10-15" },
//   });

//   // Submit the form
//   fireEvent.click(screen.getByText(/check availability/i));

//   // Wait for the popup dialog to be rendered
//   await waitFor(() => {
//     expect(screen.getByText(/room availability/i)).toBeInTheDocument();
//   });

//   // Check the room availability in the dialog
//   expect(screen.getByText(/Standard rooms/)).toBeInTheDocument();
//   expect(screen.getByText(/2 rooms available/)).toBeInTheDocument();
//   expect(screen.getByText(/Deluxe rooms/)).toBeInTheDocument();
//   expect(screen.getByText(/1 room available/)).toBeInTheDocument();
//   expect(screen.queryByText(/Suite rooms/)).toBeNull(); // Suite rooms are not available
// });

// // Test for handling API failure gracefully
// test("handles API failure gracefully", async () => {
//   // Mock the Axios call to simulate an error
//   AxiosInstance.get.mockRejectedValueOnce(new Error("API Error"));

//   render(
//     <Router>
//       <AvailabilityBar />
//     </Router>
//   );

//   // Simulate user input for Check-In and Check-Out dates
//   fireEvent.change(screen.getByLabelText(/check-in/i), {
//     target: { value: "2024-10-10" },
//   });
//   fireEvent.change(screen.getByLabelText(/check-out/i), {
//     target: { value: "2024-10-15" },
//   });

//   // Submit the form
//   fireEvent.click(screen.getByText(/check availability/i));

//   // Wait for the error alert to appear
//   await waitFor(() => {
//     expect(screen.getByText(/an unexpected error occurred/i)).toBeInTheDocument();
//   });

//   // Optionally, ensure that no room availability data is shown in case of failure
//   expect(screen.queryByText(/room availability/i)).toBeNull();
// });
