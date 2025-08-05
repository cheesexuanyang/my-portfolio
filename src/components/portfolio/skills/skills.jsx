import './Skills.css';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React", "Node.js", "JavaScript", "TypeScript", "CSS3", "HTML5",
  "MongoDB", "PostgreSQL", "Express", "Tailwind", "Redux", "Git"
];

const fadeInUp = {
  initial: { 
    y: 40, 
    opacity: 0 
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="skills-section" 
    >
      <motion.div 
        className="skills-content"
      
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer} 
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={staggerContainer} 
        >
          {skills.map((skill) => (
            <motion.span 
              key={skill} 
              className="skill-badge"
              variants={fadeInUp} 
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;