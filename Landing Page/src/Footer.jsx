// import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo">
        <div className="logo-icon">
        <img src="/images/Frame.jpg" alt="Logo" className="logo-image1" />
        </div>
        <div className="contact">
          <p><a href="mailto:Help@Frybix.Com">Help@Frybix.Com</a></p>
          <p>+1234 456 678 89</p>
        </div>
      </div>
      <div className="footer-section links">
        <h4>Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Bookings</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section legal">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
      <div className="footer-section product">
        <h4>Product</h4>
        <ul>
          <li><a href="#">Take Tour</a></li>
          <li><a href="#">Live Chat</a></li>
          <li><a href="#">Reviews</a></li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h4>Newsletter</h4>
        <p>Stay Up To Date</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section copyright">
        <p>Copyright © 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
