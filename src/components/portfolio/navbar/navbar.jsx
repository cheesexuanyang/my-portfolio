import React, { useState, useEffect } from 'react';
import './navbar.css';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '../../utils/icon.jsx';

const Navbar = () => {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="portfolio-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#" className="brand-link">
            <span className="brand-text">Portfolio</span>
          </a>
        </div>
        <div className="nav-content">
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link"
                type="button"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-icon theme-toggle-desktop"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-icon theme-toggle-mobile"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-icon mobile-menu-button"
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;