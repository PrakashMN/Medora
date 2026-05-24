import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenWishlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active sections
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Adjusted to only trigger when the section crosses the middle of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Select all sections that actually have an ID for navigation spying
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar glass-effect ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={(e) => { if (window.location.hash === '') e.preventDefault(); }}>
          <img src="/medora-logo.svg" alt="Ayeeni healthtech Logo" className="navbar-logo-img" />
        </a>
        <div className="navbar-links desktop-links">
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#how-it-works" className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}>Process</a>
          <button type="button" className="btn btn-primary nav-btn" onClick={onOpenWishlist}>
            Get Started
          </button>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#solutions" className="mobile-nav-link" onClick={toggleMobileMenu}>Solutions</a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</a>
          <a href="#team" className="mobile-nav-link" onClick={toggleMobileMenu}>Team</a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</a>
          <a href="#technology" className="mobile-nav-link" onClick={toggleMobileMenu}>Technology</a>
          <a href="#how-it-works" className={`mobile-nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`} onClick={toggleMobileMenu}>Process</a>
          <button
            type="button"
            className="btn btn-primary mobile-nav-btn w-full mt-4"
            onClick={() => {
              toggleMobileMenu();
              onOpenWishlist();
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
