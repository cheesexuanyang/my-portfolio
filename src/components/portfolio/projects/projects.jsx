import React from 'react';
import './projects.css';
import { ExternalLinkIcon, GithubIcon } from '../../utils/icon.jsx';
import { motion } from 'framer-motion';


const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using third-party APIs.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
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