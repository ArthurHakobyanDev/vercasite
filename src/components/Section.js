import React from 'react';
import './Section.css';

const Section = ({ image, title, headline, description, reverse }) => {
  return (
    <div className={`section ${reverse ? 'reverse' : ''}`}>
      <img src={image} alt={title} className="section-image" />
      <div className="section-content">
        <h4>{title}</h4>
        <h2>{headline}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
