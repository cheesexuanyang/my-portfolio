import './Skills.css';
import React from 'react';

// Add your skills array
const skills = [
  "React", "Node.js", "JavaScript", "TypeScript", "CSS3", "HTML5",
  "MongoDB", "PostgreSQL", "Express", "Tailwind", "Redux", "Git"
];

const Badge = ({ children, className }) => (
  <span className={className}>{children}</span>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="skill-badge">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;