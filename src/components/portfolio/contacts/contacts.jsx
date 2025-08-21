import React from 'react';
import './contacts.css';
import Button from '../../utils/button.jsx';
import { LinkedinIcon, MailIcon } from '../../utils/icon.jsx'; 

const contactInfo = {
  title: "Let's Work Together",
  subtitle: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate!",
  email: "cheexuanyang@gmail.com",
  linkedin: "https://www.linkedin.com/in/cheexuanyang/"
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">{contactInfo.title}</h2>
          <p className="section-subtitle">
            {contactInfo.subtitle}
          </p>
        </div>
        <div className="contact-actions">
          <Button 
            size="lg" 
            href={`mailto:${contactInfo.email}`}
            className="contact-btn"
            variant="default"
          >
            <MailIcon />
            <span style={{ marginLeft: '0.5rem' }}>Send Email</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href={contactInfo.linkedin}
            className="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
            <span style={{ marginLeft: '0.5rem' }}>Connect on LinkedIn</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;