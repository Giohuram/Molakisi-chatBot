import React from 'react';
import '../Styles/Home.css'; // Importer le fichier CSS

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="sectionTitle">Testimonials</h2>
      <div className="testimonialList">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonialItem">
            <p className="testimonialText">"{testimonial.text}"</p>
            <p className="testimonialAuthor">- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <img src="https://source.unsplash.com/featured/?testimonials,students" alt="Testimonials" className="testimonialsImage" />
    </section>
  );
};

export default Testimonials;
