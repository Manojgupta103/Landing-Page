// import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Features from './Features';
import Advantages from './Advantages';
import Customizable from './Customizable';
import Testimonials from './Testimonials';
import Faq from './Faq';
import CallToAction from './CallToAction';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <Features />
      <Advantages />
      <Customizable/>
      <Testimonials />
      <Faq/>
      <CallToAction />
      <Footer/>

    </div>
  );
}

export default App;