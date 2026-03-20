import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import WishlistPage from './components/WishlistPage';

const WISHLIST_HASH = '#join-wishlist';

function App() {
  const [isWishlistPage, setIsWishlistPage] = useState(
    window.location.hash === WISHLIST_HASH,
  );

  useEffect(() => {
    const syncRoute = () => {
      setIsWishlistPage(window.location.hash === WISHLIST_HASH);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const openWishlistPage = () => {
    window.location.hash = WISHLIST_HASH;
  };

  const goHome = () => {
    const nextUrl = `${window.location.pathname}${window.location.search}`;
    window.history.pushState({}, '', nextUrl);
    setIsWishlistPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isWishlistPage) {
    return <WishlistPage onBack={goHome} />;
  }

  return (
    <div className="app">
      <Navbar onOpenWishlist={openWishlistPage} />
      <Hero onOpenWishlist={openWishlistPage} />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Technology />
      <Testimonials />
      <CTA onOpenWishlist={openWishlistPage} />
    </div>
  );
}

export default App;
