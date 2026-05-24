import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import WhoItsFor from './components/WhoItsFor';
import WhyMedora from './components/WhyMedora';
import Traction from './components/Traction';
import Security from './components/Security';

import TeamPreview from './components/TeamPreview';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';


import Footer from './components/Footer';
import WishlistPage from './components/WishlistPage';
import SolutionsPage from './components/SolutionsPage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import TechnologyPage from './components/TechnologyPage';
import CareerPage from './components/CareerPage';
import LegalPage from './components/LegalPage';

const WISHLIST_HASH = '#join-wishlist';
const SOLUTIONS_HASH = '#solutions';
const ABOUT_HASH = '#about';
const TEAM_HASH = '#team';
const CONTACT_HASH = '#contact';
const TECHNOLOGY_HASH = '#technology';
const CAREER_HASH = '#career';
const LEGAL_HASH = '#legal';

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === WISHLIST_HASH) return 'wishlist';
    if (hash === SOLUTIONS_HASH) return 'solutions';
    if (hash === ABOUT_HASH) return 'about';
    if (hash === TEAM_HASH) return 'team';
    if (hash === CONTACT_HASH) return 'contact';
    if (hash === TECHNOLOGY_HASH) return 'technology';
    if (hash === CAREER_HASH) return 'career';
    if (hash === LEGAL_HASH) return 'legal';
    return 'home';
  });

  const prevPageRef = useRef(page);

  const pageRoutes = [WISHLIST_HASH, SOLUTIONS_HASH, ABOUT_HASH, TEAM_HASH, CONTACT_HASH, TECHNOLOGY_HASH, CAREER_HASH, LEGAL_HASH];

  /* Intercept all hash-link clicks to prevent browser's native anchor scroll */
  useEffect(() => {
    const handleNavClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      window.location.hash = href;
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash;
      let newPage;
      if (hash === WISHLIST_HASH) newPage = 'wishlist';
      else if (hash === SOLUTIONS_HASH) newPage = 'solutions';
      else if (hash === ABOUT_HASH) newPage = 'about';
      else if (hash === TEAM_HASH) newPage = 'team';
      else if (hash === CONTACT_HASH) newPage = 'contact';
      else if (hash === TECHNOLOGY_HASH) newPage = 'technology';
      else if (hash === CAREER_HASH) newPage = 'career';
      else if (hash === LEGAL_HASH) newPage = 'legal';
      else newPage = 'home';

      const changed = newPage !== prevPageRef.current;
      prevPageRef.current = newPage;
      setPage(newPage);

      if (changed && newPage !== 'home') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  /* Scroll to section for same-page anchors (e.g. #how-it-works) after home renders */
  useEffect(() => {
    const hash = window.location.hash;
    if (page === 'home' && hash && !pageRoutes.includes(hash)) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
      }
    }
  }, [page]);

  const navigate = (hash) => {
    window.location.hash = hash;
  };

  const goHome = () => {
    const nextUrl = `${window.location.pathname}${window.location.search}`;
    window.history.pushState({}, '', nextUrl);
    setPage('home');
    window.scrollTo(0, 0);
  };

  const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <AnimatePresence mode="wait">
      {page === 'wishlist' && (
        <motion.div key="wishlist" {...pageTransition}>
          <WishlistPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'solutions' && (
        <motion.div key="solutions" {...pageTransition}>
          <SolutionsPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'about' && (
        <motion.div key="about" {...pageTransition}>
          <AboutPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'team' && (
        <motion.div key="team" {...pageTransition}>
          <TeamPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'contact' && (
        <motion.div key="contact" {...pageTransition}>
          <ContactPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'technology' && (
        <motion.div key="technology" {...pageTransition}>
          <TechnologyPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'career' && (
        <motion.div key="career" {...pageTransition}>
          <CareerPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'legal' && (
        <motion.div key="legal" {...pageTransition}>
          <LegalPage onBack={goHome} />
        </motion.div>
      )}
      {page === 'home' && (
        <motion.div key="home" {...pageTransition}>
          <div className="app">
            <Navbar onOpenWishlist={() => navigate(WISHLIST_HASH)} />
            <Hero onOpenWishlist={() => navigate(WISHLIST_HASH)} />
            <Problem />
            <Solution />
            <HowItWorks />
            <Features />
            <WhoItsFor />
            <WhyMedora />
            <Traction />
            <Security />
            <TeamPreview />
            <Technology />
            <Testimonials />
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
