import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm a final-year Software Engineering student at the Singapore Institute of Technology, passionate about turning complex problems into simple, practical solutions.
        </p>
        <p className="about-text">
          My tech journey, which began at Temasek Polytechnic, took a professional turn during my internship at the Civil Service College. There, I led Robotic Process Automation (RPA) projects using UiPath to significantly improve service efficiency. I thrive on building technology that makes life genuinely easier for people.
        </p>
        <p className="about-text">
          Outside of coding, you’ll find me at the gym or on the basketball court. Weight training builds my focus and discipline, while basketball is my arena for teamwork and friendly competition. Staying active keeps me charged and ready for the next challenge.
        </p>
        <p className="about-text">
          I am currently seeking a full-time full-stack developer role where I can contribute to building scalable and user-centric applications from end to end. Feel free to explore my projects below or connect with me on LinkedIn.
        </p>
      </div>
    </motion.section>
  );
};

export default About;