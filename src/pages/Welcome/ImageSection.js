import React from "react";
import { Typography } from "@mui/material";
import Img0 from "./Images/carousel-img-0.jpg";
import Img1 from "./Images/carousel-img-1.jpg";
import Img2 from "./Images/carousel-img-2.jpg";
import Img3 from "./Images/carousel-img-3.jpg";
import './ImageSection.css'; // Import the CSS file

const ImageTextSection = () => {
  return (
    <div className="section-container">
      <div className="text-container">
        <Typography variant="h2" sx={{ fontFamily: 'Marcellus, serif', marginBottom: '30px' }}>
          Embrace the Elegance
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'Marcellus, serif' }}>
          "The perfect blend of luxury and comfort, where every moment is crafted to indulge your senses and elevate your stay to new heights"
        </Typography>
      </div>
      <div className="images-row">
        <div className="image-wrapper">
          <img src={Img0} alt="Image0" />
        </div>
        <div className="image-wrapper">
          <img src={Img1} alt="Image1" />
        </div>
        <div className="image-wrapper">
          <img src={Img2} alt="Image2" />
        </div>
        <div className="image-wrapper">
          <img src={Img3} alt="Image3" />
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
