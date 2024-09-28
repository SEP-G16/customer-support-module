import React from "react";
import Door from "./Images/door.jpg";
import Table from "./Images/table.jpg";
import './DetailSection.css'; 

function DetailSection() {
  return (
    <div className="section-container">
      {/* First Row - Left Section */}
      <div className="image-description-row">
        <div className="row">
          <div className="img-container">
            <img src={Door} alt="Left" className="img" />
          </div>
          <div className="description">
            <h3 className="title">We Ensure Your Comfort and Safety</h3>
            <p className="text">
              At Ceylon Resort, we prioritize your well-being with our dedicated safe room service. Our commitment to cleanliness and hygiene ensures that every room is thoroughly sanitized and prepared for your stay. Relax and enjoy your experience knowing that we uphold the highest standards of safety and cleanliness throughout your visit.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row - Right Section */}
      <div className="image-description-row">
        <div className="row">
          <div className="description">
            <h3 className="title">We provide Fast and Fabulous Dining Delights</h3>
            <p className="text">
              At Ceylon Resort, indulge in a dining experience that's both swift and sensational. Our fast and fabulous service ensures you savor every moment without compromising on comfort or flavor. Whether you're dashing in for a bite or settling in for a relaxed meal, our inviting atmosphere and efficient service guarantee a memorable culinary journey.
            </p>
          </div>
          <div className="img-container">
            <img src={Table} alt="Right" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
