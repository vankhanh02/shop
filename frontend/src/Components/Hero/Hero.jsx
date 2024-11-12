import React from "react";
import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner-content">
        <h2>Step Up</h2>
        <h2>Your Sneakers!</h2>
        <p>
          From classic styles to exclusive drops, we've got the perfect pair to
          elevate your streetwear. Comfort, performance, and style — all in one
          place. Don't miss out on your favorite kicks!
        </p>
        <button>Shop now 👟</button>
      </div>
    </div>
  );
};

export default Hero;
