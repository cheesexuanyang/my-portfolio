import React from 'react';
import Navbar from './components/portfolio/navbar/navbar.jsx';
import Hero from './components/portfolio/hero/hero.jsx';
import About from './components/portfolio/about/about.jsx';
import Projects from './components/portfolio/projects/projects.jsx';
import Skills from './components/portfolio/skills/skills.jsx';
import Contact from './components/portfolio/contacts/contacts.jsx';
import './index.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero">
        <Hero />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="projects">
        <Projects />
      </section>
      <section className="skills">
        <Skills />
      </section>
      <section className="contact">
        <Contact />
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;