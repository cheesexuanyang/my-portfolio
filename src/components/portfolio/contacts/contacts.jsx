import React from 'react';
import './Contacts.css';
import Button from '../../utils/button.jsx';
import { LinkedinIcon, MailIcon } from '../../utils/icon.jsx'; 

const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out via email or connect on LinkedIn.",
  email: "cheexuanyang@email.com",
  linkedin: "https://linkedin.com/in/cheexuanyang"
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
          >
            <MailIcon className="mr-2" />
            Send Email
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href={contactInfo.linkedin}
            className="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="mr-2" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;