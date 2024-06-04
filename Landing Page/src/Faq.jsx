// import React from 'react';
import './Faq.css';

const Faq = () => {
  const faqs = [
    {
      title: "The Best Financial Accounting App Ever!",
      text: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris."
    },
    {
      title: "The Best Financial Accounting App Ever!",
      text: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris."
    },
    {
      title: "The Best Financial Accounting App Ever!",
      text: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris."
    },
    {
      title: "The Best Financial Accounting App Ever!",
      text: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris."
    },
    {
      title: "The Best Financial Accounting App Ever!",
      text: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris."
    },
    {
      title: "The Best Financial Accounting App Ever!",
      text: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris."
    }
  ];

  return (
    <div className="faq-section">
      <h2>FAQ</h2>
      <h3>Frequently Asked Questions</h3>
      <img src='star.jpg' alt='star' className='star4'></img>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${index % 2 === 0 ? 'highlight' : ''}`}>
            <h4>{faq.title}</h4>
            <p>{faq.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
