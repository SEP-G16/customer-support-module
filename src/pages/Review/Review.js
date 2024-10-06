import React, { useEffect, useState } from "react";
import {
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import Header from "../../components/Header/Header";
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

  useEffect(() => {
    async function getReviews() {
      try {
        let response = await AxiosInstance.get("/api/review/all");
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendData(formData);
  };

  const sendData = async (data) => {
    let reqBody = {
      name: data.name,
      date: formatDate(new Date(data.date)),
      feedback: data.feedback,
    };
    await AxiosInstance.post("/api/review/temp/add", reqBody);
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ padding: "10px", marginLeft: "170px" }}
          >
            Submit Your Review
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={2}
              sx={{ marginLeft: "100px", marginBottom: "30px" }}
            >
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
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
              {/* <TextField
                fullWidth
                label=""
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
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
              /> */}
              <TextField
                fullWidth
                label="Your Feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
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

            </Stack>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                backgroundColor: "rgba(185, 157, 117, 1)",
                borderRadius: "0px",
                padding: "10px",
                marginLeft: "220px",
              }}
            >
              Submit Your Feedback
            </Button>
          </form>
        </div>
        <div className="right-section">
          <Typography
            variant="h4"
            gutterBottom
            style={{ paddingBottom: "10px", marginLeft: "300px" }}
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
