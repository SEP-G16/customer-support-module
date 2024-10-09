// AvailabilityBar.test.jsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AvailabilityBar from "./AvailabilityBar"; // Adjust the import path as needed
import { AxiosInstance } from "../../axios.config"; // Import Axios instance

jest.mock("../../axios.config"); // Mock the Axios instance

describe("AvailabilityBar", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    AxiosInstance.get.mockClear();
  });

  test("renders the availability form correctly", () => {
    render(<AvailabilityBar />);

    // Check if input fields are present
    expect(screen.getByLabelText(/Check-In/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Check-Out/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Check Availability/i })).toBeInTheDocument();
  });

  test("submits form and shows available rooms", async () => {
    // Mock the Axios GET request to return dummy room availability data
    AxiosInstance.get.mockResolvedValueOnce({
      data: [
        { roomTypeId: 1, roomCount: 5 }, // Standard rooms
        { roomTypeId: 2, roomCount: 3 }, // Deluxe rooms
        { roomTypeId: 3, roomCount: 0 }, // Suite rooms (unavailable)
      ],
    });

    render(<AvailabilityBar />);

    // Simulate user input for check-in and check-out dates
    fireEvent.change(screen.getByLabelText(/Check-In/i), {
      target: { value: new Date().toISOString().split("T")[0] },
    });
    fireEvent.change(screen.getByLabelText(/Check-Out/i), {
      target: { value: new Date(Date.now() + 86400000).toISOString().split("T")[0] }, // +1 day
    });

    // Click the "Check Availability" button
    fireEvent.click(screen.getByRole("button", { name: /Check Availability/i }));

    // Wait for the dialog to show
    await waitFor(() => {
      expect(screen.getByText(/Room Availability/i)).toBeInTheDocument();
      expect(screen.getByText(/Standard rooms/i)).toBeInTheDocument();
      expect(screen.getByText(/5 rooms available/i)).toBeInTheDocument();
      expect(screen.getByText(/Deluxe rooms/i)).toBeInTheDocument();
      expect(screen.getByText(/3 rooms available/i)).toBeInTheDocument();
      expect(screen.getByText(/Suite rooms/i)).toBeInTheDocument();
      expect(screen.getByText(/0 rooms available/i)).toBeInTheDocument();
    });
  });

  test("shows an alert when rooms are not available", async () => {
    // Mock the Axios GET request to return zero available rooms
    AxiosInstance.get.mockResolvedValueOnce({
      data: [
        { roomTypeId: 1, roomCount: 0 }, // Standard rooms (unavailable)
        { roomTypeId: 2, roomCount: 0 }, // Deluxe rooms (unavailable)
        { roomTypeId: 3, roomCount: 0 }, // Suite rooms (unavailable)
      ],
    });

    render(<AvailabilityBar />);

    // Simulate user input for check-in and check-out dates
    fireEvent.change(screen.getByLabelText(/Check-In/i), {
      target: { value: new Date().toISOString().split("T")[0] },
    });
    fireEvent.change(screen.getByLabelText(/Check-Out/i), {
      target: { value: new Date(Date.now() + 86400000).toISOString().split("T")[0] }, // +1 day
    });

    // Mock the global alert function
    global.alert = jest.fn();

    // Click the "Check Availability" button
    fireEvent.click(screen.getByRole("button", { name: /Check Availability/i }));

    // Wait for the alert to be called
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith("Rooms are not available for the selected dates.");
    });
  });
});
