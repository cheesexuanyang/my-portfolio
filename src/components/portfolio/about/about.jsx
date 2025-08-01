import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm a passionate full-stack developer with over 5 years of experience creating digital solutions 
          that make a difference. I specialize in React, Node.js, and modern web technologies, with a keen 
          eye for user experience and clean, maintainable code.
        </p>
        <p className="about-text">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source 
          projects, or sharing my knowledge through technical writing and mentoring. I believe in the 
          power of technology to solve real-world problems and create meaningful connections.
        </p>
      </div>
    </section>
  );
};

export default About;