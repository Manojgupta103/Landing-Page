// import React from 'react';
import './Customizable.css';

const Customizable = () => {
  return (
      <div className="customizable-container">
      <div className="customizable-image">
        <img src="./images/iphone4.png" alt="Customizable" />
      </div>
      <div className="customizable-text">
        <h2 className="section-title">FULLY CUSTOMIZABLE</h2>
        <div className="customizable-content">
          <img src="./images/Groupstar.png" alt="Icon" className="icon-image" />
          <div className="text-content">
            <h3>Personalize Your Experience</h3>
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            <img src='./images/star.png' alt='Star' className='star1'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customizable;
