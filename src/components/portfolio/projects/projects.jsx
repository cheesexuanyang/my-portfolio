import React from 'react';
import './projects.css';
import { ExternalLinkIcon, GithubIcon } from '../../utils/icon.jsx';
import { motion } from 'framer-motion';


const projectsData = [
  {
    id: 2,
    title: "Notes Application",
    description: "A full-stack CRUD notes application using React, Node.js/Express, and MongoDB that includes user authentication and responsive design, demonstrating modern web development fundamentals from frontend state management to backend API design and database integration",
    image: "/notes.png",
    imageConfig: { width: 400, height: 250, fit: 'crop' },
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs"],
    liveUrl: "https://xuanyang-notes.netlify.app",
    githubUrl: "https://github.com/cheesexuanyang/notes"
  },
  {
    id: 3,
    title: "Whiteboard Application",
    description: "A real-time collaborative whiteboard where multiple users can draw together simultaneously using React, Node.js, and Socket.io for live synchronization of drawing strokes, user presence, and canvas interactions",
    image: "/whiteboard.png",
    imageConfig: { width: 400, height: 250, fit: 'crop' },
    technologies: ["React", "Node.js" , "Express.js", "Socket.io", "HTML5 Canvas API"],
    liveUrl: "https://xuanyang-whiteboard.netlify.app/",
    githubUrl: "https://github.com/cheesexuanyang/whiteboard"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="projects-section" 
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
    >
      <div className="projects-content">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and passion for creating meaningful digital experiences.
          </p>
        </div>
        
        <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
              </div>
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    className="btn btn-ghost btn-icon"
                    aria-label="Live demo"
                  >
                    <ExternalLinkIcon />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="btn btn-ghost btn-icon"
                    aria-label="GitHub repository"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;