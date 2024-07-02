import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import '../Styles/Home.css';

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch features
    setFeatures([
      { id: 1, title: 'Q&A', description: 'Get instant answers to your questions' },
      { id: 2, title: 'Tutorials', description: 'Step-by-step guides for complex topics' },
      { id: 3, title: 'Practice Quizzes', description: 'Test your knowledge with interactive quizzes' },
      { id: 4, title: 'Personalized Learning', description: 'Tailored content to suit your learning pace' }
    ]);

    // Simulating API call to fetch testimonials
    setTestimonials([
      { id: 1, text: 'Molakisi Chatbot has revolutionized my learning experience!', author: 'Student A' },
      { id: 2, text: 'The personalized learning paths are fantastic.', author: 'Student B' }
    ]);
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Features features={features} />
      <HowItWorks />
      <Pricing />
      <Testimonials testimonials={testimonials} />
      <footer className="footer">
        <div className="footerLinks">
          <a href="#faqs" className="footerLink">FAQs</a>
          <a href="#contact" className="footerLink">Contact Us</a>
          <a href="#terms" className="footerLink">Terms of Service</a>
          <a href="#privacy" className="footerLink">Privacy Policy</a>
        </div>
        <div className="socialMedia">
          <a href="https://facebook.com" className="socialMediaLink">Facebook</a>
          <a href="https://twitter.com" className="socialMediaLink">Twitter</a>
          <a href="https://instagram.com" className="socialMediaLink">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
