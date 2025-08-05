import React from 'react';
import Navbar from './components/portfolio/navbar/navbar.jsx';
import Hero from './components/portfolio/hero/hero.jsx';
import About from './components/portfolio/about/about.jsx';
import Projects from './components/portfolio/projects/projects.jsx';
import Skills from './components/portfolio/skills/skills.jsx';
import Contact from './components/portfolio/contacts/contacts.jsx';
import ScrollToTopButton from './components/utils/tothetopbutton/tothetop.jsx';
import Footer from './components/portfolio/footer/footer.jsx';
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
      <Footer />
      <ScrollToTopButton /> 
    </div>
  );
}

export default App;