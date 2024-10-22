import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormHelperText,
} from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import RoomDetails from "../../components/RoomCard/RoomCard";
import Booking from "./assets/images/woman.jpg";
import { AxiosInstance } from "../../axios.config";
import "./assets/styles/Booking.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  // Memoize the initialFormData
  const initialFormData = useMemo(() => {
    return (
      location.state?.formData || {
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        roomCount: 1,
        adultCount: 1,
        childrenCount: 0,
        room: "", // Default room type
      }
    );
  }, [location.state?.formData]);

  const [formData, setFormData] = useState(initialFormData);
  const [adultCount, setAdultCount] = useState(initialFormData.adultCount);
  const [childrenCount, setChildrenCount] = useState(
    initialFormData.childrenCount
  );
  const [roomCount, setRoomCount] = useState(initialFormData.roomCount);
  const [openPopup, setOpenPopup] = useState(false); // State to control popup visibility
  const [errors, setErrors] = useState({}); // State for error messages
  const inputRefs = useRef({}); // Refs for input fields

  useEffect(() => {
    // Update state variables with formData from location state
    setFormData(initialFormData);
    setAdultCount(initialFormData.adultCount);
    setChildrenCount(initialFormData.childrenCount);
    setRoomCount(initialFormData.roomCount);
  }, [initialFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const calculateTotalCost = () => {
    let baseCostPerNight;

    // Set the base cost per night depending on the room type
    if (formData.room === "Standard rooms") {
      baseCostPerNight = 10250;
    } else if (formData.room === "Deluxe rooms") {
      baseCostPerNight = 15780;
    } else if (formData.room === "Suite rooms") {
      baseCostPerNight = 20200;
    } else {
      baseCostPerNight = 0; // Handle unexpected room types
    }

    // Calculate the number of days between check-in and check-out
    const checkInDate = new Date(formData.checkIn); // Assuming formData contains check-in date
    const checkOutDate = new Date(formData.checkOut); // Assuming formData contains check-out date

    const timeDiff = checkOutDate - checkInDate; // Difference in milliseconds
    const numberOfDays = timeDiff / (1000 * 60 * 60 * 24); // Convert milliseconds to days

    // Calculate total cost based on base cost, room count, and number of days
    const totalCost = baseCostPerNight * roomCount * numberOfDays;

    return totalCost;
  };

  const validateFields = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Field is empty";
    } else if (!/^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(formData.name)) {
      newErrors.name = "Invalid name";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Field is empty";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Field is empty";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Check-in and check-out validation
    if (!formData.checkIn) {
      newErrors.checkIn = "Field is empty";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Field is empty";
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = "Check-out date must be after check-in date";
    }

    // Room count validation
    if (roomCount < 1) newErrors.roomCount = "Room count must be at least 1";

    // Adult count validation
    if (adultCount < 1) newErrors.adultCount = "Adult count must be at least 1";

    // Children count validation
    if (childrenCount < 0)
      newErrors.childrenCount = "Children count cannot be negative"; // Error for children count

    // Set the errors in the state
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate fields
    if (!validateFields()) {
      // Scroll to the first invalid input
      const firstErrorField = Object.keys(errors)[0];
      inputRefs.current[firstErrorField].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return; // Prevent further processing if validation fails
    }

    // Handle form submission logic
    try {
      await AxiosInstance.post("/api/booking/temp/add", {
        customerName: formData.name,
        email: formData.email,
        phoneNo: formData.phone,
        roomType: {
          id: formData.roomTypeId, // Ensure this value is set correctly
        },
        adultCount: adultCount,
        childrenCount: childrenCount,
        roomCount: roomCount,
        checkinDate: formData.checkIn,
        checkoutDate: formData.checkOut,
      });

      // Open the success popup after a successful booking
      setOpenPopup(true);
    } catch (e) {
      console.error(e);
      // Optionally handle the error, e.g., show an error message
    }
  };

  const handleClosePopup = () => {
    setOpenPopup(false); // Close the popup
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      className="container"
      style={{ width: "100vw", padding: "0", margin: "0" }}
    >
      <div className="image-box-wrapper">
        <ImageBox imageSrc={Booking} />
      </div>
      <div className="content">
        <div className="left-section">
          <Typography variant="h4" fontFamily="Marcellus, serif" sx={{ mb: 4 }}>
            Your Room
          </Typography>
          <RoomDetails
            roomImage={formData.roomImage}
            roomType={formData.room}
            price={formData.price}
            roomSize={formData.roomSize}
            guests={formData.guest}
            bedType={formData.bedType}
            description={formData.roomDescription}
          />
        </div>
        <div className="right-section">
          <Typography variant="h4" fontFamily="Marcellus, serif" sx={{ mb: 4 }}>
            Book Your Stay
          </Typography>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              ref={(el) => (inputRefs.current.name = el)} // Set ref for scrolling
              style={{
                width: "100%", // Full width
                padding: "12px",
                marginBottom: "16px", // Equivalent to marginBottom: 2 in MUI
                borderRadius: "0px",
                border: errors.name ? "2px solid red" : "2px solid #ccc", // Red border on error, default border otherwise
                outline: "none", // Removes the focus outline
              }}
              aria-invalid={!!errors.name} // ARIA attribute to indicate error
            />

            {errors.name && (
              <FormHelperText error>{errors.name}</FormHelperText>
            )}

            <input
              type="text"
              placeholder="Email" // Update to match email field
              name="email" // Change name to "email"
              value={formData.email}
              onChange={handleInputChange}
              required
              ref={(el) => (inputRefs.current.email = el)} // Set ref for scrolling
              style={{
                width: "100%", // Full width
                padding: "12px",
                marginBottom: "16px", // Equivalent to marginBottom: 2 in MUI
                borderRadius: "0px",
                border: errors.email ? "2px solid red" : "2px solid #ccc", // Red border on error
                outline: "none", // Removes the focus outline
                boxSizing: "border-box", // Ensures padding and border are included in width/height
              }}
              aria-invalid={!!errors.email} // ARIA attribute to indicate error
            />

            {errors.email && (
              <FormHelperText error>{errors.email}</FormHelperText>
            )}

            <input
              type="text"
              placeholder="Phone" // Placeholder text to replace the label
              name="phone" // Name set to "phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              ref={(el) => (inputRefs.current.phone = el)} // Set ref for scrolling
              style={{
                width: "100%", // Full width
                padding: "12px", // Padding equivalent to the TextField
                marginBottom: "16px", // Similar to marginBottom: 2 in MUI
                borderRadius: "0px", // Set border-radius to 0px
                border: errors.phone ? "2px solid red" : "2px solid #ccc", // Red border if there's an error
                outline: "none", // Removes default browser outline on focus
                boxSizing: "border-box", // Ensure padding/border is included in width
              }}
              aria-invalid={!!errors.phone} // ARIA attribute to indicate error
            />

            {errors.phone && (
              <FormHelperText error>{errors.phone}</FormHelperText>
            )}

            <input
              type="date" // Date input type
              name="checkIn" // Name set to "checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              required
              ref={(el) => (inputRefs.current.checkIn = el)} // Set ref for scrolling
              min={new Date().toISOString().split("T")[0]} // Disable past dates
              style={{
                width: "100%", // Full width
                padding: "12px", // Padding equivalent to the TextField
                marginBottom: "16px", // Similar to marginBottom: 2 in MUI
                borderRadius: "0px", // Set border-radius to 0px
                border: errors.checkIn ? "2px solid red" : "2px solid #ccc", // Red border if there's an error
                outline: "none", // Removes default browser outline on focus
                boxSizing: "border-box", // Ensure padding/border is included in width
              }}
              aria-invalid={!!errors.checkIn} // ARIA attribute to indicate error
            />

            {errors.checkIn && (
              <FormHelperText error>{errors.checkIn}</FormHelperText>
            )}

            <input
              type="date" // Date input type
              name="checkOut" // Name set to "checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              required
              ref={(el) => (inputRefs.current.checkOut = el)} // Set ref for scrolling
              min={new Date().toISOString().split("T")[0]} // Disable past dates
              style={{
                width: "100%", // Full width
                padding: "12px", // Padding equivalent to the TextField
                marginBottom: "16px", // Similar to marginBottom: 2 in MUI
                borderRadius: "0px", // Set border-radius to 0px
                border: errors.checkOut ? "2px solid red" : "2px solid #ccc", // Red border if there's an error
                outline: "none", // Removes default browser outline on focus
                boxSizing: "border-box", // Ensure padding/border is included in width
              }}
              aria-invalid={!!errors.checkOut} // ARIA attribute to indicate error
            />

            {errors.checkOut && (
              <FormHelperText error>{errors.checkOut}</FormHelperText>
            )}

            <input
              type="number" // Number input type
              placeholder="Room Count"
              name="roomCount" // Name set to "roomCount"
              value={roomCount}
              onChange={(e) => setRoomCount(e.target.value)}
              required
              style={{
                width: "100%", // Full width
                padding: "12px", // Equivalent padding to the TextField
                marginBottom: "16px", // Similar to marginBottom: 2 in MUI
                borderRadius: "0px", // Set border-radius to 0px
                border: "2px solid #ccc", // Default border
                outline: "none", // Removes default browser outline on focus
                boxSizing: "border-box", // Ensure padding/border is included in width
              }}
            />

            {roomCount < 1 && (
              <FormHelperText error>Field is empty</FormHelperText>
            )}

            <input
              type="number" // Number input type
              placeholder="Adult Count"
              name="adultCount" // Name set to "adultCount"
              value={adultCount}
              onChange={(e) => setAdultCount(e.target.value)}
              required
              style={{
                width: "100%", // Full width
                padding: "12px", // Equivalent padding to the TextField
                marginBottom: "16px", // Similar to marginBottom: 2 in MUI
                borderRadius: "0px", // Set border-radius to 0px
                border: "2px solid #ccc", // Default border
                outline: "none", // Removes default browser outline on focus
                boxSizing: "border-box", // Ensure padding/border is included in width
              }}
            />

            {adultCount < 1 && (
              <FormHelperText error>Field is empty</FormHelperText>
            )}

            <input
              type="number" // Number input type
              placeholder="Children Count"
              name="childrenCount" // Name set to "childrenCount"
              value={childrenCount}
              onChange={(e) => setChildrenCount(e.target.value)}
              required
              style={{
                width: "100%", // Full width
                padding: "12px", // Equivalent padding to the TextField
                marginBottom: "16px", // Similar to marginBottom: 2 in MUI
                borderRadius: "0px", // Set border-radius to 0px
                border: "2px solid #ccc", // Default border
                outline: "none", // Removes default browser outline on focus
                boxSizing: "border-box", // Ensure padding/border is included in width
              }}
            />
            {childrenCount < 0 && (
              <FormHelperText error>
                Children count cannot be negative
              </FormHelperText>
            )}

            <Typography variant="h6">
              {roomCount > 0
                ? `Total Cost: Rs.${calculateTotalCost()}`
                : "Select the room count to see the total cost."}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                padding: "8px 24px", // Smaller padding for reduced size
                fontSize: "0.875rem", // Smaller font size
                width: "100%", // Adjust width to make it responsive
                maxWidth: "200px", // Limit the button width on larger screens
              }}
            >
              Book Now
            </Button>
          </form>

          {/* Popup for booking confirmation */}
          <Dialog open={openPopup} onClose={handleClosePopup}>
            <DialogTitle>Booking Confirmed</DialogTitle>
            <DialogContent>
              <Typography>
                Your booking has been recorded. Manager will contact You soon !
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePopup} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
