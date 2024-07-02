import React from 'react';
import '../Styles/Home.css'; // Importer le fichier CSS

const Features = ({ features }) => {
  return (
    <section id="features" className="features">
      <h2 className="sectionTitle">Features Overview</h2>
      <div className="featureList">
        {features.map(feature => (
          <div key={feature.id} className="featureItem">
            <div className="featureIcon">{feature.title}</div>
            <p className="featureDescription">{feature.description}</p>
            <img src={`https://source.unsplash.com/featured/?${feature.title.toLowerCase()}`} alt={feature.title} className="featureImage" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
