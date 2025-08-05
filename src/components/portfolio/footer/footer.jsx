import React from 'react';
import './Footer.css';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../utils/icon.jsx';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-text">Chee Xuan Yang</h3>
            <p className="brand-subtitle">Full-Stack Developer</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/cheesexuanyang" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/cheexuanyang/" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://twitter.com" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chee Xuan Yang. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;