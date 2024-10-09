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
          <Typography variant="h4" fontFamily="Marcellus, serif" sx={{ mb: 4 }}>
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
          <Typography variant="h4" fontFamily="Marcellus, serif" sx={{ mb: 4 }} >
            Book Your Stay
          </Typography>
          <form className="form" onSubmit={handleFormSubmit}>
          <TextField
              name = "name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
              error={!!errors.name} // Show error state
              inputRef={(el) => (inputRefs.current.name = el)} // Set ref for scrolling
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />


            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.email} // Show error state
              inputRef={(el) => (inputRefs.current.email = el)} // Set ref for scrolling
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />
            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}

            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.phone} // Show error state
              inputRef={(el) => (inputRefs.current.phone = el)} // Set ref for scrolling
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />
            {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}

            <TextField
              name="checkIn"
              label="Check-in Date"
              type="date"
              variant="outlined"
              value={formData.checkIn}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.checkIn} // Show error state
              inputRef={(el) => (inputRefs.current.checkIn = el)} // Set ref for scrolling
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: new Date().toISOString().split("T")[0] }} // Disable past dates
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />
            {errors.checkIn && <FormHelperText error>{errors.checkIn}</FormHelperText>}


            <TextField
              name="checkOut"
              label="Check-out Date"
              type="date"
              variant="outlined"
              value={formData.checkOut}
              onChange={handleInputChange}
              fullWidth
              required
              error={!!errors.checkIn} // Show error state
              inputRef={(el) => (inputRefs.current.checkIn = el)} // Set ref for scrolling
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: new Date().toISOString().split("T")[0] }} // Disable past dates
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />
            {errors.checkOut && <FormHelperText error>{errors.checkOut}</FormHelperText>}

            <TextField
              name="roomCount"
              label="Room Count"
              type="number"
              variant="outlined"
              value={roomCount}
              onChange={(e) => setRoomCount(e.target.value)}
              fullWidth
              required
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />
            <TextField
              name="adultCount"
              label="Number of Adults"
              type="number"
              variant="outlined"
              value={adultCount}
              onChange={(e) => setAdultCount(e.target.value)}
              fullWidth
              required
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />
            {adultCount < 1 && <FormHelperText error>Field is empty</FormHelperText>}

            <TextField
              name="childrenCount"
              label="Number of Children"
              type="number"
              variant="outlined"
              value={childrenCount}
              onChange={(e) => setChildrenCount(e.target.value)}
              fullWidth
              required
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                borderRadius: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes border when focused
                  },
                },
              }}
            />

            <Typography variant="h6">
            {roomCount > 0 ? `Total Cost: $${calculateTotalCost()}` : "Select the room count to see the total cost."}
            </Typography>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Book Now
            </Button>
          </form>

          {/* Popup for booking confirmation */}
          <Dialog open={openPopup} onClose={handleClosePopup}>
            <DialogTitle>Booking Confirmed</DialogTitle>
            <DialogContent>
              <Typography>Your booking has been recorded. Manager will contact You soon !</Typography>
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