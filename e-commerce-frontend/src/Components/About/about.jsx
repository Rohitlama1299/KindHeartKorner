import React from 'react';
import NGOImage from "../Assets/about.jpeg";
import './aabout.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <br />
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={NGOImage} alt="NGO Image" /> {/* Render the image using the img tag */}
        </div>
        <div className="about-us-description">
          <p>
            KindHeartKorner NGO is a non-profit organization dedicated to helping people in need. Our mission is to make a positive impact on the lives of individuals and communities by providing assistance and support in various ways.
          </p>
          <p>
            At KindHeartKorner, we believe in the power of kindness and compassion. We strive to create a world where everyone has access to basic necessities and opportunities for a better future.
          </p>
          <p>
            All the proceeds generated from our ecommerce website go directly towards funding our humanitarian projects and initiatives. By shopping with us, you are not only getting high-quality products but also contributing to a noble cause.
          </p>
          <p>
            Join us in spreading kindness and making a difference in the world. Together, we can create a brighter and more compassionate future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
