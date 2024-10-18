import React, { useEffect, useState } from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";

import ImageBox from "../../components/ImageBox/ImageBox";
import ReviewImage from "./assets/images/Reviews.jpg";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import formatDate from "../../date.formatter";
import { AxiosInstance } from "../../axios.config";

import "./assets/styles/Review.css"; // Import the CSS file

const CustomTextContent = () => {
  return (
    <Stack>
      <Stack spacing={2}>
        <Typography
          variant="h1"
          fontFamily="Marcellus, serif"
          style={{
            color: "white",
            padding: "0px",
            marginBottom: "15px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
          }}
        >
          Guest Reviews
        </Typography>
        <Typography
          variant="h5"
          fontFamily="Marcellus, serif"
          style={{
            color: "white",
            padding: "0px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
          }}
        >
          "Hear what our guests have to say about their experience with us."
        </Typography>
      </Stack>
    </Stack>
  );
};

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    feedback: "",
  });

  useEffect(() => {
    async function getReviews() {
      try {
        let response = await AxiosInstance.get("/api/review/all");
        console.log("Reviews data:", response.data);
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { ...errors };
    if (formData.name === "") {
      newErrors.name = "This field is required";
    }
    if (formData.feedback === "") {
      newErrors.feedback = "This field is required";
    }
    setErrors(newErrors);
    if (newErrors.name === "" && newErrors.feedback === "") {
      await sendData(formData);
    }
  };

  const sendData = async (data) => {
    let reqBody = {
      name: data.name,
      date: formatDate(new Date(data.date)),
      console: data.date,
      feedback: data.feedback,
    };
    await AxiosInstance.post("/api/review/add", reqBody);
  };

  return (
    <div className="container">
      <Header />
      <ImageBox
        imageSrc={ReviewImage}
        TextContentComponent={<CustomTextContent />}
      />
      <div className="content">
        <div className="left-section">
          
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center" // Added to center the content
              sx={{ 
                width: "100%",         // Make it responsive by setting width to 100%
                maxWidth: "500px",      // Optional: max width to limit form size on larger screens
                margin: "0 auto",       // Center the form horizontally
                padding: "0 20px",      // Add padding for mobile view to prevent edges cutoff
                marginBottom: "30px"
              }}
            >
              <Typography
            variant="h4"
            gutterBottom
            sx={{ padding: "10px", marginLeft: "100px" }}
          >
            Submit Your Review
          </Typography>
              <TextField
                fullWidth
                className="text-field"
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                error={errors.name !== ""}
                helperText={errors.name}
                sx={{
                  width: "487px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                className="text-field"
                label="Your Feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                error={errors.feedback !== ""}
                helperText={errors.feedback}
                sx={{
                  width: "487px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  backgroundColor: "rgba(185, 157, 117, 1)",
                  borderRadius: "0px",
                  padding: "10px",
                  width: "300px", // Same width as the text fields
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                Submit Your Feedback
              </Button>
            </Stack>
          </form>
        </div>
        <div className="right-section">
          <Typography
            variant="h4"
            gutterBottom
            style={{ paddingBottom: "10px", marginLeft: "20px" }}
          >
            Reviews
          </Typography>
          <div className="underline" />
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;