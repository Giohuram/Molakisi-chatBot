import React from 'react';
import '../Styles/Home.css';

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h2 className="sectionTitle">How It Works</h2>
      <div className="steps">
        <div className="step">1. Type your question</div>
        <div className="step">2. Get instant explanations</div>
        <div className="step">3. Take quizzes</div>
        <div className="step">4. Track your progress</div>
      </div>
      <img src="https://source.unsplash.com/featured/?steps,learning" alt="How It Works" className="howItWorksImage" />
    </section>
  );
};

export default HowItWorks;
