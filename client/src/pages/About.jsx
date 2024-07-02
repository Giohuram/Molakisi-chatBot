import React from 'react';
import '../Styles/Home.css';

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <h2 className="sectionTitle">À propos de Molakisi Chatbot</h2>
        <p className="aboutDescription">
          Molakisi Chatbot est conçu pour aider les étudiants de tous niveaux dans leurs études. Grâce à la technologie AI avancée, Molakisi fournit des réponses instantanées aux questions, des tutoriels étape par étape, des quiz interactifs et des parcours d'apprentissage personnalisés pour améliorer l'expérience d'apprentissage.
        </p>
        <p className="aboutDescription">
          Notre mission est de rendre l'apprentissage accessible et engageant pour tous. Que vous soyez un élève du primaire ou que vous prépariez des examens universitaires, Molakisi est là pour soutenir votre parcours éducatif.
        </p>
        <img src="https://source.unsplash.com/featured/?students,learning" alt="About" className="aboutImage" />
      </section>
    </div>
  );
};

export default About;
