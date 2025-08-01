import React from 'react';
import Navbar from './components/portfolio/navbar/navbar.jsx';
import Hero from './components/portfolio/hero/hero.jsx';
import About from './components/portfolio/about/about.jsx';
import './index.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero">
        <Hero />
      </section>
      <hr className="section-divider" />
      <section className="about">
        <About />
      </section>
    </div>
  );
}

export default App;