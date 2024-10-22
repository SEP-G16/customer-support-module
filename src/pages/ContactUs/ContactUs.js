import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import './assets/styles/ContactUs.css';
import backgroundImage from "./assets/images/room.jpg";
import { AxiosInstance } from "../../axios.config";

const ContactUsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { ...errors };

    // Validate form data
    if (formData.name === "") {
      newErrors.name = "This field is required";
    } else if (!/^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(formData.name)) {
      newErrors.name = "Invalid name";
    }

    if (formData.email === "") {
      newErrors.email = "This field is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.description === "") {
      newErrors.description = "This field is required";
    }

    setErrors(newErrors);

    // Check for errors before sending data
    if (!Object.values(newErrors).some((error) => error)) {
      try {
        await sendData(formData);
        setIsPopupOpen(true);
        setFormData({ name: "", email: "", description: "" }); // Reset form data
      } catch (error) {
        console.error("Error sending data", error);
        // Optionally set an error message in state to inform the user
      }
    }
  };

  const sendData = async (data) => {
    const reqBody = {
      name: data.name,
      email: data.email,
      description: data.description,
    };
    await AxiosInstance.post("/api/contact-us/support-ticket/add", reqBody);
  };

  useEffect(() => {
    let timer;
    if (isPopupOpen) {
      timer = setTimeout(() => {
        setIsPopupOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isPopupOpen]);

  return (
    <div
      className="contact-us-page-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-form-section">
        <Typography variant="h4">Contact Us</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
          />
          <span className="error">{errors.name}</span>
          
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
          />
          <span className="error">{errors.email}</span>
          
          <textarea 
            name="description" 
            placeholder="Description" 
            required 
            value={formData.description} 
            onChange={handleChange}
          ></textarea>
          <span className="error">{errors.description}</span>
          
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info-section">
        <h2 style={{ marginBottom: "30px" }}>Contact Information</h2>
        <div>
          <h3 style={{ marginBottom: "15px" }}>Restaurant Reservations</h3>
          <p>0112 452 361</p>
          <p>0112 568 566</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "15px" }}>Room Reservations</h3>
          <p>0112 556 333</p>
          <p>0112 556 334</p>
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Marcellus, serif",
            color: "black",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          FIND US ON
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "20px" }}
        >
          <a href="https://www.facebook.com" className="social-media-links">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com" className="social-media-links">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com" className="social-media-links">
            <InstagramIcon />
          </a>
        </Stack>
      </div>
      {isPopupOpen && (
        <div className="popup">
          Message sent successfully! We'll contact you soon.
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;
