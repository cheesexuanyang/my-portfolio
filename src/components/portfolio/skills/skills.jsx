import './Skills.css';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React", "Node.js", "JavaScript", "TypeScript", "CSS3", "HTML5",
  "MongoDB", "PostgreSQL", "Express", "Tailwind", "Redux", "Git"
];

const Badge = ({ children, className, style }) => (
  <span className={className} style={style}>{children}</span>
);

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="skills-section" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5 }}
    >
      <div className="skills-content">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="skill-badge"
              style={{ '--skill-index': index }} 
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;