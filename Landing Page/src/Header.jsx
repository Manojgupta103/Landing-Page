// import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/images/Frame.png" alt="Logo" className="logo-image" />
  
      <nav>
        <ul>
          <li><a className='Home' href="#home" >Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#Features">Features</a></li>
        </ul>
      </nav>
      <button className="download-btn">Download</button>
      <img className='Heroimage' src="./images/star.jpg" alt="Hero Image1" />
    </header>
  );
};

export default Header;
