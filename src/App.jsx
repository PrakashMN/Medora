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
import Vision from './components/Vision';
import TeamPreview from './components/TeamPreview';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Taglines from './components/Taglines';
import Footer from './components/Footer';
import WishlistPage from './components/WishlistPage';
import SolutionsPage from './components/SolutionsPage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import TechnologyPage from './components/TechnologyPage';

const WISHLIST_HASH = '#join-wishlist';
const SOLUTIONS_HASH = '#solutions';
const ABOUT_HASH = '#about';
const TEAM_HASH = '#team';
const CONTACT_HASH = '#contact';
const TECHNOLOGY_HASH = '#technology';

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === WISHLIST_HASH) return 'wishlist';
    if (hash === SOLUTIONS_HASH) return 'solutions';
    if (hash === ABOUT_HASH) return 'about';
    if (hash === TEAM_HASH) return 'team';
    if (hash === CONTACT_HASH) return 'contact';
    if (hash === TECHNOLOGY_HASH) return 'technology';
    return 'home';
  });

  const prevPageRef = useRef(page);

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
      else newPage = 'home';

      const changed = newPage !== prevPageRef.current;
      prevPageRef.current = newPage;
      setPage(newPage);

      if (changed) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const navigate = (hash) => {
    window.location.hash = hash;
  };

  const goHome = () => {
    const nextUrl = `${window.location.pathname}${window.location.search}`;
    window.history.pushState({}, '', nextUrl);
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <Vision />
            <Taglines />
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
