import React from 'react';
import './Section.css';

const Section = ({ image, title, headline, description, reverse }) => {
  return (
    <section className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="section-container">
        <div className="section-media">
          <img src={image} alt={title} className="section-image" />
        </div>
        <div className="section-content">
          <span className="section-label">{title}</span>
          <h2 className="section-headline">{headline}</h2>
          <p className="section-description">{description}</p>
          <button className="section-cta">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Section;