import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { MapPinIcon, MailIcon, DownloadIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../../utils/icon.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Chee_Xuan_Yang_Resume.pdf'; 
    link.download = 'Chee_Xuan_Yang_Resume.pdf'; 
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
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-intro" variants={itemVariants}>
           <img
            src="image.png" 
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
        </motion.div>
        
        <motion.div className="hero-actions" variants={itemVariants}>
          <button onClick={scrollToContact} className="btn btn-primary">
            Get In Touch
          </button>
          <button onClick={handleDownload} className="btn btn-secondary">
            <DownloadIcon />
             Download Resume
          </button>
        </motion.div>
        
        <motion.div className="hero-social" variants={itemVariants}>
          <a href="https://github.com/cheesexuanyang" className="btn btn-ghost btn-icon" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/cheexuanyang/" className="btn btn-ghost btn-icon" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="https://twitter.com" className="btn btn-ghost btn-icon" aria-label="Twitter">
            <TwitterIcon />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;