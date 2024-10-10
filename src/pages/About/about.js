import React, { useState, useEffect } from "react";
import "./assets/styles/about.css";
import InfinityPool from "./assets/images/infinityPool.jpg";
import Gym from "./assets/images/gym1.jpg";
import Spa from "./assets/images/spa.jpg";
import VirtualWaiter from "./assets/images/virtualwaiter.jpg";
import Lobby from "./assets/images/lobby.jpg";
import { Typography } from "@mui/material";

// Custom Carousel Component
const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: Lobby,
      caption: "At Ceylon Resort",
      description: "Ceylon Resort offers a luxurious blend of elegance and comfort, with beautifully designed rooms featuring plush bedding, modern furnishings, and deluxe amenities. Guests can enjoy an infinity pool, a state-of-the-art gym, and relaxing spa treatments. Dining is elevated with gourmet meals and the convenience of a virtual waiter. With exceptional service, world-class facilities, and stunning views, Ceylon Resort is the perfect destination for a memorable and relaxing stay.",
    },
    {
      id: 2,
      image: InfinityPool,
      caption: "Infinity Pool",
      description: "Swim Above the Horizon Take a dip in our stunning infinity pool, where the water seems to blend seamlessly with the horizon. Enjoy breathtaking panoramic views as you relax by the poolside, the perfect place to unwind under the sun or take a refreshing swim during the evening. Whether you're lounging with a cocktail or swimming laps, our infinity pool offers a serene retreat with unmatched views of the surrounding landscape.",
    },
    {
      id: 3,
      image: Gym,
      caption: "Fitness Gym",
      description: "Elevate Your Fitness Experience Our state-of-the-art gym is equipped with the latest fitness technology to help you stay in top form during your stay. From cardio machines to weight training equipment, you'll have everything you need for a complete workout. With floor-to-ceiling windows offering stunning views, it’s the perfect place to energize your body and mind. Whether you prefer an intense workout or a gentle yoga session, our gym caters to all your fitness needs.",
    },
    {
      id: 4,
      image: Spa,
      caption: "Luxury Spa",
      description: "Rejuvenate Your Body and Soul Escape to our luxurious spa, where every treatment is designed to relax, rejuvenate, and restore your energy. Indulge in a selection of massages, facials, and body treatments, all delivered by skilled therapists using premium products. Surrounded by tranquil decor and soothing aromas, our spa is your personal sanctuary of calm. Whether you're seeking stress relief or simply want to pamper yourself, a visit to our spa is the ultimate indulgence.",
    },
    {
      id: 5,
      image: VirtualWaiter,
      caption: "Digitalized waiter service",
      description: "At Ceylon Resort, dining is an exceptional experience with a range of local and international gourmet dishes crafted by award-winning chefs. Using fresh, locally sourced ingredients, each meal offers a memorable taste. Whether dining in the elegant restaurant or enjoying a casual meal on the outdoor patio, there’s something for every preference. The innovative Virtual Waiter allows guests to browse the menu, place orders, and track meals directly from their device, enhancing convenience and enjoyment.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Go to next slide automatically every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <div className="carousel-text">
            <h5 className="caption-text">{slides[currentSlide].caption}</h5>
            <p className="description">{slides[currentSlide].description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="carousel-control-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

function AboutUs() {
  return (
    <div>
      {/* Carousel component */}
      <Carousel />

      {/* Content below the carousel */}
      <div className="MainContainer">
        <div className="ContentContainer">
          <Typography variant="h2" gutterBottom>
            Welcome to Our Hotel
          </Typography>
          <Typography variant="body1" paragraph align="justify" style={{ lineHeight: '1.8' }}>
            Nestled in the vibrant heart of the city, our hotel is more than just a place to stay—it’s a destination in itself. Offering a perfect blend of luxury, comfort, and convenience, we strive to create an exceptional experience for each and every guest. Whether you’re here for business, leisure, or a combination of both, our hotel is designed to meet all your needs, ensuring that your stay with us is nothing short of extraordinary.
          </Typography>
          <Typography variant="body1" paragraph align="justify" style={{ lineHeight: '1.8' }}>
            <strong>Exceptional Accommodations:</strong> Our hotel boasts a collection of elegantly designed rooms and suites that offer both comfort and style. Each room is thoughtfully equipped with world-class amenities to provide a relaxing haven where you can unwind after a day of exploring or working. From plush bedding and modern furnishings to scenic views of the city, every detail is carefully curated to create an inviting and tranquil space.
            Whether you’re looking for a cozy single room, a spacious suite, or a family-friendly option, we have the perfect room to suit your needs. Every room is designed with your comfort in mind, offering a peaceful escape with top-tier features like high-speed Wi-Fi, smart TVs, minibars, and deluxe bath amenities.
          </Typography>

          <Typography variant="body1" paragraph align="justify" style={{ lineHeight: '1.8' }}>
            <strong>Exquisite Dining Experience:</strong> Our hotel is proud to offer a variety of dining options that cater to all tastes. Indulge in a gastronomic journey with our carefully crafted menus, featuring both international cuisine and local delicacies. Our award-winning chefs prepare dishes that are as beautiful to the eye as they are delightful to the palate.

            For a more casual dining experience, enjoy light snacks and drinks at our stylish lounge or outdoor patio, where you can relax while taking in the stunning city views. Whether you’re a food connoisseur or simply in search of a satisfying meal, our culinary offerings are sure to leave a lasting impression.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
