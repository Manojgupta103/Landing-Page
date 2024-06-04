// import React from 'react';
import './Testimonials.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1>TESTIMONIAL</h1>
        <h2>What Our Users Say About Us?</h2>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-image">
          <img src="Group_user.jpg" alt="Testimonial" />
          <img src="star.jpg" alt="star" className='star3' />
        </div>
        <div className="testimonial-text">
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. 
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, 
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse 
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, 
            Suspendisse Aliquam.
          </p>
          <img src="group.jpg" alt="group" className='group' />
          <p className="user-name">Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
