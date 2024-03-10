import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Transforming Lives</h2>
        <div>
          <div className="hero-hand-icon">
            <p>One Purchase at a Time</p>
          </div>
          <p> Discover Unique Goods</p>
        </div>
        <div className="hero-latest-btn">
          <div>Shop now</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
