import React from 'react';
import './Contacts.css';

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
            <Icons.Mail className="mr-2" />
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
            <Icons.Linkedin className="mr-2" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;