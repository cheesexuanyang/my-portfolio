import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { MapPinIcon, MailIcon, DownloadIcon, GithubIcon, LinkedinIcon,TwitterIcon} from '../../utils/icon.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.25,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

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
    <motion.section 
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.div className="hero-intro" variants={itemVariants}>
           <img
            img src="image.png"
            alt="Chee Xuan Yang"
            className="profile-image"
          />
          <div>
            <motion.h1 className="hero-title" variants={itemVariants}>Chee Xuan Yang</motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Full-Stack Developer passionate about creating exceptional digital experiences
            </motion.p>
          </div>
          <motion.div className="hero-info" variants={itemVariants}>
            <div className="info-item">
              <MapPinIcon />
              <span>Singapore, SG</span>
            </div>
            <div className="info-item">
              <MailIcon />
              <span>cheexuanyang@gmail.com</span>
            </div>
          </motion.div>
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
      </div>
    </motion.section>
  );
};

export default Hero;