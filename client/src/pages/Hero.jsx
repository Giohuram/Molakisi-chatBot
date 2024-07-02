import React from 'react';
import '../Styles/Home.css'; // Importer le fichier CSS

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1 className="heroTitle">Start Learning with Molakisi Today</h1>
      <p className="heroTagline">Empowering Students with AI-Driven Learning</p>
      <button className="heroButton" onClick={() => window.location.href = '/register'}>Try it Free</button>
      <img src="https://source.unsplash.com/featured/?education,technology" alt="Hero" className="heroImage" />
    </section>
  );
};

export default Hero;
