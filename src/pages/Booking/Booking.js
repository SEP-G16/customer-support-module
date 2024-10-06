import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormHelperText } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import RoomDetails from "../../components/RoomCard/RoomCard";
import Booking from "./assets/images/woman.jpg";
import { AxiosInstance } from "../../axios.config";
import './assets/styles/Booking.css';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  // Memoize the initialFormData
  const initialFormData = useMemo(() => {
    return location.state?.formData || {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomCount: 1,
      adultCount: 1,
      childrenCount: 0,
      room: "", // Default room type
    };
  }, [location.state?.formData]);

  const [formData, setFormData] = useState(initialFormData);
  const [adultCount, setAdultCount] = useState(initialFormData.adultCount);
  const [childrenCount, setChildrenCount] = useState(initialFormData.childrenCount);
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
    const baseCostPerNight = 150; // Example base cost per night
    const totalCost = baseCostPerNight * roomCount;
    return totalCost;
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Field is empty";
    if (!formData.email) newErrors.email = "Field is empty";
    if (!formData.phone) newErrors.phone = "Field is empty";
    if (!formData.checkIn) newErrors.checkIn = "Field is empty";
    if (!formData.checkOut) newErrors.checkOut = "Field is empty";

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
        inputRefs.current[firstErrorField].scrollIntoView({ behavior: "smooth", block: "center" });
        return; // Prevent further processing if validation fails
    }

    // Handle form submission logic
    try {
        await AxiosInstance.post("/api/booking/temp/add", {
            customerName: formData.name,
            customerNic: "200202500190", // You may want to replace this with an actual input
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
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container">
      <div className="image-box-wrapper">
        <ImageBox imageSrc={Booking} />
      </div>
      <div className="content">
        <div className="left-section">
          <Typography variant="h4" fontFamily="Marcellus, serif">
            Your Room
          </Typography>
          <RoomDetails
            roomImage={formData.roomImage}
            roomType={formData.room}
            roomSize={formData.roomSize}
            guests={formData.guest}
            bedType={formData.bedType}
            description={formData.roomDescription}
          />
        </div>
        <div className="right-section">
          <Typography variant="h4" fontFamily="Marcellus, serif">
            Book Your Stay
          </Typography>
          <form className="form" onSubmit={handleFormSubmit}>
            <TextField
              name="name"
              label="Name"
              variant="standard"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.name} // Show error state
              inputRef={(el) => (inputRefs.current.name = el)} // Set ref for scrolling
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}

            <TextField
              name="email"
              label="Email"
              variant="standard"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.email} // Show error state
              inputRef={(el) => (inputRefs.current.email = el)} // Set ref for scrolling
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}

            <TextField
              name="phone"
              label="Phone"
              variant="standard"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.phone} // Show error state
              inputRef={(el) => (inputRefs.current.phone = el)} // Set ref for scrolling
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}

            <TextField
              name="checkIn"
              label="Check-in Date"
              type="date"
              variant="standard"
              value={formData.checkIn}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.checkIn} // Show error state
              inputRef={(el) => (inputRefs.current.checkIn = el)} // Set ref for scrolling
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            {errors.checkIn && <FormHelperText error>{errors.checkIn}</FormHelperText>}

            <TextField
              name="checkOut"
              label="Check-out Date"
              type="date"
              variant="standard"
              value={formData.checkOut}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.checkOut} // Show error state
              inputRef={(el) => (inputRefs.current.checkOut = el)} // Set ref for scrolling
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            {errors.checkOut && <FormHelperText error>{errors.checkOut}</FormHelperText>}

            <TextField
              name="roomCount"
              label="Room Count"
              type="number"
              variant="standard"
              value={roomCount}
              onChange={(e) => setRoomCount(parseInt(e.target.value))}
              fullWidth
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />

            <TextField
              name="adultCount"
              label="Number of Adults"
              type="number"
              variant="standard"
              value={adultCount}
              onChange={(e) => setAdultCount(parseInt(e.target.value))}
              fullWidth
              InputProps={{ inputProps: { min: 1 } }}
              error={adultCount < 1} // Show error state for adult count
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            {adultCount < 1 && <FormHelperText error>Field is empty</FormHelperText>}

            <TextField
              name="childrenCount"
              label="Number of Children"
              type="number"
              variant="standard"
              value={childrenCount}
              onChange={(e) => setChildrenCount(parseInt(e.target.value))}
              fullWidth
              InputProps={{ inputProps: { min: 0 } }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />

            <Typography variant="h6">Total Cost: ${calculateTotalCost()}</Typography>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Book Now
            </Button>
          </form>

          {/* Popup for booking confirmation */}
          <Dialog open={openPopup} onClose={handleClosePopup}>
            <DialogTitle>Booking Confirmed</DialogTitle>
            <DialogContent>
              <Typography>Your booking has been confirmed!</Typography>
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
