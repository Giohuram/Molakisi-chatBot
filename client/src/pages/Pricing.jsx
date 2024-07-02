import React from 'react';
import '../Styles/Home.css'; // Importer le fichier CSS

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2 className="sectionTitle">Subscription Plans</h2>
      <div className="planList">
        <div className="planItem">
          <h3 className="planTitle">Free Tier</h3>
          <p className="planDescription">Limited access to basic features</p>
          <button className="planButton" onClick={() => window.location.href = '#register'}>Get Started</button>
        </div>
        <div className="planItem">
          <h3 className="planTitle">Premium Tier</h3>
          <p className="planDescription">Full access to all features</p>
          <button className="planButton" onClick={() => window.location.href = '#register'}>Upgrade Now</button>
        </div>
      </div>
      <img src="https://source.unsplash.com/featured/?subscription,plans" alt="Pricing" className="pricingImage" />
    </section>
  );
};

export default Pricing;
