import React from 'react';
import Navbar from './components/portfolio/navbar/navbar.jsx';
import './index.css';
import './App.css';
import Hero from './components/portfolio/hero/hero.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero">
        <Hero />
      </section>
    </div>
  );
}

export default App;