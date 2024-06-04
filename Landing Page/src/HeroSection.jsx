// import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="container">
      <div className="text-section">
      <div className="image-container">
      <div className="centered-text">
        <h1>Make The Best Financial Decisions</h1>
      </div>
    </div>
        <p>
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="buttons">
          <button className="get-started">Get Started ➡️</button>
          <button className="watch-video">Watch Video ▶️</button>
        </div>
        <img src="./src/Images/Achievments.jpg" alt="Hero Image" />

      </div>
      <div className="image-section">
        <img src="./Public/Iphone.png" alt="Hero Image" />
      </div>
    </div>

  );
}

export default HeroSection;
