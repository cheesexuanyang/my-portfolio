import React from 'react';
import './Hero.css';
import {
  MapPinIcon,
  MailIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from '../../utils/icon.jsx';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Alex_Johnson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-intro">
          <img
            img src="image.png"
            alt="Chee Xuan Yang"
            className="profile-image"
          />
          <div>
            <h1 className="hero-title">Chee Xuan Yang</h1>
            <p className="hero-subtitle">
              Full-Stack Developer passionate about creating exceptional digital experiences
            </p>
          </div>
          <div className="hero-info">
            <div className="info-item">
              <MapPinIcon />
              <span>Singapore, SG</span>
            </div>
            <div className="info-item">
              <MailIcon />
              <span>cheexuanyang@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="hero-actions">
          <button onClick={scrollToContact} className="btn btn-primary">
            Get In Touch
          </button>
          <button onClick={handleDownload} className="btn btn-secondary">
            <DownloadIcon />
            Download Resume
          </button>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com" className="btn btn-ghost btn-icon" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com" className="btn btn-ghost btn-icon" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="https://twitter.com" className="btn btn-ghost btn-icon" aria-label="Twitter">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;