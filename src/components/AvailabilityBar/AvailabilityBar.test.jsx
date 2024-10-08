import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AvailabilityBar from "./AvailabilityBar";
import { MemoryRouter } from "react-router-dom";
import { AxiosInstance } from "../../axios.config";
import "@testing-library/jest-dom/extend-expect";

// Mock AxiosInstance
jest.mock("../../axios.config", () => ({
  AxiosInstance: {
    get: jest.fn(),
  },
}));

describe("AvailabilityBar", () => {
  const mockRoomAvailability = {
    "Standard rooms": { roomTypeId: 1, roomCount: 5 },
    "Deluxe rooms": { roomTypeId: 2, roomCount: 3 },
    "Suite rooms": { roomTypeId: 3, roomCount: 0 }, // No rooms available for Suite
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly and submits form", async () => {
    render(
      <MemoryRouter>
        <AvailabilityBar />
      </MemoryRouter>
    );

    // Check if the form is rendered with correct labels
    expect(screen.getByLabelText(/Check-In/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Check-Out/i)).toBeInTheDocument();

    // Mocking the API response
    AxiosInstance.get.mockResolvedValueOnce([mockRoomAvailability]);

    // Input dates for check-in and check-out
    const checkInInput = screen.getByLabelText(/Check-In/i);
    const checkOutInput = screen.getByLabelText(/Check-Out/i);

    fireEvent.change(checkInInput, { target: { value: "2024-10-10" } });
    fireEvent.change(checkOutInput, { target: { value: "2024-10-12" } });

    // Simulate form submission
    const checkAvailabilityButton = screen.getByText(/Check Availability/i);
    fireEvent.click(checkAvailabilityButton);

    // Wait for API call to finish and popup to appear
    await waitFor(() => expect(screen.getByText(/Room Availability/i)).toBeInTheDocument());

    // Check if the room availability is shown
    expect(screen.getByText(/Standard rooms/i)).toBeInTheDocument();
    expect(screen.getByText(/5 rooms available/i)).toBeInTheDocument();
    expect(screen.getByText(/Deluxe rooms/i)).toBeInTheDocument();
    expect(screen.getByText(/3 rooms available/i)).toBeInTheDocument();
    expect(screen.getByText(/Suite rooms/i)).toBeInTheDocument();
    expect(screen.getByText(/0 rooms available/i)).toBeInTheDocument();
  });

  test("handles room selection and navigates to booking page", async () => {
    render(
      <MemoryRouter>
        <AvailabilityBar />
      </MemoryRouter>
    );

    // Mocking the API response
    AxiosInstance.get.mockResolvedValueOnce([mockRoomAvailability]);

    // Input dates for check-in and check-out
    const checkInInput = screen.getByLabelText(/Check-In/i);
    const checkOutInput = screen.getByLabelText(/Check-Out/i);

    fireEvent.change(checkInInput, { target: { value: "2024-10-10" } });
    fireEvent.change(checkOutInput, { target: { value: "2024-10-12" } });

    // Simulate form submission
    const checkAvailabilityButton = screen.getByText(/Check Availability/i);
    fireEvent.click(checkAvailabilityButton);

    // Wait for API call to finish and popup to appear
    await waitFor(() => expect(screen.getByText(/Room Availability/i)).toBeInTheDocument());

    // Click on a room that is available (Standard Room)
    const standardRoom = screen.getByText(/Standard rooms/i);
    fireEvent.click(standardRoom);

    // Check that navigation happened (you might need to mock the `navigate` function)
    // For example, using the `useNavigate` hook:
    expect(mockNavigate).toHaveBeenCalledWith("/book", expect.objectContaining({ state: expect.any(Object) }));
  });

  test("disables selection of unavailable rooms", async () => {
    render(
      <MemoryRouter>
        <AvailabilityBar />
      </MemoryRouter>
    );

    // Mocking the API response
    AxiosInstance.get.mockResolvedValueOnce([mockRoomAvailability]);

    // Input dates for check-in and check-out
    const checkInInput = screen.getByLabelText(/Check-In/i);
    const checkOutInput = screen.getByLabelText(/Check-Out/i);

    fireEvent.change(checkInInput, { target: { value: "2024-10-10" } });
    fireEvent.change(checkOutInput, { target: { value: "2024-10-12" } });

    // Simulate form submission
    const checkAvailabilityButton = screen.getByText(/Check Availability/i);
    fireEvent.click(checkAvailabilityButton);

    // Wait for API call to finish and popup to appear
    await waitFor(() => expect(screen.getByText(/Room Availability/i)).toBeInTheDocument());

    // Check that the unavailable room (Suite) is disabled
    const suiteRoom = screen.getByText(/Suite rooms/i);
    expect(suiteRoom.closest('button')).toHaveAttribute('disabled');
  });

  test("handles error during room availability fetch", async () => {
    render(
      <MemoryRouter>
        <AvailabilityBar />
      </MemoryRouter>
    );

    // Simulate an error in the API call
    AxiosInstance.get.mockRejectedValueOnce(new Error("Network Error"));

    // Input dates for check-in and check-out
    const checkInInput = screen.getByLabelText(/Check-In/i);
    const checkOutInput = screen.getByLabelText(/Check-Out/i);

    fireEvent.change(checkInInput, { target: { value: "2024-10-10" } });
    fireEvent.change(checkOutInput, { target: { value: "2024-10-12" } });

    // Simulate form submission
    const checkAvailabilityButton = screen.getByText(/Check Availability/i);
    fireEvent.click(checkAvailabilityButton);

    // Check if error message is displayed
    await waitFor(() => expect(screen.getByText(/An unexpected error occurred/i)).toBeInTheDocument());
  });
});

