import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Typography, TextField, Button, Box } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import RoomDetails from "../../components/RoomCard/RoomCard";
import Booking from "./woman.jpg";
import { AxiosInstance } from "../../axios.config";
import './Booking.css';

const BookingPage = () => {
  const location = useLocation();
  const initialFormData = location.state?.formData || {
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

  const [formData, setFormData] = useState(initialFormData);
  const [adultCount, setadultCount] = useState(initialFormData.adultCount);
  const [childrenCount, setchildrenCount] = useState(initialFormData.childrenCount);
  const [roomCount, setroomCount] = useState(initialFormData.roomCount);

  useEffect(() => {
    // Update state variables with formData from location state
    setFormData(location.state?.formData || initialFormData);
    setadultCount(location.state?.formData?.adults || initialFormData.adultCount);
    setchildrenCount(location.state?.formData?.children || initialFormData.childrenCount);
    setroomCount(location.state?.formData?.rooms || initialFormData.roomCount);
  }, [location.state?.formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotalCost = () => {
    const baseCostPerNight = 150; // Example base cost per night
    const totalCost = baseCostPerNight * roomCount;
    return totalCost;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., send formData to backend
    console.log(formData);

    /////////////////////////////////////////////////////Navigate after this
    try {
      await AxiosInstance.post("/api/booking/temp/add", {
        customerName: formData.name,
        customerNic: "200202500190",
        email: formData.email,
        phoneNo: formData.phone,
        roomType: {
          id: formData.roomTypeId,
        },
        adultCount: formData.adultCount,
        childrenCount: formData.childrenCount,
        roomCount: formData.roomCount,
        checkinDate: formData.checkIn,
        checkoutDate: formData.checkOut,
      });
    } catch (e) {}
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
          {/* Reservation form */}
          <Typography variant="h4" fontFamily="Marcellus, serif">
            Book Your Stay
          </Typography>
          <form className="form" onSubmit={handleFormSubmit}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="checkIn"
              label="Check-in Date"
              type="date"
              variant="outlined"
              value={formData.checkIn}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="checkOut"
              label="Check-out Date"
              type="date"
              variant="outlined"
              value={formData.checkOut}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="roomCount"
              label="Number of Rooms"
              type="number"
              variant="outlined"
              value={roomCount}
              onChange={(e) => setroomCount(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="adultCount"
              label="Number of Adults"
              type="number"
              variant="outlined"
              value={adultCount}
              onChange={(e) => setadultCount(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <TextField
              name="childrenCount"
              label="Number of Children"
              type="number"
              variant="outlined"
              value={childrenCount}
              onChange={(e) => setchildrenCount(parseInt(e.target.value))}
              fullWidth
              required
              InputProps={{ inputProps: { min: 0 } }}
              sx={{ marginBottom: 2, borderRadius: "0px" }}
            />
            <Typography variant="h4" fontFamily="Marcellus, serif">
              Total Cost: {calculateTotalCost()} USD
            </Typography>
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "black",
                borderRadius: "0px",
                padding: "10px",
                marginTop: "50px",
                marginBottom: "30px",
                fontSize: "1.4rem", // Adjust font size
                fontFamily: "Marcellus, serif",
              }}
            >
              Book Your Stay
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
